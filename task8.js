class Box {
    constructor(length, width, height) {
        this.length = length
        this.width = width
        this.height = height
    }
    getVolume() {
        return this.length * this.width * this.height
    }
}
function totalVolume(...boxes) {
    return boxes.reduce((sum, box) => sum + box.getVolume(), 0)
}
let b1 = new Box(2, 3, 4)
let b2 = new Box(1, 1, 10)
console.log("Bitta qutining hajmi:", b1.getVolume())
console.log("Umumiy hajm:", totalVolume(b1, b2))
