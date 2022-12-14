import React, { useState, useEffect } from 'react';
import  ReactDom from 'react-dom/client';

export const Table = (props) => {
  const thClass = "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left bg-pink-800 text-pink-300 border-pink-700"
  const tdClass  = "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"

  return(
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
      <tbody>
        {props.loadedPlaces.map((place, index) =>
          <tr key={index}>
            <td className={tdClass}>{place.name}</td>
            <td className={tdClass}>{place.city}</td>
            <td className={tdClass}>{place.avg_download_speed}</td>
            <td className={tdClass}>{place.download_speed_units}</td>
            <td className={tdClass}>{place.number_of_measurements}</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default Table
