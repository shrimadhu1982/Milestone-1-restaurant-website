export default function Blogcard({image,date,title,author}){
return(
    <div className="h-[700px] md:h-[1000px] w-[300px] md:w-[1100px] bg-white dark:bg-[#1D1D1D] rounded-[10px] shadow-2xl dark:shadow-black mt-5 md:mt-20 mx-auto">
         <img className="h-[200px] md:h-[600px] w-full md:w-[1100px] rounded-[20px] dark:bg-[#3B3838] bg-white object-cover"
        src={image}></img>
        <div className="flex flex-col p-4 md:p-0">
            <div className="text-[14px] flex flex-row md:text-[20px] ml-2 md:ml-5 mt-4 md:mt-10">
                <div className="flex flex-row">
                    <div><img className="h-[40px] w-[40px]" src="https://cdn.prod.website-files.com/672f8ff3e0e15c741926d1fe/67a96ea5cb9a55de53b719f9_table_transparent_icon.svg"></img>
                    </div>
                    <div className="text-[#5E6467]">{date}</div></div>
                     <div className="flex flex-row">
                    <div><img className="h-[30px] w-[30px]" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSYfVfH7AympQ55nvdZHH-xvIWXFvKdDG81gjYJLUr0rm55OJtr"></img>
                    </div><div className="text-[#5E6467]">{author}</div></div>
               
            </div>
            <div className="text-[30px] md:text-[20px] font-serif md:text-[40px] mt-2 md:mt-4 ml-2 md:ml-5  ">{title}</div>
            <div className="text-[15px] md:text-[10px] md:text-[17px] mt-5 md:mt-4  ml-2 md:ml-5 text-[#5E6467] dark:text-white">Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now</div>
            <div className="rounded-[100px] w-[100px] md:w-[200px] h-[40px] md:h-[50px]  md:ml-5 bg-[#8B7553] dark:hover:bg-white  mt-4">
    <div className="text-[14px] md:text-[20px] text-white dark:hover:text-black text-center md:mx-10 mt-2 md:mt-2 ">Read more</div>
</div>
        </div>

    </div>
       
   
)
}