export default function Card({ image, title, text }) {
  return (
    <div className="bg-gradient-to-br from-white/20 via-white/5 to-transparent p-[1px] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
      <div className="group bg-[#0a0a1a]/80 backdrop-blur-xl bg-white/[0.04] rounded-2xl p-8 hover:bg-white/[0.07] transition-all duration-500 ease-out">
        <div className="text-[#b2acc2] max-w-[500px] text-[18px]">
          <h2 className="text-[#eee5ff] text-[25px] pb-4 font-clash font-semibold">
            {title}
          </h2>
          {text}
        </div>
        <div className="pt-8 overflow-hidden rounded-xl">
          <img
            src={image}
            alt={title}
            className="w-full transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          />
        </div>
      </div>
    </div>
  );
}
