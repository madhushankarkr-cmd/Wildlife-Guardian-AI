"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { useEffect, useState } from "react";

export default function LeafletMap() {
  const [dynamicMarker, setDynamicMarker] = useState<[number, number] | null>(null);
  const [detectedSpecies, setDetectedSpecies] = useState("Animal");

  useEffect(() => {
    // 1. Fix Leaflet Icons
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
      iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
      shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    });

    // 2. Check for recent detection in LocalStorage
    const lat = localStorage.getItem("lastLat");
    const lon = localStorage.getItem("lastLon");
    const species = localStorage.getItem("species");

    if (lat && lon) {
      setDynamicMarker([parseFloat(lat), parseFloat(lon)]);
      if (species) setDetectedSpecies(species);
    }
  }, []);

  return (
    <MapContainer
      center={dynamicMarker || [22.9734, 78.6569]} // Center on detection or default India center
      zoom={6}
      scrollWheelZoom={true}
      className="h-[600px] w-full rounded-3xl shadow-inner"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* RENDER THE DYNAMIC MARKER IF IT EXISTS */}
      {dynamicMarker && (
        <Marker position={dynamicMarker}>
          <Popup>
            <div className="text-center">
              <span className="font-bold text-red-600 uppercase">🚨 Live Alert</span> <br />
              <b className="capitalize">{detectedSpecies}</b> Detected <br />
              <small>Location: {dynamicMarker[0]}, {dynamicMarker[1]}</small>
            </div>
          </Popup>
        </Marker>
      )}

      {/* Keep your static demo markers below if you want */}
    </MapContainer>
  );
}