/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import mq from '../utils/mq';
import { useState, useEffect } from 'react';

const Page = ({ title = 'title', children }) => {
  const [visibility, setDisplay] = useState('hidden');
  useEffect(() => {
    setTimeout(() => {
      setDisplay('visable');
    }, 100);
  }, []);
  return (
    <section
      css={{
        width: '100vw',
        borderRadius: '10px',
        // minHeight: '500px',
        [mq[1]]: {
          width: '700px',
          boxShadow: '0px 3px 6px #00000029',
        },
      }}
    >
      <header
        css={{
          color: '#354F52;',
          padding: '12px 24px',
          textTransform: 'capitalize',
          borderRadius: '10px 10px 0px 0px',
          font: 'normal normal 800 30px/29px PT Sans',
          // background: '#CAD2C5 0% 0% no-repeat padding-box',
        }}
      >
        {title}
      </header>
      <main css={{ padding: '0 24px 24px', lineHeight: '35px', visibility }}>
        {children}
      </main>
    </section>
  );
};

export default Page;
