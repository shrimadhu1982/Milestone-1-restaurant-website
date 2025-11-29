import Header from "../components/header";

import Headerstyle from "../components/headerstyle";
import Openinghours from "../components/openinghours";
import Footer from "../components/footer";
import ContactCards from "../components/contactcard"; 
export default function ContactUs(){

    return(
        <div>
       <Header/>

   <Headerstyle title="Contact Us" navigation="Contact us"/>
 <div className="mt-20"><ContactCards/></div>
    <div className="w-full flex justify-center py-10 md:py-20 dark:bg-black bg-[#f8f8f8]">
      <div className="w-[90%] md:w-[80%] bg-white  shadow-xl rounded-[15px] md:rounded-[20px] p-6 md:p-10">
        <div className="flex flex-col items-center">
          <div className="flex flex-row items-center space-x-2 md:space-x-3">
            <div className="h-[1px] w-[40px] md:w-[80px] bg-gray-400"></div>
            <p className="text-[14px] md:text-[16px] tracking-widest text-[#a1886f] font-semibold">

              KEEP IN TOUCH
            </p>
            <div className="h-[1px] w-[40px] md:w-[80px] bg-gray-400"></div>
          </div>
          <h1 className="text-[28px] md:text-[40px] font-semibold mt-2 md:mt-3 text-center dark:text-black">
            Send us a Message
          </h1>
        </div>
       <div className="mt-6">
          <p className="text-[14px] md:text-[16px] text-center dark:text-black">
            We would love to hear from you! Please fill out the form below and we will get back to you as soon as possible.
          </p>
        </div>
        <div className="mt-6 md:mt-10 flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full h-[50px] md:h-[60px] bg-[#f2f2f2] dark:bg-black px-4 text-[16px] md:text-[18px] rounded-[8px] md:rounded-[10px] outline-none "

          />
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-5">
            <input
              type="email"
              placeholder="Email"
              className="w-full md:w-[50%] h-[50px] md:h-[60px] bg-[#f2f2f2] dark:bg-black px-4 text-[16px] md:text-[18px] rounded-[8px] md:rounded-[10px] outline-none "
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-full md:w-[50%] h-[50px] md:h-[60px] bg-[#f2f2f2] dark:bg-black px-4 text-[16px] md:text-[18px] rounded-[8px] md:rounded-[10px] outline-none "
            />
          </div>
          <textarea
            placeholder="Your Message"
            className="w-full h-[150px] md:h-[200px] bg-[#f2f2f2] dark:bg-black px-4 py-3 text-[16px] md:text-[18px] rounded-[8px] md:rounded-[10px] outline-none resize-none "
          ></textarea>
         <button className="mt-5 bg-[#8b6a3e] w-full md:w-[220px] h-[50px] md:h-[60px] rounded-[8px] md:rounded-[10px] text-white text-[16px] md:text-[20px] font-semibold">
            Get In Touch
          </button>
        </div>
      </div>
    </div>
<Openinghours/>
<div className="mt-30 md:mt-0"><Footer/></div>  
        </div>
    )
}