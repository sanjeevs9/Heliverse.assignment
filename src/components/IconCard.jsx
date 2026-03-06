export default function IconCard({ image, title, text }) {
  return (
    <div className="bg-gradient-to-br from-white/20 via-white/5 to-transparent p-[1px] rounded-2xl">
      <div className="group bg-[#0a0a1a]/80 backdrop-blur-lg bg-white/[0.03] rounded-2xl pt-5 pr-8 pb-10 flex flex-col hover:-translate-y-1 transition-all duration-500 ease-out">
        <div className="p-4 self-start transition-all duration-500 group-hover:drop-shadow-[0_0_12px_rgba(248,117,22,0.3)]">
          <img src={image} alt={title} className="inline-block" />
        </div>
        <div className="text-[#b2acc2] pl-8 text-[15px] xl:text-[18px]">
          <h2 className="text-[#eee5ff] font-clash font-semibold pb-4 text-[22px] xl:text-[25px]">
            {title}
          </h2>
          {text}
        </div>
      </div>
    </div>
  );
}
