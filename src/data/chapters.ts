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
      },
      {
        id: "b",
        text: "Ask questions first",
        outcome:
          "You begin asking questions and gain some understanding before deciding.",
      },
      {
        id: "c",
        text: "Accept the invitation",
        outcome:
          "You visit the mosque and experience the environment and community.",
      },
      {
        id: "d",
        text: "Research Islam privately instead",
        outcome:
          "You explore online and begin forming your own understanding.",
      },
    ],
    explanation: {
      text: "A mosque is a place of worship where Muslims gather for prayer, learning, and community. Islam encourages seeking knowledge and building connections in a respectful, peaceful way.",
      reference: "Qur'an 49:10 — Indeed, the believers are brothers.",
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
      },
      {
        id: "b",
        text: "Ask someone for guidance",
        outcome:
          "Someone kindly explains what is happening and makes you feel welcome.",
      },
      {
        id: "c",
        text: "Try to copy what others are doing",
        outcome:
          "You follow along and experience the movements of prayer.",
      },
      {
        id: "d",
        text: "Feel uncomfortable and leave",
        outcome:
          "You leave early, missing a chance to understand the experience.",
      },
    ],
    explanation: {
      text: "Muslim prayer (salah) is performed in a structured way and often in congregation. Mosques are welcoming places where people are encouraged to learn and ask questions.",
      reference:
        "Qur'an 2:43 — Establish prayer and bow with those who bow.",
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
      },
      {
        id: "b",
        text: "Ask someone about it",
        outcome: "You learn it is the Adhan, calling people to prayer.",
      },
      {
        id: "c",
        text: "Search online",
        outcome:
          "You discover translations and begin to understand its message.",
      },
      {
        id: "d",
        text: "Listen carefully and reflect",
        outcome:
          "You feel a sense of calm and curiosity about its purpose.",
      },
    ],
    explanation: {
      text: "The Adhan is the call to prayer, reminding Muslims to pause and reconnect with Allah throughout the day.",
      reference:
        "Qur'an 62:9 — When the call to prayer is made, hasten to the remembrance of Allah.",
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
        outcome:
          "You receive a clear explanation about Allah's oneness.",
      },
      {
        id: "b",
        text: "Search for answers yourself",
        outcome: "You begin learning about Tawheed (oneness of God).",
      },
      {
        id: "c",
        text: "Compare with other beliefs",
        outcome: "You explore similarities and differences.",
      },
      {
        id: "d",
        text: "Avoid the topic",
        outcome: "You delay understanding something central to Islam.",
      },
    ],
    explanation: {
      text: "In Islam, Allah is One, unique, and unlike His creation. He is the Creator, Sustainer, and Most Merciful.",
      reference: "Qur'an 112:1 — Say: He is Allah, One.",
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
      },
      {
        id: "b",
        text: "Look for translated meanings",
        outcome: "You understand the message more clearly.",
      },
      {
        id: "c",
        text: "Ask someone to guide you",
        outcome: "You gain structured understanding.",
      },
      {
        id: "d",
        text: "Close it for later",
        outcome: "You postpone discovering its message.",
      },
    ],
    explanation: {
      text: "The Qur'an is the final revelation in Islam, guiding humanity in belief, character, and daily life.",
      reference:
        "Qur'an 2:2 — This is the Book about which there is no doubt, a guidance for the mindful.",
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
];

export function getChapter(id: number): Chapter | undefined {
  return chapters.find((c) => c.id === id);
}

export function maxChapterId(): number {
  return Math.max(...chapters.map((c) => c.id), 1);
}
