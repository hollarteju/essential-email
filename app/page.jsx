import Image from "next/image";
import style from "./home.module.css";
import NavBar from "../componenets/NavBar";
import Link from 'next/link';
import { IoMdArrowDropright } from 'react-icons/io';


export default function Home() {  
  return (
    <div class="w-full relative overflow-hidden  ">
      <NavBar/>
      <div className={`${style.headlineContainer} w-full h-[1354px] relative grid grid-cols-4 bg-gray-300 gap[20px]`}>
        
        <div className={`${style.headline} text-white h-full col-span-3 lg:px-[10%] pt-[15rem]`}>
          <p className={`w-[517px] text-[32px] font-semibold`}>
                Lorem ipsum dolor sit amet consectetur. Elit ut 
                turpis rhoncus mauris adipiscing curabitur.
          </p>
          <button class={`w-[302px] py-[25px] text-[24px] font-600 bg-[#B80C09] rounded-[10px] self-left hover:opacity-[0.7]`}>
            Get Started
          </button>
          <span className={` text-[16px] w-[250px] font-600`}>
            Lorem ipsum dolor sit amet consectetur.
          </span>
          <span className={` text-[16px] w-[250px] font-600`}>
            Lorem ipsum dolor sit amet consectetur.
          </span>
          <span className={` text-[16px] w-[250px] font-600`}>
            Lorem ipsum dolor sit amet consectetur.
          </span>
        </div>
        <div className="absolute py-6 left-[20%] bottom-[0]">
            <footer class={`${style.footer} text-[16px] font-[700] flex lg:gap-[133px] justify-center mx-auto mt-[8rem]`}>
                <div className="flex text-center items-center gap-1">
                    <span class="text-white "><Link href="#">English Language (Nig) </Link></span>
                    <i class="text-white "><IoMdArrowDropright /></i>
                </div>
                <span ><Link href="#">Help</Link></span>
                <span ><Link href="#">Terms</Link></span>
                <span ><Link href="#">Privacy</Link></span>
            </footer>
        </div>
        <div className={`${style.laptop} absolute top-[311px] h-[812px] w-[1038px] right-[0%]`}></div>
        <div class={`${style.profile} absolute top-[257px] h-[420px] w-[420px] left-[822px]`}></div>
        <div class={`${style.group} absolute top-[654px] h-[221px] w-[245px] left-[770px]`}></div>
      </div>
        
    </div>
      );
}
