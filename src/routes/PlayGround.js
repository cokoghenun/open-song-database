/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import { useContext, useState, useEffect } from 'react';
import { AppContext } from '../components/AppContext';
import Code from '../components/Code';
import Footer from '../components/Footer';
import Prism from 'prismjs';
import Button from '../components/Button';
import mq from '../utils/mq';
import Info from '../components/Info';

const PlayGround = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [queryType, setQueryType] = useState('rest');
  const [status, setStatus] = useState({ status: null, text: null });
  const { playgroundBackend, playgroundToken } = useContext(AppContext);

  const runQuery = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let res;

      if (queryType === 'rest') {
        res = await fetch(
          `${playgroundBackend}/rest/${playgroundToken}/${query}`
        );
      } else {
        res = await fetch(`${playgroundBackend}/graphql/${playgroundToken}/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query,
          }),
        });
      }
      setStatus({ status: res.status, text: res.statusText });
      setResponse(JSON.stringify(await res.json(), undefined, 2));
    } catch (error) {
      setStatus({ status: '000', text: 'An Error Occured' });
      console.log(error.message);
      setResponse(error.message, undefined, 2);
    }
    setLoading(false);
  };

  useEffect(() => {
    Prism.highlightAll();
  }, [response]);

  return (
    <section css={{ padding: '24px' }}>
      <main
        css={{
          // maxWidth: '700px',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <header
          css={{
            alignSelf: 'left',
            color: '#354F52;',
            padding: '12px 0',
            textTransform: 'capitalize',
            borderRadius: '10px 10px 0px 0px',
            font: 'normal normal 800 30px/29px PT Sans',
          }}
        >
          PlayGround
        </header>
        <div css={{ width: '100%' }}>
          <form
            onSubmit={runQuery}
            css={{
              label: {
                color: '#707070',
                marginBottom: '9px',
                textTransform: 'capitalize',
                font: 'normal normal normal 14px/16px PT Sans',
              },

              'input, textarea, select': {
                padding: '16px',
                color: '#354F52',
                borderRadius: '3px',
                border: '2px solid #dfdfdf',
                font: 'normal normal normal 16px/20px PT Sans',
                '&::placeholder': {
                  color: '#C9C9C9',
                },
                '&:focus': {
                  outline: 'none',
                  border: '2px solid #C9C9C9',
                },
              },

              [mq[1]]: {
                display: 'flex',
                justifyContent: 'center',
                'input, textarea': {
                  width: '40vw',
                },
              },
            }}
          >
            <div
              css={{
                display: 'flex',
                margin: '24px 0',
                flexDirection: 'column',
              }}
            >
              <label htmlFor='queryType'>Select Query</label>
              <select
                name='queryType'
                id='queryType'
                onChange={({ target }) => setQueryType(target.value)}
                css={{
                  width: '100%',
                  height: '58px',
                  appearance: 'none',
                  paddingRight: '35px',
                  MozAppearance: 'none',
                  WebkitAppearance: 'none',
                  background: 'url(image/caret.svg) 90% / 25px no-repeat #EEE',
                  [mq[1]]: {
                    width: '184px',
                    background: 'url(image/caret.svg) 85% / 15% no-repeat #EEE',
                  },
                }}
              >
                <option value='rest'>REST</option>
                <option value='graphql'>Graphql</option>
              </select>
            </div>
            <div
              css={{
                display: 'flex',
                margin: '24px 0',
                flexDirection: 'column',

                [mq[1]]: {
                  margin: '24px 10px',
                },
              }}
            >
              <label htmlFor='Query'>
                {queryType === 'rest'
                  ? 'Enter REST endpoint'
                  : 'Enter Graphql query'}
              </label>
              {queryType === 'rest' ? (
                <input
                  autoFocus
                  value={query}
                  onChange={({ target }) => setQuery(target.value)}
                  id='query'
                  type='text'
                  name='query'
                  required
                  placeholder='/search/artist?query=sia&limit=10'
                />
              ) : (
                <textarea
                  required
                  rows='10'
                  id='query'
                  name='query'
                  value={query}
                  placeholder={`query {
  searchArtist(input: { query: "sia", limit: 10 }) {
    id
    name
  }
}`}
                  onChange={({ target }) => setQuery(target.value)}
                ></textarea>
              )}
            </div>
            <div css={{ marginTop: '23px' }}>
              <Button loading={loading} text='Run' _css={{ height: '60px' }} />
            </div>
          </form>

          {status.status ? (
            <div>
              <div css={{ display: 'flex', justifyContent: 'center' }}>
                <Info
                  message={status.status + ' ' + status.text}
                  warn={status.status !== 200 ? true : false}
                  _css={{
                    width: 'calc(100vw - 50px)',
                    [mq[1]]: {
                      width: '572px',
                    },
                  }}
                />
              </div>

              <div css={{ display: 'flex', justifyContent: 'center' }}>
                <div
                  css={{
                    width: '20px',
                    background: '#EFF1EE 0% 0% no-repeat padding-box',
                  }}
                ></div>
                <div
                  className='line-numbers language-json'
                  css={{
                    color: 'white',
                    width: 'calc(100vw - 50px)',
                    background: '#354F52 0% 0% no-repeat padding-box',
                    [mq[1]]: {
                      width: '600px',
                    },
                  }}
                >
                  <Code content={response} />
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </main>
      <Footer />
    </section>
  );
};

export default PlayGround;
