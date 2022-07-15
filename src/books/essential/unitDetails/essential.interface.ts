export interface INewWord {
  english: string;
  uz: string;
  read: string;
  definition: string;
  example: string;
}
export default interface IEssentialUnit {
  id: number;
  unit_name: string;
  new_word: INewWord[];
}
