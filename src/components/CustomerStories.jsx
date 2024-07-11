import clickLogo from '../assets/asset 32.svg';
import storyImg from '../assets/asset 34.png';
import personImg from '../assets/asset 33.jpeg';
import { FaCheck, FaCode, FaMagic, FaInfinity } from 'react-icons/fa';
import { stories } from '../contant';

const CustomerStories = () => {
  return (
    <div className="px-20 py-6 w-screen mt-20 ">
        <h1 className="text-5xl sm:font-semibold mb-10">Customer stories</h1>

        <div className="border rounded-xl flex gap-5 flex-col lg:flex-row lg:items-end">
        
            <div id="info" className='flex flex-col gap-12 p-8'>
                <img src={clickLogo} alt="" className='w-fit p-1' />
                
                <h5 className='font-medium text-lg xs:text-xl leading-relaxed'>ClickUp used ToDesktop to get their desktop app in front of customer in days instead of months.</h5>
                
                <div className='flex flex-wrap gap-4 w-fit'>
                    <h4 className='border w-fit tracking-wide p-1 px-3 rounded-md font-medium border-yellow-300 bg-yellow-50 text-yellow-800 flex items-center gap-2'><FaCheck className='text-yellow-700 '/> Chromeless UI</h4>
                    <h4 className='border w-fit tracking-wide p-1 px-3 rounded-md font-medium border-yellow-300 bg-yellow-50 text-yellow-800 flex items-center gap-2'><FaCheck className='text-yellow-700 ' /> Native spellcheck</h4>
                    <h4 className='border w-fit tracking-wide p-1 px-3 rounded-md font-medium border-yellow-300 bg-yellow-50 text-yellow-800 flex items-center gap-2'><FaCheck className='text-yellow-700 ' /> Task time menubar</h4>
                    <h4 className='border w-fit tracking-wide p-1 px-3 rounded-md font-medium border-yellow-300 bg-yellow-50 text-yellow-800 flex items-center gap-2'><FaCheck className='text-yellow-700 ' /> Notification count in the dock</h4>
                    <h4 className='border w-fit tracking-wide p-1 px-3 rounded-md font-medium border-yellow-300 bg-yellow-50 text-yellow-800 flex items-center gap-2'><FaCheck className='text-yellow-700 ' /> Global hotkey to create task</h4>
                </div>
                
                <p className='font-light text-lg text-slate-500'>&ldquo;ToDesktop provide us with a <span className='text-slate-900'>polished desktop app</span> in no time. Their expert team guided us through a smooth migration from our outdated legacy app, enabling us to deliver <span className='text-slate-900'>new and improved features</span> to our customers within days.&quot;</p>

                <div className='flex gap-4'>
                    <img src={personImg} alt="" className='rounded-full w-12 h-12'/>
                    <h4>
                        <p className='font-semibold tracking-wide'>Zeb Evans</p>
                        <p className='text-slate-500 text-nowrap text-xs xs:text-base'>Founder & CEO, <span className='cursor-pointer border-b border-dotted border-slate-600 hover:border-solid'>ClickUp</span></p>
                    </h4>
                </div>
            
            </div>

            <div className=''>
                <img src={storyImg} alt="" className='pl-12' />
            </div>
        
        </div>

        <div className='mt-10  flex flex-col gap-4 lg:flex-row'>
            {
                stories.map((item,index)=>(
                    <div key={index} className='group rounded-2xl p-[1px] hover:bg-gradient-to-br hover:from-orange-200 hover:via-purple-200 hover:to-yellow-200'>
                        <div className='border w-full h-full rounded-2xl p-4 flex flex-col gap-4 group-hover: bg-gradient-to-br group-hover:from-orange-50 group-hover:via-purple-50 hover:to-yellow-50'>
                            <div className='flex items-center justify-center gap-4 w-fit'>
                                {item.id===1?
                                    <FaCode className='bg-sky-200 rounded-full p-4 text-blue-800' size={50} />
                                :""}

                                {
                                    item.id===2?
                                    <FaMagic className='bg-pink-200 rounded-full p-4 text-blue-800' size={50} />
                                    :""
                                }

                                {
                                    item.id===3?
                                    <FaInfinity className='bg-yellow-200 rounded-full p-4 text-blue-800' size={50} />
                                    :""
                                }

                                <h3 className='text-2xl font-semibold'> {item.title} </h3>
                            </div>
                            <p className='font-light text-lg'> {item.desc} </p>
                            
                            <div className='flex gap-4'>
                                <div className='flex gap-2'>
                                    <div className='overflow-hidden rounded-full w-12 h-12'><img src={item.img1} alt="" className='rounded-full scale-150' /></div>
                                    <div className='overflow-hidden rounded-full border -ml-6 z-10'><img src={item.img2}  alt="" className='rounded-full ' /></div>
                                </div>
                                <div>
                                    <h5 className='font-medium text-lg'> {item.name} </h5>
                                    <h6 className='text-slate-500 border-b border-dotted w-fit border-slate-500 hover:border-slate-800 hover:border-solid cursor-pointer'> {item.sub} </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>

    </div>
  )
}

export default CustomerStories;