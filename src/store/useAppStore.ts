import { create } from 'zustand';
import { User, Message, AppState } from '../types';
import { mockUsers, currentUser, generateMockMessages } from '../data/mockData';

interface AppStore extends AppState {
  // Actions
  likeUser: (userId: string) => void;
  passUser: (userId: string) => void;
  addMessage: (userId: string, message: Message) => void;
  getChatHistory: (userId: string) => Message[];
  getNextUser: () => User | null;
  resetDiscovery: () => void;
}

export const useAppStore = create<AppStore>((set, get) => ({
  // Initial state
  discoveryPool: [...mockUsers],
  matches: [],
  chatHistory: {},
  currentUser,

  // Actions
  likeUser: (userId: string) => {
    const { discoveryPool, matches } = get();
    const user = discoveryPool.find(u => u.id === userId);

    if (user) {
      const newMatches = [...matches, user];
      const newDiscoveryPool = discoveryPool.filter(u => u.id !== userId);

      // Initialize chat history for the matched user
      const newChatHistory = {
        ...get().chatHistory,
        [userId]: generateMockMessages(userId),
      };

      set({
        matches: newMatches,
        discoveryPool: newDiscoveryPool,
        chatHistory: newChatHistory,
      });
    }
  },

  passUser: (userId: string) => {
    const { discoveryPool } = get();
    const newDiscoveryPool = discoveryPool.filter(u => u.id !== userId);

    set({
      discoveryPool: newDiscoveryPool,
    });
  },

  addMessage: (userId: string, message: Message) => {
    const { chatHistory } = get();
    const userMessages = chatHistory[userId] || [];

    set({
      chatHistory: {
        ...chatHistory,
        [userId]: [...userMessages, message],
      },
    });
  },

  getChatHistory: (userId: string) => {
    const { chatHistory } = get();
    return chatHistory[userId] || [];
  },

  getNextUser: () => {
    const { discoveryPool } = get();
    return discoveryPool.length > 0 ? discoveryPool[0] : null;
  },

  resetDiscovery: () => {
    set({
      discoveryPool: [...mockUsers],
      matches: [],
      chatHistory: {},
    });
  },
}));
