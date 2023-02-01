export enum SelectedPage {
  Home = "home",
  About = "about",
  Contact = "contact",
  Classes = "classes",
}
export const LINKS = [
  { id: 1, path:"faq"},
  { id: 2, path: "products" },
  { id: 3, path: "login" },
  { id: 4, path: "register" },
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
