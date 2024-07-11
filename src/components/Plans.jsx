import { plans } from "../contant";
import { FaTimes, FaCheck } from 'react-icons/fa';

const Plans = () => {
  return (
    <div className="px-20 py-6 w-screen mt-20 ">
        <h1 className="text-4xl xs:text-5xl sm:font-semibold mb-10 max-w-xl leading-snug">Choose a plan that fits your needs</h1>
        
        <div className="flex flex-col items-center justify-evenly gap-6 lg:flex-row md:justify-evenly">
            {
                plans.map((item,index)=>(
                    <div key={index} className="lg:bg-slate-50 lg:border-none relative border p-8 rounded-xl flex flex-col justify-between gap-6">
                        {
                            item.id===3? 
                            <div className="absolute top-0 -translate-y-1/2 right-5 h-8 w-fit p-1 px-3 font-semibold text-sm rounded-full flex items-center justify-center text-blue-800 bg-blue-100 ">Most Popular</div>
                            :""
                        }
                        <h3 className="text-3xl font-semibold tracking-wide"> {item.title} </h3>
                        <p className="font-light text-lg text-left max-w-[240px]"> {item.desc} </p>
                        {item.price?<p className="font-semibold text-2xl">{item.price}<span className="font-light text-lg">/month</span> </p>:""}
                        <p className="tracking-wide text-lg"> {item.sub} </p>
                        
                        <div className="flex flex-col gap-4">
                            {
                                item.points.map((item,index)=>(
                                    <p key={index} className="text-lg font-light tracking-wider flex items-center justify-center w-fit gap-2">
                                        {(index===0 || index===1)?<FaCheck className="text-slate-500" />:""}
                                        {(index===2 || index===3)?<FaTimes className="text-slate-500"  />:""}
                                        <span> {item} </span>
                                    </p>
                                ))
                            }
                        </div>

                        <button className={`border text-mg font-semibold tracking-wide py-3 rounded-lg hover:border-slate-700 ${item.id===3?"bg-primary text-white border-none hover:opacity-90":"text-primary"}`}>Read Docs</button>
                    
                    </div>
                ))
            }
        </div>
    
    </div>
  )
}

export default Plans;