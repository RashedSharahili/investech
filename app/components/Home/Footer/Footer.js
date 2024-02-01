import React from "react";
import Image from "next/image";
import FooterSVG from '../../../../public/assets/footer/footer_svg.svg'
export default function Footer() {
  return (
    <>
    <footer>
      <Image src={FooterSVG} alt="إنفيستك" className="bg-white"/>
      </footer>
    </>
  );
}
