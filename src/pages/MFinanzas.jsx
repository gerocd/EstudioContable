import Navbar from "../components/Navbar/Navbar";
import Main from "../components/Main/Main";
import SectionAbout from "../components/SobreNosotros/SectionAbout";
import SectionService from "../components/ServiciosOfrecemos/SectionService";
import TrabajosExitosos from "../components/TrabajosExitosos/TrabajosExitosos";
import OurAwesomeTeam from "../components/Cards/OurAwesomeTeam";
import Opiniones from "../components/Opiniones/Opiniones";
import ContactUs from "../components/Contacto/ContactUs";
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
      <Opiniones />
      <ContactUs />
      <Footer />
    </>
  );
};

export default MFinanzas;
