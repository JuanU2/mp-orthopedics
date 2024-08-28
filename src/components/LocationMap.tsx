import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Pin from "../photos/pin.png"
import L from 'leaflet';

const LocationMap = () => {
    const position: [number, number] = [49.405694, 19.476371]; // Example coordinates (Eiffel Tower)
  return (
    <MapContainer center={position} zoom={17} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
        <Marker position={position} icon={new L.Icon({
            iconUrl: Pin,
            iconSize: [32, 32],
            iconAnchor: [16, 32],
            popupAnchor: [0, -28]
        })}>
                <Popup>
                    Ortopedická ambulancia <br /> <strong>Mudr. Michal Prádel</strong> - Námestovo. <br /> <br /> Červeného Kríža 62/30, 02901 Námestovo
                </Popup>
        </Marker>
    </MapContainer>
  );
};

export default LocationMap;
