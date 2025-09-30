import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Image } from 'expo-image';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useAppStore } from '../../store/useAppStore';

const { width: screenWidth } = Dimensions.get('window');

export default function ProfileScreen() {
  const { currentUser, matches, discoveryPool, resetDiscovery } = useAppStore();

  const handleResetDiscovery = () => {
    resetDiscovery();
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1">
        {/* Custom Header */}
        <View className="flex-row items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
          <Text className="text-xl font-bold text-gray-800">Profile</Text>
          <View className="flex-row items-center">
            <Text className="text-gray-600 mr-2">
              {matches.length} matches
            </Text>
            <Ionicons name="people" size={20} color="#6B7280" />
          </View>
        </View>

        {/* Profile Header */}
        <View className="bg-white pb-6">
          <View className="items-center pt-6">
            <Image
              source={{ uri: currentUser.avatar }}
              style={{ width: 128, height: 128, borderRadius: 64, borderWidth: 4, borderColor: 'white' }}
              contentFit="cover"
              onLoad={() => console.log('Profile image loaded successfully')}
              onError={() => console.log('Profile image failed to load:', currentUser.avatar)}
            />
            <Text className="text-2xl font-bold text-gray-900 mt-4">
              {currentUser.name}
            </Text>
            <Text className="text-lg text-gray-600">
              {currentUser.age} years old
            </Text>
            {currentUser.location && (
              <Text className="text-base text-gray-500 mt-1">
                📍 {currentUser.location}
              </Text>
            )}
          </View>

          {/* Bio */}
          {currentUser.bio && (
            <View className="px-6 mt-6">
              <Text className="text-lg text-gray-700 text-center leading-6">
                {currentUser.bio}
              </Text>
            </View>
          )}

          {/* Interests */}
          {currentUser.interests && currentUser.interests.length > 0 && (
            <View className="px-6 mt-6">
              <Text className="text-lg font-semibold text-gray-900 mb-3">
                Interests
              </Text>
              <View className="flex-row flex-wrap">
                {currentUser.interests.map((interest, index) => (
                  <View
                    key={index}
                    className="bg-blue-100 rounded-full px-4 py-2 mr-2 mb-2"
                  >
                    <Text className="text-blue-800 font-medium">{interest}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}
        </View>

        {/* Stats */}
        <View className="bg-gray-50 mt-4 mx-4 rounded-2xl p-6">
          <Text className="text-lg font-semibold text-gray-900 mb-4">
            Your Stats
          </Text>
          
          <View className="flex-row justify-around">
            <View className="items-center">
              <Text className="text-2xl font-bold text-blue-600">
                {matches.length}
              </Text>
              <Text className="text-sm text-gray-600">Matches</Text>
            </View>
            
            <View className="items-center">
              <Text className="text-2xl font-bold text-green-600">
                {discoveryPool.length}
              </Text>
              <Text className="text-sm text-gray-600">Profiles Left</Text>
            </View>
            
            <View className="items-center">
              <Text className="text-2xl font-bold text-purple-600">
                {matches.length > 0 ? Math.round((matches.length / (matches.length + discoveryPool.length)) * 100) : 0}%
              </Text>
              <Text className="text-sm text-gray-600">Match Rate</Text>
            </View>
          </View>
        </View>

        {/* Recent Matches */}
        {matches.length > 0 && (
          <View className="bg-white mt-4 mx-4 rounded-2xl p-6 shadow-sm">
            <Text className="text-lg font-semibold text-gray-900 mb-4">
              Recent Matches
            </Text>
            
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View className="flex-row">
                {matches.slice(0, 5).map((match) => (
                  <View key={match.id} className="items-center mr-4">
                    <Image
                      source={{ uri: match.avatar }}
                      style={{ width: 64, height: 64, borderRadius: 32, borderWidth: 2, borderColor: '#10B981' }}
                      contentFit="cover"
                    />
                    <Text className="text-sm font-medium text-gray-900 mt-2 text-center">
                      {match.name}
                    </Text>
                  </View>
                ))}
                {matches.length > 5 && (
                  <View className="items-center justify-center">
                    <View className="w-16 h-16 rounded-full bg-gray-200 items-center justify-center">
                      <Text className="text-lg font-bold text-gray-600">
                        +{matches.length - 5}
                      </Text>
                    </View>
                    <Text className="text-sm text-gray-500 mt-2">More</Text>
                  </View>
                )}
              </View>
            </ScrollView>
          </View>
        )}

        {/* Settings */}
        <View className="bg-gray-50 mt-4 mx-4 rounded-2xl p-6">
          <Text className="text-lg font-semibold text-gray-900 mb-4">
            Settings
          </Text>
          
          <TouchableOpacity className="flex-row items-center py-3">
            <Ionicons name="notifications-outline" size={24} color="#6B7280" />
            <Text className="text-base text-gray-900 ml-3 flex-1">
              Notifications
            </Text>
            <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
          </TouchableOpacity>
          
          <TouchableOpacity className="flex-row items-center py-3">
            <Ionicons name="shield-outline" size={24} color="#6B7280" />
            <Text className="text-base text-gray-900 ml-3 flex-1">
              Privacy & Safety
            </Text>
            <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
          </TouchableOpacity>
          
          <TouchableOpacity className="flex-row items-center py-3">
            <Ionicons name="help-circle-outline" size={24} color="#6B7280" />
            <Text className="text-base text-gray-900 ml-3 flex-1">
              Help & Support
            </Text>
            <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
          </TouchableOpacity>
        </View>

        {/* Reset Discovery */}
        <View className="bg-white mt-4 mx-4 rounded-2xl p-6 shadow-sm">
          <Text className="text-lg font-semibold text-gray-900 mb-2">
            Discovery
          </Text>
          <Text className="text-sm text-gray-600 mb-4">
            Reset your discovery pool to see all profiles again
          </Text>
          
          <TouchableOpacity
            onPress={handleResetDiscovery}
            className="bg-red-500 rounded-xl py-3 px-4 items-center"
          >
            <Text className="text-white font-semibold text-base">
              Reset Discovery Pool
            </Text>
          </TouchableOpacity>
        </View>

        {/* App Info */}
        <View className="bg-white mt-4 mx-4 rounded-2xl p-6 shadow-sm mb-6">
          <Text className="text-lg font-semibold text-gray-900 mb-4">
            About
          </Text>
          
          <View className="flex-row items-center justify-between py-2">
            <Text className="text-base text-gray-600">Version</Text>
            <Text className="text-base text-gray-900">1.0.0</Text>
          </View>
          
          <View className="flex-row items-center justify-between py-2">
            <Text className="text-base text-gray-600">Build</Text>
            <Text className="text-base text-gray-900">2024.1</Text>
          </View>
          
          <View className="flex-row items-center justify-between py-2">
            <Text className="text-base text-gray-600">Platform</Text>
            <Text className="text-base text-gray-900">React Native</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
