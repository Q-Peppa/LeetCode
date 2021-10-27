let e = 0
for (; e < 100; e++) {
  let b = true
  if (e <= 3 && e > 1) {
    console.log(e)
  }

  if (e % 2 === 0 || e % 3 === 0) {
    b = false
    continue
  }
  for (var t = 5; t * t <= e; t += 6) if (e % t === 0 || e % (t + 2) === 0) {
    b = false
    continue
  }

  b &&　console.log(e)
}



