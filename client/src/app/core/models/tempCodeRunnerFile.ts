export interface Category {
  id: number;
  name: string;
  icon?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export enum CategoryIcons {
  'Software Development' = 'pi-code',
  'Data Science' = 'pi-chart-scatter',
  'Marketing' = 'pi-megaphone',
  'Finance' = 'pi-money-bill',
  'Human Resources' = 'pi-users',
  'Sales' = 'pi-shopping-cart',
  'Customer Support' = 'pi-headphones',
  'Operations' = 'pi-spinner-dotted',
  'Legal' = 'pi-briefcase',
  'Product Management' = 'pi-box',
  'Design' = 'pi-pencil',
  'DevOps' = 'pi-cloud',
}
