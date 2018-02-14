function PropertiesService() {

    var properties = []


    function Property( price, footage, year, bedrooms, location, img) {
        this.price = price
        this.footage = footage
        this.year = year
        this.bedrooms = bedrooms
        this.location = location
        this.img = img

    }

    this.getProperties = function getProperties() {
        return JSON.parse(JSON.stringify(properties))
    }

    this.addProperty = function addProperty(propertyObj) {
        var newProperty = new Property()
        properties.push(newProperty)
    }



    properties.push(new Property(215000, 2700, '2018', 4, "Nampa"))
    properties.push(new Property(180000, 1500, "2016", 2, "Corvalis"))
    properties.push(new Property(250000, 2100, "2017", 3, "Seaside"))
    properties.push(new Property(475000, 4800, "2019", 5, "Boulder"))

}