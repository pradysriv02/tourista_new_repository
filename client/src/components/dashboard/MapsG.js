// import React, { useState, useEffect } from "react";
// import {
//   withGoogleMap,
//   GoogleMap,
//   DirectionsRenderer,
// } from "react-google-maps";

// const Map = () => {
//   const [directions, setDirections] = useState(null);

//   useEffect(() => {
//     const directionsService = new window.google.maps.DirectionsService();

//     const origin = { lat: 40.756795, lng: -73.954298 };
//     const destination = { lat: 41.756795, lng: -78.954298 };
//     const waypt = [
//       {
//         location: { lat: 40.278022, lng: -76.899615 },
//         stopover: true,
//       },
//       {
//         location: { lat: 40.750216, lng: -78.922049 },
//         stopover: true,
//       },
//     ];

//     directionsService.route(
//       {
//         origin: origin,
//         destination: destination,
//         waypoints: waypt,
//         travelMode: window.google.maps.TravelMode.DRIVING,
//       },
//       (result, status) => {
//         if (status === window.google.maps.DirectionsStatus.OK) {
//           setDirections(result);
//         } else {
//           console.error(`error fetching directions ${result}`);
//         }
//       }
//     );
//   }, []); // The empty array ensures that the effect runs only once after the initial render

//   const GoogleMapExample = withGoogleMap(() => (
//     <GoogleMap
//       defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
//       defaultZoom={13}>
//       {directions && <DirectionsRenderer directions={directions} />}
//     </GoogleMap>
//   ));

//   return (
//     <div>
//       <GoogleMapExample
//         containerElement={<div style={{ height: `500px`, width: "500px" }} />}
//         mapElement={<div style={{ height: `100%` }} />}
//       />
//     </div>
//   );
// };

// export default Map;
// import React from "react";
// import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

// const containerStyle = {
//   width: "400px",
//   height: "400px",
// };

// const center = {
//   lat: -3.745,
//   lng: -38.523,
// };

// function MyComponent() {
//   const { isLoaded } = useJsApiLoader({
//     id: "google-map-script",
//     googleMapsApiKey: "AIzaSyCpCJNrQ3EYL2L5aWB7PZ0gUQB2XgbcU9Y",
//   });

//   const [map, setMap] = React.useState(null);

//   const onLoad = React.useCallback(function callback(map) {
//     // This is just an example of getting and using the map instance!!! don't just blindly copy!
//     const bounds = new window.google.maps.LatLngBounds(center);
//     map.fitBounds(bounds);

//     setMap(map);
//   }, []);

//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null);
//   }, []);

//   return isLoaded ? (
//     <GoogleMap
//       mapContainerStyle={containerStyle}
//       center={center}
//       zoom={10}
//       onLoad={onLoad}
//       onUnmount={onUnmount}
//     />
//   ) : (
//     <></>
//   );
// }

// export default React.memo(MyComponent);
// import React, { useEffect, useState } from "react";
// import {
//   APIProvider,
//   Map,
//   useMapsLibrary,
//   useMap,
// } from "@vis.gl/react-google-maps";

// const API_KEY = "AIzaSyCpCJNrQ3EYL2L5aWB7PZ0gUQB2XgbcU9Y";

// const MapsG = () => (
//   <APIProvider apiKey={API_KEY}>
//     <Map
//       defaultCenter={{ lat: 43.65, lng: -79.38 }}
//       defaultZoom={9}
//       gestureHandling={"greedy"}
//       fullscreenControl={false}>
//       <Directions />
//     </Map>
//   </APIProvider>
// );

// function Directions() {
//   const map = useMap();
//   const routesLibrary = useMapsLibrary("routes");
//   const [directionsService, setDirectionsService] = useState();
//   const [directionsRenderer, setDirectionsRenderer] = useState();
//   const [routes, setRoutes] = useState([]);
//   const [routeIndex, setRouteIndex] = useState(0);
//   const selected = routes[routeIndex];
//   const leg = selected?.legs[0];

//   // Initialize directions service and renderer
//   useEffect(() => {
//     if (!routesLibrary || !map) return;
//     setDirectionsService(new routesLibrary.DirectionsService());
//     setDirectionsRenderer(new routesLibrary.DirectionsRenderer({ map }));
//   }, [routesLibrary, map]);

