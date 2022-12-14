import React, { useState, useEffect } from 'react';
import  ReactDom from 'react-dom/client';

export const TableNav = (props) => {
  return(
    <div className='flex items-center justify-between p-6 px-0 min-w-0 break-words w-full shadow-lg
    bg-white'>
    <div className='rounded-t mb-0 px-4 py-3 border-0'>
      <div className='flex flex-wrap items-center'>
        <div className='relative w-full px-4 max-w-full flex-grow flex-1 '>
          <h3 className='font-extrabold md:text-4xl sm:text-xl text-black'>Cafe Internet Speeds</h3>
        </div>
      </div>
    </div>
    <div className="flex items-center justify-evenly">
      <form className="flex items-center">
        <label form="simple-search" className="sr-only">Search</label>
        <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
            </div>
            <input type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
            autoComplete="off"
            required
            onChange={props.searchFunc}
            />
        </div>
      </form>
    </div>
    <div className="lg:pl-40 lg:pr-10 pl-10 pr-3 space-x-8 items-center">
      <button className="bg-pink-700 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">New Entry</button>
    </div>
  </div>
  )
}

export default TableNav
