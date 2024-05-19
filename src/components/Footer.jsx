

export default function Footer(){
    return (
        <>
        <div className="w-vh bg-gradient-to-r from-custom-orange to-custom-blue  flex flex-col lg:flex-row  justify- p-4 gap-3 lg:gap-0  justify-between xl:pr-20 xl:pl-20 2xl:pr-40 2xl:pl-40 3xl:pr-56 3xl:pl-56 4xl:pr-72 4xl:pl-72">
            
            <div className="flex gap-8 font-sora text-[#b2acc2] lg:font-semibold text-sm justify-center font-base lg:order-last"> 
                <div className="mt-2">
                    <button>
                        Document
                    </button>
                </div>
                <div className="mt-2">
                <button>
                    Support
                </button>

                </div>
            </div>
            <div className="font-sora   text-sm mt-2 flex text-[#b2acc2] lg:order-first justify-center">
            © 2023 Copywrite. All rights reserved by QodeMatrix
            </div>
            
            
        </div>
        </>
    )
}