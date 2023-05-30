import { ICharacter } from "../models/ICardCharacters";

import Card from "../assets/image/characters/card.png";
import Card1 from "../assets/image/characters/card-1.png";
import Card2 from "../assets/image/characters/card-2.png";
import Card3 from "../assets/image/characters/card-3.png";
import Card4 from "../assets/image/characters/card-4.png";
import Card5 from "../assets/image/characters/card-5.png";

export const CHARACTERS_DATA: ICharacter[] = [
    {
        name: "Healer",
        des: `She can use the ability "Restoration" to restore the health of herself or allied creatures.`,
        img: Card
    },
    {
        name: "Pirate",
        des: `He has the ability to "Steal", which allows him to steal a card from the opponent's deck or hand."`,
        img: Card1
    },
    {
        name: "Hunter",
        des: `He can place a "Trap" on the battlefield that deals damage to enemy creatures when they enter play or attack the Hunter.`,
        img: Card2
    },
    {
        name: "Arrow",
        des: `She can use "Slow Arrow", which slows down the movement of her opponents and weakens their attacks.`,
        img: Card3
    },
    {
        name: "Shadow",
        des: `She can use "Dark Shield" which protects her from magical attacks and absorbs some of the damage received.`,
        img: Card4
    },
    {
        name: "Ghost",
        des: `He can use "Phantom Curse" to place a curse on the opponent's cards, reducing their effectiveness when they are used.`,
        img: Card5
    }
];