import { Router } from "express";
import UsersRepository from "../models/users/UsersRepository.js";

const usuariosRoutes = Router();

const usersRepository = new UsersRepository();

usuariosRoutes.get("/", (req, res) => {
    const usuarios = usersRepository.getAllUsers();

    return res.status(200).json({
        mensage:
        usuarios.length == 0
        ?"não há usuários cadastrado"
        :`Total de usuários: ${usuarios.length}`,
    usuarios, 
    })
})

export default usuariosRoutes;