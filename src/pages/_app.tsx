import { CssBaseline, ThemeProvider } from '@mui/material';
import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';
import theme from '../theme';


function Mug({
  Component,
  pageProps
}: AppProps<{ pageProps: any }>) {

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>MUG Filmes</title>
      </Head>
      <ThemeProvider theme={theme}>
        <>
          <CssBaseline />
          <Component {...pageProps} />
        </>
      </ThemeProvider>
    </>
  );
}

export default Mug;