//   // Use directions service
//   useEffect(() => {
//     if (!directionsService || !directionsRenderer) return;

//     directionsService
//       .route({
//         origin: "100 Front St, Toronto ON",
//         destination: "500 College St, Toronto ON",
//         travelMode: google.maps.TravelMode.DRIVING,
//         provideRouteAlternatives: true,
//       })
//       .then((response) => {
//         directionsRenderer.setDirections(response);
//         setRoutes(response.routes);
//       });

//     return () => directionsRenderer.setMap(null);
//   }, [directionsService, directionsRenderer]);

//   // Update direction route
//   useEffect(() => {
//     if (!directionsRenderer) return;
//     directionsRenderer.setRouteIndex(routeIndex);
//   }, [routeIndex, directionsRenderer]);

//   if (!leg) return null;

//   return (
//     <div className="directions">
//       <h2>{selected.summary}</h2>
//       <p>
//         {leg.start_address.split(",")[0]} to {leg.end_address.split(",")[0]}
//       </p>
//       <p>Distance: {leg.distance?.text}</p>
//       <p>Duration: {leg.duration?.text}</p>

//       <h2>Other Routes</h2>
//       <ul>
//         {routes.map((route, index) => (
//           <li key={route.summary}>
//             <button onClick={() => setRouteIndex(index)}>
//               {route.summary}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default MapsG;

import React, { useState, useEffect, useCallback } from "react";
import {
  GoogleMap,
  useLoadScript,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";

const API_KEY = "AIzaSyCpCJNrQ3EYL2L5aWB7PZ0gUQB2XgbcU9Y";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const defaultCenter = { lat: 43.65, lng: -79.38 }; // Toronto
const defaultZoom = 12;

const libraries = ["places"];

function App() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: API_KEY,
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return <Map />;
}

function Map() {
  const [map, setMap] = useState(null);
  const [directionsResult, setDirectionsResult] = useState(null);
  const [routes, setRoutes] = useState([]);
  const [routeIndex, setRouteIndex] = useState(0);
  const [waypoints, setWaypoints] = useState([
    { location: "Vr mall, Surat", stopover: true },
    { location: "Dumas Beach, Surat", stopover: true },
    { location: "Sri ambika neketan mandir, surat", stopover: true },
    { location: "rr mall, surat", stopover: true },
  ]);
  const [origin, setOrigin] = useState("Vr mall, surat");
  const [destination, setDestination] = useState("rr mall, surat");
  const [fetchingDirections, setFetchingDirections] = useState(false);

  const onLoad = useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  const directionsCallback = useCallback((response, status) => {
    console.log("Directions response:", response);
    if (status === "OK" && response !== null) {
      setRoutes(response.routes);
      setDirectionsResult(response);
      setFetchingDirections(false);
    } else {
      console.error(`Directions request failed with status ${status}`);
      setFetchingDirections(false);
    }
  }, []);

  useEffect(() => {
    if (!fetchingDirections && origin && destination) {
      setFetchingDirections(true);
    }
  }, [origin, destination, waypoints, fetchingDirections]);

  const handleAddWaypoint = () => {
    setWaypoints([...waypoints, { location: "", stopover: true }]);
  };

  const handleRemoveWaypoint = (index) => {
    const newWaypoints = waypoints.filter((_, i) => i !== index);
    setWaypoints(newWaypoints);
  };

  const handleWaypointChange = (index, value) => {
    const newWaypoints = [...waypoints];
    newWaypoints[index].location = value;
    setWaypoints(newWaypoints);
  };

  const handleOriginChange = (event) => {
    setOrigin(event.target.value);
  };

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  return (
    <div className="map-container">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={defaultCenter}
        zoom={defaultZoom}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{ fullscreenControl: false, gestureHandling: "greedy" }}>
        {fetchingDirections && (
          <DirectionsService
            options={{
              origin: origin,
              destination: destination,
              waypoints: waypoints,
              optimizeWaypoints: true,
              travelMode: "DRIVING",
            }}
            callback={directionsCallback}
          />
        )}
        {directionsResult && (
          <DirectionsRenderer
            options={{
              directions: directionsResult,
              routeIndex: routeIndex,
              suppressMarkers: false,
              suppressInfoWindows: false,
            }}
          />
        )}
      </GoogleMap>
    </div>
  );
}

export default App;
