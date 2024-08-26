import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const LocationMap = () => {
    const position: [number, number] = [49.405694, 19.476371]; // Example coordinates (Eiffel Tower)
  return (
    <MapContainer center={position} zoom={17} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
        <Marker position={position}>
                <Popup>
                    Ortopedická ambulancia <br /> Michal Prádel - Námestovo. <br /> <br /> Červeného Kríža 62/30, 02901 Námestovo
                </Popup>
        </Marker>
    </MapContainer>
  );
};

export default LocationMap;
