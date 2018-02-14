function AutoController() {
  //private
  var autoService = new AutoService()

  var carModelsElem = document.getElementById('carModels')
  var carQueryElem = document.getElementById('carQuery')
  var returnMakeElem = document.getElementById('returnMake')
  var returnModelElem = document.getElementById('returnModel')

  // this.findHondaModel = function findHondaModel(e) {
  //   var hondaModel = event.target.value
  //   autoService.getHondaModel(hondaModel, drawModel)
  // }

  // this.findMercedesModel = function findMercedesModel(e) {
  //   var MercedesModel = event.target.value
  //   autoService.getMercedesModel(mercedesModel, drawModel)
  // }

  this.findCarModel = function findCarModel(e) {
    var model = event.target.value
    autoService.getHondaModel(hondaModel, drawModel)
    autoService.getMercedesModel(mercedesModel, drawModel)
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
      if (typeof res[key] == 'string'){
        template +=`
        <div>
        <p>${key}: ${res[key]}</p>
        </div>
        `
      }
    }
    returnMakeElem.innerHTML = template
    returnMakeElem.classList.remove('hidden')
  }

  function draw(res) {
    var template = '<select onchange="app.controllers.autoCtrl.findCarModel(event)">'
    for (let i = 0; i < res.results.length; i++) {
      var result = res.results[i];
      console.log(result)
      template += `<option value="${result.url}">${result.name}>/div>`      
    }
    template +=`</select>`

    carModelsElem.innerHTML = template
    carModelsElem.classList.remove('hidden')
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
      const car = carArr[i];
      template += `
      <div class="col-sm-3">
        <img src="${car.img}">
        <p>${car.make}</p>
        <p>${car.model}</p>
        <p>${car.price}</p>
      </div>
      `
    }
    document.getElementById('board').innerHTML = template
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

}