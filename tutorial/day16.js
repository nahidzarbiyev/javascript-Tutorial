{
  "users"[
    ({
      firstName: "Asabeneh",
      lastName: "Yetayeh",
      age: 250,
      email: "asab@asb.com",
    },
    {
      firstName: "Alex",
      lastName: "James",
      age: 25,
      email: "alex@alex.com",
    },
    {
      firstName: "Lidiya",
      lastName: "Tekle",
      age: 28,
      email: "lidiya@lidiya.com",
    })
  ];
}

 let sampleJson =  `[
    {
        "name":"Nahid",
        "surname":"Zarbiyev"
    },
    {
        "name":"Valeh",
        "surname":"Zarbiyev"
    },
    {
        "name":"Zahid",
        "surname":"Zarbiyev"
    }

]`


let categories = [
    {
        name:'css',
        count:5
    },
    {
        name:'js',
        count:6
    }
]

try {
    let users = JSON.parse(sampleJson, (key, value)=>{
 return key === 'name' ? value.toUpperCase() : value
    })
console.log(users)
} catch (error) {
    console.log(error);
}

let categoriesJSON = JSON.stringify(categories, ["count"], 4)
console.log(categoriesJSON)