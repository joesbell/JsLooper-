class GetObj<T> {
  constructor(private name: T) {}
  getName(): string {
    return this.name + 'hellowrold'
  }
}
// const obj = new GetObj('joes')
