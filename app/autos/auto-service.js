function AutoService() {

  var url = 'https://inspire-server.herokuapp.com/api/banana'

  this.getCarData = function getCarData(cb) {
    $.get('https://vpic.nhtsa.dot.gov/api//vehicles/GetModelsForMake/honda?format=json')
    $.get('https://vpic.nhtsa.dot.gov/api//vehicles/GetVehicleTypesForMake/mercedes?format=json')
      .then(cb)

  }


  this.getHondaModel = function getHondaModel(hondaModel, cb) {
    $.get(hondaModel)
      .then(cb)
  }

  this.getMercedesModel = function getMercedesModel(mercedesModel, cb) {
    $.get(mercedesModel)
      .then(cb)
  }
  //Private
  var cars = []
  var conditions = ['"new"', 'like-new', 'fair', 'poor', 'project-car']

  function Car(formData) {
    this.make = formData.make;
    this.year = formData.year;
    this.model = formData.model;
    this.miles = formData.years;
    this.color = formData.color;
    this.price = formData.price;
  }

  this.getCarsForm = function getCarsForm(cb) {
    $.get(url + 'cars-chuck')
      .then(function (cars) {
        localCars = cars
        cb(localCars)
      })
  }

  this.makeCar = function (formData, cb) {
    var car = new Car(formData)
    $.post(url + 'cars', car)
      .then(res => {
        localCars.unshift(res.data)
        cb(localCars)
      })
  }

  this.editCar = function editCar(formData, cb) {
    $.ajax({
      url: url + 'cars/' + formData.id.value,
      method: 'PUT',
      data: new Car(formData)
    })
      .then(res => {
        this.getCarsForm(cb)
      })

  }

  this.removeCar = function removeCar(id, cb) {
    $.ajax({
      url: url + 'cars/' + id,
      method: 'DELETE'
    })
      .then(res => {
        this.getCarsForm(cb)
      })
  }


  //Public
  this.getCars = function getCars() {
    return JSON.parse(JSON.stringify(cars))
  }

  this.addCar = function addCar(car) {
    var newCar = new Car(car.make, car.year, car.model, car.price, car.condition, car.img)
    cars.push(newCar)
  }

  //deleteCar?


  
  cars.push(new Car('Chevy', 1998, 'Blazer', 7800, 2, 'https://media.ed.edmunds-media.com/chevrolet/blazer/1998/oem/1998_chevrolet_blazer_4dr-suv_lt_fq_oem_1_500.jpg'))
  cars.push(new Car('Pontiac', 2001, 'Firebird', 7200, 1, "http://images.gtcarlot.com/pictures/50004306.jpg"))
  cars.push(new Car('Ford', 1990, 'Probe', 200, 4, "https://farm8.static.flickr.com/7555/15730606300_3bf485543c_b.jpg"))
  cars.push(new Car('Toyota', 1992, 'MR2', 18000, 0, "https://www.lamborghini.com/sites/it-en/files/DAM/it/models_gateway/blocks/special.png"))
}