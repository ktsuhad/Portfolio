const HireMe = () => {
  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <div className="text-center ">
        <h3 className="text-4xl font-semibold ">
          Hire <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p>
      </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
        <div>
          <h2 className="text-2xl font-semibold ">
            Do you want any work from me?
          </h2>
          <p className="max-w-lg text-sm mt-4 text-gray-200 leading-6 lg:text-left text-justify">
            I am passionate about web development and dedicated to delivering
            high-quality results. Whether you have a new project in mind or need
            assistance with an existing one, I am here to help you achieve your
            goals.
          </p>
          <button className="btn-primary mt-10">
            <a href="#contact">Hireme</a>
          </button>
        </div>
        <img
          data-aos="zoom-in-up"
          src="/assets/Images/hero.png"
          alt=""
          className="w-full lg:h-[32rem] h-80 object-cover"
        />
      </div>
    </section>
  );
};

export default HireMe;
