import React, { createContext, useContext, useState, ReactNode } from "react";
import { MOCK_STORY, MOCK_CLUES, StoryNode, Clue, PathChoice } from "../data/storyMockData";

type StoryContextType = {
  currentNode: StoryNode;
  unlockedClues: Clue[];
  pathHistory: PathChoice[];
  totalCluesAvailable: number;
  handleChoice: (choiceId: string, nextNodeId: string, choiceText: string, isCorrect?: boolean) => void;
  resetStory: () => void;
  isCorrectPath: boolean;
};

const StoryContext = createContext<StoryContextType | undefined>(undefined);

export const StoryProvider = ({ children }: { children: ReactNode }) => {
  const [currentNodeId, setCurrentNodeId] = useState<string>("node_1");
  const [unlockedClueIds, setUnlockedClueIds] = useState<string[]>([]);
  const [pathHistory, setPathHistory] = useState<PathChoice[]>([]);
  const [isCorrectPath, setIsCorrectPath] = useState(true);

  const totalCluesAvailable = Object.keys(MOCK_CLUES).length;
  
  const currentNode = MOCK_STORY[currentNodeId];
  
  // Resolve clues
  const unlockedClues = unlockedClueIds
    .map(id => MOCK_CLUES[id])
    .filter(Boolean);

  const handleChoice = (choiceId: string, nextNodeId: string, choiceText: string, isCorrect?: boolean) => {
    // Record history
    setPathHistory(prev => [...prev, { nodeId: currentNodeId, choiceId, choiceText }]);
    
    // Update accuracy
    if (isCorrect === false) {
      setIsCorrectPath(false);
    }

    // Move to next node
    setCurrentNodeId(nextNodeId);
    
    // Unlock new clues if any
    const nextNode = MOCK_STORY[nextNodeId];
    if (nextNode && nextNode.cluesToUnlock) {
      setUnlockedClueIds(prev => {
        const newClues = new Set([...prev, ...nextNode.cluesToUnlock!]);
        return Array.from(newClues);
      });
    }
  };

  const resetStory = () => {
    setCurrentNodeId("node_1");
    setUnlockedClueIds([]);
    setPathHistory([]);
    setIsCorrectPath(true);
  };

  return (
    <StoryContext.Provider
      value={{
        currentNode,
        unlockedClues,
        pathHistory,
        totalCluesAvailable,
        handleChoice,
        resetStory,
        isCorrectPath
      }}
    >
      {children}
    </StoryContext.Provider>
  );
};

export const useStory = () => {
  const context = useContext(StoryContext);
  if (context === undefined) {
    throw new Error("useStory must be used within a StoryProvider");
  }
  return context;
};
