/**  @jsx jsx  */
import { jsx } from '@emotion/core';
import mq from '../utils/mq';

const Page = ({ title = 'title', content }) => {
  return (
    <section
      css={{
        width: '100vw',
        borderRadius: '10px',
        [mq[1]]: {
          width: '700px',
          boxShadow: '0px 3px 6px #00000029',
        },
        // minHeight: '4000px',
      }}
    >
      <header
        css={{
          color: '#354F52;',
          padding: '12px 24px',
          textTransform: 'capitalize',
          borderRadius: '10px 10px 0px 0px',
          // background: '#CAD2C5 0% 0% no-repeat padding-box',
          font: 'normal normal 800 24px/29px PT Sans',
        }}
      >
        {title}
      </header>
      <main css={{ padding: '0 24px 24px', lineHeight: '35px' }}>
        {content}
      </main>
    </section>
  );
};

export default Page;
