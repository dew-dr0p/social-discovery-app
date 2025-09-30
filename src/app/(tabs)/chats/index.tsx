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
      className="flex-row items-center p-4 bg-white border-b border-gray-200"
    >
      <View className="relative">
        <Image
          source={{ uri: item.avatar }}
          style={{ width: 64, height: 64, borderRadius: 32 }}
          contentFit="cover"
        />
        <View className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white items-center justify-center">
          <Ionicons name="checkmark" size={12} color="white" />
        </View>
      </View>
      
      <View className="flex-1 ml-4">
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
        <View className="flex-row items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
          <Text className="text-xl font-bold text-gray-800">Chats</Text>
          <View className="flex-row items-center">
            <Text className="text-gray-600 mr-2">
              {matches.length} matches
            </Text>
            <Ionicons name="people" size={20} color="#6B7280" />
          </View>
        </View>
        
        <View className="flex-1 justify-center items-center px-6">
          <Ionicons name="chatbubbles-outline" size={80} color="#9CA3AF" />
          <Text className="text-2xl font-bold text-gray-600 mt-4 text-center">
            No matches yet
          </Text>
          <Text className="text-lg text-gray-500 mt-2 text-center">
            Start swiping to find your perfect match!
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Custom Header */}
      <View className="flex-row items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
        <Text className="text-xl font-bold text-gray-800">Chats</Text>
        <View className="flex-row items-center">
          <Text className="text-gray-600 mr-2">
            {matches.length} matches
          </Text>
          <Ionicons name="people" size={20} color="#6B7280" />
        </View>
      </View>
      
      <View className="flex-1">
        <FlatList
          data={matches}
          keyExtractor={(item) => item.id}
          renderItem={renderMatchItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20, paddingHorizontal: 16, backgroundColor: 'white' }}
        />
      </View>
    </SafeAreaView>
  );
}
