import React from 'react';

export default function AdditionalInformation() {
    return (
        <div className='pt-2 sm:pt-3 md:pt-5 overflow-x-auto'>
            <table className='table-auto w-full border-collapse border border-gray-300 text-sm sm:text-base'>
                <tbody>
                    <tr className='border-b border-gray-300'>
                        <td className='font-bold py-3 sm:py-4 px-3 sm:px-4 whitespace-nowrap'>Weight</td>
                        <td className='py-3 sm:py-4 px-3 sm:px-4'>240 Ton</td>
                    </tr>
                    <tr className='border-b border-gray-300'>
                        <td className='font-bold py-3 sm:py-4 px-3 sm:px-4 whitespace-nowrap'>Dimensions</td>
                        <td className='py-3 sm:py-4 px-3 sm:px-4'>20 × 30 × 40 cm</td>
                    </tr>
                    <tr>
                        <td className='font-bold py-3 sm:py-4 px-3 sm:px-4 whitespace-nowrap'>Colors</td>
                        <td className='py-3 sm:py-4 px-3 sm:px-4'>Black, Blue, Green</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}