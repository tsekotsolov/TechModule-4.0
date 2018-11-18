function solve (input) {
  const firstHalf = input.substring(0, input.length / 2)
    .split('')
    .reverse()
    .join('')
  const secondHalf = input.substring(input.length / 2)
    .split('')
    .reverse()
    .join('')

  console.log(firstHalf)
  console.log(secondHalf)
}
solve('tluciffiDsIsihTgnizamAoSsIsihT')
solve('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')
