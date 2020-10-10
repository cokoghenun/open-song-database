/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import mq from '../utils/mq';

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
                fontSize: '56px',
                br: {
                  display: 'block',
                },
              },
            }}
          >
            Discover millions of music, <br />
            lyrics and cover art easy.
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
                  width: '40%',
                },
              }}
            >
              <div css={{ fontWeight: '500', fontSize: '1.5rem' }}>
                Discover lots of music information fast.
              </div>
              <p>
                With Feed.fm’s Music APIs and SDKs for JavaScript, iOS, and
                Android you can develop unique music experiences in a matter of
                minutes.
              </p>
              <p>
                Feed.fm’s SDKs allow you to easily integrate major label music
                in your mobile apps or web applications unlike other music
                providers. If you’re looking at the Apple Music API or Spotify
                Music API, they simply offer a connection into a user’s existing
                catalogue.
              </p>
            </div>
            <img
              css={{
                width: '100%',
                [mq[1]]: {
                  width: '50%',
                },
              }}
              src='/image/apis.png'
              alt='api'
            />
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
          <div css={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', [mq[1]]:  {flexWrap: 'nowrap'} }}>
            <div
              css={{
                width: '100%',
                margin: '10px 0',
                [mq[1]]: { margin: '10px',width: '25%' },
                borderRadius: '3px',
                padding: '24px 24px 66px',
                border: '1px solid #dfdfdf',
              }}
            >
              <img
                css={{ width: '32px', height: '32px' }}
                src='/image/draft.svg'
                alt='documentation'
              />
              <div
                css={{
                  fontSize: '1.5rem',
                  margin: '1rem 0',
                  fontWeight: '500',
                  textTransform: 'capitalize',
                }}
              >
                API documentation
              </div>
              <p>
                Find out how to make use of the API to get all you need to start
                working with music information for your project.
              </p>
            </div>
            <div
              css={{
                width: '100%',
                margin: '10px 0',
                [mq[1]]: { margin: '10px',width: '25%' },
                borderRadius: '3px',
                padding: '24px 24px 66px',
                border: '1px solid #dfdfdf',
              }}
            >
              <img
                css={{ width: '32px', height: '32px' }}
                src='/image/bug.svg'
                alt='testground'
              />
              <div
                css={{
                  fontSize: '1.5rem',
                  margin: '1rem 0',
                  fontWeight: '500',
                  textTransform: 'capitalize',
                }}
              >
                API testground
              </div>
              <p>
                Our testground lets you quickly test our API and play with the
                formatted response you’ll get for each call.
              </p>
            </div>
            <div
              css={{
                width: '100%',
                margin: '10px 0',
                [mq[1]]: { margin: '10px',width: '25%' },
                borderRadius: '3px',
                padding: '24px 24px 66px',
                border: '1px solid #dfdfdf',
              }}
            >
              <img
                css={{ width: '32px', height: '32px' }}
                src='/image/device.svg'
                alt='sdks'
              />
              <div
                css={{
                  fontSize: '1.5rem',
                  margin: '1rem 0',
                  fontWeight: '500',
                  textTransform: 'capitalize',
                }}
              >
                SDKs
              </div>
              <p>
                The SDKs make it easy to use the Musixmatch API on your website
                or application for iOS and Android
              </p>
            </div>
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
