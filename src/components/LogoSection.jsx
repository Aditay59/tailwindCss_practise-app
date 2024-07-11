import RoundArrow from '../assets/asset 2.svg';
import { imagesR1, imagesR2, imagesR3 } from '../contant';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const LogoSection = () => {

    useGSAP(()=>{
         gsap.timeline({
            scrollTrigger: {
                trigger: "#company-cont",
                start: "top center",
                end:"150% top",
                maerkers: true,
                scrub: 1,
            }
        }).to("#line1",{
            x:"120",
            duration: 1,
            ease: "power2"
        },"move").from("#line2",{
            x:"190",
            duration:1.3,
            ease: "power2",
        },"move").to("#line3",{
            x:"210",
            duration:0.6,
            ease: "power1"
        },"move")
    },[])

  return (
    <div className="w-screen overflow-hidden" id='company-cont'>
        <div className='' id='container'>
            <h2>
                <span className='flex items-center justify-center gap-2'>
                    <img className='translate-y-2' src={RoundArrow} alt="" />
                    <span className='font-medium text-2xl'>Apps powered by Us</span>
                    <img src={RoundArrow} alt="" className='translate-y-2 -scale-x-100' />
                </span>
            </h2>
            
            <div id='logo-container' className='w-full flex flex-col gap-2 mt-10'>
                
                <div id="line1" className='flex p-2 gap-4 items-center justify-center'>

                    {
                        imagesR1.map((item,index)=>(
                            <div key={index} className='border border-slate-300 min-w-24 min-h-24 p-4 rounded-xl flex flex-col items-center justify-center md:min-w-32 md:min-h-32 '>
                                <img className='w-12 h-12 md:w-16 md:h-16' src={item.src} alt="" />
                                <h6 className='text-[12px] md:text-[16px] font-semibold'> {item.text} </h6>
                            </div>
                        ))
                    }
                </div>

                <div id="line2" className='flex p-2 gap-4 items-center justify-center'>

                    {
                        imagesR2.map((item,index)=>(
                            <div key={index} className='border border-slate-300 min-w-24 min-h-24 p-4 rounded-xl flex flex-col items-center justify-center md:min-w-32 md:min-h-32'>
                                <img className='w-12 h-12 md:w-16 md:h-16' src={item.src} alt="" />
                                <h6 className='text-[12px] md:text-[16px] font-semibold'> {item.text} </h6>
                            </div>
                        ))
                    }
                </div>

                <div id="line3" className='flex md:hidden p-2 gap-4 items-center justify-center'>

                    {
                        imagesR3.map((item,index)=>(
                            <div key={index} className='border border-slate-300 min-w-24 min-h-24 p-4 rounded-xl flex flex-col items-center justify-center md:min-h-32 md:min-w-32'>
                                <img className='w-12 h-12 md:w-16 md:h-16' src={item.src} alt="" />
                                <h6 className='text-[12px] md:text-[16px] font-semibold'> {item.text} </h6>
                            </div>
                        ))
                    }
                </div>

            </div>
        
        </div>

    </div>
  )
}

export default LogoSection;