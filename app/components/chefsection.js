export default function Chefsection(){
    const chefs=[
{
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStb8aXrCrjdndki_-6mery4Bij_YfQr2LsBg&s",
    name:"Alexander Petlo",
    role:"Assistant chef",
},
{
    img:"https://m.media-amazon.com/images/I/61v527DUs1L.jpg",
    name:"Mendia Juxef",
    role:"Burger king",
},
{
    img:"https://www.maidwale.com/images/service/cook-_1_.webp",
    name:"Petro William",
    role:"Main chef",
},
    ];
    return(
        
        <div>
    <div className="bg-[#EDEBE9] dark:bg-[#1D1D1D]  w-[360px] md:w-full h-auto md:h-[800px] ">
    <div className="h-auto md:h-[400px] w-[360px] md:w-full flex flex-col items-center py-10 md:py-0">
    <div className="text-[20px] md:text-[30px] text-yellow-800 mt-10 md:mt-20">Master chefs </div>
    <div className="text-[32px] md:text-[50px] text-black dark:text-white font-serif text-center px-4 md:px-0">Meet Our Special Chefs</div>
    <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-20 mt-10 md:mt-20 px-4 md:px-0">
    {chefs.map((chef,index)=>(<div key={index}
    className="rounded-[100px] md:rounded-[200px] w-[250px] md:w-[350px] h-[350px] md:h-[350px]  border-2 border-black dark:border-white bg-[#EDEBE9] dark:bg-[#1D1D1D] p-4 md:p-6 flex flex-col items-center">
    <img className=" rounded-[200px] md:rounded-[200px] w-[200px] md:w-[300px] h-[200px] md:h-[300px] object-cover" src={chef.img}></img>
    <div className="h-[60px] md:h-[80px] w-[200px] md:w-[300px] bg-[#8B7553] -mt-1 flex flex-col items-center justify-center">
    <div className="text-[20px] md:text-[30px] text-white font-serif text-center">{chef.name}</div> 
    <div className="text-[14px] md:text-[20px] text-white font-serif">{chef.role}</div></div></div>))}
    </div>
    </div>
    </div>
    </div>);}





                      