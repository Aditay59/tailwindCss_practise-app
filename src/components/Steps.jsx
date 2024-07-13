
import {FaCheck} from 'react-icons/fa';
import {steps} from '../contant';

const Steps = () => {
  return (
    <div className="px-20 py-6 w-screen mt-20">
        <h1 className="text-5xl sm:font-semibold">How it works</h1>

        {
            steps.map((item,index)=>(
            <div key={index} className="rounded-xl border p-6 mt-10 flex gap-6 flex-col justify-center items-center md:flex-row">
                
                <div id='left-part' className='flex flex-col gap-6 md:w-1/2'>
                    <button className='border w-fit border-yellow-300 rounded-lg font-ppns px-2 py-1 font-semibold text-sm bg-yellow-50 text-yellow-800'> {item.sno} </button>
                    <h2 className='text-4xl font-medium'> {item.heading} </h2>
                    <p className='text-slate-600 font-medium text-lg '> {item.desc} </p>

                <div className='grid justify-items-start grid-cols-2 gap-4'>
                    {
                        item.points.map((item,index)=>(
                            <h4 key={index} className='flex items-center justify-center gap-2 cursor-pointer'>
                                <span><FaCheck className='text-slate-600'/></span> 
                                <span className='border-b border-black hover:border-slate-300 transition-all duration-300 ease-in-out'>{item}</span>
                            </h4>
                        ))
                    }
                </div>
            </div>

            <div id="img" className='pt-8'>
                <img src={item.img} alt="" />
            </div>
        
        </div>
    
            ))
        }
        
        
    </div>
  )
}

export default Steps;
