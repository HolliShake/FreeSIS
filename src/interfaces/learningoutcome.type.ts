export interface ILearningOutcomeType {
    academic_program_id: number;
    outcome: string;
}

/*  Laravel Validation Rules
    'academic_program_id' => 'required|exists:academic_program,id',
    'outcome'             => 'required|string|min:10|max:255',
*/