// ✎ The letter shown inside the envelope. Edit the text here.
export type LetterBlock = { kind: 'p' | 'quote' | 'verse' | 'end'; text: string };

export const letterBlocks: LetterBlock[] = [
  { kind: 'p', text: 'Happy birthday Vai,' },
  { kind: 'p', text: 'Janamdin Mubarka. Haste rho, muskuraate rho, khaate rho, peete rho — esa toh sab hi bolenge, lekin this is the only day where you can be either happiest or very very sad, mtlb disappointment ho jaati apne hi birthday se esa.' },
  { kind: 'p', text: 'Lekin I want you to feel jisse bolte na special, kyuki you are Vai, jitna mai jaanta uske according ofcourse. Ab tu jitna deny krna krle, denial does not change anything. Aur there\u2019s a quote in Attack on Titan, protagonist\u2019s mother says:' },
  { kind: 'quote', text: '\u201CWhat is wrong with not be the genius or the miracle child, the moment you were born into this world that made you special, not people\u2019s opinion or what they are doing.\u201D' },
  { kind: 'p', text: 'Remembering back, mai toh pehli baar wish kr rha tujhe. Going back to topic, kehte hai ki memories are in which you are happy with something, aur shayad kuch lines bhi thi, if I do not fumble:' },
  { kind: 'verse', text: 'Kehte hain yaadein wahi, jinmein tu khush nazar aaye,\nAur jo tujhe khushi na de, woh lamhe yaad hi kyun aaye.\nTeri hansi se hi toh har yaad khoobsurat hai,\nWarna waqt ke guzre har pal ko yaad rakhna zaroori thodi hai.' },
  { kind: 'p', text: 'I know terko lmbe letters pdhne mein aalas aata, isiliye last baar\u2026' },
  { kind: 'end', text: 'happy birthdayyyyyyyyyyyyy \u2661' },
];
