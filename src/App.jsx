// import './app.css';

import Navigation from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import OurServices from "./components/OurServices";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navigation />
      <Hero />

      {/* svg starts there */}
      <section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{
                  stopColor: "#161a31",
                  stopOpacity: 1,
                }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#06091f", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
          <path
            fill="url(#grad)"
            fillOpacity="1"
            d="M0,288L17.1,245.3C34.3,203,69,117,103,117.3C137.1,117,171,203,206,213.3C240,224,274,160,309,128C342.9,96,377,96,411,112C445.7,128,480,160,514,165.3C548.6,171,583,149,617,133.3C651.4,117,686,107,720,117.3C754.3,128,789,160,823,192C857.1,224,891,256,926,266.7C960,277,994,267,1029,234.7C1062.9,203,1097,149,1131,128C1165.7,107,1200,117,1234,133.3C1268.6,149,1303,171,1337,197.3C1371.4,224,1406,256,1423,272L1440,288L1440,0L1422.9,0C1405.7,0,1371,0,1337,0C1302.9,0,1269,0,1234,0C1200,0,1166,0,1131,0C1097.1,0,1063,0,1029,0C994.3,0,960,0,926,0C891.4,0,857,0,823,0C788.6,0,754,0,720,0C685.7,0,651,0,617,0C582.9,0,549,0,514,0C480,0,446,0,411,0C377.1,0,343,0,309,0C274.3,0,240,0,206,0C171.4,0,137,0,103,0C68.6,0,34,0,17,0L0,0Z"
          ></path>
        </svg>
      </section>
      {/* svg ends here */}

      {/* About Us */}
      <AboutUs />

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#a2d9ff"
          fillOpacity="1"
          d="M0,64L34.3,58.7C68.6,53,137,43,206,53.3C274.3,64,343,96,411,138.7C480,181,549,235,617,245.3C685.7,256,754,224,823,202.7C891.4,181,960,171,1029,176C1097.1,181,1166,203,1234,218.7C1302.9,235,1371,245,1406,250.7L1440,256L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>

      <OurServices />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
