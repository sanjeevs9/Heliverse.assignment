
export default function IconCard({image,title,text}){
    return(
    <>
    <div className="bg-[#0e0720] pt-5 pr-8 pb-10 border-[2px] rounded-3xl border-l-[#1d172e] border-r-[#1d172e] border-t-[#332c42] border-b-[#332c42] flex flex-col">
        
            <img className="inline-block self-start justify-start " src={image}></img>
        
        <div className="text-[#b2acc2] text-[18px] pl-8">
            <h2 className="text-[#eee5ff] text-[25px] font-semibold pb-4">{title}</h2>
            {text}
        </div>
    </div>
    </>
    )
}