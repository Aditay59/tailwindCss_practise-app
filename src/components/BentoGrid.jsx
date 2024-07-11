import {details} from '../contant';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger);

const BentoGrid = () => {

    useGSAP(()=>{
        gsap.timeline({
            scrollTrigger: {
                trigger: "#trggr",
                start: "bottom 80%",
                scrub: 1,
            }
        }).to("#para",{
            x: "10",
            duration: 2,
            ease: "slow",
        })
    },[])

  return (
    <div className="px-20 py-6 w-screen mt-20">
        
        <h1 className=' text-4xl xs:text-5xl sm:font-semibold mb-10 max-w-2xl leading-snug'>TailwindCss handles the details</h1>

        <div id='trggr' className='flex flex-col gap-6 lg:grid lg:grid-cols-3' style={{gridAutoRows:"96px"}}>

            {
                details.map((item,index)=>(
                    <div key={index} className={` ${(item.id===1 || item.id===3)?'row-start-1 row-end-3':''} ${item.id===2?"row-start-1 row-end-4":''} ${(item.id===4?"row-start-3 row-end-6":'')} ${item.id===5?"row-start-4 row-end-6":''} ${item.id===6?"row-start-3 row-end-6":""} group flex bg-slate-100 items-center justify-center rounded-2xl p-[1px] hover:bg-gradient-to-br hover:from-orange-200 hover:via-purple-200 hover:to-yellow-200`} > 
                        <div className='w-full h-full bg-slate-50 flex flex-col items-center justify-center gap-4 p-6 text-center rounded-2xl group-hover: bg-gradient-to-br group-hover:from-orange-100 group-hover:via-purple-100 hover:to-yellow-50'>
                            <h4 className='text-2xl font-medium font-ppns'> {item.title} </h4>
                            {item.desc? <p className='text-lg font-light'> {item.desc} </p>:""}
                            <img src={item.img} alt="" />
                        </div>
                    </div>
                ))
            }

        </div>

        <div className='border rounded-lg w-full py-8 mt-20 overflow-hidden'>
            <p id='para' className='flex gap-8 text-nowrap tracking-wider font-bold text-2xl -translate-x-3/4'>
                <span>Trays</span>
                <span className='font-bold text-3xl'>·</span>
                <span>Deep Linking</span>
                <span className='font-bold text-3xl'>·</span>
                <span>Download Analytics</span>
                <span className='font-bold text-3xl'>·</span>
                <span>Multi-window support</span>
                <span className='font-bold text-3xl'>·</span>
                <span>Launch at start</span>
                <span className='font-bold text-3xl'>·</span>
                <span>Custom Menus</span>
                <span className='font-bold text-3xl'>·</span>
                <span>Offline support</span>
                <span className='font-bold text-3xl'>·</span>
                <span>Good Signing</span>
            </p>
        </div>

    </div>
  )
}

export default BentoGrid; 