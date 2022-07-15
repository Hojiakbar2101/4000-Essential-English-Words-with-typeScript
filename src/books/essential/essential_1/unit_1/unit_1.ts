import { INewWord } from "../../unitDetails/essential.interface";
import Unit from "../../unitDetails/essential.unit.class";
import { FixedArray } from "../../unitDetails/fixed.unit.length";

const unit_1_newWord: FixedArray<INewWord, 1> = [
  {
    english: "afraid",
    uz: "qo'rqqan, cho'chigan",
    read: " [afreid] adj. ",
    definition: "When someone is afraid, they feel fear.",
    example: "The woman was afraid of what she saw.",
  },
];

const unit_1 = new Unit(1, "The Lion and the Rabbit", unit_1_newWord);
export default unit_1;
