import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";


const styles = {
  width: "100vw",
  height: "calc(100vh - 80px)",
  position: "absolute"
};

const Test = (props) => {
  const [map, setMap] = useState(null);
 
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1Ijoia2VzaGcwOTEyIiwiYSI6ImNsZGRlMjNmYzAycWIzb3MwdGxhaTd2aWUifQ.Ah1yPzjAal0Ez-QZC36M2A';

    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
        center: [0, 0],
        zoom: 5
      });

      map.on("load", () => {
        setMap(map);
        map.resize();
      });

      var geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        marker: true,
        zoom: 20
    });

    map.addControl(
        geocoder
    );

    let marker = null
    map.on('click', function (e) {
        //mapClickFn(e.lngLat);
        // console.log(e.lngLat)
        props.abcd(e.lngLat)
        if (marker == null) {
            marker = new mapboxgl.Marker()
                .setLngLat(e.lngLat)
                .addTo(map);
        } else {
            marker.setLngLat(e.lngLat)
        }
     });

    };

   
    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  return <div ref={el => (mapContainer.current = el)} style={{ height: "400px"}} />;
};

export default Test;