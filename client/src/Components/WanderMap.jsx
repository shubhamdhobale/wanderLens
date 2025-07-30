// WanderMap.jsx
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix default icon issue with React-Leaflet
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { Link } from 'react-router-dom';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const trekData = [
  {
    name: 'Kalsubai',
    lat: 19.6,
    lng: 73.7,
    image: '/treks/kalsubai.jpg',
    slug: 'Kalsubai',
  },
  {
    name: 'Harishchandragad',
    lat: 19.4,
    lng: 73.9,
    image: '/treks/harishchandragad.jpg',
    slug: 'harishchandragad',
  },
  // Add more treks here...
];

const WanderMap = () => {
  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-green-100 to-blue-100">
      <h1 className="text-3xl font-bold text-center mb-6">🗺️ My WanderMap</h1>
      <MapContainer
        center={[19.5, 73.8]}
        zoom={8}
        style={{ height: '75vh', width: '100%', borderRadius: '20px', boxShadow: '0 4px 30px rgba(0,0,0,0.1)' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {trekData.map((trek) => (
          <Marker key={trek.name} position={[trek.lat, trek.lng]}>
            <Popup>
              <div className="text-sm">
                <h2 className="font-semibold">{trek.name}</h2>
                <img src={trek.image} alt={trek.name} className="w-full h-24 object-cover rounded mt-2 mb-2" />
                <Link
                  to={`/treks/${trek.slug}`}
                  className="text-green-600 underline hover:text-green-800"
                >
                  View Details →
                </Link>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default WanderMap;
