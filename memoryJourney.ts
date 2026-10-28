// ✎ EDIT ME: the five photos and the shayari for the "memories under the moon" page (#/memories).
// Put your images in public/images/ and set src, e.g. src: 'images/memory-1.jpg'. Leave src empty to show a placeholder frame.
export interface JourneyPhoto { id: string; src?: string; alt: string; caption?: string; label?: string }
export const journeyPhotos: JourneyPhoto[] = [
  { id: 'j1', src: '', alt: 'Memory 1 (add your photo)', caption: 'sample caption one', label: 'memory no. 1' },
  { id: 'j2', src: '', alt: 'Memory 2 (add your photo)', caption: 'sample caption two', label: 'memory no. 2' },
  { id: 'j3', src: '', alt: 'Memory 3 (add your photo)', caption: 'sample caption three', label: 'memory no. 3' },
  { id: 'j4', src: '', alt: 'Memory 4 (add your photo)', caption: 'sample caption four', label: 'memory no. 4' },
  { id: 'j5', src: '', alt: 'Memory 5 (add your photo)', caption: 'sample caption five', label: 'memory no. 5' },
];
export const invite = {
  label: 'a little something for you',
  heading: "Ready to Dive Into Memories That Don't Exist Yet?",
  text: "Some memories haven't happened yet. But somehow, I can already imagine how beautiful they'll be with you.",
  cta: 'Dive In ✦',
};
// each inner array is one stanza; each string is one line
export const shayari: string[][] = [
  ['Yaadein kya hoti hain, kabhi socha hai?'],
  ['Kuch lamhe waqt ke saath beet jaate hain,', 'Kuch dil mein hamesha ke liye reh jaate hain.'],
  ['Aur kuch yaadein abhi bani hi nahi hoti,', 'Phir bhi unka khayaal chehre par muskaan le aata hai.'],
  ['Tere saath abhi kitne hi pal jeene baaki hain,', 'Kitni baatein, kitni hasi, kitni kahaaniyaan baaki hain.'],
  ['Shayad sabse khoobsurat yaadein woh nahi jo hum peeche chhod aaye,', 'Balki woh hain jo humne abhi milkar banani hain.'],
  ['Aur agar un yaadon mein tu saath ho,', 'Toh har aane wala kal apne aap mein ek khoobsurat tohfa hoga.'],
];
export const closingLine = "Here's to all the beautiful memories we haven't made yet. ♡";
