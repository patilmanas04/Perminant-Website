import Footer from "../components/Footer/Index"
import Main from "../components/Main/Index"
import Navbar from "../components/Navbar/Index"
import Sidebar from "../components/Sidebar/Index"
import { HomeLayout } from "./Styles"

const Home = () => {
    return (
      <>
        <HomeLayout>
          <Navbar />
          <Main />
          <Sidebar />
          <Footer />
        </HomeLayout>
      </>
    )
}

export default Home
