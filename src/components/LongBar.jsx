import icons from "../logo/motionarteffect-img8.png"

export default function LongBar(){
    return (
        <>
        <div className="w-full bg-gradient-to-t from-[#231c33] to-[#0e0720] pt-5 pb-12 pl-20 pr-20 border-[2px]  rounded-3xl border-l-[#1d172e] border-r-[#1d172e] border-t-[#332c42] border-b-[#332c42]  flex flex-col items-center">
            <div className=" text-center pt-7 text-[#b2acc2] max-w-[420px] ">
                <h2 className="text-[#eee5ff]  text-[25px] font-semibold pb-5">Supported by All Popular Browsers</h2>
                Rest assured, Motion Art is designed to be compatible with all major web browsers.
            </div>
            <div className="pt-7">
                <img src={icons}></img>
            </div>
        </div>
        </>
    )
}