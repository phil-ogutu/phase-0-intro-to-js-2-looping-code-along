// Code your solutions in this file
let names = ["John", "James", "Alice"]
function writeCards(names){
    let messages = []
    for(let i = 0; i < names.length; i++){
        messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }
    return messages
}
writeCards(names)

function countDown(number){
    while(number>=0){
        console.log(number)
        number--
    }
}

countDown(10)
