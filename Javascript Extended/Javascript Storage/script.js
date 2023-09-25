localStorage.setItem("name", "Bob")
console.log(localStorage.getItem("name"))
console.log(localStorage.getItem("name2"))
localStorage.removeItem("name")

sessionStorage.setItem("name", "Bob")
console.log(sessionStorage.getItem("name"))
sessionStorage.setItem("name", "Martin")
console.log(sessionStorage.getItem("name"))
sessionStorage.removeItem("name")

document.cookie = `name=Kevin; expires=${new Date(2024, 0, 1).toUTCString()}`
document.cookie = `lastName=Smith; expires=${new Date(9999, 0, 1).toUTCString()}`

console.log(document.cookie) 