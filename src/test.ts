class GetObj<T> {
  constructor(private name: T) {}
  getName(): string {
    return this.name + ''
  }
}
const a = '123'
// const obj = new GetObj('joes')
