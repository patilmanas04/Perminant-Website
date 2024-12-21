import Footer from "../../components/Footer/Index";
import Main from "../../components/Main/Index";
import Navbar from "../../components/Navbar/Index";
import Sidebar from "../../components/Sidebar/Index";
import { HomeLayout } from "./Styles";
import { useState } from "react";

const Home = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <HomeLayout>
      <Navbar
        openMobileMenu={openMobileMenu}
        setOpenMobileMenu={setOpenMobileMenu}
      />
      <Main />
      <Sidebar openMobileMenu={openMobileMenu} />
      <Footer />
    </HomeLayout>
  );
};

export default Home;
