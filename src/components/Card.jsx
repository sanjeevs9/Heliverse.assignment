

export default function Card({image,title,text}){
    return(
        <>
        <div className="bg-[#0e0720] p-8 border-[2px] rounded-3xl border-l-[#1d172e] border-r-[#1d172e] border-t-[#332c42] border-b-[#332c42] ">
            <div className="text-[#b2acc2] max-w-[500px] text-[18px]">
                <h2 className="text-[#eee5ff] text-[25px] pb-4 font-semibold">{title}</h2>
                {text}
            </div>
            <div className="pt-8">
                <img src={image}></img>
            </div>
        </div>
        </>
    )
}