"use client";
export default function Footer(){
    return(
        <div>
             <div className="bg-gray-950 dark:bg-[#2A2A2A] text-white w-[360px] md:w-[1300px] h-[1000px] md:h-[500px] p-6 md:p-[90px] md:ml-[120px] space-x-0.5 md:space-x-10 flex flex-col md:flex-row">
            <div className="w-full md:w-[300px] px-6 mb-6 md:mb-0">
               <div><div className="text-[30px] font-serif mb-4">About us</div>
                <div className="text-[#D1D5DB] text-[16px]">Continued at zealously necessary is Surrounded sir motionless she end literature.</div>
               </div> 
               
                 </div>
                  <div className="w-full md:w-auto mb-6 md:mb-0 ml-4 md:ml-0"> <div className="text-[30px] font-serif mb-4">Explore</div>
                <ul className="text-[#D1D5DB] text-[16px] space-y-2">
                    <li>Company profile</li>
                    <li>About</li>
                    <li>Help center</li>
                    <li>Career</li>
                    <li>Features</li>
                    <li>Contact</li>
                    
                </ul>
                </div>
                 <div className="w-full md:w-[300px] px-6 mb-6 md:mb-0 ">
                     <div className="text-[30px] font-serif mb-4">Contact info</div>
                <div className="text-[#D1D5DB] text-sm">175 10h Street, Office 375 Berlin, De 21562</div>
                <div className="text-[#D1D5DB] text-sm mt-3">+1233456743</div>
                <div className="text-[#D1D5DB] text-sm mt-3">+5546782990</div>
                <div className="text-[#D1D5DB] text-sm mt-3">food@restan.com</div>
                 </div>
               
           
            <div className="w -full md:w-[300px] ml-5 md:ml-0">
                <div className="text-[30px] font-serif mb-4">Newsletter</div>
                <div className="text-[16px] text-[#D1D5DB] font-serif mb-4">Join our subscribers list to get the latest news and special offers.
             </div>
             <input 
             type="email"
             placeholder="Your email"
             className="w-full text-sm text-white">
                
             </input>
             <div className="flex items-center mt-3 space-x-2">
                    <div className="text-[#D1D5DB] text-sm">I agree to the privacy policy</div>

             </div>
            </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center  bg-neutral-800 dark:bg-neutral-900 h-auto md:h-[300px] text-[#D1D5DB] text-sm px-6 md:py-0 py-6">
            <div className="flex items-center space-x-2">
                <img className="h-[50px] md:h-[70px]  md:ml-10" src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75"></img>
            </div>
            <div className="md:mr-20 text-[15px] mr-10 w-[400px] ml-30 mt-5">© Copyright 2025. Restan. All Rights Reserved</div>
        </div>
        </div>
       
        
    )
}