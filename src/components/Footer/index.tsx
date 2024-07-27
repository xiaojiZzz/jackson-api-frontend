import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';

const Footer: React.FC = () => {
  const defaultMessage = 'Jackson 工作室出品';
  return (
    <DefaultFooter
      style={{
        background: 'none',
        // position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
        textAlign: 'center',
      }}
      copyright={`${defaultMessage}`}
    />
  );
};

export default Footer;
