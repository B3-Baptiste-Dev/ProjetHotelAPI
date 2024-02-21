import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchHotelInfo} from "../services/hotelService.js";

const Footer = () => {
    const dispatch = useDispatch();
    const { hotelInfo } = useSelector((state) => state.hotel);

    useEffect(() => {
        dispatch(fetchHotelInfo());
    }, [dispatch]);

    if (!hotelInfo) return <footer>Loading...</footer>;
    const fullAddress = `${hotelInfo.location?.address}, ${hotelInfo.location?.city}, ${hotelInfo.location?.state} ${hotelInfo.location?.zip}, ${hotelInfo.location?.country}`;
    const phone = hotelInfo.contact?.phone;
    return (
        <footer>
            <p>{hotelInfo.name}</p>
            <p>Adresse: {fullAddress}</p>
            <p>Contact: {phone}</p>
        </footer>
    );
};

export default Footer;
