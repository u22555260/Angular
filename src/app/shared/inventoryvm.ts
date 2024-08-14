export interface InventoryVM {
    id: number;
    inventory_Name: string;
    minimum_Stock: number;
    maximum_Stock: number;
    inventory_Condition: string;
    inventory_Status: string;
    inventory_Type_Id: number;
    inventory_Type_Name: string;
    inventory_Type_Description: string;
    inventory_Category_Id: number;
    inventory_Category_Name: string;
    inventory_Category_Description: string;
  }