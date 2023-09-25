import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import { TypeAnimation } from "react-type-animation";
const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center "
    >
      {/* image container */}
      <div
        data-aos="fade-right"
        className="flex-1 flex items-center justify-center h-[500px] relative"
      >
        <img
          src="/assets/Images/Home.jpeg"
          alt=""
          className="w-full md:w-2/4 object-cover rounded-lg"
        />
      </div>
      <div data-aos="fade-left" className="flex-1">
        <div>
          <h1 className="md:text-5xl md:mt-0 mt-9 text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Suhad</span>
          </h1>
          {/* typing animation */}
          <TypeAnimation
            sequence={[`Full-stack Developer.`, 1000, ""]}
            speed={50}
            style={{ whiteSpace: "pre-line" }}
            className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600"
            repeat={Infinity}
          />
          <button className="btn-primary mt-6">
            <a href="#contact">Contact Me</a>
          </button>
          <div className="mt-6 text-3xl flex items-center md:justify-start justify-center gap-4 md:gap-3">
            <a
              href="https://www.instagram.com/suhad_kt/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram
                fontSize="large"
                className="cursor-pointer hover:text-rose-800 p-1 rounded-full text-gray-600"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/suhad-kt-8b62a5256/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn
                fontSize="large"
                className="cursor-pointer hover:text-cyan-800 p-1 rounded-full text-gray-600"
              />
            </a>
            <a
              href="https://github.com/ktsuhad"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub
                fontSize="large"
                className="cursor-pointer hover:text-black p-1 rounded-full text-gray-600"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
