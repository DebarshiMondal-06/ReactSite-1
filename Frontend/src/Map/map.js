import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import '../index.css';

const Map = () => {
  mapboxgl.accessToken = 'pk.xxxxjoiZGViYXJzaGltb25kYWwiLCJhIjoiY2xxxxxMWxjMXRjeTJzbDlncxxxxx.JhyfwPYFscwsxxxxZxxg';

  useEffect(() => {
    var map = new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/debarshimondal/ckjr999xxxxxxxxxxxxxx3",
      center: [88.363892, 22.5726],
      zoom: 12,
    });
    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav, "top-right");
    new mapboxgl.Marker()
      .setLngLat([88.363892, 22.5726])
      .addTo(map);
    new mapboxgl.Popup({ offset: 25, closeButton: false, className: 'popup', closeOnClick: false })
      .setLngLat([88.363892, 22.5726])
      .setText("Kolkata, 700124")
      .addTo(map);
  });

  return <section className="map">
    <div id="mapContainer"></div>
  </section>;
};

export default Map;