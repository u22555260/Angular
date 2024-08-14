import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeesComponent } from './employee/employees/employees.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { HomeComponent } from './home/home.component';
import { AddClientComponent } from './client/add-client/add-client.component';
import { EditClientComponent } from './client/edit-client/edit-client.component';
import { ClientsComponent } from './client/clients/clients.component';
import { ReviewsComponent } from './review/reviews/reviews.component';
import { AddReviewComponent } from './review/add-review/add-review.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { OtpScreenComponent } from './login/otp-screen/otp-screen.component';
import { ForgetPasswordComponent } from './login/forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ProfileComponent } from './profile/profile.component';
import { InventoriesComponent } from './inventory/inventories/inventories.component';
import { AddInventoryComponent } from './inventory/add-inventory/add-inventory.component';
import { EditInventoryComponent } from './inventory/edit-inventory/edit-inventory.component';
import { InventoryCategoriesComponent } from './inventory_category/inventory-categories/inventory-categories.component';
import { AddInventoryCategoryComponent } from './inventory_category/add-inventory-category/add-inventory-category.component';
import { EditInventoryCategoryComponent } from './inventory_category/edit-inventory-category/edit-inventory-category.component';
import { EditInventoryTypeComponent } from './inventory_type/edit-inventory-type/edit-inventory-type.component';
import { AddInventoryTypeComponent } from './inventory_type/add-inventory-type/add-inventory-type.component';
import { InventoryTypesComponent } from './inventory_type/inventory-types/inventory-types.component';
import { RoomBookingsComponent } from './room_booking/room-bookings/room-bookings.component';
import { AddRoomBookingComponent } from './room_booking/add-room-booking/add-room-booking.component';
import { EditRoomBookingComponent } from './room_booking/edit-room-booking/edit-room-booking.component';
import { RoomTypesComponent } from './room_type/room-types/room-types.component';
import { AddRoomTypeComponent } from './room_type/add-room-type/add-room-type.component';
import { EditRoomTypeComponent } from './room_type/edit-room-type/edit-room-type.component';
import { InventoryvmComponent } from './inventory/inventoryvm/inventoryvm.component';
import { SuppliersComponent } from './supplier/suppliers/suppliers.component';
import { AddSupplierComponent } from './supplier/add-supplier/add-supplier.component';
import { EditSupplierComponent } from './supplier/edit-supplier/edit-supplier.component';
import { SupplierTypesComponent } from './supplier_type/supplier-types/supplier-types.component';
import { AddSupplierTypeComponent } from './supplier_type/add-supplier-type/add-supplier-type.component';
import { EditSupplierTypeComponent } from './supplier_type/edit-supplier-type/edit-supplier-type.component';
import { EventTypesComponent } from './event_type/event-types/event-types.component';
import { AddEventTypeComponent } from './event_type/add-event-type/add-event-type.component';
import { EditEventTypeComponent } from './event_type/edit-event-type/edit-event-type.component';

import { AddProductComponent } from './product/add-product/add-product.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { ProductsComponent } from './product/products/products.component';

import { AddProductTypeComponent } from './product_type/add-product-type/add-product-type.component';
import { EditProductTypeComponent } from './product_type/edit-product-type/edit-product-type.component';
import { ProductTypesComponent } from './product_type/product-types/product-types.component';

import { AddProductCategoryComponent } from './product_category/add-product-category/add-product-category.component';
import { EditProductCategoryComponent } from './product_category/edit-product-category/edit-product-category.component';
import { ProductCategoriesComponent } from './product_category/product-categories/product-categories.component';

import { PricesComponent } from './price/prices/prices.component';
import { AddPriceComponent } from './price/add-price/add-price.component';
import { EditPriceComponent } from './price/edit-price/edit-price.component';

import { PaymentsComponent } from './payment/payments/payments.component';
import { AddPaymentComponent } from './payment/add-payment/add-payment.component';

