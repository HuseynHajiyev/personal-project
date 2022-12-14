import React, { useState, useEffect } from 'react';
import  ReactDom from 'react-dom/client';

export const PlacesListWrapper = (props) => {
  const thClass = "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left bg-pink-800 text-pink-300 border-pink-700"
  return(
    <div className= 'w-full mb-12 md:table-fixed overflow-auto'>
      {props.nav}
      <div className='block w-full overflow-x-auto'>
        <table className='items-center w-full bg-pink-900 text-white font-normal border-collapse rounded-b'>
          <thead>
            <tr>
              <th className={thClass}>Venue Name</th>
              <th className={thClass}>City</th>
              <th className={thClass}>Average Download Speed</th>
              <th className={thClass}>Units of Measurement</th>
              <th className={thClass}>Number of Measurements</th>
            </tr>
          </thead>
            {props.children}
        </table>
      </div>
    </div>
  )
}

export default PlacesListWrapper
