// Code your solutions in this file
writeCards = (list, reason) => {
  let thankYous = []
  for (let i = 0; i < list.length; i++) {
    thankYous.push(`Thank you, ${list[i]}, for the wonderful ${reason} gift!`)
  }
  return thankYous
}

countDown = (num) => {
  let i = 12
  while (num >= 0) {
    console.log(num[i]);
    i--;
  }
}

countDown(13)
