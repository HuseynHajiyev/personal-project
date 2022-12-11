import React, { useState, useEffect } from 'react';
import  ReactDom from 'react-dom/client';
// import Table from 'react-bootstrap/Table';

const PlacesList = () => {
  const [loading, setLoading] = useState(true)
  const [loadedPlaces, setLoadedPlaces] = useState([])

  useEffect(() => {
    const apiEndPoint = "/api/v1/places"
    fetch(apiEndPoint)
      .then(response => response.json())
      .then(data => {
      console.log(data)
      setLoadedPlaces(data["places"])
      setLoading(false)
    })
  }, [])

  const loadingSection = (<div>Loading..</div>)
  const dataSection = loadedPlaces.length == 0 ? (<div></div>) : (
    <table>
      <thead>
        <tr>
          <th>Venue Name</th>
          <th>City</th>
          <th>Average Download Speed</th>
          <th>Units of Measurement</th>
          <th>Number of Measurements</th>
        </tr>
      </thead>
      <tbody>
        {loadedPlaces.map((place, index) =>
          <tr key={index}>
            <td>{place.name}</td>
            <td>{place.city}</td>
            <td>{place.avg_download_speed}</td>
            <td>{place.download_speed_units}</td>
            <td>{place.number_of_measuerements}</td>
          </tr>
        )}
      </tbody>
    </table>
  )
  {/* {loadedPlaces.map((place, index) => {
  <tr>
    <th>Name</th>
    <th>City</th>
    <th>Average Download Speed</th>
    <th>Download speed units</th>
    <th>Number of Measurements</th>
  </tr>
  <tr>
    <td>{place.name}</td>
    <td>{place.city}</td>
    <td>{place.avg_download_speed}</td>
    <td>{place.download_speed_units}</td>
    <td>{place.number_of_measurements}</td>
  </tr>
} )} */}

  if(loading) {
    return (
      loadingSection
    )
  } else {
    console.log(loadedPlaces[1])
    return (
      dataSection
    )
  }

}

const placesList = ReactDom.createRoot(document.getElementById("places-list-container"))
placesList.render(<PlacesList />)
