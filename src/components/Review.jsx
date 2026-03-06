import stars from "../logo/motionarteffect-img4.png"

export default function Review({ logo }) {
  return (
    <div className="bg-gradient-to-br from-white/10 to-transparent p-[1px] rounded-2xl w-fit">
      <div className="bg-white/[0.04] backdrop-blur-sm rounded-2xl p-4 px-6 hover:bg-white/[0.08] transition-all duration-300 flex gap-2">
        <div>
          <img src={logo} />
        </div>
        <div className="text-white pt-5 gap-4 flex flex-col">
          <img className="flex size-fit h-[20px]" src={stars} />
          <div className="font-sora text-sm font-light">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-custom-orange to-custom-blue font-bold">
              4.5
            </span>{" "}
            Score, 9 Reviews
          </div>
        </div>
      </div>
    </div>
  )
}
