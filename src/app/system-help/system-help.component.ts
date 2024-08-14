import { Component } from '@angular/core';

@Component({
  selector: 'app-system-help',
  templateUrl: './system-help.component.html',
  styleUrls: ['./system-help.component.scss']
})
export class SystemHelpComponent {

  

searchQuery = '';
searchResults: { question: string; answer: string; }[] = [];

questionsAndAnswers: { question: string; answer: string; }[] = [

  //USER QUESTION
  { question: 'I forgot my password, can I reset it?', answer: 'Yes, once you have navigated to your account profile and selected to reset your password where after you will prompted to change your password.'},
  { question: 'Can I login if I forgot my password?', answer: 'To reset your password, click on the "Forgot Password" link on the login page. You will then be prompted to change your password where after you may successfully login.'},
  { question: 'How do I access the admin dashboard?', answer: 'You can access the admin dashboard by visiting our systems login page and entering your administrator credentials. Once logged in, you can navigate to the dashboard by clicking on the "Dashboard" side-navigation bar item'},
  { question: 'What are the system requirements for using the admin interface?', answer: 'A personal computer or desktop computer would be needed to access the system. Internet access is required for full functionality.'},
  { question: 'How do I use the side-navigation bar?', answer: 'The side-navigation bar will always be accessible on the left-hand side of the screen. The side-navigation bar is collapsable, you can do this by clicking on the HydroTech logo. Once opened fully, you can navigate to different pages on the system hovering/clicking on the navigation bar of your choice.'},

  //ROOM, TICKETING AND EVENT QUESTIONS
  { question: 'Can I cancel an existing booking reservation?', answer: 'Yes, you can cancel bookings by locating the reservation in the "Room Bookings" or "Event Bookings" section. Click on the reservation, and youll have options to cancel it.' },
  { question: 'How are room availability and conflicts managed??', answer: 'Room availability is automatically updated in real-time. The booking date for a specific room will be set to unavailable once it is booked by client, making it unavailable for clients to book that room during that specific period of time.'},
  { question: 'What is the process for managing event bookings?', answer: 'Event reservations can be managed within the "Event Booking" section, where you will be able to view Event Bookings made as well as manage them..'},
  { question: 'Can I view a list of upcoming bookings and events?', answer: 'Yes, you can access a list of upcoming bookings and events in the respective sections of the admin dashboard. The system provides filters to view bookings by searching reference codes.'},
  { question: 'What is the process for managing accommodation/room bookings?', answer: 'Room reservations can be managed within the "Room Booking" section, where you will be able to view Room Bookings made as well as manage upcoming booking and in-room bookings.'},
  { question: 'How do I add new rooms to the system?', answer: 'To add new rooms, navigate to the "Room Management" section in the admin dashboard. Click on the "Add Room" button, fill in room details (e.g., room number, capacity, description), and save the new room..'},
  { question: 'Can I update room information if needed?', answer: 'Yes, you can update room details by selecting the room you wish to modify in the "Room Management" section. Click on the room, make the necessary changes, and save your updates.'},
  { question: 'How do I delete a room from the system?', answer: 'To delete a room, go to the "Room Management" section, choose the room you want to delete, and click the "Delete" button. Be cautious, as this action is irreversible.'},
  { question: 'How can I manage room types and event types?', answer: 'Room types and event types can be managed in the "Room Type" and "Event Type" section. You can create, update, and delete room and event types as needed.' },
  { question: 'How do I create new day visit ticket types?', answer: 'To create new ticket types, visit the "Day-Visit Type" section. Click on the "Add Ticket Type" button, specify details (e.g., name, price), and save the new ticket type.'},
  { question: 'Can I edit existing day visit ticket types?', answer: 'Yes, you can edit ticket types by selecting the type you wish to modify in the "Day-Visit Type" section. Make the necessary changes and save the updates.'},
  { question: 'Can I bring food into the resort?', answer: 'Food is welcome at the resort, make use of our braai facilities while youre here!.'},
  { question: 'How can I remove a day visit ticket type from the system?', answer: 'To remove a ticket type, navigate to the "Day-Visit Type" section, choose the type you want to delete, and click the "Delete" button. Be cautious, as this action is irreversible.'},
  { question: 'What information is displayed to security personnel when a QR code is scanned?', answer: 'When a QR code is scanned, security personnel can view details such as the ticket type(s) and quantity. This information helps verify the tickets validity.'},
  { question: 'How can clients book tickets for the resort?', answer: 'Clients can book tickets through our user-friendly online booking interface. They select the resort date, choose the desired ticket type, and specify the quantity of tickets they wish to purchase.'},

  //INVENTORY QUESTIONS
  { question: 'How do I add new items to the system?', answer: 'You can add new items by going to the "Item Management" section. Click on the "Add Item" button, provide item details, including name, quantity, and type, and save the item.'},
  { question: 'Can I update item information or quantities?', answer: 'Yes, you can update item information and quantities by selecting the item in the "Item Management" section. Make the necessary changes and save the updates.'},
  { question: 'How do I delete an item from the system?', answer: 'To delete an item, visit the "Item Management" section, select the item you want to delete, and click the "Delete" button. Be cautious, as this action is irreversible.'},
  { question: 'How do I create new item types?', answer: 'You can add new item types by going to the "Item Type Management" section. Click on the "Add Item Type" button, provide the item type details, including name, description, and category, and save the item type.'},
  { question: 'Can I edit existing item types?', answer: 'Yes, you can edit item types by selecting the type you wish to modify in the "Item Type Management" section. Make the necessary changes to the type name, description or item category and save your updates.'},
  { question: 'How can I remove an item type from the system?', answer: 'To remove an item type, go to the "Item Type Management" section, choose the type you want to delete, and click the "Delete" button. Be aware that this action is irreversible.'},
  { question: 'How do I add new item categories to the system?', answer: 'You can add new item categories by visiting the "Item Category Management" section in the admin dashboard. Click on the "Add Item Category" button, specify the category name and description, and save the new category.'},
  { question: 'Can I edit existing item categories?', answer: 'Yes, you can edit item categories by selecting the category you wish to modify in the "Item Category Management" section. Make the necessary changes to the category name or description and save your updates.'},
  { question: 'How do I delete an item category from the system?', answer: 'To delete an item category, navigate to the "Item Category Management" section, choose the category you want to delete, and click the "Delete" button. Be cautious, as this action is irreversible.'},
  { question: 'How is inventory pricing managed?', answer: ' You can set and manage item pricing in the "Item Management" section.'},

  //SUPPLIER -- ORDERS
  { question: 'How do I add new suppliers to the system?', answer: 'You can add new suppliers to the system through the "Supplier Management" section. Simply provide supplier details such as name, and contact information.'},
  { question: 'Can I update an existing supplier on the system?', answer: 'Yes, you can update a suppliers information by selecting the supplier in the "Supplier Management" section. Make the necessary changes and save the updates.'},
  { question: 'How do I delete a supplier from the system?', answer: 'To delete a supplier, visit the "Supplier Management" section, select the supplier you want to delete, and click the "Delete" button. Be cautious, as this action is irreversible.'},
  { question: 'How do I place a supplier order for items we need?', answer: 'To place a supplier order, navigate to the "Supplier Orders" section in the admin dashboard. Select the items you want to order, specify the quantity for each item, and add them to the order cart. The system will calculate the order total.'},
  { question: 'How do I log the receipt of items from the supplier?', answer: 'To log the receipt of items, use the dedicated Ionic application designed for this purpose. Open the application, select the specific supplier order, and mark each item as received by selecting them individually.'},
  { question: 'Is there a record of past supplier orders?', answer: 'Yes, you can generate a list report which details the information of past supplier orders'},

  //REFUND QUESTIONS
  { question: 'How do I facilitate a refund?', answer: 'You can navigate to the "Refund Management" section where you will be able to locate the booking of the client which needs to be refunded. Afterwhich the process is completed, you confirm the refund on the system.'},
  { question: 'Does the refund process occur on the system?', answer: 'No, the refund transaction is handled off of the system.'},

  //REPORTING QUESTIONS
  { question: 'What types of reports can I generate from the system?', answer: 'Our system offers a wide range of reports to cater to your needs. Some common report types include: Peak Season Day Visit summary report, Accommodation summary report, Room Rating report, Employee List report, Booking Type Remuneration report, Customer demographic report, Supplier List report just to name a few'},
  { question: 'How often are reports updated?', answer: 'Reports are typically updated in real-time or at scheduled intervals, depending on the report type.'},
  { question: 'Can I customize reports to meet specific requirements?', answer: 'Yes, our system allows you to customize most of our reports to meet your specific needs. You can often select the time frames to filters each report.'},

  //OTHER
  { question: 'Is the VAT amount updatable?', answer: 'Yes, in systems with dynamic VAT configuration, the VAT amount can typically be updated. You will have the flexibility to change the VAT rate or amount based on tax regulations or business requirements.'},
  { question: 'Where can I find user manuals for reference?', answer: 'You can find a step-by-step guide to the HydroTech system by clicking the link within the card above the FAQ section, on this screen.'},

];

search() {
  this.searchResults = [];

  const query = this.searchQuery.toLowerCase();

  this.questionsAndAnswers.forEach(item => {
    if (item.question.toLowerCase().includes(query)) {
      this.searchResults.push(item);
    }
  });
}


}
