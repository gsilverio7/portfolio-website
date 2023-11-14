import '../styles/globals.css';
import { ThemeProvider } from '../context/theme-context';
import type { AppProps } from 'next/app';
import GTag from '../utils/gtag';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <GTag />
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
    </>
  );
}
