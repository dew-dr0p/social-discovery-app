import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Image } from 'expo-image';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useAppStore } from '../../../store/useAppStore';

export default function MatchListScreen() {
  const { matches } = useAppStore();
  const router = useRouter();

  const renderMatchItem = ({ item }: { item: any }) => (
    <TouchableOpacity
      onPress={() => router.push(`/(tabs)/chats/${item.id}`)}
      className="flex-row items-center border-b border-gray-200 bg-white p-4"
    >
      <View className="relative">
        <Image
          source={{ uri: item.avatar }}
          style={{ width: 64, height: 64, borderRadius: 32 }}
          contentFit="cover"
        />
        <View className="absolute -bottom-1 -right-1 h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-green-500">
          <Ionicons name="checkmark" size={12} color="white" />
        </View>
      </View>

      <View className="ml-4 flex-1">
        <Text className="text-lg font-semibold text-gray-900">{item.name}</Text>
        <Text className="text-sm text-gray-500">New match!</Text>
      </View>

      <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
    </TouchableOpacity>
  );

  if (matches.length === 0) {
    return (
      <SafeAreaView className="flex-1 bg-gray-50">
        {/* Custom Header */}
        <View className="flex-row items-center justify-between border-b border-gray-200 bg-white px-4 py-3">
          <Text className="text-xl font-bold text-gray-800">Chats</Text>
          <View className="flex-row items-center">
            <Text className="mr-2 text-gray-600">{matches.length} matches</Text>
            <Ionicons name="people" size={20} color="#6B7280" />
          </View>
        </View>

        <View className="flex-1 items-center justify-center px-6">
          <Ionicons name="chatbubbles-outline" size={80} color="#9CA3AF" />
          <Text className="mt-4 text-center text-2xl font-bold text-gray-600">
            No matches yet
          </Text>
          <Text className="mt-2 text-center text-lg text-gray-500">
            Start swiping to find your perfect match!
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Custom Header */}
      <View className="flex-row items-center justify-between border-b border-gray-200 bg-white px-4 py-3">
        <Text className="text-xl font-bold text-gray-800">Chats</Text>
        <View className="flex-row items-center">
          <Text className="mr-2 text-gray-600">{matches.length} matches</Text>
          <Ionicons name="people" size={20} color="#6B7280" />
        </View>
      </View>

      <View className="flex-1">
        <FlatList
          data={matches}
          keyExtractor={item => item.id}
          renderItem={renderMatchItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 20,
            paddingHorizontal: 16,
            backgroundColor: 'white',
          }}
        />
      </View>
    </SafeAreaView>
  );
}
