import fwh from "../assets/fuel-water-hybrid.png";
import hidrogen from "../assets/hidrogen-pasta.png";
import hidrofit from "../assets/hidrofit.png";
import mesin from "../assets/mesin-pompa.png";
import { GiAerialSignal } from "react-icons/gi";
import { FaWalkieTalkie, FaArrowUpFromWaterPump } from "react-icons/fa6";
import { SiOpenstreetmap } from "react-icons/si";
import { TiWeatherDownpour } from "react-icons/ti";
import { ImBlocked } from "react-icons/im";
import { TbHours12 } from "react-icons/tb";
import CommonTitle from "./CommonTitle";

const BusinessCard = (props) => {
  const { icon, title, desc } = props;
  return (
    <>
      <div className="flex items-center gap-2 ss:p-7 ss:gap-5 p-3 sm:p-5 feature-card rounded-2xl ss:rounded-3xl hover:bg-black-gradient">
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

const Product = () => {
  return (
    <section id="product" className="font-poppins pb-10 py-16">
      <div className="flex flex-col md:flex-row gap-10 md:gap-10 ss:gap-16 justify-between">
        <div className="flex flex-col gap-8 ss:gap-12 flex-1">
          <CommonTitle title="ALAT KOMUNIKASI" />
          <p className="text-dimWhite text-base sm:text-lg">
            Salah satu rekayasa teknologi dari PASS engineering telah mendapatkan piagam penghargaan berupa rekor MURI di tahun 2020. 
          </p>
          <p className="text-dimWhite text-base sm:text-lg">
            Rekayasa alat komunikasi yang jernih dan digitalisasi tanpa jarak dan batas. Sistem komunikasi yang menggunakan semua frekuensi di permukaan bumi. Komunikasi yang bebas dari penyadapan dan tahan terhadap kondisi dan cuaca ekstrem.
          </p>
        </div>
        <div className="flex flex-col gap-5 flex-1">
          <BusinessCard
            icon={<GiAerialSignal />}
            title="Jernih"
          />
          <BusinessCard
            icon={<FaWalkieTalkie />}
            title="Digitalisasi"
          />
          <BusinessCard
            icon={<SiOpenstreetmap />}
            title="Tanpa Jarak dan Batas"
          />
          <BusinessCard
            icon={<TiWeatherDownpour />}
            title="Cuaca Ekstrim"
          />
          <BusinessCard
            icon={<ImBlocked />}
            title="Anti Sadap"
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
      <div className="flex items-center flex-col md:flex-row pb-10 gap-10 md:gap-5">
        <div className="flex-1 justify-between">
          <img src={fwh} alt="FUEL WATER HYBRID" />
          <img src={hidrogen} alt="HIDROGENPASTA" />
          <img src={hidrofit} alt="hidrofit" />
        </div>
        <div className="flex flex-col gap-5 md:gap-10 flex-1">
          <CommonTitle title="HIDROGEN" />
          <p className="text-dimWhite leading-relaxed text-base ss:text-lg">
            <strong>FUEL WATER HYBRID</strong> merupakan alat yang mengefisiensikan pemakaian bahan bakar kendaraan bensin maupun solar menjadi berbasis hidrogen, sehingga manfaat yang didapat adalah kendaraan berperformance lebih meningkat, efisiensi bahan bakar, dan jaminan lulus uji emisi gas buang dengan oktan 130.
          </p>
          <p className="text-dimWhite leading-relaxed text-base ss:text-lg">
            <strong>HIDROGENPASTA</strong> merupakan rekayasa teknologi yang berbasis hidrogen untuk menekan pemakaian beban rekening pembayaran listrik industri dengan satuan panel RST dan berbasis manajemen distribusi panel (MDP).
          </p>
          <p className="text-dimWhite leading-relaxed text-base ss:text-lg">
            <strong>hidrofit</strong> merupakan alat hidrogen untuk kesehatan. Dengan alat ini, hidrogen yang diminum menjadi anti oksidan terbaik dapat menyembuhkan 170 penyakit. Hal ini telah diurai oleh para dokter dan dukungan jurnal kedokteran seluruh dunia.
          </p>
        </div>
      </div>
      <div className="absolute w-[20%] h-[60%] rounded-full left-0 top-20 blues__gradient"></div>
      <div className="flex flex-col md:flex-row gap-10 md:gap-10 ss:gap-16 justify-between">
        <div className="flex flex-col gap-8 ss:gap-12 flex-1">
          <CommonTitle title="Mesin Pompa Banjir" />
          <p className="text-dimWhite leading-relaxed text-base ss:text-lg">
            Sebuah alat sebagai solusi mengatasi genangan banjir dapat surut dalam waktu relatif singkat. Air akan tersedot secara estafet dan menuju laut. Mesin ini mampu memompa air dengan skala besar.
          </p>
          <BusinessCard
            icon={<TbHours12 />}
            title="Dalam waktu singkat"
          />
          <BusinessCard
            icon={<FaArrowUpFromWaterPump />}
            title="Air skala besar"
          />
        </div>
        <div className="flex flex-col gap-5 flex-1">
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