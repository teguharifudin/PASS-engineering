import jaya from "../assets/jaya_suprana_rudi_sumardi.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex md:items-center flex-col md:flex-row gap-10 md:gap-0"
    >
      <div className="flex flex-col gap-5 flex-1 pr-10 md:pr-0">
        <div className="relative">
          <h1 className="text-[3.3rem] sm:text-6xl leading-snug sm:leading-normal md:text-7xl md:leading-snug font-[600] font-poppins">
            Selamat datang di <br className="md:block hidden" />{" "}
            <span className="text-gradient">PASS</span>{" "}
            <br className="md:block hidden " /> engineering{" "}
          </h1>
        </div>
      </div>
      <div className="flex-1 relative flex items-center justify-center">
        <img src={jaya} alt="robot" className="md:w-full md:h-full" />
        <div className="absolute w-[40%] h-[35%] top-0 blues__gradient"></div>
        <div className="absolute w-[80%] h-[80%] rounded-full bottom-40 white__gradient"></div>
        <div className="absolute w-[50%] h-[50%] right-20 bottom-20 blue__gradient"></div>
      </div>
    </section>
  );
};

export default Hero;