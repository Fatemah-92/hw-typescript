// add three cares from Car interface
var car = [
    {
        make: 'Japan',
        model: 'Toyota',
        year: 2018,
        honk: function () {
            return "don't honk";
        }
    },
    {
        make: 'German',
        model: 'Audi',
        year: 2020,
        honk: function () {
            return "don't honk";
        }
    },
    {
        make: 'United Kingdom',
        model: 'Bentley',
        year: 2009,
        honk: function () {
            return "don't honk";
        }
    }
];
//to print all the information about the car
for (var i in car) {
    console.log("The information of the car ".concat(car[i].make, ", ").concat(car[i].model, ", ").concat(car[i].year));
}
//call honk()
for (var i in car) {
    console.log(car[i].honk());
}
//to print the year of the car
for (var i in car) {
    console.log("The year of the car: ".concat(car[i].year));
}
//to print the model of the car
for (var i in car) {
    console.log("The model of the car: ".concat(car[i].model));
}
