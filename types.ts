export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
}

export interface Product {
  id: string;
  category: Category;
  name: string;
  price: number;
  isFeatured: boolean;
  brand: Brand;
  type: Type;
  power: Power;
  location: Location;
  rate: Rate;

  images: Image[];
}

export interface Image {
  id: string;
  url: string;
}

export interface Power {
  id: string;
  value: string;
}
export interface Rate {
  id: string;
  value: string;
}
export interface Location {
  id: string;
  name: string;
}
export interface Brand {
  id: string;
  name: string;
}
export interface Type {
  id: string;
  imageUrl: string;
  name: string;
}
