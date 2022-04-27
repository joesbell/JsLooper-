class GetObj<T> {
  constructor(private name: T) {}
  getName(): string {
    return this.name + ''
  }
}
const a = '567890'
// const obj = new GetObj('joes')
