import Header from "../components/header";
import Footer from "../components/footer";
import Openinghours from "../components/openinghours";
import Chefsection from "../components/chefsection";
import Headerstyle from "../components/headerstyle";
export default function AboutUs(){
    return(
        <div >
            <Header/>
           <Headerstyle title="About us" navigation="About us"/>
            <div className="bg-[#EEECE9] dark:bg-[#1D1D1D] w-[360px] md:w-full h-[200px] md:h-[500px] flex flex-col items-center ">
            <div className="text-[14px] md:text-[25px] text-[#8B7553] w-[360px] md:w-full flex md:justify-center p-4 ml-10 md:ml-0 md:p-0 md:mt-20 mt-10 font-serif">OUR TRUSTED 8K HAPPY PARTNER</div>
           <div className="flex flex-row justify-center  md:ml-0 md:space-x-10 md:mt-20">
            <img 
            className="h-[80px] w-[120px] md:h-[150px] md:w-[200px]" src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F1.png&w=1080&q=75"></img>
             <img 
             className="hidden md:block  h-[80px] w-[120px] md:h-[150px] md:w-[200px]" src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F2.png&w=1080&q=75" ></img>
            <img 
            className="hidden md:block h-[80px] w-[120px] md:h-[150px] md:w-[200px]" src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F4.png&w=1080&q=75"></img>
           <img 
           className="hidden md:block h-[80px] w-[120px] md:h-[150px] md:w-[200px]" src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F3.png&w=1080&q=75"></img>
           </div>
          
            </div>
            <div className=" relative flex flex-col md:flex-row w-full md:h-[800px] bg-white dark:bg-[#1D1D1D] mt-20 md:mt-40 space-x-10  p-10">
                <img className="h-[300px] w-full md:h-[500px] md:w-[400px] " src="https://restan-nextjs.vercel.app/assets/img/about/2.jpg"></img>
           <img className="hidden md:block h-[250px] w-full md:h-[500px] md:w-[350px]" src="https://restan-nextjs.vercel.app/assets/img/about/3.jpg"></img>
           <div className="relative flex flex-col w-full md:w-[800px] h-[700px] md:h-[500px]  md:absolute md:right-5 md:top-40 bg-white dark:bg-[#1D1D1D] shadow-xl p-10">
            <div className="text-[24px] md:text-[30px] text-[#8B7553] ">About us</div>
            <div className="text-[32px] md:text-[50px] text-black dark:text-white font-serif">We Invite You To Visit Our Restaurant</div>
            <div className="mt-3 text-[15px] md:w-[600px] text-[#5E6467] dark:text-white">A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time Bar opens in the center of Florence. The only bar inspired by the 1960s, it will give you a experience that you’ll have a hard time forgetting.
<div className="rounded-[10px] bg-[#8B7553] mt-6 h-[45px] md:h-[50px] w-[160px] md:w-[200px] text-center text-[18px] md:text-[20px] font-bold text-white mx-[20px] dark:hover:bg-white hover:text-black"><div className="p-2">Discover more</div></div>
</div>
            </div>
            <div className="ml-[400px] absolute top-30 right-[50px]"><img className="h-[100px] w-[250px] " src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2F2.png&w=3840&q=75"></img></div> </div>
            <div className="mt-20 md:mt-40">  <Chefsection/></div>
         <div className="mt-40 md:mt-60"><Openinghours/></div>
                   
           <div className=" mt-40 md:mt-10"><Footer/></div>            
   
        </div>
    );
}