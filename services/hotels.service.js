import clients from '../clients.json' assert { type: 'json'};
import chambres from '../hotel.json' assert { type: 'json'};

class HotelsService {
    getALlClient() {
        return clients;
    }

    getClientByID(id) {
        const client = clients.clients.find(client => client.id === parseInt(id));
        return client.name
    }

    addClient() {
        return "Vous avez ajouté un nouveau client"
    }

    updateClient(id) {
        const client = clients.clients.find(client => client.id === parseInt(id));
        return `La modification du client ${client.name} à bien été réalisé`
    }

    reservationChambre(idchambre, idclient) {
        const chambre = chambres.rooms.find(ids => ids.number === parseInt(idchambre));
        const client = clients.clients.find(client => client.id === parseInt(idclient));
        return `La chambre n° ${chambre.number} à bien été reservé pour ${client.name}`
    }

    deleteReservation(id) {
        return `La reservation n° ${id} à bien été supprimer`
    }
}

export const hotelsService = new HotelsService();