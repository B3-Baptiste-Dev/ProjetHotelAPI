import './App.css';
import React from "react";
import HomePage from "./pages/HomePage.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RoomDetailPage from "./pages/RoomDetailPage.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/roomDetail/:roomId" element={<RoomDetailPage />} />
            </Routes>
        </Router>
    );
}

export default App;
