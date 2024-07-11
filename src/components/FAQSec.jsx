import { FaAngleDown } from 'react-icons/fa';
import { faq } from '../contant';
import { useEffect, useState } from 'react';

const FAQSec = () => {

  const [faqItems, setFaqItems] = useState(faq);

  const handleClick = (id) =>{
    setFaqItems(faqItems.map(item=>
      item.id === id? {...item, isOpen: !item.isOpen}: item
    ));
  }

  useEffect(()=>{
  },[faqItems]);

  return (
    <div className="px-20 py-6 w-screen mt-20">
        
        <h1 className="text-5xl sm:font-semibold mb-10 ">FAQs</h1>

        <div className='flex flex-col gap-4  lg:grid lg:grid-cols-2'>
            {
              faqItems.map((item,index)=>(
                <div key={index} onClick={()=>{handleClick(item.id)}} className='cursor-pointer flex h-fit flex-col gap-4 border bg-slate-50 p-6 rounded-xl'>
                  <div className='flex items-start justify-between'>
                    <h1 className='text-xl font-semibold'> {item.ques} </h1>
                    <FaAngleDown size={20} className={`${item.isOpen?"transform rotate-180 transition-all duration-500 ease-in-out":"transform rotate-0 transition-all duration-500 ease-in-out"}`} />
                  </div>
                  <p className={`font-light text-lg ${!item.isOpen?"hidden":""} transition-all duration-500 ease-in-out`}> {item.ans} </p>
                </div>
              ))
            }
        </div>

    </div>
  )
}

export default FAQSec;