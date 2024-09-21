

export interface IAcademicProgramType {
    college_id: number;
    name: string;
    code: string;
    description: string;
}

/* Laravel Validation Rules
    'college_id'  => 'required|exists:college,id',
    'name'        => 'required|string|min:10|max:255',
    'code'        => 'required|string|min:5|max:25',
    'description' => 'required|string|min:10|max:255'
*/