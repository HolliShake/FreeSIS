export interface ISchoolType {
    user_id: number;
    name: string;
    code: string;
    address: string;
    country: string;
    city: string;
}

/*  Laravel Validation Rules
    'user_id' => 'required|exists:user,id',
    'name'    => 'required|string|min:10|max:255',
    'code'    => 'required|string|min:5|max:25',
    'address' => 'required|string|min:10|max:255',
    'country' => 'required|string',
    'city'    => 'required|string'
*/