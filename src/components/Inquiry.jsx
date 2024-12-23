import React from "react";

const Inquiry = () => {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwddrfychRfzHeX02FuF-alH2V5G-p4ij_BM1jThF5sHngtg7UoQ0pqNRze0JBFzkQt/exec'; // Ganti dengan URL Web App Google Apps Script Anda

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch(scriptURL, {
      method: "POST",
      body: new FormData(form),
    })
      .then((response) => {
        console.log("Success!", response);
        alert("Your message has been sent successfully!");
        form.reset();
      })
      .catch((error) => {
        console.error("Error!", error.message);
        alert("Failed to send your message. Please try again.");
      });
  };
  // FFD768
  return (
    <div className="inquiry-modal mr-[-40px] mt-[160px] ">
      <h2 className="text-2xl font-bold text-[#ebad31]  mb-[-20px] ml-[39px]">
        Inquiry
      </h2>
      <form
        name="submit-to-google-sheet"
        className="flex flex-col space-y-2  p-10 rounded-lg"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="p-1 rounded bg-transparent border border-[#FFD768] text-black focus:outline-none focus:ring-2 focus:ring-primary mt-[-15px]"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="p-1 rounded bg-transparent border border-[#FFD768] text-black focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
        <input
          type="text"
          name="message"
          placeholder="Message"
          className="p-1 rounded bg-transparent border border-[#FFD768] text-black focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
        <button
          type="submit"
          className="bg-[#ebad31] py-1 px-3 rounded-xl outline-none font-bold  text-white shadow-md text-sm"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Inquiry;
