import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-full bg-[#000000] flex justify-center pt-28 items-center p-4 px-10"
    >
      <form
        method="post"
        action="https://getform.io/f/9a4dc1ff-1fda-4b25-8fc0-e57d192b575a"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#121212] text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            // If you'd like to talk about a project or any opportunities you feel I will be a good fit for, message me at -
            chyannetech@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ffffff] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ffffff]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ffffff] p-2"
          name="message"
          cols="30"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white  border-2 hover:bg-[#292929] shadow-lg shadow-[#262626] px-4 py-3 my-8 mx-auto flex items-center">
          Submit
        </button>
      </form>
    </div>
  );
};


export default Contact;
