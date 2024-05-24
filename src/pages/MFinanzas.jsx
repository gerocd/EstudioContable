import Navbar from "../components/Navbar/Navbar";
import Main from "../components/Main/Main";
import SectionAbout from "../components/SobreNosotros/SectionAbout";
import SectionService from "../components/ServiciosOfrecemos/SectionService";
import TrabajosExitosos from "../components/TrabajosExitosos/TrabajosExitosos";
import OurAwesomeTeam from "../components/Cards/OurAwesomeTeam";
import YourEmailInput from "../components/Opiniones/YourEmailInput";
import ContactUs from "../components/EnviarReseña/ContactUs";
import Footer from "../components/Footer/Footer";
import "./MFinanzas.css";

const MFinanzas = () => {
  return (
    <>
      <Navbar />
      <section className="main-frame">
        <Main />
      </section>
      <SectionAbout />
      <SectionService />
      <TrabajosExitosos />
      <OurAwesomeTeam />
      <YourEmailInput />
      <ContactUs />
      <Footer />
    </>
  );
};

export default MFinanzas;
