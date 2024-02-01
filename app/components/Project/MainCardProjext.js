import Image from "next/image"
import Test from "../../../public/next.svg"
import Calander from '../../../public/assets/projects/ProjectCard/assets/Calander.svg'
import Arrow from '../../../public/assets/projects/ProjectCard/assets/Arrow.svg'
export default function MainCardProjext(props) {
  return (
    <>
      <div className="flex justify-center">
        <a href="#">
          <div className="w-fit h-full flex rounded-2xl justify-between items-start p-2 text-black shadow-md">
            <div className=" inline-flex flex-col justify-evenly w-[298px] h-[420px]">
              <Image src={props.cardImage} className="bg-[#EEE] rounded-2xl border border-[#E2E2E2] h-auto" />
              <div className="flex justify-between"><h1 className=" text-2xl font-bold">إنفيستك</h1> <div>٤.٥٥ ⭐</div></div>
              <div className="flex"> <Image src={Calander} className="ml-1" /> أغسطس ٨ , ٢٠٢٣ </div>
              <p>توفر المنصة فرصة للشركات للتواصل مع الطلاب والتعرف على قدراتهم ومهاراتهم وتوفر فرصة للطلاب</p>
              <div className="flex justify-end">
              <Image src={Arrow}/>
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
