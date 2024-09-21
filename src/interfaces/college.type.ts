

export interface ICollegeType {
    campus_id: number;
    name: string;
    code: string;
}

/*  Laravel Validation Rules
    'campus_id' => 'required|exists:campus,id',
    'name'      => 'required|string|min:10|max:255',
    'code'      => 'required|string|min:5|max:25',
*/