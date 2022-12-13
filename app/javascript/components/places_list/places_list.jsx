import React, { useState, useEffect } from 'react';
import  ReactDom from 'react-dom/client';
import { TableNav } from './table_nav'
import { Table } from './table'
// import Table from 'react-bootstrap/Table';

const PlacesList = () => {
  const [loading, setLoading] = useState(true)
  const [loadedPlaces, setLoadedPlaces] = useState([])

  useEffect(() => {
    const apiEndPoint = "/api/v1/places"
    fetch(apiEndPoint)
      .then(response => response.json())
      .then(data => {
      setLoadedPlaces(data["places"])
      setLoading(false)
    })
  }, [])


  const loadingSection = (<div>Loading..</div>)
  const dataSection = loadedPlaces.length == 0 ? (<div></div>) : (
    <div className= 'w-full mb-12 md:table-fixed overflow-auto'>
      <TableNav />
      <div className='block w-full overflow-x-auto'>
        <Table loadedPlaces={ loadedPlaces } />
      </div>
    </div>
  )

  if(loading) {
    return (
      loadingSection
    )
  } else {
    return (
      dataSection
    )
  }

}

const placesList = ReactDom.createRoot(document.getElementById("places-list-container"))
placesList.render(<PlacesList />)
