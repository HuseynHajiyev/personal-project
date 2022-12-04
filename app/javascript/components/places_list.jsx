import React from 'react';
import  ReactDom from 'react-dom/client';

class PlacesList extends React.Component {
  render() {
    return (
      <React.StrictMode>
        <div>PLaces Places Places</div>
      </React.StrictMode>
    )
  }
}

const placesList = ReactDom.createRoot(document.getElementById("places-list-container"))
placesList.render(<PlacesList />)
