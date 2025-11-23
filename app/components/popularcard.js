export default function Popular({img,category,title}){
return(
    <div className="relative  w-full md:w-[250px] h-[300px] md:h-[300px]">
        <img src={img}
        className="w-full h-full rounded-[30px] object-cover mt-10"></img>
        <div className="absolute bottom-4 md:bottom-6 left-4 md:left-5">
            <div className="text-[#e8c488] text-[14px] md:text-[18px]">{category}</div>
            <div className="text-white text-[18px] md:text-[22px] font-bold">{title}</div>
        </div>
    </div>
)
}