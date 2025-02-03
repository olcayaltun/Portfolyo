import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import MapComponent from "../components/Map";
const Message = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      from_name: nameRef.current.value,
      from_email: emailRef.current.value,
      subject: subjectRef.current.value,
      message: messageRef.current.value,
    };

    emailjs
      .send(
        "service_c35kc42",
        "template_iwh2l4d",
        templateParams,
        "x-WUAPrGLZT5XgtRH"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );

    // Formu temizleme
    nameRef.current.value = "";
    emailRef.current.value = "";
    subjectRef.current.value = "";
    messageRef.current.value = "";
  };

  return (
    <div className="grid grid-cols-13 ml-[180px] max-md:flex  max-md:flex-col md:gap-[30px] ">
      <div className="col-span-6 place-content-center h-screen max-md:h-1 max-md:mt-[200px] max-md:ml-[-90px] max-lg:ml-[-70px] ">
        <form
          onSubmit={handleSubmit}
          className="relative grid w-[430px] gap-2 text-[#EFE0D0] font-semibold max-md:w-[370px] max-lg:w-[360px]"
        >
          <div className="flex justify-center gap-4 items-center w-full">
            <input
              ref={nameRef}
              type="text"
              placeholder="Name"
              required
              className="p-2.5 rounded-md bg-[#427f69] w-full outline-none border-[.3px]"
            />
            <input
              ref={emailRef}
              type="email"
              placeholder="E-Mail"
              required
              className="p-2.5 rounded-md bg-[#427f69] w-full outline-none border-[.3px]"
            />
          </div>
          <input
            ref={subjectRef}
            type="text"
            placeholder="Subject"
            required
            className="p-2.5 rounded-md bg-[#427f69] outline-none border-[.3px]"
          />
          <textarea
            ref={messageRef}
            placeholder="Message"
            required
            className="outline-none border-[.3px] p-2.5 rounded-md bg-[#427f69]"
          ></textarea>
          <div className="absolute left-[200px] top-[250px]">
            <button
              type="submit"
              className="p-2.5 rounded-md bg-[#634E37] text-[#EFE0D0] font-semibold hover:bg-[#346352] transition-colors duration-300"
            >
              Send
            </button>
          </div>
        </form>
      </div>
      <div className="col-span-7 bg-[#336352]  z-4 max-md:w-[400px] max-md:ml-[-120px] max-md:mt-[300px] max-md:p-[-10px] ">
        <MapComponent />
      </div>
      <div>
        {" "}
        <div className=" absolute top-12 bg-black text-amber-50 p-3 rounded-md left-[850px] z-10">
          Olcay Altun,
          <br />
          Deutschland,
          <br />
          Burgkirchen 19, 22000 <br />
          Sremska Mitrovica <br />
          <br />
          <span>olcayaltun36@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Message;
