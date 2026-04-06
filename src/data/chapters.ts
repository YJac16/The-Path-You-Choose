import type { Chapter } from "@/types/game";

export const chapters: Chapter[] = [
  {
    id: 1,
    title: "The Invitation",
    scenario:
      "You are invited by a Muslim colleague to visit a mosque for the first time. You feel curious but unsure.",
    choices: [
      {
        id: "a",
        text: "Politely decline",
        outcome:
          "You decline and miss an opportunity to learn more firsthand.",
        impact: { awareness: -1 },
      },
      {
        id: "b",
        text: "Ask questions first",
        outcome:
          "You begin asking questions and gain some understanding before deciding.",
        impact: { knowledge: 2, reflection: 1 },
      },
      {
        id: "c",
        text: "Accept the invitation",
        outcome:
          "You visit the mosque and experience the environment and community.",
        impact: { awareness: 2, reflection: 1 },
      },
      {
        id: "d",
        text: "Research Islam privately instead",
        outcome:
          "You explore online and begin forming your own understanding.",
        impact: { knowledge: 2 },
      },
    ],
    explanation: {
      text: "A mosque is a place of worship where Muslims gather for prayer, learning, and community. Islam encourages seeking knowledge and building connections in a respectful, peaceful way.",
      reference: "Qur'an 49:10 — Indeed, the believers are brothers.",
    },
    reflection: {
      question:
        "How do you usually respond to new or unfamiliar experiences?",
      placeholder: "Write your thoughts...",
    },
    quiz: [
      {
        question: "What is a mosque primarily used for?",
        options: ["Social events", "Prayer", "Business meetings", "Storage"],
        answer: 1,
        explanation:
          "Mosques are primarily places of worship where Muslims perform their daily prayers.",
      },
      {
        question: "What is the Arabic word for mosque?",
        options: ["Masjid", "Madrasa", "Kaaba", "Minbar"],
        answer: 0,
        explanation: "Masjid is the Arabic word for mosque.",
      },
      {
        question: "What is one purpose of visiting a mosque?",
        options: [
          "Entertainment",
          "Community and worship",
          "Shopping",
          "Tourism only",
        ],
        answer: 1,
        explanation:
          "Mosques serve as centers for worship and community connection.",
      },
    ],
  },
  {
    id: 2,
    title: "The First Visit",
    scenario:
      "You decide to visit the mosque. As you enter, you notice people removing their shoes and standing in rows. You feel unsure about what to do.",
    choices: [
      {
        id: "a",
        text: "Observe quietly from the back",
        outcome:
          "You watch respectfully and begin to understand the flow of prayer.",
        impact: { reflection: 1, awareness: 1 },
      },
      {
        id: "b",
        text: "Ask someone for guidance",
        outcome:
          "Someone kindly explains what is happening and makes you feel welcome.",
        impact: { knowledge: 2, awareness: 1 },
      },
      {
        id: "c",
        text: "Try to copy what others are doing",
        outcome:
          "You follow along and experience the movements of prayer.",
        impact: { awareness: 2 },
      },
      {
        id: "d",
        text: "Feel uncomfortable and leave",
        outcome:
          "You leave early, missing a chance to understand the experience.",
        impact: { awareness: -1 },
      },
    ],
    explanation: {
      text: "Muslim prayer (salah) is performed in a structured way and often in congregation. Mosques are welcoming places where people are encouraged to learn and ask questions.",
      reference:
        "Qur'an 2:43 — Establish prayer and bow with those who bow.",
    },
    reflection: {
      question:
        "What helps you feel grounded when you step into an unfamiliar sacred space?",
      placeholder: "Write a short reflection...",
    },
    quiz: [
      {
        question: "What is the name of the Muslim prayer?",
        options: ["Zakat", "Salah", "Hajj", "Sawm"],
        answer: 1,
        explanation:
          "Salah is the obligatory prayer performed five times a day.",
      },
      {
        question: "Why do Muslims pray in rows?",
        options: [
          "For organization only",
          "To show unity and equality",
          "For space saving",
          "Tradition only",
        ],
        answer: 1,
        explanation:
          "Praying in rows emphasizes unity, discipline, and equality before God.",
      },
      {
        question: "What should someone do if they are unsure in a mosque?",
        options: [
          "Leave immediately",
          "Ask questions",
          "Ignore everything",
          "Take photos",
        ],
        answer: 1,
        explanation: "Islam encourages asking questions and seeking knowledge.",
      },
    ],
  },
  {
    id: 3,
    title: "The Call to Prayer",
    scenario:
      "You hear a beautiful call echoing from the mosque. It's unfamiliar but calming. You wonder what it means.",
    choices: [
      {
        id: "a",
        text: "Ignore it",
        outcome: "You continue your day without exploring its meaning.",
        impact: { awareness: -1 },
      },
      {
        id: "b",
        text: "Ask someone about it",
        outcome: "You learn it is the Adhan, calling people to prayer.",
        impact: { knowledge: 2, awareness: 1 },
      },
      {
        id: "c",
        text: "Search online",
        outcome:
          "You discover translations and begin to understand its message.",
        impact: { knowledge: 2 },
      },
      {
        id: "d",
        text: "Listen carefully and reflect",
        outcome:
          "You feel a sense of calm and curiosity about its purpose.",
        impact: { reflection: 2, awareness: 1 },
      },
    ],
    explanation: {
      text: "The Adhan is the call to prayer, reminding Muslims to pause and reconnect with Allah throughout the day.",
      reference:
        "Qur'an 62:9 — When the call to prayer is made, hasten to the remembrance of Allah.",
    },
    reflection: {
      question:
        "When you hear something beautiful but unfamiliar, what is your first instinct?",
      placeholder: "Write a short reflection...",
    },
    quiz: [
      {
        question: "What is the Adhan?",
        options: ["A greeting", "A call to prayer", "A lecture", "A celebration"],
        answer: 1,
        explanation: "The Adhan is the call inviting Muslims to perform salah.",
      },
      {
        question: "How many daily prayers are there in Islam?",
        options: ["3", "4", "5", "6"],
        answer: 2,
        explanation: "Muslims pray five times a day.",
      },
      {
        question: "What is the purpose of the Adhan?",
        options: ["Music", "Reminder of prayer", "Alarm only", "Tradition"],
        answer: 1,
        explanation: "It serves as a reminder to connect with Allah.",
      },
    ],
  },
  {
    id: 4,
    title: "Who Is Allah?",
    scenario:
      "After your experiences, you begin wondering about Allah. You hear different descriptions and want clarity.",
    choices: [
      {
        id: "a",
        text: "Ask a knowledgeable person",
        outcome: "You receive a clear explanation about Allah's oneness.",
        impact: { knowledge: 2, reflection: 1 },
      },
      {
        id: "b",
        text: "Search for answers yourself",
        outcome: "You begin learning about Tawheed (oneness of God).",
        impact: { knowledge: 2 },
      },
      {
        id: "c",
        text: "Compare with other beliefs",
        outcome: "You explore similarities and differences.",
        impact: { knowledge: 1, awareness: 1 },
      },
      {
        id: "d",
        text: "Avoid the topic",
        outcome: "You delay understanding something central to Islam.",
        impact: { knowledge: -1 },
      },
    ],
    explanation: {
      text: "In Islam, Allah is One, unique, and unlike His creation. He is the Creator, Sustainer, and Most Merciful.",
      reference: "Qur'an 112:1 — Say: He is Allah, One.",
    },
    reflection: {
      question: "How do you seek clarity about big questions in life?",
      placeholder: "Write a short reflection...",
    },
    quiz: [
      {
        question: "What is Tawheed?",
        options: ["Prayer", "Charity", "Oneness of God", "Fasting"],
        answer: 2,
        explanation:
          "Tawheed is the belief in the absolute oneness of Allah.",
      },
      {
        question: "How many gods are there in Islam?",
        options: ["Many", "Two", "One", "None"],
        answer: 2,
        explanation: "Islam teaches that there is only one God.",
      },
      {
        question: "Which surah emphasizes Allah's oneness?",
        options: ["Al-Fatiha", "Al-Ikhlas", "Al-Baqarah", "An-Nas"],
        answer: 1,
        explanation:
          "Surah Al-Ikhlas clearly defines the oneness of Allah.",
      },
    ],
  },
  {
    id: 5,
    title: "The Quran Encounter",
    scenario:
      "You are given a copy of the Qur'an. You open it, unsure where to begin.",
    choices: [
      {
        id: "a",
        text: "Start reading from the beginning",
        outcome: "You begin your journey through its verses.",
        impact: { reflection: 2, knowledge: 1 },
      },
      {
        id: "b",
        text: "Look for translated meanings",
        outcome: "You understand the message more clearly.",
        impact: { knowledge: 2 },
      },
      {
        id: "c",
        text: "Ask someone to guide you",
        outcome: "You gain structured understanding.",
        impact: { knowledge: 2, reflection: 1 },
      },
      {
        id: "d",
        text: "Close it for later",
        outcome: "You postpone discovering its message.",
        impact: { awareness: -1 },
      },
    ],
    explanation: {
      text: "The Qur'an is the final revelation in Islam, guiding humanity in belief, character, and daily life.",
      reference:
        "Qur'an 2:2 — This is the Book about which there is no doubt, a guidance for the mindful.",
    },
    reflection: {
      question: "What draws you to read or learn about scripture?",
      placeholder: "Write a short reflection...",
    },
    quiz: [
      {
        question: "What is the Qur'an?",
        options: ["A storybook", "A historical text", "Revelation from Allah", "Poetry"],
        answer: 2,
        explanation:
          "The Qur'an is believed to be the word of Allah revealed to Prophet Muhammad ﷺ.",
      },
      {
        question: "In what language was the Qur'an revealed?",
        options: ["English", "Arabic", "Hebrew", "Latin"],
        answer: 1,
        explanation: "The Qur'an was revealed in Arabic.",
      },
      {
        question: "What is one purpose of the Qur'an?",
        options: ["Entertainment", "Guidance", "Debate", "Tradition"],
        answer: 1,
        explanation: "It serves as guidance for how to live a righteous life.",
      },
    ],
  },
  {
    id: 6,
    title: "The Prophet's Message",
    scenario:
      "You hear about Prophet Muhammad ﷺ and wonder why he is so important in Islam.",
    choices: [
      {
        id: "a",
        text: "Ask someone knowledgeable",
        outcome: "You learn he is the final messenger sent to guide humanity.",
        impact: { knowledge: 2 },
      },
      {
        id: "b",
        text: "Research his life",
        outcome: "You discover his character, honesty, and mission.",
        impact: { knowledge: 2, reflection: 1 },
      },
      {
        id: "c",
        text: "Compare with other prophets",
        outcome: "You understand that Islam teaches belief in all prophets.",
        impact: { knowledge: 2, awareness: 1 },
      },
      {
        id: "d",
        text: "Ignore the topic",
        outcome: "You miss understanding a key part of Islam.",
        impact: { knowledge: -1 },
      },
    ],
    explanation: {
      text: "Muslims believe Prophet Muhammad ﷺ is the final messenger, sent to deliver the Qur'an and guide humanity with his example.",
      reference:
        "Qur'an 33:40 — Muhammad is the Messenger of Allah and the seal of the prophets.",
    },
    reflection: {
      question: "What would you do in this situation and why?",
      placeholder: "Write a short reflection...",
    },
    quiz: [
      {
        question: "Who is Prophet Muhammad ﷺ in Islam?",
        options: ["A king", "A messenger", "A philosopher", "A poet"],
        answer: 1,
        explanation: "He is the final messenger sent by Allah.",
      },
      {
        question: "Do Muslims believe in other prophets?",
        options: ["No", "Only Muhammad ﷺ", "Yes, many prophets", "Only a few"],
        answer: 2,
        explanation:
          "Muslims believe in all prophets including Adam, Musa, and Isa (peace be upon them).",
      },
      {
        question: "What was revealed to Prophet Muhammad ﷺ?",
        options: ["Torah", "Bible", "Qur'an", "Psalms"],
        answer: 2,
        explanation: "The Qur'an was revealed to Prophet Muhammad ﷺ.",
      },
    ],
  },
  {
    id: 7,
    title: "Why Pray?",
    scenario:
      "You notice Muslims praying regularly and wonder why it is done so consistently.",
    choices: [
      {
        id: "a",
        text: "Ask someone directly",
        outcome: "You learn prayer is a direct connection with Allah.",
        impact: { knowledge: 1, reflection: 1 },
      },
      {
        id: "b",
        text: "Observe quietly",
        outcome: "You notice discipline and calmness in prayer.",
        impact: { reflection: 2 },
      },
      {
        id: "c",
        text: "Try it yourself",
        outcome: "You experience a moment of stillness and reflection.",
        impact: { reflection: 2, awareness: 1 },
      },
      {
        id: "d",
        text: "Dismiss it as routine",
        outcome: "You overlook its deeper meaning.",
        impact: { awareness: -1 },
      },
    ],
    explanation: {
      text: "Prayer (salah) is a daily act of worship that strengthens a Muslim's connection with Allah and brings structure and peace to life.",
      reference:
        "Qur'an 29:45 — Indeed, prayer prevents immorality and wrongdoing.",
    },
    reflection: {
      question: "What would you do in this situation and why?",
      placeholder: "Write a short reflection...",
    },
    quiz: [
      {
        question: "How often do Muslims pray daily?",
        options: ["3 times", "4 times", "5 times", "Once a week"],
        answer: 2,
        explanation: "Muslims pray five times daily.",
      },
      {
        question: "What is one purpose of prayer?",
        options: ["Exercise", "Routine only", "Connection with Allah", "Social event"],
        answer: 2,
        explanation: "Prayer connects a person directly with Allah.",
      },
      {
        question: "What can prayer help prevent?",
        options: ["Sleep", "Work", "Wrongdoing", "Hunger"],
        answer: 2,
        explanation: "Prayer helps guide behavior and prevent wrongdoing.",
      },
    ],
  },
  {
    id: 8,
    title: "Fasting in Ramadan",
    scenario:
      "You see Muslims fasting during Ramadan and wonder why they avoid food and drink for long hours.",
    choices: [
      {
        id: "a",
        text: "Ask about its purpose",
        outcome: "You learn fasting builds self-control and empathy.",
        impact: { knowledge: 1, reflection: 1 },
      },
      {
        id: "b",
        text: "Try fasting for a day",
        outcome: "You experience discipline and reflection.",
        impact: { reflection: 2, awareness: 1 },
      },
      {
        id: "c",
        text: "Research Ramadan",
        outcome: "You understand its spiritual significance.",
        impact: { knowledge: 2 },
      },
      {
        id: "d",
        text: "Assume it's just tradition",
        outcome: "You miss its deeper purpose.",
        impact: { awareness: -1 },
      },
    ],
    explanation: {
      text: "Fasting during Ramadan teaches self-discipline, gratitude, and mindfulness of Allah.",
      reference:
        "Qur'an 2:183 — Fasting is prescribed so that you may become mindful of Allah.",
    },
    reflection: {
      question: "What would you do in this situation and why?",
      placeholder: "Write a short reflection...",
    },
    quiz: [
      {
        question: "What is Ramadan?",
        options: ["A festival", "A fasting month", "A prayer only", "A holiday"],
        answer: 1,
        explanation: "Ramadan is the month of fasting in Islam.",
      },
      {
        question: "What is one goal of fasting?",
        options: ["Weight loss", "Discipline and mindfulness", "Competition", "Travel"],
        answer: 1,
        explanation: "Fasting builds self-control and awareness of Allah.",
      },
      {
        question: "When do Muslims fast?",
        options: ["Night only", "Sunrise to sunset", "All day and night", "Random times"],
        answer: 1,
        explanation: "Fasting is from dawn until sunset.",
      },
    ],
  },
  {
    id: 9,
    title: "Charity and Giving",
    scenario:
      "You notice Muslims regularly giving to charity and helping others.",
    choices: [
      {
        id: "a",
        text: "Ask why charity is important",
        outcome: "You learn it purifies wealth and helps society.",
        impact: { knowledge: 1, awareness: 1 },
      },
      {
        id: "b",
        text: "Give a small amount",
        outcome: "You feel a sense of generosity and impact.",
        impact: { reflection: 1, awareness: 1 },
      },
      {
        id: "c",
        text: "Research Islamic charity",
        outcome: "You learn about zakat and voluntary charity.",
        impact: { knowledge: 2 },
      },
      {
        id: "d",
        text: "Ignore it",
        outcome: "You miss its social importance.",
        impact: { awareness: -1 },
      },
    ],
    explanation: {
      text: "Charity (zakat and sadaqah) is a core part of Islam, helping those in need and purifying one's wealth.",
      reference:
        "Qur'an 2:261 — The example of those who spend in the way of Allah is like a seed growing many times over.",
    },
    reflection: {
      question: "What would you do in this situation and why?",
      placeholder: "Write a short reflection...",
    },
    quiz: [
      {
        question: "What is zakat?",
        options: ["Prayer", "Charity", "Fasting", "Pilgrimage"],
        answer: 1,
        explanation: "Zakat is obligatory charity given to those in need.",
      },
      {
        question: "What does charity do?",
        options: ["Reduces wealth only", "Purifies wealth", "Has no effect", "Only social benefit"],
        answer: 1,
        explanation: "Charity purifies wealth and benefits society.",
      },
      {
        question: "Is charity only obligatory in Islam?",
        options: ["Yes", "No, voluntary charity is encouraged too", "Only yearly", "Only for the rich"],
        answer: 1,
        explanation: "Both obligatory and voluntary charity are encouraged.",
      },
    ],
  },
  {
    id: 10,
    title: "Living with Purpose",
    scenario:
      "After everything you've learned, you begin thinking about your purpose in life.",
    choices: [
      {
        id: "a",
        text: "Reflect deeply on your purpose",
        outcome: "You begin aligning your life with meaning.",
        impact: { reflection: 2, awareness: 1 },
      },
      {
        id: "b",
        text: "Ask others for guidance",
        outcome: "You gain insight into Islamic purpose.",
        impact: { knowledge: 1, reflection: 1 },
      },
      {
        id: "c",
        text: "Focus only on daily life",
        outcome: "You delay deeper reflection.",
        impact: { awareness: -1 },
      },
      {
        id: "d",
        text: "Explore Islamic teachings further",
        outcome: "You discover a clear sense of purpose.",
        impact: { knowledge: 2, reflection: 1 },
      },
    ],
    explanation: {
      text: "Islam teaches that life's purpose is to worship Allah and live a meaningful, ethical life.",
      reference:
        "Qur'an 51:56 — I did not create jinn and mankind except to worship Me.",
    },
    reflection: {
      question: "What would you do in this situation and why?",
      placeholder: "Write a short reflection...",
    },
    quiz: [
      {
        question: "What is the purpose of life in Islam?",
        options: ["Wealth", "Fame", "Worship Allah", "Entertainment"],
        answer: 2,
        explanation: "The purpose of life is to worship Allah and live righteously.",
      },
      {
        question: "What does worship include?",
        options: ["Only prayer", "All good actions done sincerely", "Only fasting", "Only charity"],
        answer: 1,
        explanation: "Worship includes all sincere actions done for Allah.",
      },
      {
        question: "What does Islam encourage?",
        options: ["Carelessness", "Meaningful living", "Isolation", "Confusion"],
        answer: 1,
        explanation: "Islam encourages purposeful and ethical living.",
      },
    ],
  },
  {
    id: 11,
    title: "Workplace Ethics",
    scenario:
      "At work, you notice others cutting corners to get ahead. You feel pressure to do the same.",
    choices: [
      {
        id: "a",
        text: "Follow others to fit in",
        outcome: "You gain short-term benefit but compromise integrity.",
        impact: { awareness: -1 },
      },
      {
        id: "b",
        text: "Stay honest in your work",
        outcome: "You maintain integrity even if it's harder.",
        impact: { awareness: 2 },
      },
      {
        id: "c",
        text: "Ask for advice",
        outcome: "You seek guidance and clarity.",
        impact: { knowledge: 1 },
      },
    ],
    explanation: {
      text: "Islam places great importance on honesty and integrity in all dealings.",
      reference: "Qur'an 83:1 — Woe to those who give less than due.",
    },
    reflection: {
      question: "How do you handle pressure to compromise your values?",
      placeholder: "Reflect here...",
    },
    quiz: [
      {
        question: "What does Islam emphasize in work?",
        options: ["Speed", "Honesty", "Competition", "Profit"],
        answer: 1,
        explanation: "Honesty and fairness are core values in Islam.",
      },
    ],
  },
  {
    id: 12,
    title: "Family Relationships",
    scenario:
      "You have a disagreement with a family member. Emotions are high.",
    choices: [
      {
        id: "a",
        text: "Respond with anger",
        outcome: "The situation escalates.",
        impact: { awareness: -1 },
      },
      {
        id: "b",
        text: "Stay calm and patient",
        outcome: "You help de-escalate the conflict.",
        impact: { reflection: 2 },
      },
      {
        id: "c",
        text: "Walk away and reflect",
        outcome: "You gain perspective before responding.",
        impact: { reflection: 1 },
      },
    ],
    explanation: {
      text: "Islam teaches kindness, patience, and maintaining family ties.",
      reference: "Qur'an 17:23 — Show kindness to parents.",
    },
    reflection: {
      question: "How do you usually react during conflict?",
      placeholder: "Reflect here...",
    },
    quiz: [
      {
        question: "What is encouraged in family disputes?",
        options: ["Anger", "Patience", "Silence only", "Avoidance"],
        answer: 1,
        explanation: "Patience and kindness are encouraged.",
      },
    ],
  },
  {
    id: 13,
    title: "Dealing with Criticism",
    scenario: "Someone criticizes your beliefs publicly.",
    choices: [
      {
        id: "a",
        text: "React defensively",
        outcome: "The situation becomes tense.",
        impact: { awareness: -1 },
      },
      {
        id: "b",
        text: "Respond calmly",
        outcome: "You maintain dignity and composure.",
        impact: { reflection: 2 },
      },
      {
        id: "c",
        text: "Ignore and move on",
        outcome: "You avoid conflict but miss engagement.",
        impact: { awareness: 1 },
      },
    ],
    explanation: {
      text: "Islam encourages responding with wisdom and good character.",
      reference:
        "Qur'an 16:125 — Invite with wisdom and good instruction.",
    },
    reflection: {
      question: "How do you handle criticism of your beliefs?",
      placeholder: "Reflect here...",
    },
    quiz: [
      {
        question: "How should Muslims respond?",
        options: ["Anger", "Wisdom", "Silence always", "Retaliation"],
        answer: 1,
        explanation: "Wisdom and good character are encouraged.",
      },
    ],
  },
  {
    id: 14,
    title: "Social Pressure",
    scenario:
      "Friends encourage you to do something you're uncomfortable with.",
    choices: [
      {
        id: "a",
        text: "Go along with it",
        outcome: "You feel uneasy afterward.",
        impact: { awareness: -1 },
      },
      {
        id: "b",
        text: "Politely decline",
        outcome: "You stay true to your values.",
        impact: { awareness: 2 },
      },
      {
        id: "c",
        text: "Avoid the situation",
        outcome: "You remove yourself from pressure.",
        impact: { reflection: 1 },
      },
    ],
    explanation: {
      text: "Islam encourages standing firm on values and avoiding harmful actions.",
      reference:
        "Qur'an 25:28 — I wish I had not taken that one as a friend.",
    },
    reflection: {
      question: "How do you deal with peer pressure?",
      placeholder: "Reflect here...",
    },
    quiz: [
      {
        question: "What is encouraged?",
        options: ["Following others", "Standing firm", "Blending in", "Ignoring values"],
        answer: 1,
        explanation: "Standing firm on values is encouraged.",
      },
    ],
  },
  {
    id: 15,
    title: "Moments of Doubt",
    scenario: "You experience doubts and questions about faith.",
    choices: [
      {
        id: "a",
        text: "Ignore the doubts",
        outcome: "They continue to grow.",
        impact: { awareness: -1 },
      },
      {
        id: "b",
        text: "Seek knowledge",
        outcome: "You begin finding clarity.",
        impact: { knowledge: 2 },
      },
      {
        id: "c",
        text: "Talk to someone trustworthy",
        outcome: "You gain reassurance and perspective.",
        impact: { reflection: 2 },
      },
    ],
    explanation: {
      text: "Islam encourages seeking knowledge and addressing doubts thoughtfully.",
      reference: "Qur'an 20:114 — My Lord, increase me in knowledge.",
    },
    reflection: {
      question: "How do you respond when you have doubts?",
      placeholder: "Reflect here...",
    },
    quiz: [
      {
        question: "What should you do when unsure?",
        options: ["Ignore it", "Seek knowledge", "Avoid learning", "Stay confused"],
        answer: 1,
        explanation: "Seeking knowledge is encouraged.",
      },
    ],
  },
];

export function getChapter(id: number): Chapter | undefined {
  return chapters.find((c) => c.id === id);
}

export function maxChapterId(): number {
  return Math.max(...chapters.map((c) => c.id), 1);
}

