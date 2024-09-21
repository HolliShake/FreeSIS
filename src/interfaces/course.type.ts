export interface ICourseType {
    academic_program_id: number;
    name: string;
    code: string;
    description: string;
    credit_unit: number;
    lab_unit: number;
    lec_unit: number;
    with_laboratory: boolean;
    is_elective: boolean;
}

/*  Laravel Validation Rules
    'academic_program_id' => 'required|exists:academic_program,id',
    'name'                => 'required|string|min:10|max:255',
    'code'                => 'required|string|min:5|max:25',
    'description'         => 'required|string|min:10|max:255',
    'credit_unit'         => 'required|numeric',
    'lab_unit'            => 'required|numeric',
    'lec_unit'            => 'required|numeric',
    'with_laboratory'     => 'required|boolean',
    'is_elective'         => 'required|boolean'
*/