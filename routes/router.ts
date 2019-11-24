import { Router, Request, Response } from "express";

const router = Router();

router.get("/encuesta", (req: Request, resp: Response) => {
  resp.json({
    ok: true,
    mensaje: "Probando encuestas"
  });
});

// router.post("/mensajes", (req: Request, resp: Response) => {
//   const cuerpo = req.body.cuerpo;
//   const de = req.body.de;

//   resp.json({
//     ok: true,
//     cuerpo,
//     de
//   });
// });

export default router;
