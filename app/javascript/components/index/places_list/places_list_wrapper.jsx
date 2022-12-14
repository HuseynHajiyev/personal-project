import React, { useState, useEffect } from 'react';
import  ReactDom from 'react-dom/client';

export const PlacesListWrapper = (props) => {
  return(
    <div className= 'w-full mb-12 md:table-fixed overflow-auto'>
      {props.nav}
      <div className='block w-full overflow-x-auto'>
        {props.children}
      </div>
    </div>
  )
}

export default PlacesListWrapper
