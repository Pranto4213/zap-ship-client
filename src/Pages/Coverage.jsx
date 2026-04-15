import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useLoaderData } from 'react-router';
const Coverage = () => {

    const position = [23.6850, 90.3563]


    const serviceCenter = useLoaderData();
    console.log(serviceCenter)


    return (
        <div>
            <h2 className='text-3xl font-bold text-blue-800'>We Are abailble in 64 dictrict in bangladesh</h2>

            <div className="">

            </div>
            <div className="border w-full h-[800px]">

                <MapContainer className='h-[800px]' center={position} zoom={8} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

               {
                serviceCenter.map(center=>      <Marker  position={[center.latitude, center.longitude]}>
                        <Popup>
                            {center.district}. <br />
                            Services area : {center.covered_area.join('. ')}
                        </Popup>
                    </Marker>)
               }



                </MapContainer>

            </div>


        </div>
    );
};

export default Coverage;