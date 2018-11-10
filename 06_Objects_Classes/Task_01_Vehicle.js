class Vehicle {
  constructor (type, model, parts, fuel) {
    this.model = model
    this.type = type
    this.parts = {
      engine: parts.engine,
      power: parts.power,
      quality: parts.engine * parts.power
    }
    this.fuel = fuel
  }

  drive (loss) {
    this.fuel -= loss
  }
}
let parts = {
  engine: 6,
  power: 100
}
let vehicle = new Vehicle('a', 'b', parts, 200)
vehicle.drive(100)
console.log(vehicle.fuel)
console.log(vehicle.parts.quality)
