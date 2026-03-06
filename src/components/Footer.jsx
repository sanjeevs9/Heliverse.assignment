export default function Footer() {
  return (
    <footer>
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-custom-orange to-transparent" />
      <div className="w-full bg-[#0a0a1a]/90 backdrop-blur-xl border-t border-white/10 flex flex-col lg:flex-row p-4 gap-3 lg:gap-0 justify-between xl:pr-20 xl:pl-20 2xl:pr-40 2xl:pl-40 3xl:pr-56 3xl:pl-56 4xl:pr-72 4xl:pl-72">
        <div className="flex gap-8 font-sora text-white/60 lg:font-semibold text-sm justify-center font-base lg:order-last">
          <div className="mt-2">
            <button className="hover:text-white transition-colors duration-300">
              Document
            </button>
          </div>
          <div className="mt-2">
            <button className="hover:text-white transition-colors duration-300">
              Support
            </button>
          </div>
        </div>
        <div className="font-sora text-white/40 text-sm mt-2 flex lg:order-first justify-center">
          &copy; 2023 Copywrite. All rights reserved by QodeMatrix
        </div>
      </div>
    </footer>
  )
}
