"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { useEffect } from "react";

export default function LeafletMap() {

  useEffect(() => {
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
      iconUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
      shadowUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    });
  }, []);

  return (
    <MapContainer
      center={[22.9734, 78.6569]}
      zoom={6}
      scrollWheelZoom={true}
      className="h-[600px] w-full rounded-3xl"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[22.9734, 78.6569]}>
        <Popup>
          🐅 Tiger Detected <br /> Risk: High
        </Popup>
      </Marker>

      <Marker position={[23.2599, 77.4126]}>
        <Popup>
          🐘 Elephant Movement <br /> Risk: Moderate
        </Popup>
      </Marker>

    </MapContainer>
  );
}