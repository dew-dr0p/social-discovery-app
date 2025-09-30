# Social Discovery App

A React Native social discovery application built with Expo, featuring Tinder-style swiping, real-time chat, and modern UI components. This project was developed as part of a UI assessment, demonstrating proficiency in React Native, Expo Router, TypeScript, Zustand, and Tailwind CSS.

## 🚀 Features

- **Discovery Screen**: Swipeable user cards with smooth animations
- **Chat System**: Match list and individual conversation screens
- **Profile Management**: Detailed user profiles with stats and settings
- **State Management**: Zustand for efficient state management
- **Responsive Design**: Tailwind CSS for consistent styling
- **TypeScript**: Full type safety throughout the application

## 🛠 Technology Stack

- **Framework**: Expo SDK (Latest Stable) - Managed Workflow
- **Language**: TypeScript for all data modeling and interfaces
- **Styling**: Tailwind CSS (via NativeWind)
- **Navigation**: Expo Router (file-system-based routing)
- **State Management**: Zustand (lightweight state management)
- **Animations**: React Native Reanimated v4+ (thread-safe UI animations)
- **Gestures**: React Native Gesture Handler (complex gesture recognition)
- **Images**: Expo Image (optimized image handling)

## 📱 Screens

### Discovery Screen (Home Screen)

- **Card Display**: Single dominant card at center with Name, Age, and Avatar
- **Card Stacking**: Subsequent cards visibly stacked behind the top card
- **Swipe Gesture**: Smooth horizontal dragging using React Native Reanimated
- **Swipe Threshold**: 40% of screen width for swipe confirmation
- **Visual Feedback**: "LIKE" and "NOPE" overlays with rotation and fade effects
- **State Management**: Right swipes move users from discoveryPool to matches store
- **Responsive Design**: Tailwind utilities for proper scaling on all viewports

### Chat Screens

#### Match List Screen (/chats)

- Display users from Zustand matches store
- Each item shows matched user's Avatar and Name
- Navigation to Conversation Screen via dynamic routing (/chats/userId)

#### Conversation Screen (/chats/[chatId])

- Display mock message history (15 messages per conversation)
- **Message Styling**:
  - **Self Messages**: Right-aligned, solid background (bg-blue-600)
  - **Other Messages**: Left-aligned, light background (bg-gray-200)
- Persistent text input and Send button (visual only)

### Profile Screen

- User statistics and match information
- Settings and preferences
- Discovery pool reset functionality
- App information and version details

## 🏗 Project Structure

```
src/
├── components/          # Reusable UI components
│   └── UserCard.tsx    # Swipeable user card component
├── data/               # Mock data and constants
│   └── mockData.ts     # User profiles and message templates
├── store/              # State management
│   └── useAppStore.ts  # Zustand store configuration
├── types/              # TypeScript type definitions
│   └── index.ts        # Interface definitions
└── utils/              # Utility functions

app/
├── (tabs)/             # Tab navigation screens
│   ├── index.tsx       # Discovery screen
│   ├── profile.tsx     # Profile screen
│   └── chats/          # Chat navigation
│       ├── index.tsx   # Match list
│       └── [chatId].tsx # Individual chat
├── _layout.tsx         # Root layout
└── index.tsx          # App entry point
```

## 🚀 Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator or Android Emulator (for testing)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd social-discovery-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**

   ```bash
   npm start
   # or
   yarn start
   ```

4. **Run on device/simulator**
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Scan QR code with Expo Go app on physical device

## 🏪 Zustand Store Structure

The application uses Zustand for state management with the following structure:

```typescript
interface AppStore {
  // State
  discoveryPool: User[]; // Available users for swiping
  matches: User[]; // Matched users
  chatHistory: ChatHistory; // Message history by user ID
  currentUser: User; // Current user profile

  // Actions
  likeUser: (userId: string) => void;
  passUser: (userId: string) => void;
  addMessage: (userId: string, message: Message) => void;
  getChatHistory: (userId: string) => Message[];
  getNextUser: () => User | null;
  resetDiscovery: () => void;
}
```

## 🎨 Tailwind Configuration

