import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { InventoryVM } from '../shared/inventoryvm';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  readonly apiUrl = 'https://localhost:7108/api/';


  constructor(private httpClient: HttpClient) { }

  Getproducts(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}products`);
  }

  addProduct(product: any): Observable<any> {
    console.log('in service', product);
    return this.httpClient.post<any>(`${this.apiUrl}products`, product);
  }

  deleteProduct(id: number | string): Observable<any> {
    return this.httpClient.delete<any>(this.apiUrl + `products/${id}`);
  }


  editProduct(id: number, product: any): Observable<any> {
    console.log('in service edit', product);
    return this.httpClient.put<any>(`${this.apiUrl}products/${id}`, product);
  }

  getProductById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}products/${id}`);
  }

  GetProductTypes(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}product_type`);
  }

  addProductType(product_type: any): Observable<any> {
    console.log('in service', product_type);
    return this.httpClient.post<any>(`${this.apiUrl}product_type`, product_type);
  }

  deleteProductType(id: number | string): Observable<any> {
    return this.httpClient.delete<any>(this.apiUrl + `product_type/${id}`);
  }

  editProductType(id: number, product_type: any): Observable<any> {
    console.log('in service edit', product_type);
    return this.httpClient.put<any>(`${this.apiUrl}product_type/${id}`, product_type);
  }

  getProductTypeById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}product_type/${id}`);
  }
  
  GetProductCategories(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}Inventory_Category/GetInventoryCategories`);
  }


  addProductCategory(productCategory: any): Observable<any> {
    console.log('in service', productCategory);
    return this.httpClient.post<any>(`${this.apiUrl}Inventory_Category/AddInventoryCategory`, productCategory);
  }


  deleteProductCategory(id: number | string): Observable<any> {
    return this.httpClient.delete<any>(this.apiUrl + `Inventory_Category/${id}`);
  }


  editProductCategory(id: number, productCategory: any): Observable<any> {
    console.log('in service edit', productCategory);
    return this.httpClient.put<any>(`${this.apiUrl}Inventory_Category/UpdateInventoryCategory/${id}`, productCategory);
  }


  getProductCategoryById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}Inventory_Category/GetInventoryCategoryById/${id}`);
  }


  
  GetstockTake(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}products`);
  }

  addStockTake(stockTake: any): Observable<any> {
    console.log('in service', stockTake);
    return this.httpClient.post<any>(`${this.apiUrl}products`, stockTake);
  }

  deleteStockTake(id: number | string): Observable<any> {
    return this.httpClient.delete<any>(this.apiUrl + `products/${id}`);
  }


  editStockTake(id: number, stockTake: any): Observable<any> {
    console.log('in service edit', stockTake);
    return this.httpClient.put<any>(`${this.apiUrl}products/${id}`, stockTake);
  }

  getStockTakeById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}products/${id}`);
  }

  


  GetwriteOff(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}products`);
  }

  addWriteOff(writeOff: any): Observable<any> {
    console.log('in service', writeOff);
    return this.httpClient.post<any>(`${this.apiUrl}products`, writeOff);
  }

  deleteWriteOff(id: number | string): Observable<any> {
    return this.httpClient.delete<any>(this.apiUrl + `products/${id}`);
  }


  editWriteOff(id: number, writeOff: any): Observable<any> {
    console.log('in service edit', writeOff);
    return this.httpClient.put<any>(`${this.apiUrl}products/${id}`, writeOff);
  }

  getWriteOffById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}products/${id}`);
  }

  GetEmployees(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}employees`);
  }

  addEmployee(employee: any): Observable<any> {
    console.log('in service', employee);
    return this.httpClient.post<any>(`${this.apiUrl}employees`, employee);
  }

  deleteEmployee(id: number | string): Observable<any> {
    return this.httpClient.delete<any>(this.apiUrl + `employees/${id}`);
  }


  editEmployee(id: number, employee: any): Observable<any> {
    console.log('in service edit', employee);
    return this.httpClient.put<any>(`${this.apiUrl}employees/${id}`, employee);
  }

  getEmployeeById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}employees/${id}`);
  }

  GetClients(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}clients`);
  }

  addClient(client: any): Observable<any> {
    console.log('in service', client);
    return this.httpClient.post<any>(`${this.apiUrl}clients`, client);
  }

  deleteClient(id: number | string): Observable<any> {
    return this.httpClient.delete<any>(this.apiUrl + `clients/${id}`);
  }


  editClient(id: number, client: any): Observable<any> {
    console.log('in service edit', client);
    return this.httpClient.put<any>(`${this.apiUrl}clients/${id}`, client);
  }

  getClientById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}clients/${id}`);
  }



  GetReviews(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}booking_review`);
  }

  addReview(review: any): Observable<any> {
    console.log('in service', review);
    return this.httpClient.post<any>(`${this.apiUrl}booking_review`, review);
  }

  deleteReview(id: number | string): Observable<any> {
    return this.httpClient.delete<any>(this.apiUrl + `booking_review/${id}`);
  }


  ediReview(id: number, review: any): Observable<any> {
    console.log('in service edit', review);
    return this.httpClient.put<any>(`${this.apiUrl}booking_review/${id}`, review);
  }

  getReviewById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}booking_review/${id}`);
  }

  //Inventory

  GetInventories(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}Inventories/GetInventories`);
  }


  addInventory(inventory: any): Observable<any> {
    console.log('in service', inventory);
    return this.httpClient.post<any>(`${this.apiUrl}Inventories/AddInventory`, inventory);
  }


  deleteInventory(id: number | string): Observable<any> {
    return this.httpClient.delete<any>(this.apiUrl + `Inventories/${id}`);
  }

  editInventory(id: number, inventory: any): Observable<any> {
    console.log('in service edit', inventory);
    return this.httpClient.put<any>(`${this.apiUrl}Inventories/UpdateInventory/${id}`, inventory);
  }


  getInventoryById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}Inventories/GetInventoryById/${id}`);
  }

  GetInventoryCategories(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}Inventory_Category/GetInventoryCategories`);
  }


  addInventoryCategory(inventoryCategory: any): Observable<any> {
    console.log('in service', inventoryCategory);
    return this.httpClient.post<any>(`${this.apiUrl}Inventory_Category/AddInventoryCategory`, inventoryCategory);
  }


  deleteInventoryCategory(id: number | string): Observable<any> {
    return this.httpClient.delete<any>(this.apiUrl + `Inventory_Category/${id}`);
  }


  editInventoryCategory(id: number, inventoryCategory: any): Observable<any> {
    console.log('in service edit', inventoryCategory);
    return this.httpClient.put<any>(`${this.apiUrl}Inventory_Category/UpdateInventoryCategory/${id}`, inventoryCategory);
  }


  getInventoryCategoryById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}Inventory_Category/GetInventoryCategoryById/${id}`);
  }


  GetInventoryTypes(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}Inventory_Type/GetInventoryTypes`);
  }


  addInventoryType(inventory_type: any): Observable<any> {
    console.log('in service', inventory_type);
    return this.httpClient.post<any>(`${this.apiUrl}Inventory_Type/AddInventoryType`, inventory_type);
  }


  deleteInventoryType(id: number | string): Observable<any> {
    return this.httpClient.delete<any>(this.apiUrl + `Inventory_Type/${id}`);
  }

  editInventoryType(id: number, inventory_type: any): Observable<any> {
    console.log('in service edit', inventory_type);
    return this.httpClient.put<any>(`${this.apiUrl}Inventory_Type/UpdateInventoryType/${id}`, inventory_type);
  }


  getInventoryTypeById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}Inventory_Type/GetInventoryTypeById/${id}`);
  }


  //Login Code
  signUp(userObj: any) {
    const { role, ...userData } = userObj;
    const params = new HttpParams().set('role', role);

    return this.httpClient.post<any>(`${this.apiUrl}Authentication/Register`, userData, { params });
  }

  login(loginObj: any) {
    return this.httpClient.post<any>(`${this.apiUrl}Authentication/Login`, loginObj);
  }

  login2FA(username: string, code: string): Observable<any> {
    const params = new HttpParams()
      .set('username', username)
      .set('code', code);

      return this.httpClient.post<any>(`${this.apiUrl}Authentication/Login-2FA`, null, { params });
  }

  forgetPassword(email: string): Observable<any> {
    const params = new HttpParams()
    .set('email', email);
    return this.httpClient.post(`${this.apiUrl}Authentication/ForgetPassword`, null, { params });
  }

  resetPassword(data: { password: string, confirmPassword: string, email: string, token: string }): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}Authentication/ResetPassword`, data);
  }
    
  GetRoomTypes(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}room_type`);
  }

  addRoomType(room_type: any): Observable<any> {
    console.log('in service', room_type);
    return this.httpClient.post<any>(`${this.apiUrl}room_type`, room_type);
  }

  deleteRoomType(id: number | string): Observable<any> {
    return this.httpClient.delete<any>(this.apiUrl + `room_type/${id}`);
  }

  editRoomType(id: number, room_type: any): Observable<any> {
    console.log('in service edit', room_type);
    return this.httpClient.put<any>(`${this.apiUrl}room_type/${id}`, room_type);
  }

  getRoomTypeById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}room_type/${id}`);
  }




  GetRoomBookings(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}room_booking`);
  }

  addRoomBooking(room_booking: any): Observable<any> {
    console.log('in service', room_booking);
    return this.httpClient.post<any>(`${this.apiUrl}Room_Booking/CreateRoomBooking`, room_booking);
  }

  deleteRoomBooking(id: number | string): Observable<any> {
    return this.httpClient.delete<any>(this.apiUrl + `room_booking/${id}`);
  }

  editRoomBooking(id: number, room_booking: any): Observable<any> {
    console.log('in service edit', room_booking);
    return this.httpClient.put<any>(`${this.apiUrl}room_booking/${id}`, room_booking);
  }

  getRoomBookingById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}room_booking/${id}`);
  }


  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  getInventoriesvm(): Observable<InventoryVM[]> {
    return this.httpClient.get<InventoryVM[]>(`${this.apiUrl}Inventory`);
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  GetSupplierTypes(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}Supplier_Type/GetSupplierTypes`);
  }

  addSupplierType(supplier_type: any): Observable<any> {
    console.log('in service', supplier_type);
    return this.httpClient.post<any>(`${this.apiUrl}Supplier_Type/AddSupplierType`, supplier_type);
  }

  deleteSupplierType(id: number | string): Observable<any> {
    return this.httpClient.delete<any>(this.apiUrl + `Supplier_Type/${id}`);
  }

  editSupplierType(id: number, supplier_type: any): Observable<any> {
    console.log('in service edit', supplier_type);
    return this.httpClient.put<any>(`${this.apiUrl}Supplier_Type/UpdateSupplierType/${id}`, supplier_type);
  }

  getSupplierypeById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}Supplier_Type/GetSupplierTypeById/${id}`);
  }

  //Event Bookings
  GetEvents(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}Event_Booking/GetEventBookings`)
  }

  CreateEvent(event: any): Observable<any> {
    console.log(event)
    return this.httpClient.post<any>(`${this.apiUrl}Event_Booking/CreateEventBooking`, event)
  }

  GetEventById(eventId: number): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}Event_Booking/GetEventBookingById/${eventId}`)
  }

  UpdateEventBooking(eventId: number, event: any): Observable<any> {
    return this.httpClient.put<any>(`${this.apiUrl}Event_Booking/UpdateEventBooking/${eventId}`, event)
  }

  DeleteEventBooking(eventId: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.apiUrl}Event_Booking/${eventId}`);
  }

  //Event Types
  GetEventTypes(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}Event_Types/GetEventTypes`);
  }

  addEventType(event_type: any): Observable<any> {
    console.log('in service', event_type);
    return this.httpClient.post<any>(`${this.apiUrl}Event_Types/AddEventType`, event_type);
  }

  deleteEventType(id: number | string): Observable<any> {
    return this.httpClient.delete<any>(this.apiUrl + `Event_Types/${id}`);
  }

  editEventType(id: number, event_type: any): Observable<any> {
    console.log('in service edit', event_type);
    return this.httpClient.put<any>(`${this.apiUrl}Event_Types/UpdateEventType?eventTypeId=${id}`, event_type);
  }

  getEventypeById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}Event_Types/GetEventTypeById/${id}`);
  }


  //Orders
  GetOrders(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}Orders/GetOrders`);
  }
  
  createOrder(order: any): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}Orders/AddOrder`, order);
  }

  updateOrder(orderId: number, order: any): Observable<any> {
    return this.httpClient.put<any>(`${this.apiUrl}Orders/UpdateOrder/${orderId}`, order)
  }

  getOrderId(orderId: number): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}Orders/GetOrderById/${orderId}`)
  }

  deleteOrder(orderId: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.apiUrl}Orders/${orderId}`)
  }

  receiveOrder(order: any): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}Receive_Order/AddReceievedOrder`, order)
  }

  //Supplier
  GetSuppliers(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}Suppliers/GetSuppliers`);
  }

  addSupplier(supplier: any): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}Suppliers/AddSupplier`, supplier)
  }

  getSupplierById(supplierId: number): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}Suppliers/GetSupplierById/${supplierId}`)
  }

  updateSupplier(supplierId: number, supplier: any): Observable<any> {
    return this.httpClient.put<any>(`${this.apiUrl}Suppliers/UpdateSupplier/${supplierId}`, supplier)
  }  

  deleteSupplier(supplierId: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.apiUrl}Suppliers/${supplierId}`)
  }

  //Inspection Iten
  GetInspectionItems(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}Inspection_Item/GetInspectionItems`)
  }

  GetInspectionItemById(inspectionItemId: number): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}Inspection_Item/GetInspectionItemById/${inspectionItemId}`)
  }

  UpdateInspectionItem(inspectionItemId: number, inspectionItem: any): Observable<any> {
    return this.httpClient.put<any>(`${this.apiUrl}Inspection_Item/UpdateInspectionItem/${inspectionItemId}`, inspectionItem)
  }

  AddInspectionItem(inspectionItem: any): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}Inspection_Item/AddInspectionItem`, inspectionItem)
  }

  DeleteInspectionItem(inspectionItemId: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.apiUrl}Inspection_Item/${inspectionItemId}`)
  }

  //Rooms
  GetRooms(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}Rooms/GetRooms`);
  }

  //VAT
  GetVAT(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}VATs/GetVAT`)
  }  

  GetVATById(vatId: number): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}VATs/GetVATById/${vatId}`)
  }

  UpdateVAT(vatId: number, vat: any): Observable<any> {
    return this.httpClient.put<any>(`${this.apiUrl}VATs/UpdateVAT/${vatId}`, vat)
  }

  //Discount
  GetDiscounts(): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}Discounts/GetDiscounts`)
  }

  GetDiscountById(discountId: number): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}Discounts/GetDiscountById/${discountId}`)
  }

  UpdateDiscount(discountId: number, discount: any) {
    return this.httpClient.put<any>(`${this.apiUrl}Discounts/UpdateDiscount/${discountId}`, discount)
  }

  GenerateDiscountCode(discountPercentage: number, discount: any): Observable<any> {
    console.log(discount)
    return this.httpClient.post<any>(`${this.apiUrl}Discounts/Add5DiscountCode/${discountPercentage}`, discount)
  }

  DeleteDiscountCode(discountId: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.apiUrl}Discounts/${discountId}`)
  }


  //Reports
  GenerateProductsReport(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}Reports/ProductsReport`);
  }

  GenerateSuppliersReport(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}Reports/SupplierReport`);
  }

  GenerateEventSalesReport(): Observable<any> 
  {
    return this.httpClient.get(`${this.apiUrl}Reports/EventSalesReport`)
  }

  GenerateBookingSalesReport(): Observable<any> 
  {
    return this.httpClient.get(`${this.apiUrl}Reports/BookingSalesReport`)
  }

  GenerateStockTakeReport(): Observable<any> 
  {
    return this.httpClient.get(`${this.apiUrl}Reports/StockValueItem`)
  }

  GenerateProductQuantityReport(): Observable<any> 
  {
    return this.httpClient.get(`${this.apiUrl}Reports/ProductQuantityReport`)
  }

  GenerateEmployeeReport(gender: string): Observable<any> 
  {
    return this.httpClient.get(`${this.apiUrl}Reports/EmployeeReport/${gender}`)
  }

  GetProductCountReport(): Observable<any> 
  {
    return this.httpClient.get(`${this.apiUrl}Reports/ProductCountReport`)
    .pipe(map(result => result));
  }

  GetReviewReport(year: number, month: number): Observable<any>
  {
    return this.httpClient.get(`${this.apiUrl}Reports/BookingReviewReport/${year}/${month}`)
  }

  GetReviewChart(): Observable<any>
  {
    return this.httpClient.get(`${this.apiUrl}Reports/BookingReviewChart`)
  }

  GenerateRoomsBookedReport(year: number, month: number): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}Reports/RoomsBookedReport/${year}/${month}`)
  }

  GetSalaryReport(startDate: Date, endDate: Date): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}Reports/GetSalaryReport/${startDate}/${endDate}`)
  }
}





