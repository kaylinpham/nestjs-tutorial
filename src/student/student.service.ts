import { Injectable, Param } from '@nestjs/common';
import { students } from 'src/db';
import { CreateStudentDto, FindStudentResponseDto, StudentResponseDto, UpdateStudentDto } from './dto/student.dto';

@Injectable()
export class StudentService {
    private students: StudentResponseDto[] = students;

    getStudents(): FindStudentResponseDto[] {
        return this.students;
    }

    getStudentById(studentId: string): FindStudentResponseDto {
        const student = this.students.find(student => student.id === Number(studentId))
        return student;
    }

    createStudent(payload: CreateStudentDto): StudentResponseDto {
        const newStudent = {
            id: this.students.length + 1,
            ...payload
        }

        this.students.push(newStudent);
        return newStudent;
    }

    updateStudentById(studentId: string, payload: UpdateStudentDto): StudentResponseDto {
        let student = this.students.find(student => student.id === Number(studentId))
        student = { ...student, ...payload }

        return student;
    }

    getStudentsByTeacherId(teacherId: number): FindStudentResponseDto[] {
        return this.students.filter(student => student.teacher === teacherId)
    }

    updateStudentTeacher(teacherId: string, studentId: string): StudentResponseDto {
        let student = this.students.find(student => student.id === Number(studentId) && student.teacher === Number(teacherId))
        return student;
    }
}
