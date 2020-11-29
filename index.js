// Code your solutions in this file
writeCards = (list, reason) => {
  thankYous = []
  for (let i = 0; i < list.length; i++) {
    console.log(`Thank you, ${list[i]}, for the wonderful ${reason} gift!`)
  }
  return thankYous
}

names = ["Chris", "Amanda", "Izzy"]

writeCards(names, "birthday")
