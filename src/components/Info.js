/**  @jsx jsx  */
import { jsx } from '@emotion/core';

const Info = ({ message }) => {
  return (
    <div
      css={{
        display: 'flex',
        padding: '24px',
        alignItems: 'center',
        borderRadius: '10px',
        background: '#EFF1EE 0% 0% no-repeat padding-box',
      }}
    >
      <div
        css={{
          width: '40px',
          height: '40px',
          display: 'flex',
          borderRadius: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#cad2c5',
        }}
      >
        <span
          css={{
            color: '#354F52',
            font: 'normal normal bold 25px/16px PT Sans',
          }}
        >
          !
        </span>
      </div>
      <div
        css={{
          color: '#2F3E46',
          marginLeft: '24px',
          font: 'normal normal normal 14px/16px PT Sans',
        }}
      >
        {message}
      </div>
    </div>
  );
};

export default Info;
