export default function Shopcard({image,title,price}){
    return(
         
         <div className="w-full md:w-[300px] h-[400px] md:h-[500px] rounded-[15px] md:rounded-[20px] flex flex-col border-2 border-amber-100 items-center shadow-lg md:shadow-2xl shadow-gray-300 p-4 md:p-0">
            <img className="h-[150px] md:h-[200px] w-[150px] md:w-[200px] mt-2 object-contain" src={image}></img>
             <div className="text-[20px] md:text-[25px] font-bold text-black mt-6 md:mt-10 text-center dark:text-white">{title}</div>
             <div className="text-black text-[16px] md:text-[20px] mt-2 md:mt-0 dark:text-white">Price:{price}</div>
             <div className="rounded-[40px] w-full md:w-[200px] h-[35px] md:h-[40px] border-2 border-black bg-white mt-4 md:mt-5 flex items-center justify-center cursor-pointer hover:bg-yellow-300">
                <div onClick={() => alert("Added Successfully!")} className="text-[16px] md:text-[20px] text-black" >Add to cart</div></div>
        </div>
    );
}