import React from 'react'
import ServiceCard from './ServiceCard'
import { Tajawal } from 'next/font/google'
import Opportunities from '../../../../public/assets/services/clarity_employee_group_solid.svg'
import Profit from '../../../../public/assets/services/grommet_icons_money.svg'
import Communication from '../../../../public/assets/services/bxs_chat.svg'

const tajawal = Tajawal({
    variable: '--font-tajawal',
    weight: "400",
    subsets: ["arabic"]
});

function Services() {
    return (
        <>
        <section id="services" className="mx-24">
            <div className="mt-24">
                <div className='flex flex-col items-center w-full'>
                    <h1 className={`text-5xl font-bold text-center text-system-cyan ${tajawal.className}`}>خدماتنا</h1>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className='flex flex-wrap lg:justify-center w-full gap-24'>
                        <ServiceCard icon={Opportunities} title="توفير فرص العمل" body="تساعد المنصة أصحاب المشاريع على إيجاد فرص عمل لتطوير مشاريعهم ودعم نموها" />
                        <ServiceCard icon={Profit} title="تحقيق الربح المالي" body="يمكن لأصحاب المشاريع تحقيق عوائد مالية من خلال عرض مشاريعهم" />
                        <ServiceCard icon={Communication} title="تسهيل التواصل" body="تتيح المنصة التواصل بين أصحاب المشاريع والمستثمرين مما يسهل عملية الاستثمار في المشاريع" />
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Services