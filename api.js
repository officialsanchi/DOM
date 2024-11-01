let userDetails ={
    firstName: "chidinma",
    lastName : "obioma",
    sex : "female",
    age : "16"
}
let result = JSON.stringify(userDetails);
console.log(result)


let data  = '{"firstName": "chidinma","lastName" : "obioma", "sex": "female", "age":"16"}';

let answer = JSON.parse(data)
console.log(answer)

async/await
