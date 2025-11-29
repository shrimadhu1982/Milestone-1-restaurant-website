"use client";
import Header from "../components/header";
import Footer from "../components/footer";
import Openinghours from "../components/openinghours";
import Shopcard from "../components/shopcard";
import Headerstyle from "../components/headerstyle";
export default function Shop(){
  const products=[
    { image: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F1.png&w=1080&q=75", title: "Margherita pizza", price: 12 },
    { image: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F2.png&w=1080&q=75", title: "Burger", price: 8 },
    { image: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F3.png&w=1080&q=75", title: "Grilled flank steak", price: 14 },
    { image: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F5.png&w=1080&q=75", title: "Barbeque chicken", price: 12 },
    { image: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F8.png&w=1080&q=75", title: "Vegetable roll", price: 25 },
    { image: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F7.png&w=1080&q=75", title: "Chicken shawarma", price: 18 },
    { image: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F6.png&w=1080&q=75", title: "Creamy pasta", price: 3 },
    { image: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F4.png&w=1080&q=75", title: "Submarine sandwich", price: 6 },
  ];
  
    return(
        <div>
            <Header/>
            <div className="bg-black h-[150px] md:h-[250px] w-full">
                 <Headerstyle title="Shop" navigation="Shop"/>
                <div className="h-auto md:h-[700px] w-full flex flex-col items-center mt-10 md:mt-30 bg-white dark:bg-black py-10 md:py-0">
                   <div className="flex flex-col md:flex-row md:space-x-5 md:flex-wrap justify-center space-y-6 md:space-y-10 mt-6 md:mt-10 px-4 md:px-0 ">
                  {products.map((item,index)=>(
                    <Shopcard key={index}
                    image={item.image}
                    title={item.title}
                    price={item.price}/>
                  ))}
                 </div>
             
       </div>
       <div className="mt-[600px]"><Openinghours/></div>
         <div className="mb-[1000px]" ><Footer/></div> 
         </div>
       
        </div>
    )
}