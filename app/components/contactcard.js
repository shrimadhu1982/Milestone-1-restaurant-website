"use client";

export default function ContactCards() {
  const cards = [
    {
      title: "Hotline",
      value: "+91 664634647",
      image: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Fphone.png&w=640&q=75",
    },
    {
      title: "Our Location",
      value: "55 main street, The yrand avenue 2nd Block, New york city",
      image: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Fplaceholder.png&w=640&q=75",
    },
    {
      title: "Official Email",
      value: "info@restan.com",
      image: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Femail.png&w=640&q=75",
    },
  ];

  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 py-10">

      {cards.map((item, index) => (
        <div
          key={index}
          className="w-[300px] h-[220px] bg-white dark:bg-black shadow-md rounded-xl flex flex-col justify-center items-center border border-gray-200 dark:border-gray-700 p-6 "
        >
       
          <img
            src={item.image}
            alt={item.title}
            className="w-16 h-16 mb-4"
          />

         
          <h3 className="text-lg font-semibold">{item.title}</h3>

    
          <p className="text-gray-600 dark:text-gray-300 text-center mt-2 text-sm">
            {item.value}
          </p>
        </div>
      ))}

    </div>
  );
}