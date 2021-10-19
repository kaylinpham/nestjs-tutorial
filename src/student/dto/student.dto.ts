export class CreateStudentDto {
    name: string;
    teacher: number;
}

export class UpdateStudentDto {
    name: string;
    teacher: number;
}

export class FindStudentResponseDto {
    id: number;
    name: string;
    teacher: number
}

export class StudentResponseDto {
    id: number;
    name: string;
    teacher: number
}