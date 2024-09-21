export interface IBuildingType {
    campus_id: number;
    name: string;
    code: string;
    floors: number;
    lat: number;
    lng: number;
}

/*  Laravel Validation Rules
    'campus_id' => 'required|exists:campus,id',
    'name'      => 'required|string|min:10|max:255',
    'code'      => 'required|string|min:5|max:25',
    'floors'    => 'required|numeric',
    'lat'       => 'required|numeric',
    'lng'       => 'required|numeric'
*/