import '../assets/css/global.css';
import '../assets/fa/css/all.min.css';

import {ThemeProvider} from "next-themes"
import Layout from "../container/Layout/Layout";

function MyApp({ Component, pageProps }) {
  return(
      <>
          <ThemeProvider attribute={"class"}>
              <Layout>
                  <Component {...pageProps} />
              </Layout>
          </ThemeProvider>
      </>
  )
}

export default MyApp