import { PaymentTypesComponent } from './payment_type/payment-types/payment-types.component';
import { AddPaymentTypeComponent } from './payment_type/add-payment-type/add-payment-type.component';
import { EditPaymentTypeComponent } from './payment_type/edit-payment-type/edit-payment-type.component';

import { ReferralsComponent } from './referral/referrals/referrals.component';
import { AddReferralComponent } from './referral/add-referral/add-referral.component';

import { StockTakesComponent } from './stock_take/stock-takes/stock-takes.component';
import { AddStockTakeComponent } from './stock_take/add-stock-take/add-stock-take.component';
import { EditStockTakeComponent } from './stock_take/edit-stock-take/edit-stock-take.component';

import { InspectionItemsComponent } from './inspection_item/inspection-items/inspection-items.component';
import { AddInspectionItemComponent } from './inspection_item/add-inspection-item/add-inspection-item.component';
import { EditInspectionItemComponent } from './inspection_item/edit-inspection-item/edit-inspection-item.component';

import { VatComponent } from './vat/vat/vat.component';
import { AddVatComponent } from './vat/add-vat/add-vat.component';
import { EditVatComponent } from './vat/edit-vat/edit-vat.component';

import { WriteOffsComponent } from './write_off/write-offs/write-offs.component';
import { AddWriteOffComponent } from './write_off/add-write-off/add-write-off.component';
import { EditWriteOffComponent } from './write_off/edit-write-off/edit-write-off.component';

import { EventReviewsComponent } from './event_review/event-reviews/event-reviews.component';
import { AddEventReviewComponent } from './event_review/add-event-review/add-event-review.component';
import { EditEventReviewComponent } from './event_review/edit-event-review/edit-event-review.component';

import { ComplaintsComponent } from './complaint/complaints/complaints.component';
import { AddComplaintComponent } from './complaint/add-complaint/add-complaint.component';

import { ComplaintTypesComponent } from './complaint_type/complaint-types/complaint-types.component';
import { AddComplaintTypeComponent } from './complaint_type/add-complaint-type/add-complaint-type.component';
import { EditComplaintTypeComponent } from './complaint_type/edit-complaint-type/edit-complaint-type.component';

import { DiscountsComponent } from './discount/discounts/discounts.component';
import { AddDiscountComponent } from './discount/add-discount/add-discount.component';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { OrderComponent } from './order/order.component';
import { CaptureSupplierOrderComponent } from './order/capture-supplier-order/capture-supplier-order.component';
import { CreateOrderComponent } from './order/create-order/create-order.component';
import { UpdateOrderComponent } from './order/update-order/update-order.component';
import { ReportsComponent } from './reports/reports.component';
import { SystemHelpComponent } from './system-help/system-help.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { ManagerSidebarComponent } from './manager-sidebar/manager-sidebar.component';

