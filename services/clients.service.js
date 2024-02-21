import hotels from '../hotel.json' assert { type: 'json' };

class ClientsService {
    getInfoHotel() {
        return {
            name: hotels.name,
            location: hotels.location,
            contact : hotels.contact
        };
    }

    getAllRooms() {
        return {
            rooms : hotels.rooms
        }
    }

    getIFindRoomByID(number) {
        return hotels.rooms.find(room => room.number === parseInt(number));
    }

    postReservation(id) {
        const room = hotels.rooms.find(room => room.number === parseInt(id));
        return `Votre reservation à bien été enregistrer pour la chmabre ${room.name}`
    }

    deleteReservation(id) {
        const room = hotels.rooms.find(room => room.number === parseInt(id));
        return `Votre reservation à bien été annuler pour la chambre ${room.name}`
    }
}

export const clientsService = new ClientsService();