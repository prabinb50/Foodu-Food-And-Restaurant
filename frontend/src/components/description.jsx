import { Check } from 'lucide-react'
import React from 'react'

export default function Description() {
    return (
        <div className=''>
            <p className='opacity-65'>
                There is immense scope for organic production of vegetable crops in India since the agricultural sector has enormous organic resources like crop residues, livestock and other bio-products from agro industries. Organic farming is growing at a rapid pace among Indian farmers and entrepreneurs, particularly in rainfed and hilly areas where fertilizer consumption is less than 25 kg/ha/year [13].
            </p>

            <ul className='list-none space-y-2 pt-8 font-semibold '>
                <li className='flex items-center gap-2'>
                    <Check size={16} className='text-green-500' />
                    <span className='opacity-65'>Status of organic vegetable production</span>
                </li>
                <li className='flex items-center gap-2'>
                    <Check size={16} className='text-green-500' />
                    <span className='opacity-65'>Feasibility of organic practices</span>
                </li>
                <li className='flex items-center gap-2'>
                    <Check size={16} className='text-green-500' />
                    <span className='opacity-65'>Sustainability of organic farming</span>
                </li>
                <li className='flex items-center gap-2'>
                    <Check size={16} className='text-green-500' />
                    <span className='opacity-65'>Organic certification</span>
                </li>
                <li className='flex items-center gap-2'>
                    <Check size={16} className='text-green-500' />
                    <span className='opacity-65'>Prospects and constraints of organic vegetable production</span>
                </li>
            </ul>
        </div>
    )
}
