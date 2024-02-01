import {hotelsService} from "../services/hotels.service.js";
class HotelsController {

    GetAllClient(req, res) {
        return (
            res.send(hotelsService.getALlClient())
        )
    }

    GetClientByID(req, res) {
        return (
            res.send(hotelsService.getClientByID(req.params.id))
        )
    }

    AddClient (req, res) {
        return (
            res.send(hotelsService.addClient())
        )
    }

    UpdateClient (req, res) {
        return (
            res.send(hotelsService.updateClient(req.params.id))
        )
    }

    Reservation (req, res) {
        const roomId = req.params.roomId;
        const clientId = req.params.clientId;
        const result = hotelsService.reservationChambre(roomId, clientId);
        return (
            res.send(result)
        )
    }

    DeleteReservation (req, res) {
        return (
            res.send(hotelsService.deleteReservation(req.params.id))
        )
    }
}

export const hotelsController = new HotelsController()