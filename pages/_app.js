import '@/styles/globals.css';
import './Json.snippet.style.scss'

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return <div>{getLayout(<Component {...pageProps} />)}</div>;
}
