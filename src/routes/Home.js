/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import mq from '../utils/mq';

const Card = ({ image, title, body }) => (
  <div
    css={{
      width: '100%',
      margin: '10px 0',
      borderRadius: '3px',
      padding: '24px 24px 66px',
      border: '1px solid #dfdfdf',
      [mq[1]]: { margin: '10px', width: '25%' },
    }}
  >
    <img
      css={{ width: '32px', height: '32px' }}
      src={`/image/${image}`}
      alt='documentation'
    />
    <div
      css={{
        margin: '1rem 0',
        fontWeight: '500',
        fontSize: '1.5rem',
        textTransform: 'capitalize',
      }}
    >
      {title}
    </div>
    <p>{body}</p>
  </div>
);

const Home = () => {
  return (
    <div
      css={{
        fontSize: '1rem',
        lineHeight: '1.5',
      }}
    >
      <div
        css={{
          height: '50vh',
          position: 'relative',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundImage: 'url("/image/hero.png")',
          [mq[1]]: {},
        }}
      >
        <div
          css={{
            top: '50%',
            left: '50%',
            width: '90%',
            textAlign: 'center',
            position: 'absolute',
            transform: 'translate(-50%, -50%)',
            [mq[1]]: {
              top: '50%',
              left: '10%',
              width: 'initial',
              transform: 'translateY(-50%)',
            },
          }}
        >
          <div
            css={{
              color: '#fff',
              lineHeight: '1',
              fontWeight: 'bold',
              marginBottom: '2rem',
              fontSize: '2rem',
              br: {
                display: 'none',
              },
              [mq[1]]: {
                textAlign: 'left',
                fontSize: '56px',
                br: {
                  display: 'block',
                },
              },
            }}
          >
            Empower your apps
            <br /> with the world’s largest
            <br /> music database
          </div>
          <Link to='/apikey'>
            <div
              css={{
                color: '#fff',
                width: '184px',
                fontSize: '16px',
                padding: '15px 0',
                cursor: 'pointer',
                borderRadius: '3px',
                textAlign: 'center',
                backgroundColor: '#84A98C',
                textTransform: 'capitalize',
                filter: 'drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.24))',
                margin: '0 auto',
                [mq[1]]: {
                  margin: 'initial',
                },
                ':hover': {
                  backgroundColor: '#354F52',
                },
              }}
            >
              get started
            </div>
          </Link>
        </div>
      </div>

      <div
        css={{
          padding: '1rem 2rem',

          [mq[1]]: {
            padding: '1rem 20%',
          },
          color: '#2F3E46',
        }}
      >
        <div>
          <div
            css={{
              fontSize: '32px',
              margin: '30px 0',
              fontWeight: '500',
              textAlign: 'center',
              textTransform: 'capitalize',
              [mq[1]]: {
                marginBottom: '72px',
              },
            }}
          >
            about the API
          </div>
          <div
            css={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}
          >
            <div
              css={{
                width: '100%',
                [mq[1]]: {
                  width: '45%',
                },
              }}
            >
              <div css={{ fontWeight: '500', fontSize: '1.5rem' }}>
                Get lots of music data, fast.
              </div>
              <p>
                With the Open Song Database API you can develop unique music
                experiences in a matter of minutes.
              </p>
              <p>
                This API allows you to integrate with any platform(web, Android,
                iOS, Windows, Mac and Linux) you are building for over HTTPS and
                allows you to access millions of songs, albums, artist and music
                genres.
              </p>
            </div>{' '}
            <div
              css={{
                width: '100%',
                [mq[1]]: {
                  width: '45%',
                },
              }}
            >
              <div css={{ fontWeight: '500', fontSize: '1.5rem' }}>
                Forever Free and Open Source.
              </div>
              <p>
                The Open Song Database API is completely free and would remain
                the same forever. It is Open Source too, making it possible to
                make direct contributions to the project or starting a spinoff.
              </p>
              <p>
                The API allow you to access data via REST or GRAPHQL. Sweet!
              </p>
            </div>
          </div>
        </div>

        <div>
          <div
            css={{
              fontSize: '32px',
              fontWeight: '500',
              textAlign: 'center',
              margin: '50px 0 30px ',
              textTransform: 'capitalize',
              [mq[1]]: {
                marginBottom: '72px',
              },
            }}
          >
            features
          </div>
          <div
            css={{
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              [mq[1]]: { flexWrap: 'nowrap' },
            }}
          >
            <Card
              image='draft.svg'
              title='API documentation'
              body='Our highly maintained and detailed API documentation contains everything you need to know to integrate our API with your project'
            />
            <Card
              image='bug.svg'
              title='API testground'
              body='Our testground lets you quickly test our API endpoints and play with the
              formatted response for each call (coming soon)'
            />
            <Card
              image='device.svg'
              title='SDKs'
              body='The SDKs make it easy to use the our API on your web app
              or native application for Android, iOS, Windows, Mac and Linux (coming soon)'
            />
          </div>
          <div css={{ marginTop: '3rem', width: '100%' }}>
            <Link
              to='/apikey'
              css={{
                all: 'unset',
                display: 'block',
                margin: '0 auto',
                width: 'fit-content',
              }}
            >
              <div
                css={{
                  color: '#fff',
                  width: '184px',
                  fontSize: '16px',
                  padding: '15px 0',
                  cursor: 'pointer',
                  borderRadius: '3px',
                  textAlign: 'center',
                  backgroundColor: '#84A98C',
                  textTransform: 'capitalize',
                  filter: 'drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.24))',
                  ':hover': {
                    backgroundColor: '#354F52',
                  },
                }}
              >
                get started
              </div>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
