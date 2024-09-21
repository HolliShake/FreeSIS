
export interface IAcademicProgramCareerDetailType {
    academic_program_id: number;
    career_id: number;
}

/*  Laravel Validation Rules
    'academic_program_id' => 'required|exists:academic_program,id',
    'career_id'           => 'required|exists:career,id'
*/