import { Student } from './example/student'
import { Person } from './example/person'

export * from './example/person'
export * from './example/student'

export class Teacher implements Person {
  private readonly students: Student[] = []
  constructor(
    readonly firstName: string,
    readonly lastName: string
  ) { } // tslint:disable-line

  addStudent(student: Student): void {
    this.students.push(student)
  }
}
