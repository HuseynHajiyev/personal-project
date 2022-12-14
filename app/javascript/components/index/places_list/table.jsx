import React, { useState, useEffect } from 'react';
import  ReactDom from 'react-dom/client';

export const Table = (props) => {
  const tdClass  = "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"

  return(
      <tbody>
        {props.loadedPlaces.length == 0 ? <tr><td>No Results</td></tr> : props.loadedPlaces.map((place, index) =>
          <tr key={index}>
            <td className={tdClass}>{place.name}</td>
            <td className={tdClass}>{place.city}</td>
            <td className={tdClass}>{place.avg_download_speed}</td>
            <td className={tdClass}>{place.download_speed_units}</td>
            <td className={tdClass}>{place.number_of_measurements}</td>
          </tr>
        )}
      </tbody>
  )
}

export default Table
