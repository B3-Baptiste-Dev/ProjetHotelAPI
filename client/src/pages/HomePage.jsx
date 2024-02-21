import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchAllRooms} from "../services/hotelService.js";
import RoomCard from "../components/RoomCard.jsx";
import Footer from "../components/Footer.jsx";
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { rooms, status, error } = useSelector((state) => state.hotel);

    useEffect(() => {
        dispatch(fetchAllRooms());
    }, [dispatch]);

    if (status === 'loading') return <div>Chargement...</div>;
    if (error) return <div>Erreur: {error}</div>;
    return (
        <>
            <div className='home'>
                {rooms.map(room => (
                    <RoomCard
                        key={room.number}
                        room={room}
                        onViewDetails={() => navigate(`/roomDetail/${room.number}`)}
                    />
                ))}
            </div>
            <Footer />
        </>
    );
};

export default HomePage;