The app uses NativeWind for Tailwind CSS integration:

- **Configuration**: `tailwind.config.js`
- **Global Styles**: `global.css`
- **Metro Config**: Configured for NativeWind support
- **Babel Config**: Includes NativeWind plugin

### Key Tailwind Features Used:

- Responsive design utilities
- Color system and gradients
- Spacing and sizing utilities
- Flexbox and grid layouts
- Shadow and border utilities

## 🧭 Expo Router Architecture

The app uses file-system-based routing with Expo Router:

### Tab Navigation (`(tabs)/_layout.tsx`)

- **Discovery**: Main swiping interface
- **Chats**: Match list and conversations
- **Profile**: User profile and settings

### Nested Stacks (`chats/_layout.tsx`)

- **Match List**: Shows all matched users
- **Individual Chat**: Dynamic routing for conversations

### Navigation Features:

- Tab-based navigation with icons
- Nested stack navigation for chats
- Dynamic routing for individual conversations
- Header customization per screen

## 📊 Mock Data

The app includes comprehensive mock data:

- **20 User Profiles**: Realistic names, ages, avatars, bios, and interests
- **Chat Messages**: 15 messages per conversation for 3 matched users
- **Avatar Services**: Mix of UI Avatars, Unsplash, and Picsum for profile pictures
- **Location Data**: Various US cities for realistic profiles

## 🔧 Implementation Assumptions & Decisions

### Technical Assumptions Made:

1. **Image Handling**: Used `expo-image` instead of React Native's Image component for better performance and modern API
2. **Styling**: Applied `style` prop for `expo-image` components to ensure proper rendering
3. **Function Serialization**: Used `scheduleOnRN` from `react-native-worklets` instead of deprecated `runOnJS` for UI thread communication
4. **State Management**: Implemented reactive updates to ensure Discovery screen resets when pool is reset
5. **Navigation**: Used custom headers instead of default tab headers to maintain consistent design
6. **Card Stacking**: Implemented visual stacking with tilt effects and proper z-index management

### Design Decisions:

1. **UI/UX Enhancements**: Added profile screen with stats, settings, and discovery reset functionality
2. **Visual Feedback**: Enhanced swipe feedback with "LIKE" and "NOPE" overlays with rotation
3. **Responsive Design**: Ensured proper scaling and spacing across different screen sizes
4. **Error Handling**: Added image loading error handling and fallback mechanisms
5. **Performance**: Optimized re-renders and gesture handling for smooth user experience

## 🎯 Key Features Implementation

### Swipe Gestures

- Horizontal drag recognition
- 40% screen width threshold for swipe confirmation
- Visual feedback with "LIKE" and "NOPE" overlays
- Smooth animations using React Native Reanimated

### Chat System

- Match list with user avatars
- Individual conversation screens
- Message bubbles with different styles for sender/receiver
- Timestamp display and message input

### Profile Management

- User statistics and match information
- Settings and preferences
- Discovery pool reset functionality
- App information display

## 🔧 Development

### Code Organization

- Components are organized by functionality
- TypeScript interfaces for type safety
- Consistent naming conventions
- Modular state management

### Performance Optimizations

- Efficient re-renders with Zustand
- Optimized FlatList components
- Image caching and optimization
- Smooth gesture handling

## 📱 Build Instructions

### Development Build

```bash
expo start
```

### Production Build

```bash
expo build:android
# or
expo build:ios
```

### Release APK

```bash
expo build:android --type apk
```

## 🧪 Testing

The app includes:

- TypeScript type checking
- Component testing structure
- Mock data for consistent testing
- Error boundary implementation

## 📱 APK Download

The built APK file is available for download:

**[Download APK from Google Drive](https://drive.google.com/drive/folders/1yKVbZl4oYeni_sy3y5HJVwHCjBuTIotu?usp=sharing)**

- File: `social-discovery-app.apk`
- Size: 80.6 MB
- Built with EAS Build for Android

## 📝 License

This project is created for assessment purposes.

## 👨‍💻 Author

Built with ❤️ using React Native, Expo, and modern web technologies.
