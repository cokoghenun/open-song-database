/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import Info from '../components/Info';
import Form from '../components/Form';

const ApiKey = () => {
  const handleSubmit = (d) => {
    console.log(d);
  };
  return (
    <section>
      <main
        css={{
          // maxWidth: '700px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div css={{ marginBottom: '24px', width: '748px' }}>
          <Info
            message='Your email address and information are safe with us, we won’t share or
          sell them with anyone else'
          />
        </div>
        <div
          css={{
            padding: '24px',
            width: '700px',
            borderRadius: '10px',
            boxShadow: '0px 3px 6px #00000029',
          }}
        >
          <div
            css={{
              color: '#354F52',
              textTransform: 'capitalize',
              font: 'normal normal 600 24px/29px PT Sans',
            }}
          >
            generate API key
          </div>
          <Form handleSubmit={handleSubmit} />
        </div>
      </main>
    </section>
  );
};

export default ApiKey;
