class Magic {
    replace(str, a, b) {
        return str.split(a).join(b)
    }
    length(data) {
        return String(data).length
    }
    toUpperCase(str) {
        let natija= ""
        let obj = {
            "a":"A","b":"B","c":"C","d":"D","e":"E","f":"F",
            "g":"G","h":"H","i":"I","j":"J","k":"K","l":"L",
            "m":"M","n":"N","o":"O","p":"P","q":"Q","r":"R",
            "s":"S","t":"T","u":"U","v":"V","w":"W","x":"X",
            "y":"Y","z":"Z"
        }
        for (let i of str) {
            natija += obj[i] || i
        }
        return natija
    }
    repeat(data, n) {
        return Array(n).fill(data).join(" ")
    }
    count(str) {
        let obj = {}
        for (let i of str) {
            obj[i] = (obj[i] || 0) + 1
        }
        return obj
    }
}
let magic = new Magic()
console.log(magic.replace("salom", "a", "o"))
console.log(magic.length(12345))
console.log(magic.toUpperCase("hello"))
console.log(magic.repeat("salom", 2))
console.log(magic.count("hello world"))
