export interface Company {
  id?: number;
  name: string;
  logo?: string;
  email: string;
  website?: string;
  location: string;
  password: string;
  industry: string;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
