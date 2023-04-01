import '../assets/css/slide.css';
import '../assets/css/global.css';
import {ThemeProvider} from "next-themes"
import Layout from "../container/Layout/Layout";
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {

  return(
      <>
              <NextNProgress />
              <ThemeProvider enableSystem={false} defaultTheme={"dark"} attribute={"class"}>
                  <Layout>
                      <Component {...pageProps} />
                  </Layout>
              </ThemeProvider>

      </>
  )
}

export default MyApp
