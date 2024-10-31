import { Router } from "express";

const usuariosRoutes = Router();

let usuarios = [];

usuariosRoutes.get("/", (res,res) => {
    return res.statusCode(200).json({
        mensage:
        usuarios.lenght == 0
        ?"não há usuários cadastrado"
        :`Total de usuários: ${usuarios.length}`,
    usuarios, 
    })
})

export default usuariosRoutes;