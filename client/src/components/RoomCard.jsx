function RoomCard({ room, onViewDetails }) {
    return (
        <div className="room-card flex">
            <div className="room-card-content">
                <h3>{room.name}</h3>
                <button onClick={() => onViewDetails(room.number)}>Voir plus</button>
            </div>
        </div>
    );
}
export default RoomCard;
