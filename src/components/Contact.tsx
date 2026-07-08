import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h1>KONTAK</h1>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a 
                href="mailto:satriyamahasura@gmail.com" 
                data-cursor="disable"
              >
                satriyamahasura@gmail.com
              </a>
            </p>
            <p>
              <a 
                href="tel:+6285230391175" 
                data-cursor="disable"
              >
                +6285230391175
              </a>
            </p>
            <h4>Education</h4>
            <p>
              Rekayasa Perangkat Lunak, SMK Negeri 4 Malang — 2023–2026
            </p>
          </div>
          <div className="contact-box">
            <h4>Social & Links</h4>
            <a
              href="https://www.linkedin.com/in/satriya-bima-800464338"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <p>
              Designed and Developed <br /> by <span>Satriya Bima Mahasura</span>
            </p>
            <p>
              <MdCopyright /> 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;