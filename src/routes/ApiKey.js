/**  @jsx jsx  */
import mq from '../utils/mq';
import { jsx } from '@emotion/core';
import Info from '../components/Info';
import Form from '../components/Form';
import { useContext, useState } from 'react';
import { AppContext } from '../components/AppContext';

const ApiKey = () => {
  const { keyUrl } = useContext(AppContext);
  const [sentEmail, setSentEmail] = useState({
    sent: undefined,
    email: undefined,
  });

  const handleSubmit = async (data) => {
    try {
      const resData = await fetch(keyUrl, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const res = await resData.json();
      setSentEmail(res.data);
    } catch (error) {
      console.error({ error });
    }
  };
  return (
    <section>
      <main
        css={{
          // maxWidth: '700px',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        {sentEmail.sent === true ? (
          <div css={{ marginBottom: '24px', [mq[1]]: { width: '748px' } }}>
            <Info
              message={`Your API key has been sent to ${sentEmail.email}`}
            />
          </div>
        ) : null}

        {sentEmail.sent === false ? (
          <div css={{ marginBottom: '24px', [mq[1]]: { width: '748px' } }}>
            <Info warn message='Could not send API key' />
          </div>
        ) : null}

        {sentEmail.sent === undefined ? (
          <div
            css={{
              width: '100%',
              padding: '24px',
              borderRadius: '10px',
              [mq[1]]: {
                width: '700px',
                boxShadow: '0px 3px 6px #00000029',
              },
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
        ) : null}
      </main>
    </section>
  );
};

export default ApiKey;
