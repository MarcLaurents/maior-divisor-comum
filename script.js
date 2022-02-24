const euclides = (m, n) => {
  var r = n
  if (r == 0) {
    return m
  } else {
    r = m % n
    m = n
    n = r
    return euclides(m, n)
  }
}

console.log(euclides(25, 5))
