import '../Header/Header.scss'
const Header = () => {
  return (
    <header className="bg-[#444] w-full h-20 flex items-center text-white">
      <div className="container mx-auto flex items-center justify-between">
        {/* //left */}
        <div className="flex flex-col gap-1">
          <span className="text-2xl font-roboto  tracking-wide first-letter:text-4xl first-letter:text-[#ff3c78]">SUHAD KT</span>
          <span className="tracking-wider">Web Developer</span>
        </div>

        {/* //middle */}
        <div>
          <ul className="flex  items-center gap-10 font-roboto">
            <li><a href="#Home">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Services">Services</a></li>
            <li><a href="#Portfolio">Portfolio</a></li>
            <li><a href="#Contact">Contact</a></li>
            <li><a href="#Experience">Experience</a></li>
          </ul>
        </div>

        {/* //right */}
        <div>
          <div className='flex items-center gap-4'>
            <button className="border rounded-md px-5 py-1.5 hover:bg-black/30 duration-300"><a href="/assets/Resume/SuhadKt.pdf" download='SuhadKt.pdf'>Resume</a></button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
