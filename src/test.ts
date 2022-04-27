class GetObj<T> {
  constructor(private name: T) {}
  getName(): string {
    return this.name + ''
  }
}
const a = '324676'
// const obj = new GetObj('joes')
