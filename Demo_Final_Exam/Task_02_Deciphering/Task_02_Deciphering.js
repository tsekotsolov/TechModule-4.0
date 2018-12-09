function solve (input) {
  const encodedMessage = input[0]
  const [ template, replacement ] = input[1].split(' ')
  const validator = /^[d-z{}|#]+$/gm

  if (!validator.test(encodedMessage)) {
    console.log('This is not the book you are looking for.')
    return
  }

  let semiDecodedMessage = ''
  for (const encodedSymbol of encodedMessage) {
    const charCode = encodedSymbol.charCodeAt(0)
    const decodedSymbol = String.fromCharCode(charCode - 3)
    semiDecodedMessage += decodedSymbol
  }

  const templateRegex = new RegExp(template, 'g')
  const decodedMessage = semiDecodedMessage.replace(templateRegex, replacement)

  // or without Regex
  // const decodedMessage = semiDecodedMessage.split(template).join(replacement)
  console.log(decodedMessage)
}

solve([ 'wkhfn#|rx#jhqfkr#phf#exw#|rxu#uholf#lv#khfgohg#lq#hfrwkhu#sohfhw', 'ec an' ])
solve(['arx#vkdww#qrw#sdvv', 't l'])
