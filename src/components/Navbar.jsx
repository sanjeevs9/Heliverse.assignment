

export default function Navbar(){
    return(
        <>
        <div className="w-full bg-[#262626] flex justify-between p-3">
            <div>
            <img className="size-fit h-5 mt-1 pl-1" src="https://public-assets.envato-static.com/assets/logos/envato_market-dde916a48af7413e54aa058fe7ae6856752fca799da4bec355f00aea904bfa19.svg"></img>
            </div>
            <div className="pr-1">
                <button className="bg-[#82b440] text-white pl-4 pr-4 pt-1 pb-1 rounded-md">Buy now</button>
            </div>
        </div>
        </>
    )
}