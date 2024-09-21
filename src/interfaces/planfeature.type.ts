export interface iPlanFeatureType {
    plan_id: number;
    description: string;
    is_enabled: boolean;
}

/*  Laravel Validation Rules
    'plan_id'       => 'required|exists:plan,id',
    'description'   => 'required|string|min:10|max:255',
    'is_enabled'    => 'required|boolean'
*/