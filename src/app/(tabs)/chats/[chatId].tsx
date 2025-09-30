import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import { useAppStore } from '../../../store/useAppStore';
import { Message } from '../../../types';

export default function ConversationScreen() {
  const { chatId } = useLocalSearchParams();
  const { matches, getChatHistory, addMessage } = useAppStore();
  const [messageText, setMessageText] = useState('');
  const flatListRef = useRef<FlatList>(null);
  
  const user = matches.find(m => m.id === chatId);
  const messages = getChatHistory(chatId as string);

  useEffect(() => {
    // Scroll to bottom when messages change
    if (flatListRef.current && messages.length > 0) {
      setTimeout(() => {
        flatListRef.current?.scrollToEnd({ animated: true });
      }, 100);
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (messageText.trim() === '') return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: messageText.trim(),
      timestamp: new Date(),
      isFromCurrentUser: true,
    };

    addMessage(chatId as string, newMessage);
    setMessageText('');
  };

  const renderMessage = ({ item }: { item: Message }) => (
    <View
      className={`mb-2 ${
        item.isFromCurrentUser ? 'items-end' : 'items-start'
      }`}
    >
      <View
        className={`max-w-xs px-4 py-3 rounded-2xl ${
          item.isFromCurrentUser
            ? 'bg-blue-600 rounded-br-md'
            : 'bg-gray-200 rounded-bl-md'
        }`}
      >
        <Text
          className={`text-base ${
            item.isFromCurrentUser ? 'text-white' : 'text-gray-900'
          }`}
        >
          {item.text}
        </Text>
      </View>
      <Text className="text-xs text-gray-500 mt-1">
        {item.timestamp.toLocaleTimeString([], { 
          hour: '2-digit', 
          minute: '2-digit' 
        })}
      </Text>
    </View>
  );

  if (!user) {
    return (
      <SafeAreaView className="flex-1 bg-gray-50">
        <View className="flex-1 justify-center items-center px-6">
          <Ionicons name="person-outline" size={80} color="#9CA3AF" />
          <Text className="text-2xl font-bold text-gray-600 mt-4 text-center">
            User not found
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView 
        className="flex-1" 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        {/* Messages */}
        <FlatList
          ref={flatListRef}
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={renderMessage}
          className="flex-1"
          contentContainerStyle={{ 
            paddingHorizontal: 16, 
            paddingTop: 16, 
            paddingBottom: 8,
            flexGrow: 1
          }}
          showsVerticalScrollIndicator={false}
        />

        {/* Message Input */}
        <View className="flex-row items-center px-4 py-3 bg-white border-t border-gray-100">
          <TouchableOpacity className="p-2 mr-3">
            <Ionicons name="add" size={24} color="#6B7280" />
          </TouchableOpacity>
          
          <TextInput
            value={messageText}
            onChangeText={setMessageText}
            placeholder="Type a message..."
            className="flex-1 bg-gray-100 rounded-xl px-4 py-3 text-base"
            multiline
            maxLength={500}
            onSubmitEditing={handleSendMessage}
          />
          
          <TouchableOpacity
            onPress={handleSendMessage}
            disabled={messageText.trim() === ''}
            className={`ml-3 p-3 rounded-full ${
              messageText.trim() === '' ? 'bg-gray-300' : 'bg-blue-600'
            }`}
          >
            <Ionicons 
              name="send" 
              size={20} 
              color={messageText.trim() === '' ? '#9CA3AF' : 'white'} 
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
