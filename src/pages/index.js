import Header from "../components/Header";
import BodyContent from "../container/Layout/BodyContent";
import ContentTop from "../components/Home/ContentTop";

const Home = () => {
  return(
      <>
        <Header/>
        <BodyContent>
          <ContentTop/>
        </BodyContent>
      </>
  )
}
export default Home;