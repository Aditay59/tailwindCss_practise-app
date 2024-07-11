
import rightLogo from '../assets/asset 1.svg';

// eslint-disable-next-line react/prop-types
const NavExpand = ({toggle}) => {
  return (
    <div className={`fixed z-10 inset-0 mt-[10vh] md:hidden ${!toggle?'hidden':""} transition-all duration-300 ease-in-out bg-white`}>
        <ul className="flex flex-col gap-4 py-6 px-4">
            <li className={`hover:bg-slate-100 p-2 rounded-md text-xl font-medium cursor-pointer`}>Pricing</li>
            <li className={`hover:bg-slate-100 p-2 rounded-md text-xl font-medium cursor-pointer`}>Docs</li>
            <li className={`hover:bg-slate-100 p-2 rounded-md text-xl font-medium cursor-pointer`}>Changelog</li>
            <li className={`hover:bg-slate-100 p-2 rounded-md text-xl font-medium cursor-pointer`}>Blogs</li>
            <li className={`hover:bg-slate-100 p-2 rounded-md text-xl font-medium cursor-pointer`}>Login</li>
        </ul>
        <div className='h-[1px] w-[95%] m-auto bg-slate-200'></div>
        <div className='flex items-center justify-baseline p-4 gap-3 m-2 mt-4 cursor-pointer rounded-lg hover:bg-slate-100'>
                <img src={rightLogo} alt="" />
                <span className='text-xl font-medium'>Alpha Developers</span>
        </div>
    </div>
  )
}

export default NavExpand;