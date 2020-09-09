/**  @jsx jsx  */
import { jsx } from '@emotion/core';

const Page = ({ title = 'title', content }) => {
  return (
    <section
      css={{
        width: '700px',
        // minHeight: '1200px',
        borderRadius: '10px',
        boxShadow: '0px 3px 6px #00000029',
      }}
    >
      <header
        css={{
          color: '#fff',
          padding: '24px',
          textTransform: 'capitalize',
          borderRadius: '10px 10px 0px 0px',
          background: '#CAD2C5 0% 0% no-repeat padding-box',
          font: 'normal normal 600 24px/29px PT Sans',
        }}
      >
        {title}
      </header>
      <main css={{ padding: '24px' }}>{content}</main>
    </section>
  );
};

export default Page;
