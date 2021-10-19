import { Injectable } from '@nestjs/common';
import { teachers } from 'src/db';
import { FindTeacherResponseDto } from './dto/teacher.dto';

@Injectable()
export class TeacherService {
    private teachers: FindTeacherResponseDto[] = teachers;

    getTeachers(): FindTeacherResponseDto[] {
        return this.teachers;
    }

    getTeacherById(teacherId: number): FindTeacherResponseDto {
        const teacher = this.teachers.find(teacher => teacher.id === teacherId);
        return teacher;
    }
}
