// components/Map.tsx
'use strict';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Location {
  latitude: number;
  longitude: number;
}

interface MapProps {
  location: Location;
}

const Map: React.FC<MapProps> = ({ location }) => {
  const [mapUrl, setMapUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [count, setCount] = useState(0)


  useEffect(() => {
    setCount(count + 1)
    const fetchMapData = async () => {
      const apiKey = "1d2b448fc011d8ac31a880e4652c51c9b91cba2a139b11d69f375e08da7b28d5"; // Use environment variable
      const query = `${location.latitude},${location.longitude}`;


      try {
        const response = await axios.get(`https://serpapi.com/search.json`, {
          params: {
            api_key: apiKey,
            engine: 'google_maps',
            q: query,
          },
        });

        const mapUrl = `https://www.google.com/maps/embed/v1/view?key=${'AIzaSyAkzhwHhdKNvEJDppexDObGOj9Mkv5-M2s'}&center=${location.latitude},${location.longitude}&zoom=15`;


        const { search_metadata: { google_maps_url } } = response.data;

        if (google_maps_url) {
          setMapUrl(mapUrl); // Set the map URL
        } else {
          console.error("Map URL not found in response");
        }
      } catch (error) {
        console.error("Error fetching the map data", error);
      } finally {
        setLoading(false);
      }
    };

    if(count === 3 || count === 2 || count === 1){

      fetchMapData();
    }
  }, [location]);

  return (
    <div className='md:h-[300px] h-[50px]  w-full'>
      {loading ? (
        <p>Loading map...</p>
      ) : mapUrl ? (
        <iframe
          src={mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0, borderRadius: '10px' }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      ) : (
        <p>Failed to load map.</p>
      )}
    </div>
  );
};

export default Map;
