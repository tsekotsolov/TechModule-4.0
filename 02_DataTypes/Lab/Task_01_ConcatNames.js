function concatNames (firstName, lastName, delimiter) {
  console.log(Object.values(arguments).slice(0, -1).join(delimiter))
}
