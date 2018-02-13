function AutoService() {

  //Private
  var cars = []
  var conditions = ['"new"', 'like-new', 'fair', 'rust-bucket', 'you got a tow truck?']

  function Car(make, year, model, price, condition, img) {
    this.make = make
    this.year = year
    this.model = model
    this.price = price
    this.condition = conditions[condition]
    this.img = img
  }


  //Public
  this.getCars = function getCars() {
    return JSON.parse(JSON.stringify(cars))
  }

  this.addCar = function addCar(carObj) {
    var newCar = new Car(carObj.make, carObj.year, carObj.model, carObj.price, carObj.condition, carObj.img)
    cars.push(newCar)
  }

  //deleteCar?


  console.log("Service is up and running")
  cars.push(new Car('Chevy', 1998, 'Blazer', 7800, 2, 'https://media.ed.edmunds-media.com/chevrolet/blazer/1998/oem/1998_chevrolet_blazer_4dr-suv_lt_fq_oem_1_500.jpg'))
  cars.push(new Car('Pontiac', 2001, 'Firebird', 7200, 1,"http://images.gtcarlot.com/pictures/50004306.jpg"))
  cars.push(new Car('Ford', 1990, 'Probe', 200, 4,"https://farm8.static.flickr.com/7555/15730606300_3bf485543c_b.jpg"))
  cars.push(new Car('Toyota', 1992, 'MR2', 18000, 0,"https://www.lamborghini.com/sites/it-en/files/DAM/it/models_gateway/blocks/special.png"))
}