/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import Info from '../components/Info';
import Form from '../components/Form';
import { AppContext } from '../components/AppContext';
import { useContext, useState } from 'react';

const ApiKey = () => {
  const { keyUrl } = useContext(AppContext);
  const [sentEmail, setSentEmail] = useState(undefined);

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
      setSentEmail(res.data.email);
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
        {sentEmail ? (
          <div css={{ marginBottom: '24px', width: '748px' }}>
            <Info message={`Your API key has been sent to ${sentEmail}`} />
          </div>
        ) : (
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
        )}
      </main>
    </section>
  );
};

export default ApiKey;
