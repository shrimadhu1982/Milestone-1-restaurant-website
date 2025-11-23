"use client";
import { useRouter } from "next/navigation";
import Openinghours from "./components/openinghours";
import Chefsection from "./components/chefsection";
import Footer from "./components/footer";
import Menucard from "./components/menucard";
import Popular from "./components/popularcard";
import { useState } from "react";
export default function Landing(){
  const router = useRouter();
   const [Pagesopen, setPagesOpen] = useState(false);
   const [Blogopen, setBlogOpen] = useState(false);
   const [Shopsopen, setShopOpen] = useState(false);
  const menuItems=[
    {
      img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F1.jpg&w=1920&q=75",
      title:"Braised chicken legs",
      rating:"4.9(5.7K)",
      price:35
    },
    {
      img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F2.jpg&w=1920&q=75",
      title:"Bone-steak",
      rating:"4.2(3.1K)",
      price:18
    },
    {
      img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F3.jpg&w=1920&q=75",
      title:"Fish tacos",
      rating:"4.8(6.7K)",
      price:12
    },
    {
      img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F4.jpg&w=1920&q=75",
      title:"Broken lasagna & permesan",
      rating:"5(3.5K)",
      price:22
    },
    {
      img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F5.jpg&w=1920&q=75",
      title:"Double stack mushroom",
      rating:"4.9(5.7K)",
      price:34
    },
    {
      img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F6.jpg&w=1920&q=75",
      title:"Braised chicken legs",
      rating:"4.8(5.5K)",
      price:36
    },
  ]
  const cards=[{
 img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F27.jpg&w=1920&q=75",
    category:"Sea food",
    title:"Salmon fry",
  },
{
 img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F26.jpg&w=1920&q=75",
    category:"Desserts",
    title:"Cheesecakes",
  },
{
 img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F25.jpg&w=1920&q=75",
    category:"Main dishes",
    title:"Chicken alfredo",
  },]
   
  
    return(
        <div className="w-[360px] md:w-full dark:bg-[#1D1D1D]">
<div className="relative w-full h-[700px] bg-[url('https://restan-nextjs.vercel.app/assets/img/banner/14.jpg')] ">
   <div className="absolute inset-0 bg-black/50 "></div>
   <div className="relative">
    <div className="hidden md:flex flex flex-col md:flex-row  items-center text-white text-[12px] md:text-[14px] px-4 md:px-20 py-2 border-b border-gray-700">
    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 mb-2 md:mb-0">
      <div className="flex items-center space-x-2">
      <img className="h-[14px] w-[14px]" src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F6.png&w=128&q=75" />
    <span className="text-[15px]">Phone: +4733378901</span>
   </div>
    <div className="flex items-center space-x-2">
       <img className="h-[14px] w-[14px]" src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F6.png&w=128&q=75" />
              <span className="text-[15px]">Email: food@restan.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 ml-[500px]">
            <img className="h-[14px] w-[14px]"
              src="https://t4.ftcdn.net/jpg/16/10/59/13/360_F_1610591368_V84trCRY2v4qC2cNyFvfvRREIwu5NV9P.webp" />
            <span className="text-[15px]">175 10h Street, Office 375 Berlin, De 21562</span>
          </div>
        </div>
  <div className="flex flex-col md:flex-row  items-center text-white px-20 md:mt-10">
    <div className="flex flex-row space-x-2 md:space-x-8 text-[18px] mt-10 md:mt-0  md:ml-10 ">
    <div className="text-[18px]" onClick={()=>router.push("/")}>Home</div>
    
      <div className="relative">
      <button onClick={() => {setPagesOpen(!Pagesopen); setBlogOpen(false); setShopOpen(false);}} className="text-white text-[18px] flex items-center"> Pages</button>
      {Pagesopen && (<div className="absolute left-1 mt-3 w-[150px] bg-white text-black rounded-xl shadow-xl p-3 space-y-2 z-50">
          <p onClick={() => router.push("/aboutUs")}>About Us</p>  <p>Chef</p>  <p> Chef Details</p>  <p>Login</p>  </div>
      )}
    </div>
</div>

  
    <div className=" md:ml-[400px] ">
      <img
        className=" h-[35px] md:h-[45px]"
        src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75"
      />
    </div>
    <div className=" flex flex-row space-x-8 text-[18px] font-medium md:ml-[400px]">
      <div>
     <div className="relative">
      <button onClick={() => {setBlogOpen(!Blogopen); setPagesOpen(false); setShopOpen(false);} }className="text-white text-[18px] flex items-center"> Blog</button>
      {Blogopen && (<div className="absolute left-1 mt-3 w-[200px] bg-white text-black rounded-xl  p-3 space-y-2">
          <p onClick={() => router.push("/blog")}>Blog Standard</p>  <p>Blog with sidebar</p>  <p> Blog with two column</p>   </div>
      )}
    </div> 
            </div>
     <div className="relative">
      <button onClick={() =>{ setShopOpen(!Shopsopen); setPagesOpen(false); setBlogOpen(false);} }className="text-white text-[18px] flex items-center"> Shop</button>
      {Shopsopen && (<div className="absolute left-1 mt-3 w-[100px] bg-white text-black rounded-xl shadow-xl p-2 space-y-2 z-50">
          <p onClick={() => router.push("/shop")}>Shop</p>  <p>Cart</p>  <p> Checkout</p> </div>
      )}
    </div>


      <div className="text-[16px] md:text-[18px]" onClick={()=>router.push("/contactUs")}>Contact Us</div>
    </div>
  </div>

 
  <div className=" flex flex-col justify-center items-center text-white text-center">
    <div className="text-[40px] md:text-[100px] font-serif mt-20">Best Restaurant</div>
    <div className="mt-5 border-2 border-white h-[200px] w-[200px] rounded-[400px] px-8 py-3 text-[20px] flex items-center">
      BEST FOOD <br></br>SINCE 1865
    </div>
    </div>
  </div>
   
  
</div>

             
             
<div className="relative w-full px-4 md:px-10 bg-white dark:bg-[#1D1D1D] py-10 md:py-20">
  <div className="flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-20">
    
  
    <div className="bg-white dark:bg-[#2b2b2b] mt-10 md:mt-0 md:absolute -top-15 left-20 w-full h-[550px] md:w-[450px] p-6 md:p-10 rounded-[20px] md:rounded-[40px] shadow-xl">
      <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8 ">Book a table</h2>

      <input
        type="text"
        placeholder="Phone"
        className="w-full border border-gray-300 rounded-[10px]  px-4 py-3 mb-4"/>

      <select className="w-full border border-gray-300  rounded-[10px] px-4 py-3 mb-4">
        <option>3 Person</option>
        <option>2 Person</option>
        <option>4 Person</option>
      </select>

      <input
        type="text"
        placeholder="Date"
        className="w-full border  border-gray-300 rounded-[10px] px-4 py-3 mb-4"/>

      <select className="w-full border  border-gray-300 rounded-[10px] px-4 py-3 mb-6">
        <option>12:00 PM</option>
        <option>01:00 PM</option>
        <option>02:00 PM</option>
      </select>

      <button className="w-full md:w-[200px] bg-[#8b6a3c] text-white font-semibold py-3 rounded-lg hover:bg-black">
        Book A Table
      </button>
    </div>

   
    <div className="flex flex-col md:ml-[650px] w-full md:w-[900px] ">
      <div className="flex flex-col md:flex-row  items-center mb-8">
        <div className="text-2xl md:text-4xl font-bold text-black dark:text-white font-serif   mb-4 md:mb-0">
          Our popular category
        </div>
        <div className="space-x-4 md:ml-[200px]">
          <button className="h-[40px] w-[40px] md:h-[50px] md:w-[50px] bg-[#7A614D] text-white rounded-full text-xl md:text-2xl">‹</button>
          <button className="h-[40px] w-[40px] md:h-[50px] md:w-[50px] bg-[#7A614D] text-white rounded-full text-xl md:text-2xl">›</button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
        {cards.map((item, index) => (
          <Popular key={index} img={item.img} category={item.category} title={item.title} />
        ))}
      </div>
    </div>
  </div>
</div>

<div className="w-full flex flex-col items-center py-10 md:py-20 bg-white dark:bg-[#1D1D1D] px-4">
  <div className="w-[200px] mb-8 md:mb-16"></div>
  <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0">
    <div className="w-full max-w-[450px] h-auto md:h-[350px] rounded-[20px] md:rounded-[25px] p-6 md:p-8 flex flex-col border-t-1 border-t-black dark:border-t-amber-600">
      <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F13.png&w=640&q=75"
        className="h-[60px] w-[60px] md:h-[80px] md:w-[80px] mb-4 md:mb-6"></img>
      <div className="text-[20px] md:text-[24px] font-serif mb-3 ">Quality foods</div>
      <div className="text-gray-500 dark:text-white text-[14px] md:text-[16px]">Belonging sir curiosity discovery extremity yet forfeited prevailed own off. Traveling by introduced of mr terminated.</div>
    </div>
    <div className="w-full max-w-[450px] h-auto md:h-[350px] rounded-[20px] md:rounded-[25px] p-6 md:p-8 flex flex-col border md:border-t-white dark:border-r-amber-600 border-l-amber-600 border-b-amber-600 dark:border-t-[#1D1D1D]">
      <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F14.png&w=640&q=75"
        className="h-[60px] w-[60px] md:h-[80px] md:w-[80px] mb-4 md:mb-6"></img>
      <div className="text-[20px] md:text-[24px] font-serif mb-3 ">Fast delivery</div>
      <div className="text-gray-500 dark:text-white text-[14px] md:text-[16px]">Belonging sir curiosity discovery extremity yet forfeited prevailed own off. Traveling by introduced of mr terminated.</div>
    </div>
    <div className="w-full max-w-[450px] h-auto md:h-[350px] rounded-[20px] md:rounded-[25px] p-6 md:p-8 flex flex-col border-t-1 border-t-black dark:border-t-amber-600">
      <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F15.png&w=640&q=75"
        className="h-[60px] w-[60px] md:h-[80px] md:w-[80px] mb-4 md:mb-6 "></img>
      <div className="text-[20px] md:text-[24px] font-serif mb-3 ">Delicious recipes</div>
      <div className="text-gray-500 dark:text-white text-[14px] md:text-[16px]">Belonging sir curiosity discovery extremity yet forfeited prevailed own off. Traveling by introduced of mr terminated.</div>
    </div>
  </div>
</div>
<div className="w-full md:w-[1300px]  md:ml-30 h-auto md:h-[800px] rounded-[20px] md:rounded-[40px] bg-[#E8B868] flex flex-col md:flex-row justify-center items-center py-10 md:py-20 px-4 md:px-10 text-white mt-10">
        <div className="flex flex-col md:flex-row justify-center items-center w-full">
            <img className="h-[200px] md:h-[450px]" src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F15.png&w=1080&q=75" alt="App illustration" />
            
            <div className="w-full md:w-[700px] flex flex-col justify-center items-center md:items-start text-center md:text-left mt-6 md:mt-0 md:pl-10">
                <div className="text-[15px] md:text-[30px] text-black font-bold">Today special offer</div>
                <div className="text-[30px] md:text-[45px] font-bold">Explore Irresistible Promotions!</div>
                <div className="text-black mt-5 text-[14px] md:text-[16px]">Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult preserved daughters. Continued at up to zealously necessary.</div>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-5 mt-10">
                    <button className="flex items-center justify-center space-x-2  text-black bg-[#8B7553] px-6 py-3 rounded-full w-full md:w-auto hover:bg-black ">
                        <img className="h-[20px]"  />
                        <span className="font-semibold text-white hover:text-white ">Order today</span>
                    </button>
                    
                </div></div> </div> </div>
<div className="flex flex-col items-center w-full py-10 md:py-20 px-4 mt-2">
    <div className="text-[24px] md:text-[30px] dark:text-white text-yellow-800 font-serif">FOOD MENU</div>
    <div className="text-[36px] md:text-[60px] font-serif text-center ">Our specials menu</div>
    
    <div className="flex flex-wrap justify-center gap-1 md:gap-4 w-full max-w-[600px] border-2 border-black dark:border-white p-4 mt-6">
        <div className="text-[14px] md:text-[20px]  px-2">Main dishes</div> 
        <div className="text-[14px] md:text-[20px] px-2">Desserts</div>
        <div className="text-[14px] md:text-[20px]  px-2">Sea food</div> 
        <div className="hidden md:block text-[14px]  md:text-[20px] px-2">Beverages</div>
    </div>
    
    <div className="flex flex-wrap justify-center space-y-8 md:space-y-20 md:space-x-10 mt-10">
        {menuItems.map((item,index)=>(
            <Menucard
                key={index}
                img={item.img}
                title={item.title}
                rating={item.rating}
                price={item.price}
            />
        ))}
    </div>
    
    <div className="w-[1300px] h-auto md:h-[800px] rounded-[20px] md:rounded-[40px] bg-black mt-10 py-10 md:py-20 px-4 md:px-10 text-white mt-10">
        <div className="flex flex-col md:flex-row justify-center items-center w-full">
            <img className="h-[200px] md:h-[450px]" src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F16.png&w=2048&q=75" alt="App illustration" />
            
            <div className="w-full md:w-[700px] flex flex-col justify-center items-center md:items-start text-center md:text-left mt-6 md:mt-0 md:pl-10">
                <div className="text-[15px] md:text-[45px] font-bold">Are you Ready to Start your online Order?</div>
                <div className="text-gray-300 mt-5 text-[12px] w-[300px] md:w-full md:text-[16px]">Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now</div>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-5 mt-10">
                    <button className="flex items-center justify-center space-x-2 bg-white text-black px-6 py-3 rounded-full w-full md:w-auto hover:bg-black ">
                        <img className="h-[20px]" src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"  />
                        <span className="font-semibold hover:text-white">App store</span>
                    </button>
                    <button className="flex items-center justify-center space-x-2 bg-[#7A614D] text-black px-6 py-3 rounded-full w-full md:w-auto hover:bg-white">
                        <img className="h-[20px]" src="https://yt3.googleusercontent.com/PJh5BeCRze4_08Qp8zOtb2bV6JGLiqmmc9QIRTVeTlrVmC2828C7gw5KIOU8uk70jN__SSY5Ug=s900-c-k-c0x00ffffff-no-rj" alt="Play Store" />
                        <span className="font-semibold hover:white">Play store</span>
                    </button>
                </div></div> </div> </div>
                </div>
<div className="mt-20 md:mt-[200px]"><Openinghours/></div>
<div className="mt-40 md:mt-5"><Chefsection/></div>
<div className="mt-[100px]"> <Footer/></div>
      
        </div>
    )
}