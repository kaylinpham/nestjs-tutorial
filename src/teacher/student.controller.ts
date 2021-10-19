import { Controller, Get, HttpStatus, Param, ParseIntPipe, Put } from '@nestjs/common';
import { teachers } from 'src/db';
import { FindStudentResponseDto, StudentResponseDto } from 'src/student/dto/student.dto';
import { StudentService } from 'src/student/student.service';
import { FindTeacherResponseDto } from './dto/teacher.dto';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
    constructor(private readonly studentService: StudentService) { }

    @Get()
    getStudents(@Param('teacherId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.BAD_REQUEST })) teacherId: number): FindStudentResponseDto[] { return this.studentService.getStudentsByTeacherId(teacherId) }

    @Put('/:studentId')
    updateStudentTeacher(@Param() params): StudentResponseDto { return this.studentService.updateStudentTeacher(params.teacherId, params.studentId) }
}
