interface Car  {
    make: string,
    model: string,
    year: number,
    honk(): string 
}

// add three cares from Car interface
let car: Car[]= [
    {
        make: 'Japan',
        model: 'Toyota',
        year: 2018,
        honk() {
            return `don't honk`
        },
    },
    {
        make: 'German',
        model: 'Audi',
        year: 2020,
        honk() {
            return `don't honk`
        },
    },
    {
        make: 'United Kingdom',
        model: 'Bentley',
        year: 2009,
        honk() {
            return `don't honk`
        },
    }
]

//to print all the information about the car
for(let i in car) {
    console.log(`The information of the car ${car[i].make}, ${car[i].model}, ${car[i].year}`)      
}

//call honk()
for(let i in car) {
    console.log(car[i].honk());
}

//to print the year of the car
for(let i in car) {
    console.log(`The year of the car: ${car[i].year}`)      
}

//to print the model of the car
for(let i in car) {
    console.log(`The model of the car: ${car[i].model}`)      
}