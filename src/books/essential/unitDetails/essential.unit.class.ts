import IEssentialUnit, { INewWord } from "./essential.interface";

class Unit implements IEssentialUnit {
  id: number;
  unit_name: string;
  new_word: INewWord[];
  constructor(id: number, unit_name: string, new_word: INewWord[]) {
    this.id = id;
    this.unit_name = unit_name;
    this.new_word = new_word;
  }
}
export default Unit;
