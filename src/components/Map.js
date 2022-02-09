import React, { useRef, useEffect, useState } from "react";
// require('dotenv').config()
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "./Map.css";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY;
console.log(`Name is ${process.env.REACT_APP_NAME}`)
const Map = (props) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(props.center.lng);
  const [lat, setLat] = useState(props.center.lat);
  const [zoom, setZoom] = useState(11);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom
    });
    var marker = new mapboxgl.Marker().setLngLat([props.center.lng, props.center.lat]).addTo(map.current);    
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });
  return (
    <div>
      {/* <h2>Hi! This is Mapbox Map!</h2> */}
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div>
        <div ref={mapContainer} className="map-container" />
      </div>
    </div>
  );
};

export default Map;
