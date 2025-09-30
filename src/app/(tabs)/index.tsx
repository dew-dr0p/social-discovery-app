import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TouchableOpacity, Alert, Dimensions } from 'react-native';
import { Image } from 'expo-image';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useAppStore } from '../../store/useAppStore';
import UserCard from '../../components/UserCard';
import { User } from '../../types';

const { width: screenWidth } = Dimensions.get('window');

export default function DiscoveryScreen() {
  const { discoveryPool, likeUser, passUser, getNextUser } = useAppStore();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [users, setUsers] = useState<User[]>([]);

  // Initialize users from discovery pool and reset when pool changes
  useEffect(() => {
    setUsers(discoveryPool);
    setCurrentIndex(0); // Reset to first user when pool changes
  }, [discoveryPool]);

  const handleSwipe = useCallback((direction: 'left' | 'right') => {
    if (currentIndex >= users.length) return;

    const currentUser = users[currentIndex];
    console.log('Handling swipe:', direction, 'for user:', currentUser.name);
    console.log('Current index:', currentIndex, 'Total users:', users.length);

    if (direction === 'right') {
      likeUser(currentUser.id);
    } else {
      passUser(currentUser.id);
    }

    // Move to next user
    const nextIndex = currentIndex + 1;
    setCurrentIndex(nextIndex);

    if (nextIndex >= users.length) {
      Alert.alert(
        'No more profiles!',
        'You\'ve seen all available profiles. Check your matches in the Chats tab!',
        [{ text: 'OK' }]
      );
    }
  }, [currentIndex, users, likeUser, passUser]);


  const handleLike = () => {
    handleSwipe('right');
  };

  const handlePass = () => {
    handleSwipe('left');
  };

  const remainingProfiles = users.length - currentIndex;

  if (currentIndex >= users.length) {
    return (
      <SafeAreaView className="flex-1 bg-white">
        {/* Custom Header */}
        <View className="flex-row items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
          <Text className="text-xl font-bold text-gray-800">Discover</Text>
          <View className="flex-row items-center">
            <Text className="text-gray-600 mr-2">
              0 profiles left
            </Text>
            <Ionicons name="people" size={20} color="#6B7280" />
          </View>
        </View>
        
        <View className="flex-1 justify-center items-center px-6">
          <Ionicons name="heart-outline" size={80} color="#9CA3AF" />
          <Text className="text-2xl font-bold text-gray-600 mt-4 text-center">
            No more profiles!
          </Text>
          <Text className="text-lg text-gray-500 mt-2 text-center">
            You've seen all available profiles.{"\n"}Check your matches in the Chats tab!
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Custom Header */}
      <View className="flex-row items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
        <Text className="text-xl font-bold text-gray-800">Discover</Text>
        <View className="flex-row items-center">
          <Text className="text-gray-600 mr-2">
            {remainingProfiles} profiles left
          </Text>
          <Ionicons name="people" size={20} color="#6B7280" />
        </View>
      </View>
      
      <View className="flex-1">
        {/* Cards Container */}
        <View className="flex-1 relative">
          {/* Render up to 3 cards in stack */}
          {users.slice(currentIndex, currentIndex + 3).map((user, index) => {
            const actualIndex = currentIndex + index;
            console.log(`Rendering card ${index}: ${user.name} (actualIndex: ${actualIndex}, stackIndex: ${index}, isTop: ${index === 0})`);
            return (
              <UserCard
                key={`${user.id}-${actualIndex}`}
                user={user}
                onSwipe={handleSwipe}
                isTop={index === 0}
                stackIndex={index}
              />
            );
          })}
        </View>

        {/* Action Buttons */}
        <View className="flex-row justify-center items-center px-6 py-6 bg-white border-t border-gray-200">
          <TouchableOpacity
            onPress={handlePass}
            className="w-16 h-16 rounded-full bg-white border-2 border-gray-300 items-center justify-center mr-8 shadow-lg"
          >
            <Ionicons name="close" size={32} color="#EF4444" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleLike}
            className="w-16 h-16 rounded-full bg-white border-2 border-gray-300 items-center justify-center shadow-lg"
          >
            <Ionicons name="heart" size={32} color="#10B981" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
