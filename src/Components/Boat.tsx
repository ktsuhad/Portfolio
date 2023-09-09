import { Sms } from "@mui/icons-material";

const Boat = () => {
  return (
    <div
      data-aos="fade-left"
      className="fixed bottom-5 right-4 cursor-pointer bg-cyan-500  w-16 h-16 flex justify-center items-center rounded-full hover:bg-cyan-600 animate-bounce duration-500 z-50"
    >
      <a href="#contact">
        <Sms />
      </a>
    </div>
  );
};

export default Boat;
