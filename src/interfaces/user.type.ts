export interface IUserType {
    firstname: string;
    lastname: string;
    email: string;
    birthday: string;
    password: string;
    is_super: boolean;
    city: string;
    province: string;
    country: string;
    address: string;
}

/*  Laravel Validation Rules
    'firstname' => 'required|string|min:2|max:255',
    'lastname'  => 'required|string|min:2|max:255',
    'email'     => 'required|email|unique:users,email',
    'birthday'  => 'required|date',
    'password'  => 'required|string|min:8|max:255',
    'is_super'  => 'required|boolean',
    'city'      => 'required|string|min:2|max:255',
    'province'  => 'required|string|min:2|max:255',
    'country'   =>  'required|string|min:2|max:255',
    'address'   => 'required|string|min:2|max:255'
*/