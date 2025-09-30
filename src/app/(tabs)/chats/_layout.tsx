import { Stack } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ChatsLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#FFFFFF',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTintColor: '#1F2937',
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: 'Matches',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="[chatId]"
        options={({ route }) => ({
          title: 'Chat',
          headerRight: () => (
            <TouchableOpacity className="p-2">
              <Ionicons name="call" size={24} color="#6B7280" />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack>
  );
}
