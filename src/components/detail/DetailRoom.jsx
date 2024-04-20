import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import rooms from '../../../API/rooms/rooms';

function DetailRoom() {
 const { id } = useParams();
 const [roomDetails, setRoomDetails] = useState(null);
 const [loading, setLoading] = useState(true);

 useEffect(() => {
    const room = rooms.find(room => room.id === parseInt(id));
    if (room) {
      setRoomDetails(room);
    } else {
      window.alert('No se encontró la habitación!');
    }
    setLoading(false);
 }, [id]);

 if (loading) {
    return (
      <div className="loading-container">
        <img
          src="https://giffiles.alphacoders.com/191/1918.gif"
          alt="Loading GIF"
          className="loading-gif"
        />
      </div>
    );
 }

 return (
    <div>
    <article className="flex-col justify-center items-start px-16 text-white rounded-3xl shadow-sm bg-green-950 max-md:pl-5 w-full md:w-2/3 lg:w-1/2">
       <h2 className="relative mt-44 text-4xl font-extrabold tracking-tight text-center max-md:mt-10">{roomDetails.name}</h2>
       <p className="text-white">Capacity: {roomDetails.capacity}</p>
       <p className="text-white">Beds: {roomDetails.beds.join(', ')}</p>
       <p className="text-white">Price: ${roomDetails.price}</p>
       <p className="text-white">Living room: {roomDetails["sitting area"] ? 'Yes' : 'No'}</p>
       <p className="text-white">Dining table: {roomDetails["dining table"] ? 'Yes' : 'No'}</p>
       <p className="text-white">WiFi: {roomDetails.wifi ? 'Yes' : 'No'}</p>
       <p className="text-white">cable TV: {roomDetails["TV cable"] ? 'Yes' : 'No'}</p>
       <p className="text-white">Phone: {roomDetails.phone ? 'Yes' : 'No'}</p>
       <div className="flex mt-1">
            {roomDetails.images.map((image, index) => (
              <img key={index} src={image} alt={roomDetails.name} className="w-1/3 max-w-xs max-h-xs" />
            ))}
          </div>
    </article>
   </div>
 );
}

export default DetailRoom;
