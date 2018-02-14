function PropertiesController() {
    var propertyService = new PropertiesService()

    function drawProperties() {
        var propertyArr = propertyService.getProperties()
        var template = ''
        for (let i = 0; i < propertyArr.length; i++) {
            var property = propertyArr[i];
            template += `
        <div class = "col-sm-3">
        <img src="${property.img}">
        <p>${property.price}</p>
        <p>${property.footage}</p>
        <p>${property.year}</p>
        <p>${property.bedrooms}<p/>
        <p>${property.location}</p>
        </div>
        `
        }
        document.getElementById('board').innerHTML = template
    }

    this.addProperty = function addProperty(event) {
        event.preventDefault();
        var form = event.target

        var propertyObj = {
            price: form.price.value,
            footage: form.footage.value,
            year: form.year.value,
            bedrooms: form.bedrooms.value,
            location: form.location.value,
            img: form.img.value
        }
        propertyService.addProperty(propertyObj)
        document.getElementById('property-form').reset()
        drawProperties()
    }


}