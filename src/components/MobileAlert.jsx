import React, { useEffect, useState } from 'react';
import { Alert, Modal, Space } from 'antd';
import { useMediaQuery } from 'react-responsive';

export default function MobileAlert() {
  const [visible, setVisible] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 600 });
  const onClose = (e) => {
    console.log(e, 'Fechei.');
  };
  useEffect(() => {
    const checkOrientation = () => {
      if (window.orientation === 0 || window.orientation === 180) {
        setVisible(true);
      } else if (window.orientation === 90 || window.orientation === 270) {
        setVisible(false);
      }
    };

    window.addEventListener('orientationchange', checkOrientation);
    checkOrientation();
    return () => window.removeEventListener('orientationchange', checkOrientation);
  }, []);

  return (
    <>
      {
        isMobile ?
          <Space direction='vertical'
          className='mobile-alert'
            style={{ width: '200px'}}>
            <Alert message="Por favor, gire seu dispositivo para a orientação paisagem para uma melhor leitura dos dados."
              type="warning"
              closable
              onClose={onClose} />
          </Space>
          : null
      }
    </>
  );
};
