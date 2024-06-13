import fwh from "../assets/fuel-water-hybrid.png";
import hidrogen from "../assets/hidrogen-pasta.png";
import hidrofit from "../assets/hidrofit.png";
import mesin from "../assets/mesin-pompa.png";
import { FaStar } from "react-icons/fa";
import CommonTitle from "./CommonTitle";

const BusinessCard = (props) => {
  const { icon, title, desc } = props;
  return (
    <>
      <div className="flex items-center gap-2 ss:p-7 ss:gap-5 p-3 sm:p-5 feature-card rounded-2xl ss:rounded-3xl hover:bg-black-gradient cursor-pointer">
        <div className="p-4 bg-dimBlue rounded-full">
          <span className="text-2xl ss:text-[2rem]">{icon}</span>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-white text-base sm:text-lg font-semibold">
            {title}
          </h3>
          <p className="text-dimWhite text-xs sm:text-base">{desc}</p>
        </div>
      </div>
    </>
  );
};

const Steps = ({ title }) => {
  return (
    <p className="text-sm sm:text-base md:text-lg text-dimWhite flex items-center gap-2">
      <span>
        <FaStar className="mt-1 text-base" />
      </span>
      <span>{title}</span>
    </p>
  );
};

const Product = () => {
  return (
    <section id="product" className="font-poppins pb-10 md:py-16">
      <div className="flex items-center flex-col md:flex-row gap-10 md:gap-10 ss:gap-16 justify-between">
        <div className="flex flex-col gap-8 ss:gap-12 flex-1">
          <CommonTitle title="ALAT KOMUNIKASI" />
          <p className="text-dimWhite text-base sm:text-lg">
            Praesent sollicitudin aliquet augue sed facilisis. Sed sit amet sapien finibus, placerat tortor et, lacinia nibh. In vitae dolor eget elit placerat pharetra ut eget eros. Aliquam erat volutpat. Suspendisse pulvinar, nisl eu porta consectetur, metus mi venenatis dui, ut congue nulla tortor condimentum tortor. Maecenas vel faucibus est. Donec sed faucibus sapien. Curabitur quis consequat mauris. Nulla at massa vitae libero cursus lacinia vitae at lacus.
          </p>
        </div>

        <div className="flex flex-col gap-5 flex-1">
          <BusinessCard
            icon={<FaStar />}
            title="Lorem Ipsum"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et nisi in est mollis tincidunt."
          />
          <BusinessCard
            icon={<FaStar />}
            title="Lorem Ipsum"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et nisi in est mollis tincidunt."
          />
          <BusinessCard
            icon={<FaStar />}
            title="Lorem Ipsum"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et nisi in est mollis tincidunt."
          />
        </div>
      </div>
      <div className="flex flex-col xs:flex-row flex-wrap items-center justify-between gap-6 md:gap-2 py-20">
        <iframe
            className="w-full aspect-video"
            src={`https://www.youtube.com/embed/eSOUU3kQ1AE`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
      </div>

      <div className="flex flex-col md:flex-row pb-10 gap-10 md:gap-5">
        <div className="flex-1">
          <img src={fwh} alt="FUEL WATER HYBRID" />
          <img src={hidrogen} alt="HIDROGENPASTA" />
          <img src={hidrofit} alt="hidrofit" />
        </div>
        <div className="flex flex-col gap-5 md:gap-10 flex-1">
          <CommonTitle title="HIDROGEN" />
          <p className="text-dimWhite leading-relaxed text-base ss:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus, eros eu ultricies viverra, massa sapien varius sem, vel efficitur nisi sapien id sapien. Nullam facilisis nunc eu diam ultricies interdum. Nulla laoreet eros nec urna porta, eget pulvinar mauris venenatis. Donec ullamcorper cursus gravida. 
          </p>
        </div>
      </div>
      {/* <div className="absolute w-[20%] h-[60%] rounded-full left-0 top-20 pink__gradient"></div> */}
      <div className="flex md:flex-row flex-col gap-10">
        <div className="flex flex-col gap-7 sm:gap-10 flex-1">
          <CommonTitle title="Mesin Pompa Banjir" />
          <div className="flex flex-col gap-3">
            <Steps title="Integer lacinia eu nibh vehicula placerat" />
            <Steps title="Integer lacinia eu nibh vehicula placerat" />
            <Steps title="Integer lacinia eu nibh vehicula placerat" />
          </div>
          {/* <CommonButton btnText="get started" /> */}
        </div>

        <div className="flex-1">
          <img
            src={mesin}
            alt="Mesin Pompa"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Product;