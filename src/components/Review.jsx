import stars from "../logo/motionarteffect-img4.png"

export default function Review({logo}){
    return(
        <>
        <div className="flex gap-2 w-fit">
            <div>
                <img src={logo}></img>
            </div>
            <div className="text-white pt-5 gap-4 flex flex-col">
                <img className="flex size-fit h-[20px]" src={stars}></img>
                <div className="font-sora text-sm font-light  ">
                    <span className="font-bold">  4.5 </span>Score, 9 Reviews
                </div>
            </div>
        </div>
        </>
    )
}