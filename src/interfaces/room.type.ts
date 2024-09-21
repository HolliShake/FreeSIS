export interface IRoomType {
    building_id: number;
    name: string;
    code: string;
    capacity: number;
    floorNumber: number;
}

/*  Laravel Validation Rules
    'building_id' => 'required|exists:building,id',
    'name'        => 'required|string|min:10|max:255',
    'code'        => 'required|string|min:5|max:25',
    'capacity'    => 'required|numeric',
    'floorNumber' => 'required|numeric'
*/