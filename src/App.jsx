import Navbar from './components/Navbar'
import greenlogo from "./logo/motionarteffect-img2.png"
import redlogo from "./logo/motionarteffect-img1.png"
import Review from './components/Review'
import Wlogo from './logo/motionarteffect-img3.png'
import MagicWand from "./logo/motionarteffect-img5.png"
import SectionBox from "./logo/motionarteffect-img11.png"
import PageBox from "./logo/motionarteffect-img10.png"
import Card from './components/Card'
import ThumpsUp from "./logo/motionarteffect-img6.png"
import Moon from "./logo/motionarteffect-img7.png"
import Speed from "./logo/motionarteffect-img9.png"
import LongBar from './components/LongBar'
import IconCard from './components/IconCard'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <div className='bg-bg min-h-screen flex items-center flex-col'>
      <Navbar/>
      <div className='w-4/6'>
        <div className='w-full flex justify-between pt-10'>
            <div className='flex'>
            <img className=' size-fit' src="https://qodematrix.com/wp-content/uploads/2023/10/MotionArtEffect-logo.png"></img>
            </div>
            <div className='flex'>
              <button className='bg-white pt-2 pb-2 pl-3 pr-3 rounded-lg w-48 font-sora  text-bg hover:bg-bg hover:text-white border-2'>Purchase Now</button>
            </div>
        </div>
        <div className='grid grid-cols-4 text-white w-full  pt-16 '>
            <div className='grid col-span-1 pt-2 font-sora '>
              <div className='gap-6 flex flex-col'>
              <span>Transform Your<br /> Website</span>
              <span className='text-[#eee5ff]'>With Motion Art<br /> Effect</span>
                
              </div>
              
            </div>
            <div className='grid col-span-2'>
              <div className='font-sora text-[#eee5ff] text-[65px] font-[500]' > 
                Attract Your Visitors Attention With Colorful <span>Motion Art Effect</span>
              </div>
              <div className='text-[16px] pt-3 overflow-auto font-Outfit font-light text-[#b2acc2]'>
              Unleash the power of creativity with Motion Art for Elementor - your <br/>
              ultimate solution for seamlessly integrating captivating animations 
              into your website. 
              </div>
            </div>
            <div className='grid col-span-1 '>

            </div>
        </div>
        <div className='flex w-full flex-col items-center pt-24'>
            <div className='flex font-sora   font-semibold text-lg text-[#eee5ff]'>
            Trusted by thousands of users around the world
            </div>
            <div className='flex pt-16'>
            <div className='grid grid-cols-3 gap-60'> 
              <div className='grid col-span-1'><Review logo={greenlogo}></Review></div>
              <div className='grid col-span-1'><Review logo={redlogo}></Review></div>
              <div className='grid col-span-1'><Review logo={Wlogo}></Review></div>
            </div>
            </div>
        </div>
        <div className='w-full flex pt-32 '>
          <div className='grid grid-cols-5 w-full'> 
              <div className=' grid col-span-3 font-sora  '>
                  <h2 className='text-[#eee5ff] text-[40px]  font-semibold'>Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors</h2>
                  <div className='text-[#b2acc2]  pt-3'>Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.</div>
                  <div className='pt-7'>
                    <button className='text-white bg-blue-300 pl-6 pr-6 pt-3 pb-3 rounded-2xl font-sora text-lg flex gap-5'>
                      Purchase From Envato
                      <div className='h-4 w-3 border-[1px] mt-2'></div>
                    </button>
                  </div>
              </div>
              <div className='grid col-span-2 pl-20 justify-end'>
                <img src={MagicWand}></img>
              </div>
          </div>
        </div>
        <div className='w-full flex flex-col items-center pt-24'>
            <div className='w-7/12 text-[#eee5ff] text-[42px] text-center font-sora flex '>
           <h2>Apply On Any Section Or Enable For Whole Page</h2> 
            </div>
            <div className='pt-[60px] flex gap-5'>
              <div>
              <Card image={SectionBox} title={"Apply On Section"} text={"Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website."}></Card>
              </div>
               <div className='pt-16'> 
                <Card image={PageBox} title={"Apply On Page"} text={"Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation."}></Card>
               </div>
            </div>
        </div>
        <div className='w-full pt-36'>
            <LongBar></LongBar>
        </div>
        <div className='flex pt-24 flex-col items-center'> 
            <div className='max-w-[460px] text-[#eee5ff] text-[40px] text-center'>
            An All-Round Plugin With Powerful Features
            </div>
            <div className='max-w-[500px] text-[#b2acc2] text-[16px] text-center pt-5'>
            Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.
            </div>
        </div>
        <div className='flex pt-16'>
          <div className='grid grid-cols-3 gap-5'>
            <div className='grid col-span-1'>
              <IconCard image={Speed} title={"Light Weight"} text={"Motion Art for Elementor is designed to be lightweight."}></IconCard>
            </div>
            <div className='grid col-span-1'>
              <IconCard image={ThumpsUp} title={"100% Responsive"} text={"Create a consistent visual experience across all devices."}></IconCard>
            </div>
            <div className='grid col-span-1'>
              <IconCard image={Moon} title={"User Friendly Interface"} text={"Ensure a smooth experience for both applicants and administrators."}></IconCard>
            </div>
          </div>
        </div>
        
      </div>
      <div className='w-full pt-32'>
          <Footer/>
        </div>
    </div>
    </>
  )
}

export default App
