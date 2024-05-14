export interface SchoolObj {
  id: number;
  name: string;
  type: "Primary" | "Secondary" | "IGCSE";
  county?: string; // Optional county field
  registrationDate?: Date; // Optional registration date
  contact_info?: { phone?: string; email?: string }; // Optional contact information
  products: (number|string)[]
}

export interface ProductObj {
  id: number;
  name: string;
}

export interface Signup {
  id: number;
  schoolId: number;
  productId: number;
  signupDate: Date;
}

export interface InvoiceObj {
  id: number;
  school_id: number;
  invoice_number: string;
  invoice_item: string;
  creation_date: Date;
  due_date: Date;
  amount: number;
  paid_amount: number;
  status: "Completed" | "Pending";
}

export interface CollectionObj {
  id: number;
  invoice_id: number;
  collectionNumber: string;
  collectionDate: Date;
  amount: number;
  status?: "Valid" | "Bounced"; // Optional status field (default: "Valid")
}
