// Code your solutions in this file
writeCards = (list, reason) => {
  for (let i = 0; i < list.length; i++) {
    console.log(`Thank you, ${list[i]}, for the wonderful ${reason} gift!`)
  }
}

names = ["Chris", "Amanda", "Izzy"]

writeCards(names, "birthday")
