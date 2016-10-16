import { Person } from './Person'

export class Student implements Person {
  readonly fullName: string
  constructor(
    readonly firstName: string,
    readonly middleInitial: string,
    readonly lastName: string
  ) {
    this.fullName = `${firstName} ${middleInitial} ${lastName}`
  }
}
