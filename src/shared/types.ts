export enum SelectedPage {
  Home = "home",
  About = "about",
  Contact = "contact",
  Classes = "classes",
}
export const LINKS = [
  { id: 1, path: "products" },
  { id: 2, path: "login" },
  { id: 3, path: "register" },
];

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ProductType {
  img: string;
  title: string;
  description: string;
}
