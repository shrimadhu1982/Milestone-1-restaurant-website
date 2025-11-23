export default function Menucard({img,title,rating,price}){
    return(
        <div className="w-full md:w-[360px] h-[500px] md:h-[500px] bg-white dark:bg-[#1D1D1D] rounded-[20px] md:rounded-[40px] border-1 border-gray-500 shadow-lg md:shadow-xl">
        <div className="relative">
            <img className="w-full h-[180px] md:h-[230px] rounded-t-[20px] md:rounded-t-[40px] " src={img}></img>
            <div className="absolute bottom-0 w-[160px] md:w-[200px] h-[40px] md:h-[50px] bg-white dark:bg-[#1D1D1D] rounded-t-xl shadow-md px-3 md:px-4 py-1 md:py-2 flex items-center space-x-2 md:space-x-3">
                <span className="text-black dark:text-white text-[14px] md:text-[18px] ">{rating} </span>
                <span className="text-amber-800 font-bold text-[13px] md:text-[15px] dark:text-amber-500">${price}</span>
                
            </div>
        </div>
        <div className="px-4 md:px-6 pt-6 md:pt-10 pb-4 md:pb-6 text-center">
            <div className="text-[22px] md:text-[30px] font-serif text-start ">{title}</div>
            <div className="text-gray-500 text-[13px] md:text-[15px] mt-1 md:mt-2 dark:text-white text-start">4 Chicken Legs • Chili Sauce • Soft Drinks</div>
            <button className="mt-4 md:mt-6 border-2 h-[40px] md:h-[50px] w-full md:w-[300px] border-black text-black dark:text-white dark:bg-[#7A614D] font-serif py-1 md:py-2 px-4 md:px-6 rounded-full text-[14px] md:text-[16px] hover:bg-[#7A614D]">Add to cart</button>
        </div>
    </div>
    )
    
}