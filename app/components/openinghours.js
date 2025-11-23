export default function Openinghours(){
    return(
        <div>
             <div className=" w-full h-auto md:h-[800px] mt-10 md:mt-20">
                <div className="flex flex-col md:flex-row justify-center items-center md:relative px-4 md:px-0">
                     <div className="w-full md:w-auto">
                        <iframe className="h-[300px] md:h-[500px] w-full md:w-[800px] md:mr-[500px] rounded-lg" src="https://www.youtube.com/embed/F3zw1Gvn4Mk"></iframe>
                    </div>
                     <div className="flex flex-col w-full md:w-[700px] h-auto md:h-[500px] bg-white dark:bg-[#1D1D1D] shadow-2xl md:absolute md:right-20 md:bottom-[200px] mt-6 md:mt-0 p-6 md:p-0 -mb-20">
                    <div className="text-[24px]  md:text-[40px] mt-4 md:mt-10 ml-0 md:ml-[100px] font-serif text-center md:text-left">Opening hours</div>
                <div className="text-[16px] md:text-[20px] mt-4 md:mt-5 ml-0 md:ml-[100px] text-gray-600 text-center md:text-left dark:text-white">A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time Bar opens in the center..</div>
            <div className="text-[16px] md:text-[20px]  mt-6 md:mt-10 ml-0 md:ml-[100px] font-serif text-center md:text-left">Sunday to Tuesday------10:00 - 09:00<br></br>
                                    Wednesday to Thursday------11:30 - 10:30<br></br>
                                    Friday & Saturday------10:30 - 12:00</div>
                                   
             <div className="flex flex-row items-center justify-center md:justify-start space-x-5 mt-6 md:mt-10 ml-0 md:ml-[100px]">
            <img className="h-[50px] md:h-[70px] w-[50px] md:w-[70px]" src="https://visesham.com/wp-content/uploads/2025/09/phone-call.png"/>
            <div className="text-[16px] md:text-[20px] text-center md:text-left"><span className="text-[16px] md:text-[20px] text-gray-600">Call anytime</span><br></br>+964733-378901</div>
         </div>
                                         
                            </div>
                </div>
                           
                        </div>
        </div>
    )
}