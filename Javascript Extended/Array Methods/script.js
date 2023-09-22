const products = [
    { name: "Lamp", price: 25 },
    { name: "Refridgerator", price: 500 },
    { name: "Book", price: 10 },
    { name: "Chair", price: 50 },
    { name: "Globe", price: 30 }
]

const filteredProducts = products.filter((product) => {
    return product.price <= 50
})

const productNames = products.map((product) => {
    return product.name;
})

const foundItem = products.find((product) => {
    return product.name == "Book";
})

console.log(products)
console.log(filteredProducts)
console.log(productNames)
console.log(foundItem)

products.forEach((product) => {
    console.log(`${product.name} - ${product.price}$`);
})