// Code your solutions in this file
writeCards = (list, reason) => {
  let thankYous = []
  for (let i = 0; i < list.length; i++) {
    thankYous.push(`Thank you, ${list[i]}, for the wonderful ${reason} gift!`)
  }
  return thankYous
}

names = ["Chris", "Amanda", "Izzy"]

writeCards(names, "birthday")
