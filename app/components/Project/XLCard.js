import Image from "next/image"
import Test from "../../../public/next.svg"
import Calander from '../../../public/assets/projects/ProjectCard/assets/Calander.svg'
import Arrow from '../../../public/assets/projects/ProjectCard/assets/Arrow.svg'




export default function XLCard(props) {
  return (
    <>
        <div className="bg-[#FFF]  w-full flex rounded-[15px]  border border-[#E2E2E2] p-2 shadow-md">
          <div className=" h-full w-full text-black grid grid-cols-1 justify-center items-center">
            <div className=" flex items-center justify-between w-full gap-6">
              <a href="#" className=" w-[367px] h-[213px]">
                <Image src={props.cardImage} className="bg-[#EEE] rounded-2xl border border-[#E2E2E2] w-[367px] h-[213px]" />
              </a>
              <div className="flex flex-col gap-[24px] w-full">
                <div className="flex justify-between"><h1 className=" text-2xl font-bold">إنفيستك</h1> <div>٤.٥٥ ⭐</div></div>
                <div className="flex"> <Image src={Calander} className="ml-1" /> أغسطس ٨ , ٢٠٢٣ </div>
                <p>توفر المنصة فرصة للشركات للتواصل مع الطلاب والتعرف على قدراتهم ومهاراتهم و توفر فرصة للطلاب توفر المنصة فرصة للشركات للتواصل مع الطلاب والتعرف على قدراتهم ومهاراتهم</p>
                <div className="flex justify-end">
                </div>
              </div>
            </div>
          </div>
          <div className="flex  items-end">
            <a href="#">
              <Image src={Arrow} />
            </a>
          </div>
        </div>
    </>
  );
}



