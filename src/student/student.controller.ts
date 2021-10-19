import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { CreateStudentDto, FindStudentResponseDto, StudentResponseDto, UpdateStudentDto } from "./dto/student.dto";
import { StudentService } from "./student.service";

@Controller('students')
export class StudentController {
    constructor(private readonly studentService: StudentService) {

    }

    @Get()
    getStudents(): FindStudentResponseDto[] {
        return this.studentService.getStudents();
    }

    @Get('/:studentId')
    getStudentById(@Param() params): FindStudentResponseDto {
        return this.studentService.getStudentById(params.studentId);
    }

    @Post()
    createStudent(@Body() body: CreateStudentDto): StudentResponseDto {
        return this.studentService.createStudent(body);
    }

    @Put('/:studentId')
    updateStudentById(@Param() params, @Body() body: UpdateStudentDto): StudentResponseDto {
        return this.studentService.updateStudentById(params.studentId, body);
    }
}