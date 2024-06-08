import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { theme } from '../theme';
import buildClient from '@/api/build-client';
import Header from '@/components/header';

const App = ({ Component, pageProps, currentUser }: any) => {
  return (
    <MantineProvider theme={theme}>
      <Header currentUser={currentUser} />
      <div>
        <Component currentUser={currentUser} {...pageProps} />
      </div>
    </MantineProvider>
  );
};

App.getInitialProps = async (appContext: any) => {
  const client = buildClient(appContext.ctx);
  const { data } = await client.get('/api/users/currentuser');

  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(
      appContext.ctx,
      client,
      data.currentUser
    );
  }

  return {
    pageProps,
    ...data,
  };
};

export default App;
