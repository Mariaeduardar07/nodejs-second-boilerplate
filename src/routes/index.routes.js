import { Router } from "express";

//lista de importação das rotas do projeto
import usuariosRoutes from "./usuarios.routes.js";


const routes = Router();

// Rota raiz para teste
routes.get("/", (req, res) => {
  return res.status(200).json({ message: "Hello word!" });
});

//lista de uso de rotas do projetos
routes.use("/usuarios", usuariosRoutes);

export default routes;