
export interface ICampusType {
    school_id: number;
    name: string;
    code: string;
    address: string;
    lat: number;
    lng: number;
}

/*  Laravel Validation Rules
    'school_id' => 'required|exists:school,id',
    'name'      => 'required|string|min:10|max:255',
    'code'      => 'required|string|min:5|max:25',
    'address'   => 'required|string|min:10|max:255',
    'lat'       => 'required|numeric',
    'lng'       => 'required|numeric'
*/ 