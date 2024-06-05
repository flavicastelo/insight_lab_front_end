import { ThemeProvider } from 'styled-components';
import { AppRoutes } from './Routes';
import './App.css';
import { ConfigProvider } from 'antd';

function App() {

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#69a37c',
          borderRadius: 5,
          colorBgContainer: 'transparent',
        },
      }}
    >
      <AppRoutes />
    </ConfigProvider>
  )


}


export default App;