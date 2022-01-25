var firstName = "Manu";
const week = ["Monday", "Tuesday"];
week.push('Wednesday');
console.log(week);


const me = {
    firstName: "Manu",
    lastName: "Druart"
};

me.firstName = "Jacky"

console.log(me);

const key = "lastName";

console.log(me[key]); 

if(key === "lastName") {
    let kiss = "bisous";
    console.log(kiss);
};

// ============================================================================ //

const beers = [
    {
        name: "Triple Karmeleit",
        type: "Blonde",
        price: 4.20,
        degree: 8,
        country: ['Belgium', 'USA']
    },
    {
        name: "Orval",
        type: "Ambrée",
        price: 5,
        degree: 6,
        country: ['Belgium', 'Russia']
    },
    {
        name: "Duvel",
        type: "Blonde",
        price: 5.5,
        degree: 7.5,
        country: ['France', 'Japan']
    }
]

const blondBeers = beers.filter(beer => beer.type === 'Blonde');


console.log(blondBeers);

const nameBeers = beers.map(beer => beer.name);
console.log(nameBeers);

beers.forEach(beer => {
    console.log(`${beer.name} est une bière ${beer.type} et elle coûte ${(beer.price * 1.21).toFixed(2)}€ tvac`);
});


// retourner un tableau sans doublon, le -1 s'assure que l'objet n'est pas déja présent dans le tableau 
const countries = [];
for(const beer of beers) {
   // const countries = beer.country.join(', ');
   // console.log(countries);
   beer.country.forEach(country => {
        if (countries.indexOf(country) === -1){
            countries.push(country);
        }
   })
}

console.log(countries);

const tk = beers[0];
const keys = Object.keys(tk)
console.log(keys);

for (const key of keys) {
    console.log(`${key} : ${tk[key]}`);
}

