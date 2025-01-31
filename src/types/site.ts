export type ContactFormType = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  property: PropertyType;
};

export interface PropertyType {
  metadata: {
    title: string;
    description: string;
    price: number;
    tag: string;
    image: string;
    features: string[];
    details: {
      [key: string]: string | number;
    };
  };
  slug: string;
  content: string;
}
