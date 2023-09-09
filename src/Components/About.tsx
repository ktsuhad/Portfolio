const About = () => {
  const info = [
    { text: "Years Experience", count: "01" },
    { text: "Completed Projects", count: "08" },
    { text: "Companies Work", count: "01" },
  ];
  return (
    <section id="about" className="py-10">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold ">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex mt-8 md:mt-0 md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          {/* leftside */}
          <div className="text-gray-300 my-3 p-2">
            <p className="text-justify leading-7 ">
              Hello! I'm Suhad, a passionate and experienced full-stack
              developer with a strong focus on the MERN stack. With 1 years of
              hands-on experience in web development, I'm dedicated to crafting
              efficient, scalable, and user-friendly web applications.
            </p>
            <div className="flex mt-10 items-center gap-7">
              {info.map((content, i) => (
                <div key={i}>
                  <h3 className="md:text-4xl text-2xl font-semibold text-white">
                    {content.count} <span className="text-cyan-600">+</span>
                  </h3>
                  <span className="md:text-base text-xs">{content.text}</span>
                </div>
              ))}
            </div>
            <br />
            <br />
            <a href="/assets/Resume/SuhadKt.pdf" download>
              <button className="btn-primary mt-5">Download CV</button>
            </a>
          </div>
          {/* right side */}
          <div data-aos='flip-down' className="flex-1 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg">
              <img
                src="/assets/Images/About.jpg"
                alt=""
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
