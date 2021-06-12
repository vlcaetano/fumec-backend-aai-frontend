import { Person } from "./person"

export type Sale = {
  id: number;
  amount: number;
  date: Date;
  seller: Person;
  customer: Person;
}