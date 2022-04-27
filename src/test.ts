class GetObj<T> {
  constructor(private name: T) {}
  getName(): string {
    return this.name + ""
  }
}
// const obj = new GetObj('joes')
