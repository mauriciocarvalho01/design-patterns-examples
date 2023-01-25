class Singleton {
    private countCalls: number = 0;
    constructor() {
        this.countCalls++
    }
    anyMethod(): void {
        console.log(`Calls: ${this.countCalls}`)
        console.log("anyMethod")
    }
}

const singleton = new Singleton()

export default singleton
