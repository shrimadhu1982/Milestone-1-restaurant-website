import Header from "../components/header";
import Footer from "../components/footer";
import Blogcard from "../components/blogcard";
import Headerstyle from "../components/headerstyle";
export default function Blog(){
    
        
             const blogs = [
    {
      image: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F1-full.jpg&w=3840&q=75",
      date: "12 August 2024",
      author: "John Baus",
      title: "Picked up a brussels burger sprouts",
     
    },
    {
      image: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F2-full.jpg&w=3840&q=75",
      date: "13 August 2024",
      author: "Admin",
      title: "This prefabricated passive house highly",
     
    },
    {
      image: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F3-full.jpg&w=3840&q=75",
      date: "14 August 2024",
      author: "Jaun Baus",
      title: "Overcame breeding point concern has",
      
    }
  ];
       return(
        <div>
            <Header/>
            <Headerstyle title="Blog" navigation="Blog"/>
            <div className="flex flex-col items-center mt-20 mb-10  dark:bg-[#1D1D1D]">
              {blogs.map((blog,index)=>(
                <Blogcard key={index}
                title={blog.title}
                date={blog.date}
                author={blog.author}
                image={blog.image}
                />
              ))}
            </div>
            <div className="flex flex-row justify-center  space-x-4">
              <div className="h-[50px] w-[60px] rounded-xl bg-[#8B7553]"><div className="px-5 py-3 text-[20px] text-white">1</div></div>
              <div className="h-[50px] w-[60px] rounded-xl bg-[#8B7553]"><div className="px-5 py-3 text-[20px] text-white">2</div></div>
              <div className="h-[50px] w-[60px] rounded-xl bg-[#8B7553]"><div className="px-5 py-3 text-[20px] text-white">3</div></div>
              <div className="h-[50px] w-[60px] rounded-xl bg-[#8B7553]"><div className="px-5 py-3 text-[20px] text-white">4</div></div>
            </div>
             
           <div className="mt-20"><Footer/></div> 
        </div>
    
       ) ;
        
}