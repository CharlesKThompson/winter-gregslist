function AutoController(){
//private
  var autoService = new AutoService()


  function draw(){
    var carArr = autoService.getCars()
    var template = ''
    for (let i = 0; i < carArr.length; i++) {
      const car = carArr[i];
      template+=`
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


  this.addCar = function addCar(event){
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
    draw()
  }




  console.log("Controller is up and running")

  draw()




}