let nextPartidoId = 0;

export const addPartido = (partido) => {
  return {
    type: 'ADD_PARTIDO',
    id: nextPartidoId++,
    partido
  }
}
