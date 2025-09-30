export interface User {
  id: string;
  name: string;
  age: number;
  avatar: string;
  bio?: string;
  interests?: string[];
  location?: string;
}

export interface Message {
  id: string;
  text: string;
  timestamp: Date;
  isFromCurrentUser: boolean;
}

export interface ChatHistory {
  [userId: string]: Message[];
}

export interface AppState {
  discoveryPool: User[];
  matches: User[];
  chatHistory: ChatHistory;
  currentUser: User;
}

export interface SwipeAction {
  type: 'like' | 'pass';
  userId: string;
}
