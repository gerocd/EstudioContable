import Navbar from "../components/Navbar/Navbar";
import Main from "../components/Main/Main";
import SectionAbout from "../components/SobreNosotros/SectionAbout";
import SectionService from "../components/ServiciosOfrecemos/SectionService";
import FrameChildren from "../components/TrabajosExitosos/FrameChildren";
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
      <FrameChildren />
      <section className="social-media-icons">
        <div className="mail-your-email-address-and-ph">
          <OurAwesomeTeam />
          <YourEmailInput />
          <ContactUs />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MFinanzas;
