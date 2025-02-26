const fs = require("fs")

//console.log(fs)

console.log("Starting")
fs.writeFile("uttaran2.txt", "Uttaran is a good boy.", ()=>{
    console.log("Done")
    fs.readFile("uttaran1.txt", (error, data)=>{
        console.log(error, data.toString())
    })
})
console.log("Ending")