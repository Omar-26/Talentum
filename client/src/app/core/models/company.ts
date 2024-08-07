export class Company {
  id?: number = 0;
  name: string = '';
  email: string = '';
  location: string = '';
  password: string = '';
  industry: string = '';
  description: string = '';
  logo?: string = '';
  website: string = '';
  createdAt?: Date = new Date();
  updatedAt?: Date = new Date();
}
