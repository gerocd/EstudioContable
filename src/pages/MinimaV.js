import Navbar from "../components/Navbar";
import Text1 from "../components/Text1";
import SectionAbout from "../components/SectionAbout";
import SectionService from "../components/SectionService";
import FrameChildren from "../components/FrameChildren";
import OurAwesomeTeam from "../components/OurAwesomeTeam";
import YourEmailInput from "../components/YourEmailInput";
import ContactUs from "../components/ContactUs";
import MainContent from "../components/MainContent";
import "./MinimaV.css";

const MinimaV = () => {
  return (
    <div className="minima-v3">
      <section className="footer-frame">
        <div className="f-r-a-m-e" />
        <div className="ohio-st-south-gate-c-a" />
        <Navbar />
        <Text1 />
        <div className="backgorund" />
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
      <MainContent />
    </div>
  );
};

export default MinimaV;
