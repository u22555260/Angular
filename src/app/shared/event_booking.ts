export interface Event_Booking {
    event_BookingID: Number;
    event_date: Date;
    event_Price: number;
    start_time: Date;
    end_time: Date;
    booking_Status: string;
    event_Status: string;
    allergy_description: string;
    event_type_Id: number;
    client_Id: number;
    Employee_Id: number;
}