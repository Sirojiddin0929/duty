function najot(words, x) {
    let natija = []
    for (let i = 0; i < words.length; i++) {
        if (words[i].includes(x)) {
            natija.push(i)
        }
    }
    return natija
}
console.log(najot(["leet","code"], "e"))
console.log(najot(["abc","bcd","aaaa","cbc"], "a"))
console.log(najot(["abc","bcd","aaaa","cbc"], "z"))
