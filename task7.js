function kvadratNumber(n) {
    return Number(
        String(n)
        .split("")
        .map(d => d * d)
        .join("")
    )
}
console.log(kvadratNumber(3221))
console.log(kvadratNumber(3219))
