import React from 'react'
import { Check } from 'lucide-react';

const ViewStudentDatabase = () => {
    return (
        <div className='flex flex-col'>
            <h1 className='text-4xl font-semibold ml-5 mt-3'>Student Database</h1>
            <div className="group relative flex flex-row items-center rounded mt-2 ml-5 bg-dashboard-bg gap-2">
                <button className='bg-white px-2 py-1 rounded-md'>CSE</button>
                <button className='bg-white px-2 py-1 rounded-md'>BME</button>
                <button className='bg-white px-2 py-1 rounded-md'>MECH</button>
                <button className='bg-white px-2 py-1 rounded-md'>ECE</button>

            </div>
            <div className='ml-5 mt-4 mr-3 bg-white rounded-md h-[100%]'>
                Database Table
            </div>
        </div>
    )
}
export default ViewStudentDatabase
