import { useState } from 'react';
import emailjs from '@emailjs/browser';

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
            <div id="form-container" className="lg:p-5 font-Encode-Sans">
                <div className="overflow-hidden">
                    <h3 className="text-center lg:text-5xl text-5xl mt-10 pb-6 font-bold">
                    Kontak
                    </h3>
                </div>
                <form onSubmit={sendEmail}>
                    <div className="mx-auto rounded-xl max-w-xl">
                        <div className="grid grid-cols-1 gap-6 label">
                            <label htmlFor="name" className="block border-b py-2 ">
                            <input
                                id="name"
                                type="text"
                                name="your_name"
                                required="required"
                                placeholder="Nama"
                                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none bg-cool-darker uppercase font-bold text-3xl"
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
                                appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none font-bold uppercase text-3xl"
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
                                appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none bg-cool-darker text-cool-beige text-2xl font-bold
                                "
                            ></textarea>
                            </label>
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 hover:bg-indigo-300 hover:text-neutral-800 p-3 rounded-lg focus:outline-none focus:shadow-outline"
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
        </section>
    );
  };
  export default Contact;