"use client";
import { useRouter } from "next/navigation";
import {useState} from "react";
export default function Header() {
  const router = useRouter();
  const [Pagesopen, setPagesOpen] = useState(false);
   const [Blogopen, setBlogOpen] = useState(false);
   const [Shopsopen, setShopOpen] = useState(false);
  return (
    <div>
      <div className="hidden md:flex h-[40px] w-full bg-[#8B7553]  flex flex-row justify-center space-x-5">
         <img className="h-[20px] w-[20px] mt-2" src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F6.png&w=128&q=75"></img>
         <div className="text-[15px]  text-white mt-2">Phone:+47246890</div>
         <img className=" h-[20px] w-[20px] mt-2" src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F7.png&w=128&q=75"></img>
         <div className="text-[15px]  text-white mt-2">Email:food@restan.com</div>
         <img className="h-[20px] w-[20px] mt-2 ml-[400px]" src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Fflag.png&w=128&q=75"></img>
      <div className="text-[15px]  text-white mt-2">English</div>
      </div>
      <div className="h-auto md:h-[100px] w-full bg-black dark:bg-gray flex flex-col md:flex-row border-b-1 border-white dark:border-gray-700">
      <img
        className="h-[40px] w-[80px] md:h-[60px] md:w-[100px] ml-[100px] mt-4"
        src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75"
      />

      <div className="h-[60px] md:h-[60px] w-[360px] md:w-full mt-4 md:mt-8 flex flex-row justify-center space-x-4 md:space-x-8 relative">
        <div
          className="text-[20px]  text-white dark:text-gray-200 "
          onClick={() => router.push("/")}
        >
          Home
        </div>
  <div>
                <div className="relative">
      <button onClick={() => {setPagesOpen(!Pagesopen); setBlogOpen(false); setShopOpen(false);}} className="text-white text-[18px] flex items-center"> Pages</button>
      {Pagesopen && (<div className="absolute left-1 mt-3 w-[150px] bg-white text-black rounded-xl shadow-xl p-3 space-y-2 z-50">
          <p onClick={() => router.push("/aboutUs")}>About Us</p>  <p>Chef</p>  <p> Chef Details</p>  <p>Login</p>  </div>
      )}
    </div>

             
            </div>
           <div className="relative">
      <button onClick={() => {setBlogOpen(!Blogopen); setPagesOpen(false); setShopOpen(false);} }className="text-white text-[18px] flex items-center"> Blog</button>
      {Blogopen && (<div className="absolute left-1 mt-3 w-[200px] bg-white text-black rounded-xl  p-3 space-y-2">
          <p onClick={() => router.push("/blog")}>Blog Standard</p>  <p>Blog with sidebar</p>  <p> Blog with two column</p>   </div>
      )}
    </div> 
           
            <div className="relative">
      <button onClick={() =>{ setShopOpen(!Shopsopen); setPagesOpen(false); setBlogOpen(false);} }className="text-white text-[18px] flex items-center"> Shop</button>
      {Shopsopen && (<div className="absolute left-1 mt-3 w-[100px] bg-white text-black rounded-xl shadow-xl p-2 space-y-2 z-50">
          <p onClick={() => router.push("/shop")}>Shop</p>  <p>Cart</p>  <p> Checkout</p> </div>
      )}
    </div>
<div className=" flex items-center space-x-4"><div className="mb-4"> 
<img className="hidden md:flex h-[70px] w-[50px] md:ml-[100px]" src="https://media.licdn.com/dms/image/v2/C560BAQEo2fBEZzQT3g/company-logo_100_100/company-logo_100_100/0/1630652388207?e=2147483647&v=beta&t=gdM6BRE4x-HDBpJ9b8i7nXbXuVemb0JTALwF83sDF0s"/></div>
<div className=" md:h-[50px] w-[85px] md:w-[200px] mb-4 bg-black border-2 flex items-center border-white hover:bg-white ">
  <span className="text-white text-[15px] md:p-12 hover:text-black" onClick={() => router.push("/contactUs")}
        >Reservation</span>
</div></div>

    

 
</div>


      </div>
    </div>
    
    
  );
}
