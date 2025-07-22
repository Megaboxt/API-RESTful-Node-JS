


export const notFoundPath = (req, res, next) => {
    res.status(404).json(`Ruta no encontrada o no existente.`);
}

export const errorServerMessage = (req, res, next) => {
    return res.status(500).json({
        error: `Error interno del servidor`,
        error
    });
}