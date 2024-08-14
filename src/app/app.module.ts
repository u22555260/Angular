import { NgChartsConfiguration } from './../../node_modules/ng2-charts/lib/ng-charts.provider.d';
import { AddInventoryComponent } from './inventory/add-inventory/add-inventory.component';
import { InventoryTypesComponent } from './inventory_type/inventory-types/inventory-types.component';
import { Inventory_Category } from './shared/inventory_category';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { EmployeesComponent } from './employee/employees/employees.component';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { HomeComponent } from './home/home.component';

import { AgmCoreModule } from '@agm/core';
import { EditClientComponent } from './client/edit-client/edit-client.component';
import { AddClientComponent } from './client/add-client/add-client.component';
import { AddReviewComponent } from './review/add-review/add-review.component';
import { ClientsComponent } from './client/clients/clients.component';
import { ReviewsComponent } from './review/reviews/reviews.component';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './login/forget-password/forget-password.component';
import { OtpScreenComponent } from './login/otp-screen/otp-screen.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { InventoriesComponent } from './inventory/inventories/inventories.component';
import { EditInventoryCategoryComponent } from './inventory_category/edit-inventory-category/edit-inventory-category.component';
import { EditInventoryComponent } from './inventory/edit-inventory/edit-inventory.component';
import { AddInventoryTypeComponent } from './inventory_type/add-inventory-type/add-inventory-type.component';
import { EditInventoryTypeComponent } from './inventory_type/edit-inventory-type/edit-inventory-type.component';
import { AddInventoryCategoryComponent } from './inventory_category/add-inventory-category/add-inventory-category.component';
import { InventoryCategoriesComponent } from './inventory_category/inventory-categories/inventory-categories.component';
import { AddRoomTypeComponent } from './room_type/add-room-type/add-room-type.component';
import { EditRoomTypeComponent } from './room_type/edit-room-type/edit-room-type.component';
import { RoomTypesComponent } from './room_type/room-types/room-types.component';
import { AddRoomBookingComponent } from './room_booking/add-room-booking/add-room-booking.component';
import { EditRoomBookingComponent } from './room_booking/edit-room-booking/edit-room-booking.component';
import { RoomBookingsComponent } from './room_booking/room-bookings/room-bookings.component';
import { FilterPipe } from './filter.pipe';
import { InventoryvmComponent } from './inventory/inventoryvm/inventoryvm.component';
import { AddSupplierComponent } from './supplier/add-supplier/add-supplier.component';
import { EditSupplierComponent } from './supplier/edit-supplier/edit-supplier.component';
import { SuppliersComponent } from './supplier/suppliers/suppliers.component';
import { AddSupplierTypeComponent } from './supplier_type/add-supplier-type/add-supplier-type.component';
import { EditSupplierTypeComponent } from './supplier_type/edit-supplier-type/edit-supplier-type.component';
import { SupplierTypesComponent } from './supplier_type/supplier-types/supplier-types.component';
import { AddEventTypeComponent } from './event_type/add-event-type/add-event-type.component';
import { EditEventTypeComponent } from './event_type/edit-event-type/edit-event-type.component';
import { EventTypesComponent } from './event_type/event-types/event-types.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { ProductsComponent } from './product/products/products.component';
import { AddProductTypeComponent } from './product_type/add-product-type/add-product-type.component';
import { EditProductTypeComponent } from './product_type/edit-product-type/edit-product-type.component';
import { ProductTypesComponent } from './product_type/product-types/product-types.component';
import { AddProductCategoryComponent } from './product_category/add-product-category/add-product-category.component';
import { EditProductCategoryComponent } from './product_category/edit-product-category/edit-product-category.component';
import { ProductCategoriesComponent } from './product_category/product-categories/product-categories.component';
import { AddPriceComponent } from './price/add-price/add-price.component';
import { EditPriceComponent } from './price/edit-price/edit-price.component';
import { PricesComponent } from './price/prices/prices.component';
import { AddPaymentComponent } from './payment/add-payment/add-payment.component';
import { PaymentsComponent } from './payment/payments/payments.component';
import { AddPaymentTypeComponent } from './payment_type/add-payment-type/add-payment-type.component';
import { EditPaymentTypeComponent } from './payment_type/edit-payment-type/edit-payment-type.component';
import { PaymentTypesComponent } from './payment_type/payment-types/payment-types.component';
import { AddReferralComponent } from './referral/add-referral/add-referral.component';
import { ReferralsComponent } from './referral/referrals/referrals.component';
import { AddStockTakeComponent } from './stock_take/add-stock-take/add-stock-take.component';
import { EditStockTakeComponent } from './stock_take/edit-stock-take/edit-stock-take.component';
import { StockTakesComponent } from './stock_take/stock-takes/stock-takes.component';
import { AddInspectionItemComponent } from './inspection_item/add-inspection-item/add-inspection-item.component';
import { EditInspectionItemComponent } from './inspection_item/edit-inspection-item/edit-inspection-item.component';
import { InspectionItemsComponent } from './inspection_item/inspection-items/inspection-items.component';
import { AddVatComponent } from './vat/add-vat/add-vat.component';
import { EditVatComponent } from './vat/edit-vat/edit-vat.component';
import { VatComponent } from './vat/vat/vat.component';
import { AddWriteOffComponent } from './write_off/add-write-off/add-write-off.component';
import { EditWriteOffComponent } from './write_off/edit-write-off/edit-write-off.component';
import { WriteOffsComponent } from './write_off/write-offs/write-offs.component';
import { AddEventReviewComponent } from './event_review/add-event-review/add-event-review.component';
import { EventReviewsComponent } from './event_review/event-reviews/event-reviews.component';
import { AddComplaintComponent } from './complaint/add-complaint/add-complaint.component';
import { ComplaintsComponent } from './complaint/complaints/complaints.component';
import { AddComplaintTypeComponent } from './complaint_type/add-complaint-type/add-complaint-type.component';
import { EditComplaintTypeComponent } from './complaint_type/edit-complaint-type/edit-complaint-type.component';
import { ComplaintTypesComponent } from './complaint_type/complaint-types/complaint-types.component';
import { EditEventReviewComponent } from './event_review/edit-event-review/edit-event-review.component';
import { AddDiscountComponent } from './discount/add-discount/add-discount.component';
import { DiscountsComponent } from './discount/discounts/discounts.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { OrderComponent } from './order/order.component';
import { CreateOrderComponent } from './order/create-order/create-order.component';
import { CaptureSupplierOrderComponent } from './order/capture-supplier-order/capture-supplier-order.component';
import { UpdateOrderComponent } from './order/update-order/update-order.component';
import { ReportsComponent } from './reports/reports.component';
import { BaseChartDirective } from 'ng2-charts';
import { MenlynNavbarComponent } from './menlyn-navbar/menlyn-navbar.component';
import { StandardNavbarComponent } from './standard-navbar/standard-navbar.component';
import { SystemHelpComponent } from './system-help/system-help.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { ManagerSidebarComponent } from './manager-sidebar/manager-sidebar.component';
import { EditEventBookingComponent } from './event_booking/edit-event-booking/edit-event-booking.component';
import { EventBookingsComponent } from './event_booking/event-bookings/event-bookings.component';
import { EventBookingComponent } from './event-booking/event-booking.component';
import { AddEventBookingComponent } from './event-booking/add-event-booking/add-event-booking.component';
import { UpdateEventBookingComponent } from './event-booking/update-event-booking/update-event-booking.component';
import { UpdateDiscountComponent } from './discount/update-discount/update-discount.component';
import { EventTypeReportComponent } from './reports/event-type-report/event-type-report.component';
import { ManagerialReportComponent } from './reports/managerial-report/managerial-report.component';
import { ProductCountReportComponent } from './reports/product-count-report/product-count-report.component';
import { ReviewReportComponent } from './reports/review-report/review-report.component';
import { RoomsBookedReportComponent } from './reports/rooms-booked-report/rooms-booked-report.component';
import { StockTakeReportComponent } from './reports/stock-take-report/stock-take-report.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    GoogleMapsComponent,
    ClientsComponent,
    AddEmployeeComponent,
    EmployeesComponent,
    EditEmployeeComponent,
    HomeComponent,
    EditClientComponent,
    AddClientComponent,
    AddReviewComponent,
    ReviewsComponent,
    LoginComponent,
    ForgetPasswordComponent,
    OtpScreenComponent,
    ResetPasswordComponent,
    SignupComponent,
    ProfileComponent,
    EditInventoryComponent,
    InventoriesComponent,
    AddInventoryTypeComponent,
    EditInventoryTypeComponent,
    InventoryTypesComponent,
    EditInventoryCategoryComponent,
    AddInventoryCategoryComponent,
    InventoryCategoriesComponent,
    AddInventoryComponent,
    AddRoomTypeComponent,
    EditRoomTypeComponent,
    RoomTypesComponent,
    AddRoomBookingComponent,
    EditRoomBookingComponent,
    RoomBookingsComponent,
    FilterPipe,
    InventoryvmComponent,
    AddSupplierComponent,
    EditSupplierComponent,
    SuppliersComponent,
    AddSupplierTypeComponent,
    EditSupplierTypeComponent,
    SupplierTypesComponent,
    AddEventTypeComponent,
    EditEventTypeComponent,
    EventTypesComponent,
    AddProductComponent,
    EditProductComponent,
    ProductsComponent,
    AddProductTypeComponent,
    EditProductTypeComponent,
    ProductTypesComponent,
    AddProductCategoryComponent,
    EditProductCategoryComponent,
    ProductCategoriesComponent,
    AddPriceComponent,
    EditPriceComponent,
    PricesComponent,
    AddPaymentComponent,
    PaymentsComponent,
    AddPaymentTypeComponent,
    EditPaymentTypeComponent,
    PaymentTypesComponent,
    AddReferralComponent,
    ReferralsComponent,
    AddStockTakeComponent,
    EditStockTakeComponent,
    StockTakesComponent,
    AddInspectionItemComponent,
    EditInspectionItemComponent,
    InspectionItemsComponent,
    AddVatComponent,
    EditVatComponent,
    VatComponent,
    AddWriteOffComponent,
    EditWriteOffComponent,
    WriteOffsComponent,
    AddEventReviewComponent,
    EventReviewsComponent,
    AddComplaintComponent,
    ComplaintsComponent,
    AddComplaintTypeComponent,
    EditComplaintTypeComponent,
    ComplaintTypesComponent,
    EditEventReviewComponent,
    AddDiscountComponent,
    DiscountsComponent,
    AdminDashboardComponent,
    OrderComponent,
    CreateOrderComponent,
    CaptureSupplierOrderComponent,
    UpdateOrderComponent,
    ReportsComponent,
    MenlynNavbarComponent,
    StandardNavbarComponent,
    SystemHelpComponent,
    AddSupplierComponent,    
    AdminSidebarComponent, 
    EventBookingComponent, 
    AddEventBookingComponent, 
    UpdateEventBookingComponent, UpdateDiscountComponent, EventTypeReportComponent, ManagerialReportComponent, ProductCountReportComponent, ReviewReportComponent, RoomsBookedReportComponent, StockTakeReportComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BaseChartDirective,
    MatDialogModule,
    PdfViewerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
