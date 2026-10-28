// ✎ EDIT THIS FILE: all sample text below is placeholder content. Replace it with your own.
export interface BirthdayPhoto { id: string; src: string; alt: string; caption?: string }
export interface BirthdayNote { id: string; title: string; message: string; colour: 'pink' | 'sage' | 'yellow' | 'lavender' }
export interface BirthdayMemory { id: string; date?: string; title: string; description: string; image?: string; note?: string /* hidden handwritten note */ }
export interface HiddenMessage { id: string; label: string; message: string }
export interface HeroNote { heading: string; message: string; signature: string }
export interface BirthdayContent {
  heroNotes: HeroNote[]; // text on the back of the two hero Polaroids (first = left, second = right)
  friendName: string; senderName?: string; birthdayDate?: string;
  introTitle: string; introMessage: string; heroTitle?: string; heroMessage: string;
  notes: BirthdayNote[]; memories: BirthdayMemory[]; photos: BirthdayPhoto[]; hiddenMessages: HiddenMessage[];
  letterGreeting: string; letterParagraphs: string[]; letterSignoff: string; musicSrc?: string;
}

export const content: BirthdayContent = {
  friendName: 'Tanisha',
  senderName: '', // your name, used in the letter sign-off
  birthdayDate: '',
  introTitle: 'Psst... this is for you.',
  introMessage: 'Someone special has a birthday today.',
  heroMessage: 'Today, the whole little universe celebrates you. let the show begin',
  // ✎ Notes revealed when each hero Polaroid is flipped (hover on desktop, tap on phones).
  heroNotes: [
    { heading: 'a little reminder ♡', message: 'You make ordinary days feel a little more special. I hope this new chapter brings you the same happiness, warmth, and beautiful little moments that you bring into the lives of others.', signature: 'always cheering for you ♡' },
    { heading: 'a wish for you ✨', message: 'May you always have reasons to smile, people who make you feel loved, dreams that excite you, and memories that make you look back and smile. You deserve so many beautiful things.', signature: 'happy birthday, Tanisha! ♡' },
  ],
  notes: [
    { id: 'n1', title: 'Your funniest habit', message: 'Sample note: write something only you two would understand.', colour: 'pink' },
    { id: 'n2', title: 'Something I admire', message: 'Sample note: what makes her stand out to you?', colour: 'sage' },
    { id: 'n3', title: 'A memory that makes me laugh', message: 'Sample note: replace with a real memory.', colour: 'yellow' },
    { id: 'n4', title: 'A wish for your year', message: 'Sample note: what do you hope this year brings her?', colour: 'lavender' },
  ],
  memories: [
    { id: 'm1', date: 'Sample: the beginning', title: 'The day we first met', description: 'Placeholder. Write the real story here.',
      note: "Some people enter your life quietly and somehow become a beautiful part of your story. I'm glad our paths crossed. ♡" },
    { id: 'm2', date: 'Sample: some day', title: "That day we couldn't stop laughing", description: 'Placeholder. Replace with a real moment.',
      note: 'Some of my favorite moments are the ones where we laugh so much that nothing else matters. I hope we make many more memories like these. ✨' },
    { id: 'm3', title: 'A tiny moment I still remember', description: 'Placeholder. Dates and photos are optional.',
      note: "It's funny how the smallest moments can become the memories we hold closest to our hearts. This is one I never want to forget. ♡" },
  ],
  photos: [
    // The first two photos appear in the hero Polaroids (left, right). Files live in public/images/.
    { id: 'p1', src: 'images/tanisha-1.jpg', alt: 'Tanisha in a lavender embroidered outfit with her eyes closed and one hand held out to the side', caption: 'MahaShaktishaali' },
    { id: 'p2', src: 'images/tanisha-2.jpg', alt: 'Tanisha in the same lavender outfit, smiling playfully with her hand near her cheek', caption: '💜' },
  ],

  hiddenMessages: [
    { id: 'h1', label: 'A sealed envelope', message: 'You make ordinary days memorable.' },
    { id: 'h2', label: 'A little sticker', message: 'Never forget how much you matter.' },
    { id: 'h3', label: 'A folded note', message: 'Here is to more ridiculous adventures.' },
  ],
  letterGreeting: 'Dear Tanisha,',
  letterParagraphs: [
    'Happy birthday to one of the most wonderful people in my life. (Sample letter: replace with your own words.)',
    'Thank you for all the laughter, the little moments, and the memories that mean more to me than I can explain.',
    'I hope this new year brings you happiness, peace, exciting adventures, and countless reasons to smile.',
  ],
  letterSignoff: 'Always cheering for you,',
  musicSrc: 'music/our-song.mp3',
};

export function validate(c: BirthdayContent): BirthdayContent {
  return {
    ...c,
    friendName: c.friendName?.trim() || 'Friend',
    notes: (c.notes ?? []).slice(0, 6),
    memories: c.memories ?? [], photos: (c.photos ?? []).filter(p => p.src && p.alt),
    hiddenMessages: (c.hiddenMessages ?? []).slice(0, 4),
    letterParagraphs: c.letterParagraphs ?? [],
    heroNotes: c.heroNotes ?? [],
  };
}
