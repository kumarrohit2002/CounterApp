import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/slices/CounterSlice';

export const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className="flex gap-x-8 w-[500px] mt-64">
            <button onClick={() => dispatch(increment())} class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-2xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Increment
                </span>
            </button>
            <br />
            <div className="text-red-500 text-5xl font-bold">
                {count}
            </div>
            <button onClick={() => dispatch(decrement())} class="ml-3 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-2xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                decrement
                </span>
            </button>
        </div>
    )
}
export default Counter;
