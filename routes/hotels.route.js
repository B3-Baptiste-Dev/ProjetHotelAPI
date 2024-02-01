import express from "express";
import {hotelsController} from "../controllers/hotels.controller.js";
import {adminAuthMiddleware} from "../adminAuth.middleware.js";


export const router = express.Router();

router.get('', adminAuthMiddleware, (req, res, next) => {
    hotelsController.GetAllClient(req, res);
    next();
});

router.get('/getclient/:id', adminAuthMiddleware, (req, res, next) => {
    hotelsController.GetClientByID(req, res);
    next();
})
router.post('/addclient', adminAuthMiddleware,(req, res, next) => {
    hotelsController.AddClient(req, res);
    next();
})
router.put('/updateclient/:id', adminAuthMiddleware, (req, res, next) => {
    hotelsController.UpdateClient(req, res);
    next();
})
router.post('/reservation/:roomId/:clientId', adminAuthMiddleware,  (req, res, next) => {
    hotelsController.Reservation(req, res);
    next();
});
router.delete('/:id', adminAuthMiddleware, (req, res, next) => {
    hotelsController.DeleteReservation(req, res);
    next();
})