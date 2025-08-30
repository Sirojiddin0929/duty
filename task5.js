class BankAccount {
    constructor(ownerName, accountNumber, balance = 0) {
        this.ownerName = ownerName
        this.accountNumber = accountNumber
        this.balance = balance
    }
    deposit(amount) {
        this.balance += amount
        console.log(`${amount} so'm qo'shildi. Yangi balans: ${this.balance}`)
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Yetarli mablag yoq!")
        } else {
            this.balance -= amount
            console.log(`${amount} so'm yechildi. Yangi balans: ${this.balance}`)
        }
    }
    showBalance() {
        console.log(`Joriy balans: ${this.balance}`)
    }
}
let acc1 = new BankAccount("Ali", 1001)
let acc2 = new BankAccount("Vali", 1002, 500)
acc1.deposit(200)
acc1.withdraw(50)
acc1.showBalance()

acc2.deposit(300)
acc2.withdraw(1000)
acc2.showBalance()
