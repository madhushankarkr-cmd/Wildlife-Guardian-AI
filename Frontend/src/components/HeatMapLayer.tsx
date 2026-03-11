"use client";

import { MapContainer, TileLayer } from "react-leaflet";
import { useEffect } from "react";
import L from "leaflet";
import "leaflet.heat";

export default function HeatMapLayer() {

  useEffect(() => {
    const map = L.map("heatmap-container").setView([22.9734, 78.6569], 6);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    const heatData: [number, number, number][] = [
      [22.9734, 78.6569, 0.8],
      [23.2599, 77.4126, 0.6],
      [21.1458, 79.0882, 0.9],
      [24.5854, 73.7125, 0.4],
    ];

    // @ts-ignore
    L.heatLayer(heatData, {
      radius: 40,
      blur: 25,
      maxZoom: 10,
      gradient: {
        0.2: "green",
        0.5: "yellow",
        0.8: "red",
      },
    }).addTo(map);

    return () => {
      map.remove();
    };
  }, []);

  return <div id="heatmap-container" className="h-[600px] w-full rounded-3xl" />;
}