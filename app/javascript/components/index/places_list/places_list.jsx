import React, { useState, useEffect } from 'react';
import  ReactDom from 'react-dom/client';
import { TableNav } from './table_nav'
import { Table } from './table'
import { PlacesListWrapper } from './places_list_wrapper'
// import Table from 'react-bootstrap/Table';


const PlacesList = () => {
  const [loading, setLoading] = useState(true)
  const [loadedPlaces, setLoadedPlaces] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    const apiEndPoint = `/api/v1/places?search=${search}`
    fetch(apiEndPoint)
    .then(response => response.json())
    .then(data => {
      setLoadedPlaces(data["places"])
      setLoading(false)
    })
  }, [search])

  const onSearchChange = (event) => {
    event.preventDefault()
    setLoading(true)
    setSearch(event.target.value)
  }

  const loadingSection = (<div>Loading..</div>)
  const dataSection = loadedPlaces.length == 0 && !loading ? (<tbody><tr>No Results<td></td></tr></tbody>) : (
    <PlacesListWrapper nav={<TableNav searchFunc={ onSearchChange } />}>
      <Table loadedPlaces={ loadedPlaces } />
    </PlacesListWrapper>
  )

  return(
    <PlacesListWrapper nav={<TableNav searchFunc={ onSearchChange } />}>
        {loading ? (<tbody><tr><td>Loading...</td></tr></tbody>): <Table loadedPlaces={ loadedPlaces } />}
    </PlacesListWrapper>
  )
}

const placesList = ReactDom.createRoot(document.getElementById("places-list-container"))
placesList.render(<PlacesList />)
