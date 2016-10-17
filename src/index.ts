import { Student } from './example/Student'
import { Person } from './example/Person'

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
