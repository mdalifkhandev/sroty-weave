export type Clue = {
  id: string;
  title: string;
  description: string;
};

export type Choice = {
  id: string;
  text: string;
  nextNodeId: string;
  isCorrect?: boolean;
};

export type StoryNode = {
  id: string;
  text: string[]; // Array of paragraphs
  question?: string; // Text preceding the choices
  choices: Choice[];
  cluesToUnlock?: string[]; // Clue IDs unlocked upon entering this node
  isEnding?: boolean;
};

export type PathChoice = {
  nodeId: string;
  choiceId: string;
  choiceText: string;
};

export const MOCK_CLUES: Record<string, Clue> = {
  clue_1: {
    id: "clue_1",
    title: "Note 1",
    description: "Blue orchids harvested in the greenhouse their resin yields a sedative compound. The brass mortar holds concentrated paste.",
  },
  clue_2: {
    id: "clue_2",
    title: "Note 2",
    description: "Dr. Harlow's journal the chemical smell is a deliberate signal.",
  },
  clue_3: {
    id: "clue_3",
    title: "Note 3",
    description: "The boot print matches the felt lining of the display case exactly.",
  },
  clue_4: {
    id: "clue_4",
    title: "Note 4",
    description: "The codicil is authenticated within the week.",
  },
  clue_5: {
    id: "clue_5",
    title: "Note 5",
    description: "Arlo Chen's keycard shows two entries this morning.",
  },
};

export const MOCK_STORY: Record<string, StoryNode> = {
  node_1: {
    id: "node_1",
    text: [
      "The greenhouse is warm and dense - and beneath the orchids, something else: faintly sweet and chemical. A half-drunk cup of tea sits on the potting bench, still warm. Dr. Harlow's journal lies open to a page dated four days ago. A back door stands slightly open, boot print pointing toward the kitchen - but the journal is right here, open, as if left for someone to find."
    ],
    question: "Read Carefully - What do you do?",
    choices: [
      {
        id: "c1",
        text: "Read Harlow's journal - the chemical smell and the open page are both deliberate signals",
        nextNodeId: "node_2",
        isCorrect: true,
      },
      {
        id: "c2",
        text: "Follow whoever just fled through the back door",
        nextNodeId: "node_bad_1",
        isCorrect: false,
      }
    ],
  },
  node_2: {
    id: "node_2",
    text: [
      "You examine the journal. The entry from four days ago details the synthesis of a potent sedative using the blue orchids. It matches the symptoms observed in the victim.",
      "The chemical smell is stronger here. Next to the journal, you notice a brass mortar with traces of a concentrated paste."
    ],
    question: "The clues align. It's time to decide where the investigation leads next.",
    cluesToUnlock: ["clue_1"],
    choices: [
      {
        id: "c3",
        text: "Confront Dr. Harlow in the main hall about the sedative paste",
        nextNodeId: "node_3",
        isCorrect: true,
      },
      {
        id: "c4",
        text: "Examine the tea cup for fingerprints",
        nextNodeId: "node_bad_2",
        isCorrect: false,
      }
    ]
  },
  node_3: {
    id: "node_3",
    text: [
      "Dr. Harlow freezes when you mention the blue orchids. 'I was only preparing it for research,' he stammers, but his eyes dart toward the study.",
      "Suddenly, you realize the boot print from earlier points directly to the study, where the estate solicitor was waiting."
    ],
    question: "What is your next move?",
    cluesToUnlock: ["clue_2"],
    choices: [
      {
        id: "c5",
        text: "Rush to the study to intercept the solicitor",
        nextNodeId: "node_4",
        isCorrect: true,
      },
      {
        id: "c6",
        text: "Detain Dr. Harlow immediately",
        nextNodeId: "node_bad_3",
        isCorrect: false,
      }
    ]
  },
  node_4: {
    id: "node_4",
    text: [
      "You burst into the study. The solicitor is hastily packing documents. Among them is a recently authenticated codicil to the Ashmore will."
    ],
    question: "Final decision:",
    cluesToUnlock: ["clue_4"],
    choices: [
      {
        id: "c7",
        text: "Accuse the solicitor of conspiring with Harlow to forge the will",
        nextNodeId: "node_end_success",
        isCorrect: true,
      }
    ]
  },
  
  /* BAD ENDINGS */
  node_bad_1: {
    id: "node_bad_1",
    text: [
      "You rush through the back door, but the trail goes cold in the mud. By the time you return to the greenhouse, the journal and the teacup are gone. The evidence has been destroyed."
    ],
    choices: [],
    isEnding: true,
  },
  node_bad_2: {
    id: "node_bad_2",
    text: [
      "You spend precious time dusting the teacup for prints. It's wiped clean. Meanwhile, the real culprit slips out the front door, taking the journal with them."
    ],
    choices: [],
    isEnding: true,
  },
  node_bad_3: {
    id: "node_bad_3",
    text: [
      "You detain Dr. Harlow, but without stopping the solicitor in the study, the forged codicil is filed. The estate is lost, and Dr. Harlow's lawyer easily gets the charges dropped."
    ],
    choices: [],
    isEnding: true,
  },
  
  /* GOOD ENDING */
  node_end_success: {
    id: "node_end_success",
    text: [
      "Victor Ashmore and Ms. Crane are arrested before dawn. Elara Harlow receives a letter from an estate solicitor in early November. The codicil is authenticated within the week.",
      "You solved it. Every clue was there from the beginning: the boot print, the chemical smell, the two words in different handwriting at the bottom of a dead man's final entry."
    ],
    cluesToUnlock: ["clue_3", "clue_5"], // just adding more clues for stats
    choices: [],
    isEnding: true,
  }
};
