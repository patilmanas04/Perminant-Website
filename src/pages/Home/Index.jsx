import Footer from "../../components/Footer/Index";
import Main from "../../components/Main/Index";
import Navbar from "../../components/Navbar/Index";
import Sidebar from "../../components/Sidebar/Index";
import { HomeLayout } from "./Styles";
import { useState } from "react";

const Home = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  return (
    <HomeLayout>
      <Navbar
        openMobileMenu={openMobileMenu}
        setOpenMobileMenu={setOpenMobileMenu}
      />
      <Main setActiveSection={setActiveSection} />
      <Sidebar
        openMobileMenu={openMobileMenu}
        setOpenMobileMenu={setOpenMobileMenu}
        activeSection={activeSection}
      />
      <Footer />
    </HomeLayout>
  );
};

export default Home;
