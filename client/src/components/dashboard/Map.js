import React, {
  useEffect,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "../../App.css";
import "mapbox-gl/dist/mapbox-gl.css";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";
import Spinner from "../layout/Spinner";

const styles = {
  width: "100vw",
  height: "calc(100vh - 80px)",
  position: "absolute",
};

const Map = (props, ref) => {
  const [map, setMap] = useState(null);
  useEffect(() => {}, [map]);
  const mapContainer = useRef(null);
  mapboxgl.accessToken =
    "pk.eyJ1IjoicHJhZHlzcml2MTAwOSIsImEiOiJjbTEycGF1M3gweHRqMmxyMzVvZ2llbGJtIn0.pFnNf7DbdNQSBmU_4qpFtQ";

  // getAlert() {
  const Map = new mapboxgl.Map({
    container: mapContainer.current,
    style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
    center: [-75.3999866894848, 42.60101025299741],
    zoom: 5,
  });

  Map.on("load", () => {
    setMap(Map);
    map.resize();
  });

  // Creates new directions control instance
  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
    unit: "metric",
    profile: "mapbox/driving",
    interactive: false,
  });

  // Integrates directions control with map
  Map.addControl(directions, "top-left");
  //add waypoints
  // map.on("style.load", function () {
  //   directions.setOrigin([76.68346, 28.99329]);
  //   directions.addWaypoint(0, [77.67999, 29.00393]);
  //   directions.addWaypoint(1, [79.67628, 29.0308]);
  //   // directions.addWaypoint(2, [79.49764, 28.60245]);
  //   directions.setDestination([76.68346, 28.99329]);
  // });

  // const placesCoords = [];
  const placesCoords = [
    [81.8463, 25.4358], // Prayagraj, India
    [81.8571, 25.4323], // Allahabad Fort
    [81.8854, 25.3833], // Triveni Sangam
    [81.8419, 25.467], // Anand Bhavan Museum
    [81.8783, 25.4434], // Alopi Devi Mandir
  ];
  // props.entityDetails.forEach(function (entry) {
  //   var coordinates = [];
  //   coordinates.push(parseFloat(entry.longitude));
  //   coordinates.push(parseFloat(entry.latitude));
  //   placesCoords.push(coordinates);
  // });

  // console.log(placesCoords);
  for (var i = 0; i < placesCoords.length; i++) {
    directions.addWaypoint(i, placesCoords[i]);
    var k = i + 1;
    var el = document.createElement("div");
    el.className = "marker";
    el.innerHTML = "<span><b>" + k + "</b></span>";
    // new mapboxgl.Marker(el)
    //   .setLngLat(placesCoords[i])
    //   .setPopup(
    //     new mapboxgl.Popup({ offset: 25 }) // add popups
    //       .setHTML(
    //         `<h3>${props.entityDetails[i].title}</h3>
    //             <div style="height: 200px; overflow-y: scroll; height: 300px;">
    //             <img src="${props.entityDetails[i].image}" alt="Image" style="width: 100%; height: 100px;">
    //             <p> ${props.entityDetails[i].description}</p>
    //             <a target="_blank" href="${props.entityDetails[i].wiki_url}">Read More on Wikipedia </a>
    //           </div>
    //             `
    //       )
    //       .setMaxWidth("400px")
    //   )
    //   .addTo(map);

    Map.on("style.load", function () {
      directions.setOrigin(placesCoords[0]);

      directions.setDestination(placesCoords[placesCoords.length - 1]);
    });
  }
  // }

  // getLocalBusinessDetails() {
  //   const directions = new MapboxDirections({
  //     accessToken: mapboxgl.accessToken,
  //     unit: "metric",
  //     profile: "mapbox/driving",
  //     interactive: false,
  //   });

  // console.log(props.city);
  // fetch(`http://localhost:5000/api/merchant/${props.city}/getmerchants`)
  //   .then((res) => res.json())
  //   .then((json) => {
  //     const details = json;
  //     const placesCoords = [];
  //     details.forEach(function (entry) {
  //       var coordinates = [];
  //       coordinates.push(parseFloat(entry.longitude));
  //       coordinates.push(parseFloat(entry.latitude));
  //       placesCoords.push(coordinates);
  //     });
  //     // console.log(placesCoords);

  //     for (var i = 0; i < placesCoords.length; i++) {
  //       directions.addWaypoint(i, placesCoords[i]);
  //       var el = document.createElement("div");
  //       el.className = "local_marker";
  //       el.innerHTML = "<span><b>" + (i + 1) + "</b></span>";
  //       new mapboxgl.Marker(el)
  //         .setLngLat(placesCoords[i])
  //         .setPopup(
  //           new mapboxgl.Popup({ offset: 25 }) // add popups
  //             .setHTML(
  //               `<h3>${details[i].business}</h3>
  //               <div style="height: 100px; overflow-y: scroll; height: 200px;">
  //               <img src="${details[i].url}" alt="Image" style="width: 100%; height: 100px;">
  //               <p> ${details[i].description}</p>
  //             </div>
  //               `
  //             )
  //             .setMaxWidth("400px")
  //         )
  //         .addTo(map);
  //     }
  //   });
  // },
  // }

  const loadLocalBusiness = () => {
    console.log(props.city);
  };

  // if (props.maploading) return <Spinner />;
  return (
    // <>
    <div
      ref={(el) => (mapContainer.current = el)}
      style={{
        height: "150vh",
        marginTop: "20px",
        marginBottom: "50px",
      }}
    />
    // </>
  );
};

export default Map;
