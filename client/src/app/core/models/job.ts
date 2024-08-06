import { Category } from './category';
import { Company } from './company';

export interface Job {
  id: number;
  title: string;
  location: string;
  type: string;
  experience: string;
  salary: string;
  gender: string;
  description: string;
  responsibilities: string;
  qualifications: string;
  benefits?: string;
  tags: string[];
  createdAt?: Date;
  categoryId?: number;
  companyId?: number;
  company: Company;
  category: Category;
}
