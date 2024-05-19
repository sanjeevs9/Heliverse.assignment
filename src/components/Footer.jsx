

export default function Footer(){
    return (
        <>
        <div className="w-full bg-gradient-to-r from-custom-orange to-custom-blue  flex justify-center">
            <div className="min-w-[1300px] flex  justify-between p-4">
            <div className="font-sora text-white font-light  text-sm mt-2">
            © 2023 Copywrite. All rights reserved by QodeMatrix
            </div>
            <div className="flex gap-8 font-sora text-[#b2acc2] font-semibold text-sm"> 
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
            </div>
        </div>
        </>
    )
}