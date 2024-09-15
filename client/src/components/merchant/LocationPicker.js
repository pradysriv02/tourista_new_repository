import React, { useState, useEffect, useRef } from "react";
import mapboxgl, {GeolocateControl} from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder"

mapboxgl.accessToken = 'pk.eyJ1Ijoia2VzaGcwOTEyIiwiYSI6ImNsZGRlMjNmYzAycWIzb3MwdGxhaTd2aWUifQ.Ah1yPzjAal0Ez-QZC36M2A';

const LocationPicker = () => {
  const mapContainerRef = useRef(null);
  const [map, setMap] = useState(null);
  const [directions, setDirections] = useState(null);
  const [newLocation, setNewLocation] = useState(null);

//    useEffect(() => {
    
//     // const initializeMap = ({ setMap, mapContainer }) => {
//     //   const map = new mapboxgl.Map({
//     //     container: mapContainer,
//     //     style: "mapbox://styles/mapbox/streets-v12",
//     //     center: [-73.989, 40.744],
//     //     zoom: 11
//     //   });


//       map.on("load", () => {
//         setMap(map);
//         map.resize();
//       }
//       );

//     };

//     if (!map) initializeMap({ setMap, mapContainer: "map" });
//   }, [map]);


  useEffect(() => {
    const map = new mapboxgl.Map({
      
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-87.65, 41.84],
      zoom: 10,
    });
    
      map.on("load", () => {
        setMap(map);
        map.resize();
      }
      );

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
        console.log(e.lngLat)
        if (marker == null) {
            marker = new mapboxgl.Marker()
                .setLngLat(e.lngLat)
                .addTo(map);
        } else {
            marker.setLngLat(e.lngLat)
        }
     });


  

    return () => map.remove();
  }, []);

//   useEffect(() => {
//     if (map) {
//         var geocoder = new MapboxGeocoder({
//             accessToken: mapboxgl.accessToken,
//             mapboxgl: mapboxgl,
//             marker: true,
//             zoom: 20
//         });
    
//         map.addControl(
//             geocoder
//         );

//         let marker = null
//         map.on('click', function (e) {
//             //mapClickFn(e.lngLat);
//             console.log(e.lngLat)
//             if (marker == null) {
//                 marker = new mapboxgl.Marker()
//                     .setLngLat(e.lngLat)
//                     .addTo(map);
//             } else {
//                 marker.setLngLat(e.lngLat)
//             }
//          });

//     }
//   }, [map]);

  return (<> <div style={{ height: "400px" }} id="map" /> 
  </>);
};

export default LocationPicker;
// import React from "react";
// import mapboxgl from "mapbox-gl";
// import "mapbox-gl/dist/mapbox-gl.css";
// import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
// import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";
//  import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder"

// mapboxgl.accessToken =
//   "pk.eyJ1Ijoia2VzaGcwOTEyIiwiYSI6ImNsZGRlMjNmYzAycWIzb3MwdGxhaTd2aWUifQ.Ah1yPzjAal0Ez-QZC36M2A";

// class LocationPicker extends React.Component {
//     // constructor(props) {
//     //     super(props);
//     //     this.state = {
//     //         longitude: "",
//     //         latitude: "",
//     //     };
        
//     //   }
    
    
//   componentDidMount() {
//     console.log(process.env.REACT_APP_MAPBOX_KEY);
//     // Creates new map instance
//     var map = new mapboxgl.Map({
//       container: this.mapWrapper,
//       style: "mapbox://styles/mapbox/streets-v11",
//       center: [76.68346, 28.99329],
//       zoom: 12,
//     });

//     map.on("idle", function () {
//       map.resize();
//     });

//     var geocoder = new MapboxGeocoder({
//     accessToken: mapboxgl.accessToken,
//     mapboxgl: mapboxgl,
//     marker: true,
//     zoom: 20
//         });
    
//     map.addControl(
//         geocoder
//     );
//     let marker = null
//     map.on('click', function (e) {
//     //mapClickFn(e.lngLat);
//     console.log(e.lngLat);
//     // ss.setState({latitude: e.lngLat.lat});
//     // this.props.latitude = e.lngLat.lat;
//     // this.props.longitude = e.lngLat.lon;
//     latitude = e.lngLat.lat;
//     //longitude = e.lngLat.lon


//     if (marker == null) {
//         marker = new mapboxgl.Marker()
//             .setLngLat(e.lngLat)
//             .addTo(map);
//     } else {
//         marker.setLngLat(e.lngLat)
//     }
//     });

//   }

//   render() {
//     const {latitude} = this.props;
//     return (
//       // Populates map by referencing map's container property
//       <div
//         ref={(el) => (this.mapWrapper = el)}
//         className="mapWrapper"
//         style={{ height: "80vh", marginTop: "100px", marginBottom: "100px" }}
//       />
//     );
//   }
// }

// export default LocationPicker;
