export enum SelectedPage {
  Home = "home",
  About = "about",
  Contact = "contact",
  Classes = "classes",
}
export const LINKS = [
  { id: 1, path: "login" },
  { id: 2, path: "register" },
];

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}
