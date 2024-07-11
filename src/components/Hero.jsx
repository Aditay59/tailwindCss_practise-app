import { FaArrowRight } from "react-icons/fa";
import { FaHandBackFist, FaLaptop, FaFileCode } from "react-icons/fa6";
// import LogoSection from "./LogoSection"; min-h-[calc(100vh-10vh)]

const Hero = () => {
  return (
    <div className="w-screen  mt-[10vh] py-12 px-8 bg-gradient-to-b from-purple-100 via-orange-50 to to-transparent flex justify-center flex-col">

        <div className="flex flex-col items-center justify-start p-2 gap-10 sm:justify-center text-center">
            
            <div className="flex gap-2 items-center justify-start px-3 py-1 border border-yellow-300 bg-yellow-50 rounded-lg w-fit shadow-md cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out group ">
                <div className="h-2 w-2 bg-yellow-300 rounded-full border border-yellow-600" />
                <span className="font-ppns font-medium text-yellow-600">v0.21.1: <span className="text-yellow-800">Find-in-page bug fixes</span> </span>
                <FaArrowRight color="#ca8a04" className="text-yellow-600 group-hover:translate-x-1 transition-all duration-300 ease-in-out" />
            </div>

            <div className="gap-8 hidden sm:flex">
                <span className="flex gap-2 items-center justify-center text-slate-500"> <FaFileCode /> Code Optionals </span>
                <span className="flex gap-2 items-center justify-center text-slate-500"> <FaHandBackFist /> Drag & Drop Builder </span>
                <span className="flex gap-2 items-center justify-center text-slate-500"> <FaLaptop/> Windows, Mac, Linux </span>
            </div>
            
            <div>
                <h2 className="text-4xl font-semibold leading-snug tracking-wide sm:text-6xl md:leading-normal">Web app to desktop app in minutes</h2>
            </div>

            <div>
                <h4 className="text-xl  font-medium text-slate-600 md:text-2xl">Take your web app codebase and transform in into a cross platform desktop app with native functionality.</h4>
            </div>

            <div className="flex flex-col w-full gap-2 sm:flex-row sm:justify-center">
                <button className="bg-primary py-3 px-8 text-white font-semibold tracking-wide rounded-lg cursor-pointer shadow-sm hover:bg-opacity-90 transition-all duration-200 ease-in-out">Download Now</button>
                <button className="border-[3px] bg-white border-slate-300 hover:border-slate-500 p-3 rounded-lg font-semibold tracking-wide cursor-pointer transition-all duration-200 ease-in-out">Read Docs</button>
            </div>
        
        </div>
    </div>
  )
}

export default Hero;