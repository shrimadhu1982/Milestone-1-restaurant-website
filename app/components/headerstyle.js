export default function Headerstyle({title,navigation}){
    return(
        <div className="w-full h-[400px]">
             <div className="w-[360px] h-[300px] md:h-[450px] md:w-full bg-[url('https://restan-nextjs.vercel.app/assets/img/shape/5.jpg')] bg-center bg-cover">
             
                  <div className="flex flex-col ">
                <div className="text-[28px] md:text-[40px] text-white font-semibold font-serif mt-10 md:mt-40 mx-[100px] md:mx-[650px]">{title}</div>
                <div className="text-[14px] md:text-[20px] text-white mx-[100px] md:mx-[650px]">Home:{navigation}</div></div> 
             
             
            </div>
        </div>
        
    )
}