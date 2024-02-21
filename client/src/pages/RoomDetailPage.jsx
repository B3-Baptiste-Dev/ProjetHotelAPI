import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRoomById } from "../services/hotelService";

const RoomDetailPage = () => {
    const { roomId } = useParams();
    const dispatch = useDispatch();
    const roomDetails = useSelector((state) => state.hotel.roomDetails);
    useEffect(() => {
        if (roomId) {
            dispatch(fetchRoomById(roomId));
        }
    }, [dispatch, roomId]);

    if (!roomDetails) {
        return <div>Loading...</div>;
    }

    const handleReservation = () => {
        alert(`Réservation pour ${roomDetails.name} effectuée!`);
    };

    return (
        <div className="room-detail">
            <h2>{roomDetails.name}</h2>
            <img src={`/images/${roomDetails.number}.jfif`} alt={roomDetails.name} />
            <button onClick={handleReservation}>Réserver</button>
        </div>
    );
};

export default RoomDetailPage;
