
export default function IconCard({image,title,text}){
    return(
    <>
    <div className="  bg-gradient-to-t from-[#231c33] to-[#0e0720]  pt-5 pr-8 pb-10 border-[2px] rounded-3xl border-l-[#1d172e] border-r-[#1d172e] border-t-[#332c42] border-b-[#332c42] flex flex-col">
        
            <img className="inline-block self-start justify-start " src={image}></img>
        
        <div className="text-[#b2acc2]  pl-8 text-[15px] xl:text-[18px]">
            <h2 className="text-[#eee5ff]  font-semibold pb-4 text-[22px] xl:text-[25px]">{title}</h2>
            {text}
        </div>
    </div>
    </>
    )
}