function AutoController() {
  //private
  var autoService = new AutoService()
  var localCars = []

  var carModelsElem = document.getElementById('carModels')
  var carQueryElem = document.getElementById('carQuery')
  var returnMakeElem = document.getElementById('returnMake')
  var returnModelElem = document.getElementById('returnModel')

  var carsElem = document.getElementById('cars-here')


  // this.findHondaModel = function findHondaModel(e) {
  //   var hondaModel = event.target.value
  //   autoService.getHondaModel(hondaModel, drawModel)
  // }

  // this.findMercedesModel = function findMercedesModel(e) {
  //   var MercedesModel = event.target.value
  //   autoService.getMercedesModel(mercedesModel, drawModel)
  // }

  this.findCarModels = function findCarModels(e) {
    var model = event.target.value
    autoService.getHondaModel(model, drawModel)
    autoService.getMercedesModel(model, drawModel)
  }

  carQueryElem.addEventListener('change', function (event) {
    returnMakeElem.classList.add('hidden')
    var query = event.target.value
    autoService.getCarData(query, draw)
  })

  function drawModel(res) {
    console.log(res)
    var template = ``
    for (var key in res) {
      if (typeof res[key] == 'string') {
        template += `
        <div>
        <p>${key}: ${res[key]}</p>
        </div>
        `
      }
    }
    returnMakeElem.innerHTML = template
    returnMakeElem.classList.remove('hidden')
  }

  function draw(cars) {
    function draw(cars) {
      var template = ''
      if (cars.length < 1) {
        carsElem.innerHTML = '<h3>Sorry.... no listings at this time check back soon.</h3>'
        return
      }
      cars.forEach(car => {
        template += `
          <div class="card p-1 flex space-between">
              <div class="details">
                  ${car.make} - ${car.model}
              </div>
              <div>
                                  <i onclick="globals.app.controllers.carCtrl.showEditCarForm('${car.id}')" class="action fa fa-fw fa-lg fa-pencil text-blue"></i> 
                  <i onclick="globals.app.controllers.carCtrl.removeCar('${car.id}')" class="action fa fa-fw fa-lg fa-trash text-red"></i>
              </div>

              <form id="edit-${car.id}" class="hidden" onsubmit="globals.app.controllers.carCtrl.editCar(event)">
      <div class="form-group hidden">
        <label for="id">id:</label>
        <input type="text" name="id" class="form-control" required value="${car.id}" readonly>
      </div>
              <div class="form-group">
        <label for="make">Make:</label>
        <input type="text" name="make" class="form-control" value="${car.make}" required>
      </div>
      <div class="form-group">
        <label for="model">Model:</label>
        <input type="text" name="model" class="form-control" value="${car.model}" required>
      </div>
      <div class="form-group">
        <label for="year">Year:</label>
        <input type="text" name="year" class="form-control" value="${car.year}" required>
      </div>
      <div class="form-group">
        <label for="color">color:</label>
        <input type="text" name="color" class="form-control" value="${car.color}">
      </div>
      <div class="form-group">
        <label for="price">Price:</label>
        <input type="text" name="price" class="form-control" value="${car.price}" required>
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-success">Update Car</button>
        <button type="reset" class="btn btn-danger red">Clear</button>
      </div>
    </form>
          </div>
          `
      })

      carsElem.innerHTML = template
    }
    getCars()
  }

  function drawCarsContent() {
    template += `
    <div class="row">
          <div class="col-sm-6">
            <form onsubmit="app.controllers.autosCtrl.addCar(event)" id="car-form">
              <input type="text" name='make' placeholder='Make'>
              <input type="text" name='model' placeholder='model'>
              <input type="number" name='year' placeholder='year'>
              <input type="number" name="price" placeholder="NAME YER PRICE">
              <input type="url" name="img" placeholder="image link">
              <div class="form-group">
                <label for="condition">condition</label>
                <select class="form-control" id="condition" name="condition">
                  <option value="0">"new"</option>
                  <option value="1">like new</option>
                  <option value="2">fair</option>
                  <option value="3">rust-bucket</option>
                  <option value="4">you got a tow truck?</option>
                </select>
              </div>
              <button type="submit">Submitt</button>
            </form>
          </div>
        </div>
      </div>
      `
    document.getElementById('carsContent').innerHTML = template

  }
  function drawCars() {
    var carArr = autoService.getCars()
    var template = ''
    for (let i = 0; i < carArr.length; i++) {
      var car = carArr[i];
      template += `
      <div class="col-sm-3">
        <p>${car.MakeId}
        <p>${car.MakeName}</p>
        <p>${car.VehicleTypeId}</p>
        <p>${car.VehicleTypeName}</p>
      </div>
      `
    }
    document.getElementById('board').innerHTML = template
    drawCars()
  }


  this.addCar = function addCar(event) {
    event.preventDefault();
    var form = event.target
    //carObj.make, carObj.year, carObj.model, carObj.price, carObj.condition, carObj.img
    var carObj = {
      make: form.make.value,
      year: form.year.value,
      model: form.model.value,
      price: form.price.value,
      condition: form.condition.value,
      img: form.img.value
    }
    autoService.addCar(carObj)
    document.getElementById('car-form').reset()
    drawCars()
  }

  function getCarsForn() {
    autoService.getCarsForm(draw)
  }

  this.makeCar = function (event) {
    event.preventDefault()
    var form = event.target
    autoService.makeCar(form, draw)
    form.reset()
  }

  this.removeCar = function removeCar(id) {
    autoService.removeCar(id, draw)
  }

  this.showEditCarForm = function showEditCarForm(id) {
    var form = document.getElementById('edit-' + id)
    form.classList.remove('hidden')
  }

  this.editCar = function editCar(event) {
    event.preventDefault()
    autoService.editCar(event.target, draw)
  }

}