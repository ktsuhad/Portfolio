import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Projects = () => {
  const projects = [
    {
      img: "/assets/Images/project-images/Movie-App.png",
      title: "Movie App",
      githubLink: "https://github.com/ktsuhad/Movie-App",
      liveDemo: "",
      animation: "fade-up",
    },
    {
      img: "/assets/Images/project-images/E-Cart.png",
      title: "E-Cart",
      githubLink: "https://github.com/ktsuhad/e-commerce-app",
      liveDemo: "",
    },
    {
      img: "/assets/Images/project-images/TravelHorde.png",
      title: "TravelHorde",
      githubLink: "https://github.com/ktsuhad/travelHorde",
      liveDemo: "",
    },
    {
      img: "/assets/Images/project-images/Whether-App.png",
      title: "Whether-App",
      githubLink: "https://github.com/ktsuhad/Weather-App",
      liveDemo: "https://weatherr-webapp.netlify.app/",
    },
    {
      img: "/assets/Images/project-images/Food-Recipe-App.png",
      title: "Food-Recipe-App",
      githubLink: "https://github.com/ktsuhad/Food-Recipie-app",
      liveDemo: "",
    },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awsome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl px-5 mx-auto justify-center items-center relative">
        <div className="lg:w-4/5 w-full">
          <Swiper
            spaceBetween={20}
            slidesPerView={1.2}
            breakpoints={{ 768: { slidesPerView: 3 } }}
            loop={true}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            navigation
            modules={[Navigation, Pagination, Autoplay]}
          >
            {projects.map((project, i) => (
              <SwiperSlide key={i}>
                <div
                  data-aos="zoom-in-up"
                  className="h-fit w-full p-4 bg-slate-700 rounded-xl"
                >
                  <img src={project.img} alt="" className="rounded-lg object-cover" />
                  <h3 className="text-xl my-4">{project.title}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a href={project.liveDemo} className="text-cyan-600">
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
