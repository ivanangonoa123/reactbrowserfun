 let nextPartidoId = 3

export const addPartido = (title, date, polla) => {
  console.log(nextPartidoId)
  return {
    type: 'ADD_PARTIDO',
    data: {
      id: nextPartidoId++,
      title: title,
      date: date,
      total_polla: 800,
      players: []
    }
  }
}
