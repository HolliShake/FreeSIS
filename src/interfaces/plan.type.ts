export interface IPlanType {
    name: string;
    description: string;
    price: number;
}

/*  Laravel Validation Rules
    'name'          => 'required|string|min:10|max:255',
    'description'   => 'required|string|min:10|max:255',
    'price'         => 'required|numeric',
*/