export interface Order {
    orderId: number;
    order_Description: string;
    order_Date: Date;
    order_Status: string;
    supplierId: Number;
    supplier: string;
    employeeId: Number;
    shiftId: Number;
    employee: string;
    shift_Date: Date;
    shift_Time: Date;
}