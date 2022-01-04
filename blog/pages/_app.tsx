import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic';
import { Layout } from "../components/layout/Layout";

const GlobalStyle: any = dynamic((): any => import("../styles/GlobalStyle"), {
  ssr: false,
});
function App({ Component, pageProps }: AppProps) {
  return <>
    <GlobalStyle/>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  
  </>
}

export default App;
