function byTwo (number) {
  console.log(number * 2)
}

function grades (grade) {
  let result
  grade < 5.50 ? result = 'Not excellent' : result = 'Excellent'
  console.log(result)
}

function fromOneToFive () {
  let number = 1
  while (number <= 5) {
    console.log(number)
    number++
  }
}

function fromNToOne (n) {
  while (n >= 1) {
    console.log(n)
    n--
  }
}

function fromMtoN (m, n) {
  while (m >= n) {
    console.log(m)
    m--
  }
}

function studentInfo (name, age, grade) {
  console.log(`Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`)
}

function monthPrinter (number) {
  let months = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December'
  }

  let month = months[number]

  if (month) {
    console.log(month)
    return
  }
  console.log('Error!')
}

function devisibleByThree () {
  for (let i = 3; i < 100; i += 3) {
    console.log(i)
  }
}

function foreignLanguages (country) {
  let countries = {
    USA: 'English',
    England: 'English',
    Mexico: 'Spanish',
    Argentina: 'Spanish',
    Spain: 'Spanish'
  }

  let language = countries[country]
  if (language) {
    console.log(language)
    return
  }
  console.log('unknown')
}

function theatre (day, age) {
  let person

  if (age >= 0 && age <= 18) {
    person = 'underAge'
  } else if (age > 18 && age <= 64) {
    person = 'adult'
  } else if (age > 64 && age <= 122) {
    person = 'retired'
  } else {
    console.log('Error!')
    return
  }

  let tickets = {
    underAge: {
      Weekday: 12,
      Weekend: 15,
      Holiday: 5
    },
    adult: {
      Weekday: 18,
      Weekend: 20,
      Holiday: 12
    },
    retired: {
      Weekday: 12,
      Weekend: 15,
      Holiday: 10
    }
  }
  console.log(`${tickets[person][day]}$`)
}

function oddSum (n) {
  let sum = 0
  for (let i = 1; i <= n * 2; i += 2) {
    console.log(i)
    sum += i
  }
  console.log(`Sum: ${sum}`)
}

function mTable (number) {
  for (let i = 1; i <= 10; i++) {
    console.log(` ${number} X ${i} = ${number * i}`)
  }
}


