
export default function IconCard({image,title,text}){
    return(
    <>
    <div className="bg-[#0e0720] pt-5 pl-8 pr-8 pb-10 border-[2px] rounded-3xl border-l-[#1d172e] border-r-[#1d172e] border-t-[#332c42] border-b-[#332c42] flex flex-col">
        <div>
            <img className=" -translate-x-8" src={image}></img>
        </div>
        <div className="text-[#b2acc2] text-[18px]">
            <h2 className="text-[#eee5ff] text-[25px] font-semibold pb-4">{title}</h2>
            {text}
        </div>
    </div>
    </>
    )
}