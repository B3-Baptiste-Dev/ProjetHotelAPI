import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const API_BASE_URL = 'http://localhost:3000';

export const fetchAllRooms = createAsyncThunk('hotel/fetchAllRooms', async () => {
    const response = await fetch(`${API_BASE_URL}/hotelRooms`);
    if (!response.ok) throw new Error('Failed to fetch rooms');
    return await response.json();
});

export const fetchRoomById = createAsyncThunk(
    'hotel/fetchRoomById', async (roomNumber) => {
    const response = await fetch(`${API_BASE_URL}/hotelRoom/${roomNumber}`);
    if (!response.ok) throw new Error('Failed to fetch room details');
    return await response.json();
});

export const fetchHotelInfo = createAsyncThunk('hotel/fetchHotelInfo', async () => {
    const response = await fetch(`${API_BASE_URL}/hotel`);
    if (!response.ok) throw new Error('Failed to fetch hotel information');
    return await response.json();
});

export const hotelSlice = createSlice({
    name: 'hotel',
    initialState: {
        rooms: [],
        roomDetails: {},
        hotelInfo: {},
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllRooms.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAllRooms.fulfilled, (state, action) => {
                state.rooms = action.payload.rooms;
                state.status = 'succeeded';
            })
            .addCase(fetchRoomById.fulfilled, (state, action) => {
                state.roomDetails = action.payload;
            })
            .addCase(fetchHotelInfo.fulfilled, (state, action) => {
                state.hotelInfo = action.payload;
            })
            .addCase(fetchAllRooms.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export default hotelSlice.reducer;
