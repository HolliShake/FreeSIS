export interface ISchoolSubscriptionType {
    school_id: number;
    plan_id: number;
    payment_date: string;
}

/*  Laravel Validation Rules
    'school_id'    => 'required|exists:school,id',
    'plan_id'      => 'required|exists:plan,id',
    'payment_date' => 'date',
*/