import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Image } from 'expo-image';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withSpring,
} from 'react-native-reanimated';
import { scheduleOnRN } from 'react-native-worklets';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { User } from '../types';

const { width: screenWidth } = Dimensions.get('window');

interface UserCardProps {
  user: User;
  onSwipe: (direction: 'left' | 'right') => void;
  _isTop: boolean;
  stackIndex: number;
}

export default function UserCard({
  user,
  onSwipe,
  _isTop,
  stackIndex,
}: UserCardProps) {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const scale = useSharedValue(1);

  const animatedCardStyle = useAnimatedStyle(() => {
    const rotate = interpolate(
      translateX.value,
      [-screenWidth, 0, screenWidth],
      [-15, 0, 15]
    );

    // Stack positioning with tilt
    const stackScale = 1 - stackIndex * 0.05;
    const stackTranslateY = stackIndex * 15;
    const stackRotate = stackIndex === 1 ? -3 : stackIndex === 2 ? 3 : 0; // Tilt cards in opposite directions

    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value + stackTranslateY },
        { rotate: `${rotate + stackRotate}deg` },
        { scale: scale.value * stackScale },
      ],
    };
  });

  const animatedOverlayStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      Math.abs(translateX.value),
      [0, screenWidth * 0.3],
      [0, 1]
    );

    return {
      opacity,
    };
  });

  const animatedLikeStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      translateX.value,
      [0, screenWidth * 0.2],
      [0, 1]
    );

    return {
      opacity,
    };
  });

  const animatedNopeStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      translateX.value,
      [-screenWidth * 0.2, 0],
      [1, 0]
    );

    return {
      opacity,
    };
  });

  const panGesture = Gesture.Pan()
    .minDistance(10)
    .onStart(() => {
      console.log('Gesture started');
    })
    .onUpdate(event => {
      translateX.value = event.translationX;
      console.log('Gesture updating:', event.translationX);
    })
    .onEnd(event => {
      const { translationX, velocityX } = event;
      const threshold = screenWidth * 0.3; // Reduced threshold
      console.log('Gesture ended:', {
        translationX,
        velocityX,
        threshold,
        shouldSwipe:
          Math.abs(translationX) > threshold || Math.abs(velocityX) > 300,
      });

      const shouldSwipe =
        Math.abs(translationX) > threshold || Math.abs(velocityX) > 300;

      if (shouldSwipe) {
        const direction = translationX > 0 ? 'right' : 'left';
        console.log('Swipe detected:', direction);
        // Animate the card off screen
        translateX.value = withSpring(
          direction === 'right' ? screenWidth : -screenWidth
        );
        // Call onSwipe using scheduleOnRN to bridge UI thread to JS thread
        scheduleOnRN(onSwipe, direction);
      } else {
        console.log('Snap back to center');
        // Snap back to center with spring animation
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
      }
    });

  return (
    <GestureDetector gesture={panGesture}>
      <Animated.View
        style={[
          {
            position: 'absolute',
            width: screenWidth - 40,
            height: '80%',
            alignSelf: 'center',
            top: '10%',
            zIndex: 10 - stackIndex, // Higher zIndex for cards on top
          },
          animatedCardStyle,
        ]}
      >
        <View
          className="overflow-hidden rounded-3xl bg-white shadow-2xl"
          style={{ minHeight: 400 }}
        >
          {/* User Image */}
          <View className="flex-1" style={{ minHeight: 300 }}>
            <Image
              source={{ uri: user.avatar }}
              style={{ width: '100%', height: '100%' }}
              contentFit="cover"
              onLoad={() => console.log('Image loaded successfully')}
              onError={() => console.log('Image failed to load:', user.avatar)}
            />
          </View>

          {/* User Info */}
          <View className="absolute bottom-0 left-0 right-0 bg-black/80 p-6">
            <View className="flex-row items-center justify-between">
              <View>
                <Text className="text-3xl font-bold text-white">
                  {user.name}, {user.age}
                </Text>
                {user.bio && (
                  <Text className="mt-1 text-lg text-white opacity-90">
                    {user.bio}
                  </Text>
                )}
                {user.location && (
                  <Text className="mt-1 text-base text-white opacity-75">
                    📍 {user.location}
                  </Text>
                )}
              </View>
            </View>

            {/* Interests */}
            {user.interests && user.interests.length > 0 && (
              <View className="mt-3 flex-row flex-wrap">
                {user.interests.slice(0, 3).map((interest, index) => (
                  <View
                    key={index}
                    className="mb-2 mr-2 rounded-full bg-white/30 px-3 py-1"
                  >
                    <Text className="text-sm font-medium text-white">
                      {interest}
                    </Text>
                  </View>
                ))}
              </View>
            )}
          </View>

          {/* Overlay for like/nope - positioned after content so it doesn't block gestures */}
          <Animated.View
            style={[
              {
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 10,
                justifyContent: 'center',
                alignItems: 'center',
                pointerEvents: 'none', // This allows gestures to pass through
              },
              animatedOverlayStyle,
            ]}
          >
            <Animated.View
              style={[
                {
                  position: 'absolute',
                  right: 20,
                  top: 50,
                  backgroundColor: '#10B981',
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  borderRadius: 10,
                  transform: [{ rotate: '15deg' }],
                },
                animatedLikeStyle,
              ]}
            >
              <Text className="text-2xl font-bold text-white">LIKE</Text>
            </Animated.View>

            <Animated.View
              style={[
                {
                  position: 'absolute',
                  left: 20,
                  top: 50,
                  backgroundColor: '#EF4444',
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  borderRadius: 10,
                  transform: [{ rotate: '-15deg' }],
                },
                animatedNopeStyle,
              ]}
            >
              <Text className="text-2xl font-bold text-white">NOPE</Text>
            </Animated.View>
          </Animated.View>
        </View>
      </Animated.View>
    </GestureDetector>
  );
}
