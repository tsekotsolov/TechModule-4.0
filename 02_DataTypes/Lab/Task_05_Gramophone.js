function grampohone (band, album, song) {
  let songDuration = album.length * band.length * song.length / 2

  console.log(`The plate was rotated ${Math.ceil(songDuration / 2.5)} times.`)
}

grampohone('Black Sabbath', 'Paranoid', 'War Pigs')
