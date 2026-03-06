import icons from "../logo/motionarteffect-img8.png"

export default function LongBar() {
  return (
    <div className="bg-gradient-to-r from-white/15 via-white/5 to-white/15 p-[1px] rounded-2xl w-full">
      <div className="bg-[#0a0a1a]/80 backdrop-blur-xl rounded-2xl pt-5 pb-12 pl-20 pr-20 flex flex-col items-center">
        <div className="text-center pt-7 text-[#b2acc2] max-w-[420px]">
          <h2 className="text-[#eee5ff] text-[25px] font-semibold font-clash pb-5">
            Supported by All Popular Browsers
          </h2>
          Rest assured, Motion Art is designed to be compatible with all major web browsers.
        </div>
        <div className="pt-7">
          <img src={icons} />
        </div>
      </div>
    </div>
  )
}
