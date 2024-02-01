import { clientsService } from "../services/clients.service.js"

class ClientsController {
    FindInfoHotel(req, res){
        return (
            res.send(clientsService.getInfoHotel())
        )
    }

    FindAllRooms(req, res) {
        return (
            res.send(clientsService.getAllRooms())
        )
    }

    FindRoomByID(req, res) {
        const room = clientsService.getIFindRoomByID(req.params.id);
        if (room) {
            res.send(room);
        } else {
            res.status(404).send("Chambre non trouvée");
        }
    }

    PostReservation(req, res) {
        const room = clientsService.postReservation(req.params.id);
        if (room) {
            res.send(room);
        } else {
            res.status(404).send("Chambre non trouvée");
        }
    }

    DeleteReservation(req, res){
        const room = clientsService.deleteReservation(req.params.id);
        if (room) {
            res.send(room);
        } else {
            res.status(404).send("Chambre non trouvée");
        }
    }
}

export const clientsController = new ClientsController();