const Contact = () => {
  return (
    <section id="contact" className="h-screen bg-[#0D1730] text-white flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 lg:px-36 galaxy-fold:px-2">
      <h2 className="font-bold text-3xl sm:text-4xl mb-2 sm:mb-4 text-center galaxy-fold:text-2xl galaxy-fold:mb-2" style={{ fontFamily: 'Darker Grotesque' }}>
        Contact Us
      </h2>
      <div className="flex flex-col sm:flex-row w-full max-w-5xl mx-auto" style={{ fontFamily: 'Darker Grotesque' }}>
        <div className="flex flex-col justify-center p-4 sm:p-5 w-full sm:w-1/2 mb-2 sm:mb-0 galaxy-fold:mb-2">
          <div className="mb-3 sm:mb-4">
            <strong>Email:</strong> taji@gmail.com
          </div>
          <div className="mb-3 sm:mb-4">
            <strong>Phone Number:</strong> +254794847640
          </div>
          <div className="mb-3 sm:mb-4">
            <strong>Address:</strong> 616 Korongo RD, Nairobi
          </div>
        </div>
        <div className="w-px bg-white mx-4 sm:mx-5 hidden sm:block"></div>
        <form className="p-4 sm:p-5 rounded-lg shadow-lg w-full sm:w-1/2 flex flex-col items-center galaxy-fold:p-2">
          <div className="mb-4 w-full flex flex-col sm:flex-row items-start">
            <label htmlFor="email" className="block font-bold mr-0 sm:mr-2 w-full sm:w-1/3 mb-2 sm:mb-0">Email Address:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className="border border-gray-300 rounded px-3 py-2 w-full sm:w-2/3" 
              required 
            />
          </div>
          <div className="mb-4 w-full flex flex-col sm:flex-row items-start">
            <label htmlFor="phone" className="block font-bold mr-0 sm:mr-2 w-full sm:w-1/3 mb-2 sm:mb-0">Phone Number:</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              className="border border-gray-300 rounded px-3 py-2 w-full sm:w-2/3" 
              required 
            />
          </div>
          <div className="mb-4 w-full flex flex-col sm:flex-row items-start">
            <label htmlFor="message" className="block font-bold mr-0 sm:mr-2 w-full sm:w-1/3 mb-2 sm:mb-0">Message:</label>
            <textarea 
              id="message" 
              name="message" 
              rows="4"  
              className="border border-gray-300 rounded px-3 py-2 w-full sm:w-2/3 resize-none" 
              required 
            />
          </div>
          <button 
            type="submit" 
            className="bg-white text-[#0D1730] font-bold py-2 px-5 rounded-full cursor-pointer self-center hover:bg-blue-800" >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;