import { Router, Request, Response } from "express";
import { EncuestaData } from '../clases/encuesta';
import Server from '../clases/server';

const router = Router();

// Creamos una instancia de la encuesta grafica

const encuestaGrafica = new EncuestaData();

router.get("/encuesta", (req: Request, resp: Response) => {
  resp.json(encuestaGrafica.getDataGrafica());
});

router.post("/encuesta", (req: Request, resp: Response) => {

  const pregunta = req.body.pregunta;
  const valor = Number(req.body.valor);

  encuestaGrafica.incrementarValor(pregunta, valor);

  const server = Server.instance;

  server.io.emit('cambios-encuesta', encuestaGrafica.getDataGrafica());

  resp.json(encuestaGrafica.getDataGrafica());


});

export default router;
