function solve (input) {
  const movieDb = []
  for (let data of input) {
    if (data.startsWith('add')) {
      const movieTitle = data.split('add movie ').filter(Boolean).shift()
      movieDb.push(movie = { name: movieTitle })
    } else if (data.includes('directed by')) {
      const [movieTitle, director] = data.split(' directed by ')
      movieDb.forEach(movie => movie.name === movieTitle ? movie.director = director : movie.director)
    } else {
      const [movieTitle, date] = data.split(' on date ')
      movieDb.forEach(movie => movie.name === movieTitle ? movie.date = date : movie.date)
    }
  }
  console.log(
    movieDb
      .filter(movie => movie.name && movie.director && movie.date)
      .map(movie => JSON.stringify(movie))
      .join('\n')
  )
}

solve([
  'add movie Fast and Furious',
  'add movie Godfather',
  'Inception directed by Christopher Nolan',
  'Godfather directed by Francis Ford Coppola',
  'Godfather on date 29.07.2018',
  'Fast and Furious on date 30.07.2018',
  'Batman on date 01.08.2018',
  'Fast and Furious directed by Rob Cohen',
  'add movie Fast and Furious',
  'Fast and Furious directed by Rob Cohen'
])
