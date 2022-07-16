import React from 'react';
import { FcInspection, FcManager } from "react-icons/fc";
import { TbApiApp } from "react-icons/tb";
import { SiCheckio } from "react-icons/si";

const Todo = () => {

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const d = new Date();
    const dayName = days[d.getDay()];


    return (
        <div className=' max-w-7xl mx-auto px-10 '>
            <FcInspection className=' text-7xl  mx-auto mt-32' />
            <h1 className=' flex items-center justify-center text-xl font-mono mt-4 font-medium text-neutral-700'>Enjoy Your {dayName} < SiCheckio className=' text-green-800  ml-3' /></h1>

            <div className=' w-2/4  flex  mx-auto mt-12'>
                <input className=' w-11/12 border-[1px]  focus:outline-none focus:border-green-800 py-1 px-3' type="text" placeholder='✍️ Add Item' />
                <button className='border-[1px]  border-l-0  w-1/12'><TbApiApp className=' mx-auto  text-xl text-green-700' /></button>
            </div>
        </div>
    );
};

export default Todo;