/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import { useContext, useState, useEffect } from 'react';
import { AppContext } from '../components/AppContext';
import Code from '../components/Code';
import Footer from '../components/Footer';
import Prism from 'prismjs';


const PlayGround = () => {
  const [restQuery, setRestQuery] = useState('');
  const [graphqlQuery, setGraphqlQuery] = useState('');
  const { playgroundBackend, playgroundToken } = useContext(AppContext);
  const [response, setResponse] = useState('');

  const runQuery = async (data) => {
    console.log('running');
    try {
      const resData = await fetch(
        `${playgroundBackend}/rest/${playgroundToken}/${restQuery}`
      );
      const res = await resData.json();
      console.log(res);
      setResponse(JSON.stringify(res, undefined, 2));
    } catch (error) {
      console.error({ error });
    }
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
        <div
          css={{
            label: {
              color: '#707070',
              marginBottom: '9px',
              textTransform: 'capitalize',
              font: 'normal normal normal 14px/16px PT Sans',
            },
            'input, textarea': {
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
          }}
        >
          <div
            css={{
              display: 'flex',
              margin: '24px 0',
              flexDirection: 'column',
            }}
          >
            <label htmlFor='rest'>Rest Query</label>
            <input
              autoFocus
              value={restQuery}
              onChange={({ target }) => {
                setRestQuery(target.value);
              }}
              id='rest'
              type='text'
              name='rest'
              placeholder='Rest Query'
            />
          </div>

          <div
            css={{
              display: 'flex',
              margin: '24px 0',
              flexDirection: 'column',
            }}
          >
            <label htmlFor='graphql'>Graph Query</label>
            <input
              autoFocus
              value={graphqlQuery}
              onChange={({ target }) => {
                setGraphqlQuery(target.value);
              }}
              id='graphql'
              type='text'
              name='graphql'
              placeholder='Graph Query'
            />
          </div>

          <button onClick={runQuery}>Submit</button>
        </div>
        <Code content={response} />
     </main>
      <Footer />
    </section>
  );
};

export default PlayGround;
