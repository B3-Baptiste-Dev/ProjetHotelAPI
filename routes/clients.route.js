import { clientsController } from "../controllers/clients.controller.js"
import express from "express";

export const router = express.Router();

router.get(
    '/hotel',(req, res, next) => {
        clientsController.FindInfoHotel(req, res);
        next();
    });
router.get(
    '/hotelRooms', (req, res, next) => {
        clientsController.FindAllRooms(req, res);
        next();
    });
router.get(
    '/hotelRoom/:id', (req, res) => {
        clientsController.FindRoomByID(req, res)
        next();
    });
router.post(
    '/postReservation/:id', (req, res, next) => {
        clientsController.PostReservation(req, res)
        next();
    });
router.delete(
    '/deleteReservation/:id', (req, res, next) => {
        clientsController.DeleteReservation(req, res);
        next();
    });

