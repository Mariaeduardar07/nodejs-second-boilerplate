import { Router } from "express";

import usuariosRoutes, { routes } from "./usuarios.routes.js";


const routes = Router();

// Rota raiz para teste
routes.get("/", (req, res) => {
  return res.status(200).json({ message: "Vai Corinthians!" });
});

//lista de uso de rotas do projetos
routes.use("/usuarios", usuariosRoutes);

export default routes;