import React, { useState } from 'react';
import { FcInspection, FcDeleteDatabase } from "react-icons/fc";
import { TbApiApp } from "react-icons/tb";
import { TbArrowForward } from "react-icons/tb";
import { RiDeleteBin4Line } from "react-icons/ri";
import { SiCheckio } from "react-icons/si";
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, removeTodo } from '../actions';
import { CgPlayListRemove } from "react-icons/cg";

const Todo = () => {

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const d = new Date();
    const dayName = days[d.getDay()];

    // const [inputVlue, setinputValue] = useState('')
    const list = useSelector((state) => state.todoReducer.list)
    const dispatch = useDispatch()



    console.log(list);
    const inputOnSubmit = e => {
        e.preventDefault()

        const inputData = e.target.myInput.value
        dispatch(addTodo(inputData))
        // setinputValue(e.target.myInput.value)

        e.target.myInput.value = ''
    }

    return (
        <div className=' max-w-7xl mx-auto px-10 '>
            <FcInspection className=' text-7xl  mx-auto mt-32' />
            <h1 className=' flex items-center justify-center text-xl font-mono mt-4 font-medium text-neutral-700'>Enjoy Your {dayName} < SiCheckio className=' text-green-800  ml-3' /></h1>

            <div >
                <form onSubmit={inputOnSubmit} className=' w-2/4  flex  mx-auto mt-12'>

                    <input className=' w-11/12 border-[1px]  focus:outline-none focus:border-green-800 py-1 px-3' type="text" name='myInput' placeholder='✍️ Add Item' />

                    <button type='submit' className='border-[1px]  border-l-0  w-1/12'><TbApiApp className=' mx-auto  text-xl text-green-700' /></button>

                </form>
            </div>

            <div >
                {
                    list.map((todo) => {
                        return (
                            <div key={todo.id} className=' mt-6  flex items-center justify-between w-2/4 mx-auto shadow-md border-[1px] px-2'>
                                <div className='w-11/12 h-full  flex items-center py-1 '>
                                    <TbArrowForward className=' text-xl mr-4 text-green-800' />
                                    <h1 className=' font-semibold text-md text-gray-700'>{todo.data}</h1>
                                </div>
                                <button
                                    onClick={() => dispatch(deleteTodo(todo.id))}
                                    className='py-[5px] text-red-700 w-1/12 '><RiDeleteBin4Line className=' text-xl  mx-auto' /></button>
                            </div>
                        )
                    })
                }


            </div>

            <dir className='mt-8  w-2/4 mx-auto flex justify-end'>
                <button className='flex items-center bg-red-100 text-md px-4 rounded text-gray-700 ' onClick={() => dispatch(removeTodo())}>Clear All <CgPlayListRemove className=' ml-2 text-xl mt-1' /></button>
            </dir>

        </div>
    );
};

export default Todo;