export interface ICurriculumType {
    academic_program_id: number;
    name: string;
    code: string;
    start_date: string;
    end_date: string;
}

/*  Laravel Validation Rules
    'academic_program_id' => 'required|exists:academic_program,id',
    'name'                => 'required|string|min:10|max:255',
    'code'                => 'required|string|min:5|max:25',
    'start_date'          => 'date',
    'end_date'            => 'date',
*/