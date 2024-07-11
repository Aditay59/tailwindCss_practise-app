import { FaGithub, FaTwitter } from "react-icons/fa";
import appLogo from '../assets/asset 0.png';
import fLogo from '../assets/asset 37.svg';
const Footer = () => {
  return (
    <div className="py-6 px-20 text-center w-screen flex flex-col gap-4">
       
        <div className="border bg-slate-50 rounded-lg p-8 flex flex-col items-center justify-center gap-6 md:flex-row-reverse md:items-center md:justify-between">
            
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row-reverse">
                <h3 className="font-light tracking-wide cursor-pointer">Documentation</h3>
            
                <div className="flex gap-4">
                    <FaTwitter size={20} className="cursor-pointer text-slate-500" />
                    <FaGithub size={20} className="cursor-pointer text-slate-500" />
                </div>
            
            </div>

                <div className="flex items-center justify-center gap-2">
                    <img src={appLogo} alt="" />
                    <a href="#"> <h4 className="font-semibold text-lg">AlphaDev</h4> </a>
                </div>

        </div>

        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-center gap-2">
                <img src={fLogo} alt="" width={20} height={20} className="rounded-full object-contain"/>
                <p className="font-light">AlphaDev & co Company</p>
            </div>
            <p className="text-slate-500 text-sm">© 2024 AlphaDev & co. All rights reserved</p>
        </div>

    </div>
  )
}

export default Footer;