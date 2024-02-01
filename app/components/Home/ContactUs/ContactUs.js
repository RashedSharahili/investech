import { Tajawal } from 'next/font/google'
import TextArea from './InputComponents/TextArea';
import TextFeild from './InputComponents/TextFeild';
import Selection from './InputComponents/Selection'

const tajawal = Tajawal({
  variable: '--font-tajawal',
  weight: "400",
  subsets: ["arabic"]
});


export default function ContactUs() {
  return(
    <>
    <section id="contactus">
      <div className="flex flex-col w-full max-w-3xl px-4 mx-auto mt-24 gap-y-6 text-center ">
        <h1 className={`text-5xl text-system-cyan mb-7 ${tajawal.className}`} style={{ fontFamily: "__Tajawal_9e1517" }}>تواصل معنا</h1>
        <form className='flex flex-col gap-4'>
          {/* input form */}
          <Selection />
          <TextFeild Holders={"عنوان الرسالة"}/>
          <TextFeild Holders={"الإيميل"}/>
          <TextArea 
          labelcolor= "text-system-green"
          label="الاسم"
          />
          {/* button form */}
          <button className="bg-system-cyan text-white text-center w-44 h-16 rounded-2xl mx-auto" type = "submit">ارسال</button>
        </form>
      </div>
    </section>
    </>
  )
}