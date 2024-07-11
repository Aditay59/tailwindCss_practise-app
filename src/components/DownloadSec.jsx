import { FaDownload } from "react-icons/fa";
import storyImg from '../assets/asset 34.png';

const DownloadSec = () => {
  return (
    <div className="px-20 py-6 w-screen ">

        <div className="bg-black text-white rounded-2xl flex flex-col lg:flex-row lg:items-end overflow-hidden">
            
            <div className="flex flex-col gap-4 p-8 mb-4">
                <h4 className="font-medium text-slate-400 text-lg">READY TO START BUILDING?</h4>
                <h1 className=" text-2xl sm:text-4xl text-white leading-snug">Create your desktop app for free<sup>*</sup></h1>
                <p className="font-light text-slate-400 text-lg">ToDesktop Builder will take you step-by-step through the process of creating your first desktop app in just a few minutes.</p>
                <button className="bg-primary rounded-lg flex items-center justify-center gap-3 font-medium text-xs sm:text-lg py-3 hover:opacity-90"> <FaDownload /> Download AlphaApp Builder </button>
                <p className="text-slate-400 text-xs leading-tight italic">*You can create a desktop app and run it on your computer for free. You will only be charged if you want to create a distributable app for your customers.</p>
            </div>
            
            <div className="flex items-end justify-end">
                <img src={storyImg} alt="" className="pl-12 md:w-3/4" />
            </div>

        </div>

        

    </div>
  )
}

export default DownloadSec;