import { EventBookingComponent } from './event-booking/event-booking.component';
import { AddEventBookingComponent } from './event-booking/add-event-booking/add-event-booking.component';
import { UpdateEventBookingComponent } from './event-booking/update-event-booking/update-event-booking.component';
import { UpdateDiscountComponent } from './discount/update-discount/update-discount.component';
import { ProductCountReportComponent } from './reports/product-count-report/product-count-report.component';
import { ReviewReportComponent } from './reports/review-report/review-report.component';
import { RoomsBookedReportComponent } from './reports/rooms-booked-report/rooms-booked-report.component';
import { EventTypeReportComponent } from './reports/event-type-report/event-type-report.component';
import { StockTakeReportComponent } from './reports/stock-take-report/stock-take-report.component';
import { ManagerialReportComponent } from './reports/managerial-report/managerial-report.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'employees', component: EmployeesComponent},
  {path: 'employees/add', component: AddEmployeeComponent},
  {path: 'employees/edit', component: EditEmployeeComponent},
  {path: 'employees/edit/:id', component: EditEmployeeComponent},

  {path: 'client', component: ClientsComponent},
  {path: 'client/add', component: AddClientComponent},
  {path: 'client/edit', component: EditClientComponent},
  {path: 'client/edit/:id', component: EditClientComponent},

  {path: 'review', component: ReviewsComponent},
  {path: 'review/add', component: AddReviewComponent},

  {path: 'home', component: HomeComponent},

  {path: 'inventory', component: InventoriesComponent},
  {path: 'inventory/add', component: AddInventoryComponent},
  {path: 'inventory/edit', component: EditInventoryComponent},
  {path: 'update-inventory/:inventoryId', component: EditInventoryComponent},


  {path: 'inventory_category', component: InventoryCategoriesComponent},
  {path: 'inventory_category/add', component: AddInventoryCategoryComponent},
  {path: 'inventory_category/edit', component: EditInventoryCategoryComponent},
  {path: 'update-inventory-category/:inventoryCategoryId', component: EditInventoryCategoryComponent},


  {path: 'inventory_type', component: InventoryTypesComponent},
  {path: 'inventory_type/add', component: AddInventoryTypeComponent},
  {path: 'inventory_type/edit', component: EditInventoryTypeComponent},
  {path: 'update-inventory-type/:inventoryTypeId', component: EditInventoryTypeComponent},

  //Auth Routes

  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'otp/:username/:password', component: OtpScreenComponent},
  {path: 'forget', component: ForgetPasswordComponent},
  {path: 'reset/:email', component: ResetPasswordComponent},
  {path: 'profile', component: ProfileComponent},

  {path: 'room_type', component: RoomTypesComponent},
  {path: 'room_type/add', component: AddRoomTypeComponent},
  {path: 'room_type/edit', component: EditRoomTypeComponent},
  {path: 'room_type/edit/:id', component: EditRoomTypeComponent},


  {path: 'room_booking', component: RoomBookingsComponent},
  {path: 'room_booking/add', component: AddRoomBookingComponent},
  {path: 'room_booking/edit', component: EditRoomBookingComponent},
  {path: 'room_booking/edit/:id', component: EditRoomBookingComponent},

  {path: 'inventoryvm',  component: InventoryvmComponent},



  {path: 'supplier', component: SuppliersComponent}, // create API and Model
  {path: 'supplier/add', component: AddSupplierComponent},
  {path: 'supplier/edit', component: EditSupplierComponent},
  {path: 'update-supplier/:supplierId', component: EditSupplierComponent},

  {path: 'supplier_type', component: SupplierTypesComponent}, // create API and Model
  {path: 'supplier_type/add', component: AddSupplierTypeComponent},
  {path: 'supplier_type/edit', component: EditSupplierTypeComponent},
  {path: 'update-supplier-type/:supplierTypeId', component: EditSupplierTypeComponent},

  {path: 'event_booking', component: EventBookingComponent},
  {path: 'event_booking/add', component: AddEventBookingComponent},
  {path: 'event_booking/update', component: UpdateEventBookingComponent},
  {path: 'update-event-booking/:eventId', component: UpdateEventBookingComponent},

  {path: 'event_type', component: EventTypesComponent}, // create API and Model
  {path: 'event_type/add', component: AddEventTypeComponent},
  {path: 'event_type/edit', component: EditEventTypeComponent},
  {path: 'update-event-type/:eventTypeId', component: EditEventTypeComponent},

  {path: 'event-report', component: EventTypeReportComponent},
  {path: 'product', component: ProductsComponent}, // create API and Model
  {path: 'product/add', component: AddProductComponent},
  {path: 'product/edit', component: EditProductComponent},
  {path: 'product/edit/id', component: EditProductComponent},

  {path: 'product_type', component: ProductTypesComponent}, // create API and Model
  {path: 'product_type/add', component: AddProductTypeComponent},
  {path: 'product_type/edit', component: EditProductTypeComponent},
  {path: 'product_type/edit/id', component: EditProductTypeComponent},

  {path: 'product_catgeory', component: ProductCategoriesComponent}, // create API and Model
  {path: 'product_catgeory/add', component: AddProductCategoryComponent},  
  {path: 'product_catgeory/edit', component: EditProductCategoryComponent},
  {path: 'product_catgeory/edit/id', component: EditProductCategoryComponent},
  
  {path: 'price', component: PricesComponent},  // create API and Model
  {path: 'price/add', component: AddPriceComponent},
  {path: 'price/edit', component: EditPriceComponent},
  {path: 'price/edit/id', component: EditPriceComponent},

  {path: 'payment', component: PaymentsComponent},  // create API and Model
  {path: 'payment', component: AddPaymentComponent}, //

  {path: 'payment_type', component: PaymentTypesComponent}, // create API and Model
  {path: 'payment_type/add', component: AddPaymentTypeComponent},
  {path: 'payment_type/edit', component: EditPaymentTypeComponent},
  {path: 'payment_type/edit/id', component: EditPaymentTypeComponent},


  {path: 'referral', component: ReferralsComponent}, // create API and Model
  {path: 'referral/add', component: AddReferralComponent}, 

  {path: 'stock_take', component: StockTakesComponent}, // create API and Model
  {path: 'stock_take/add', component: AddStockTakeComponent},
  {path: 'stock_take/edit', component: EditStockTakeComponent},
  {path: 'stock_take/edit/id', component: EditStockTakeComponent},

  {path: 'inspection_item', component: InspectionItemsComponent}, // create API and Model
  {path: 'inspection_item/add', component: AddInspectionItemComponent},
  {path: 'inspection_item/edit', component: EditInspectionItemComponent},
  {path: 'update-inspection-item/:inspectionItemId', component: EditInspectionItemComponent},

  {path: 'vat', component: VatComponent}, // create API and Model
  {path: 'vat/add', component: AddVatComponent},
  {path: 'vat/edit', component: EditVatComponent},
  {path: 'update-vat/:vatId', component: EditVatComponent},

  {path: 'Write_off', component: WriteOffsComponent}, // create API and Model
  {path: 'Write_off/add', component: AddWriteOffComponent},
  {path: 'Write_off/edit', component: EditWriteOffComponent},
  {path: 'Write_off/edit/id', component: EditWriteOffComponent},

  {path: 'event_review', component: EventReviewsComponent},  // create API and Model
  {path: 'event_review/add', component: AddEventReviewComponent},
  {path: 'event_review/edit', component: EditEventReviewComponent},
  {path: 'event_review/edit/id', component: EditEventReviewComponent},

  {path: 'complaint', component: ComplaintsComponent},  // create API and Model
  {path: 'complaint/add', component: AddComplaintComponent},

  {path: 'complaint_type', component: ComplaintTypesComponent},  // create API and Model
  {path: 'complaint_type/add', component: AddComplaintTypeComponent},
  {path: 'complaint_type/edit', component: EditComplaintTypeComponent},
  {path: 'complaint_type/edit/id', component: EditComplaintTypeComponent},

  {path: 'discount', component: DiscountsComponent},  // create API and Model
  {path: 'discount/add', component: AddDiscountComponent},
  {path: 'update-discount/:discountId', component: UpdateDiscountComponent},

  {path: 'admin-dash', component: AdminDashboardComponent},
  {path: 'reports', component: ReportsComponent},
  {path: 'Stock-TakeReport', component: StockTakeReportComponent},

  //Order
  {path: 'orders', component: OrderComponent},
  {path: 'capture-delivery', component: CaptureSupplierOrderComponent},
  {path: 'create-order', component: CreateOrderComponent},
  {path: 'update-order/edit', component: UpdateOrderComponent},
  {path: 'update-order/:orderId', component: UpdateOrderComponent},
  {path: 'system-help', component: SystemHelpComponent},
  {path: 'manager-dash', component: ManagerDashboardComponent},

  //Reports
  {path: 'product-count-report', component: ProductCountReportComponent},
  {path: 'review-report', component: ReviewReportComponent},
  {path: 'rooms-booked-report', component: RoomsBookedReportComponent},
  {path: 'manager-report', component: ManagerialReportComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
