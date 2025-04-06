import React from 'react';

export default function AdditionalInformation() {
    return (
        <div className='pt-5'>
            <table className='table-auto w-full border-collapse border border-gray-300'>
                <tbody>
                    <tr className='border-b border-gray-300'>
                        <td className='font-bold py-4 px-4'>Weight</td>
                        <td className='py-4 px-4'>240 Ton</td>
                    </tr>
                    <tr className='border-b border-gray-300'>
                        <td className='font-bold py-4 px-4'>Dimensions</td>
                        <td className='py-4 px-4'>20 × 30 × 40 cm</td>
                    </tr>
                    <tr>
                        <td className='font-bold py-4 px-4'>Colors</td>
                        <td className='py-4 px-4'>Black, Blue, Green</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}