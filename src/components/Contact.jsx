import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineMailOutline } from "react-icons/md";
import { FaMobileAlt,FaWarehouse } from "react-icons/fa";
import CommonTitle from "./CommonTitle";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          e.target,
          process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStateMessage('Message sent!');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000);
        },
        (error) => {
          setStateMessage('Something went wrong, please try again later');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000);
        }
      );
    e.target.reset();
  };
  return (
      <section id="contact" className="font-poppins pb-10 md:py-16">
        <div className="flex flex-col md:flex-row pb-10 gap-10 md:gap-5">
          <div className="flex flex-col gap-5 flex-1">
            <CommonTitle title="KONTAK" />
            <p className="text-dimWhite leading-relaxed text-base ss:text-lg">
              Jangan ragu untuk menghubungi kami jika ada pertanyaan. Kami selalu dengan senang hati membantu!
            </p>
            <p className="text-sm sm:text-base md:text-lg text-dimWhite flex items-center gap-2">
              <span>
                <MdOutlineMailOutline className="mt-1 text-base" />
              </span>
              <span>passakti@yahoo.com</span>
            </p>
            <p className="text-sm sm:text-base md:text-lg text-dimWhite flex items-center gap-2">
              <span>
                <FaMobileAlt className="mt-1 text-base" />
              </span>
              <span>+62 812 8888 845</span>
            </p>
            <p className="text-sm sm:text-base md:text-lg text-dimWhite flex items-center gap-2">
              <span>
                <FaWarehouse className="mt-1 text-base" />
              </span>
              <span>Jl. Raya Narogong KM. 11 No. 8/9, Limus Nunggal, Kec. Cileungsi, Kabupaten Bogor, Jawa Barat 16820</span>
            </p>
          </div>
          <div id="form-container" className="flex flex-col gap-5 md:gap-10 flex-1">
              <form onSubmit={sendEmail}>
                  <div className="mx-auto rounded-xl max-w-xl">
                      <div className="grid grid-cols-1 gap-6 label">
                          <label htmlFor="name" className="block border-b py-2">
                          <input
                              id="name"
                              type="text"
                              name="your_name"
                              required="required"
                              placeholder="Nama"
                              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none bg-cool-darker"
                          />
                          </label>
                          <label htmlFor="email" className="block border-b">
                          <input
                              id="email"
                              type="email"
                              name="your_email"
                              placeholder="Email"
                              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                              required="required"
                              className="
                              appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                          />
                          </label>
                          <label className="block border-b">
                          <textarea
                              id="message"
                              name="message"
                              rows="5"
                              required="required"
                              placeholder="Pesan"
                              className="
                              appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none bg-cool-darker text-cool-beige
                              "
                          ></textarea>
                          </label>
                          <div className="text-center">
                              <button
                                  type="submit"
                                  className="uppercase text-sm font-bold tracking-wide text-gray-100 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                  disabled={isSubmitting}
                              >
                                  Kirim
                              </button>
                              {stateMessage && <p>{stateMessage}</p>}
                          </div>
                      </div>
                  </div>
              </form>              
          </div>
        </div>
      </section>
  );
};

export default Contact;
