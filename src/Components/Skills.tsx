import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoCss3, BiLogoNodejs, BiLogoReact } from "react-icons/bi";

const Skills = () => {
  const isLargeScreen = window.innerWidth >= 768;

  const skills = [
    {
      logo: <AiFillHtml5 />,
      level: "Advance",
      count: 86,
      animation: "fade-right",
    },
    {
      logo: <BiLogoCss3 />,
      level: "Expert",
      count: 90,
      animation: "fade-right",
    },
    {
      logo: <BiLogoNodejs />,
      level: "Beginner",
      count: 40,
      animation: "fade-left",
    },
    {
      logo: <BiLogoReact />,
      level: "Intermediate",
      count: 80,
      animation: "fade-left",
    },
  ];
  return (
    <section id="skills" className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My Knowledge</p>
        <div className="flex justify-center items-center mt-12 gap-10 flex-wrap">
          {skills.map((skill, i) => (
            <div
              data-aos={isLargeScreen ? skill.animation : "fade-up"}
              key={i}
              className="border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl"
            >
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center">
                  {skill.logo}
                </div>
              </div>
              <p className="text-xl mt-3">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
