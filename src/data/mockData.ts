import { User, Message } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Emma Thompson',
    age: 26,
    avatar: 'https://picsum.photos/400/400?random=1',
    bio: 'Adventure seeker and coffee enthusiast ☕️',
    interests: ['Travel', 'Photography', 'Hiking'],
    location: 'San Francisco, CA'
  },
  {
    id: '2',
    name: 'James Rodriguez',
    age: 29,
    avatar: 'https://picsum.photos/400/400?random=2',
    bio: 'Chef by day, musician by night 🎵',
    interests: ['Cooking', 'Music', 'Fitness'],
    location: 'New York, NY'
  },
  {
    id: '3',
    name: 'Sophie Chen',
    age: 24,
    avatar: 'https://picsum.photos/400/400?random=3',
    bio: 'Artist and yoga instructor 🧘‍♀️',
    interests: ['Art', 'Yoga', 'Meditation'],
    location: 'Los Angeles, CA'
  },
  {
    id: '4',
    name: 'Michael Johnson',
    age: 31,
    avatar: 'https://picsum.photos/400/400?random=4',
    bio: 'Tech entrepreneur and dog lover 🐕',
    interests: ['Technology', 'Dogs', 'Entrepreneurship'],
    location: 'Seattle, WA'
  },
  {
    id: '5',
    name: 'Isabella Martinez',
    age: 27,
    avatar: 'https://picsum.photos/400/400?random=5',
    bio: 'Fashion designer and world traveler ✈️',
    interests: ['Fashion', 'Travel', 'Languages'],
    location: 'Miami, FL'
  },
  {
    id: '6',
    name: 'David Kim',
    age: 28,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
    bio: 'Software engineer and rock climber 🧗‍♂️',
    interests: ['Programming', 'Rock Climbing', 'Board Games'],
    location: 'Austin, TX'
  },
  {
    id: '7',
    name: 'Olivia Williams',
    age: 25,
    avatar: 'https://ui-avatars.com/api/?name=Olivia+Williams&background=random',
    bio: 'Marine biologist and scuba diver 🐠',
    interests: ['Marine Biology', 'Scuba Diving', 'Conservation'],
    location: 'San Diego, CA'
  },
  {
    id: '8',
    name: 'Alex Thompson',
    age: 30,
    avatar: 'https://ui-avatars.com/api/?name=Alex+Thompson&background=random',
    bio: 'Photographer and nature lover 📸',
    interests: ['Photography', 'Nature', 'Camping'],
    location: 'Portland, OR'
  },
  {
    id: '9',
    name: 'Maya Patel',
    age: 26,
    avatar: 'https://ui-avatars.com/api/?name=Maya+Patel&background=random',
    bio: 'Doctor and humanitarian 👩‍⚕️',
    interests: ['Medicine', 'Volunteering', 'Reading'],
    location: 'Chicago, IL'
  },
  {
    id: '10',
    name: 'Ryan O\'Connor',
    age: 32,
    avatar: 'https://ui-avatars.com/api/?name=Ryan+OConnor&background=random',
    bio: 'Architect and urban planner 🏗️',
    interests: ['Architecture', 'Urban Planning', 'Sustainability'],
    location: 'Boston, MA'
  },
  {
    id: '11',
    name: 'Luna Rodriguez',
    age: 23,
    avatar: 'https://ui-avatars.com/api/?name=Luna+Rodriguez&background=random',
    bio: 'Dancer and choreographer 💃',
    interests: ['Dance', 'Choreography', 'Fitness'],
    location: 'Las Vegas, NV'
  },
  {
    id: '12',
    name: 'Noah Wilson',
    age: 29,
    avatar: 'https://ui-avatars.com/api/?name=Noah+Wilson&background=random',
    bio: 'Environmental scientist and activist 🌱',
    interests: ['Environment', 'Activism', 'Research'],
    location: 'Denver, CO'
  },
  {
    id: '13',
    name: 'Zoe Anderson',
    age: 28,
    avatar: 'https://ui-avatars.com/api/?name=Zoe+Anderson&background=random',
    bio: 'Graphic designer and illustrator 🎨',
    interests: ['Design', 'Illustration', 'Typography'],
    location: 'Nashville, TN'
  },
  {
    id: '14',
    name: 'Ethan Davis',
    age: 31,
    avatar: 'https://ui-avatars.com/api/?name=Ethan+Davis&background=random',
    bio: 'Pilot and aviation enthusiast ✈️',
    interests: ['Aviation', 'Travel', 'Photography'],
    location: 'Phoenix, AZ'
  },
  {
    id: '15',
    name: 'Aria Singh',
    age: 27,
    avatar: 'https://ui-avatars.com/api/?name=Aria+Singh&background=random',
    bio: 'Psychologist and mindfulness coach 🧠',
    interests: ['Psychology', 'Mindfulness', 'Wellness'],
    location: 'Minneapolis, MN'
  },
  {
    id: '16',
    name: 'Caleb Brown',
    age: 26,
    avatar: 'https://ui-avatars.com/api/?name=Caleb+Brown&background=random',
    bio: 'Musician and music producer 🎵',
    interests: ['Music', 'Production', 'Concerts'],
    location: 'Atlanta, GA'
  },
  {
    id: '17',
    name: 'Nina Garcia',
    age: 24,
    avatar: 'https://ui-avatars.com/api/?name=Nina+Garcia&background=random',
    bio: 'Journalist and storyteller 📰',
    interests: ['Journalism', 'Writing', 'Storytelling'],
    location: 'Washington, DC'
  },
  {
    id: '18',
    name: 'Tyler Lee',
    age: 30,
    avatar: 'https://ui-avatars.com/api/?name=Tyler+Lee&background=random',
    bio: 'Chef and food blogger 🍳',
    interests: ['Cooking', 'Food', 'Blogging'],
    location: 'New Orleans, LA'
  },
  {
    id: '19',
    name: 'Sofia Petrov',
    age: 25,
    avatar: 'https://ui-avatars.com/api/?name=Sofia+Petrov&background=random',
    bio: 'Linguist and polyglot 🗣️',
    interests: ['Languages', 'Linguistics', 'Culture'],
    location: 'Philadelphia, PA'
  },
  {
    id: '20',
    name: 'Jake Miller',
    age: 28,
    avatar: 'https://ui-avatars.com/api/?name=Jake+Miller&background=random',
    bio: 'Personal trainer and nutritionist 💪',
    interests: ['Fitness', 'Nutrition', 'Health'],
    location: 'Dallas, TX'
  }
];

export const currentUser: User = {
  id: 'current',
  name: 'Alex Johnson',
  age: 28,
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
  bio: 'Looking for meaningful connections',
  interests: ['Technology', 'Travel', 'Music'],
  location: 'San Francisco, CA'
};

export const generateMockMessages = (userId: string): Message[] => {
  const messageTemplates = {
    '1': [ // Emma Thompson
      { text: "Hey! I saw you're into photography too 📸", isFromCurrentUser: false },
      { text: "Yes! I love capturing moments. Do you have a favorite type of photography?", isFromCurrentUser: true },
      { text: "I'm really into street photography and landscapes. What about you?", isFromCurrentUser: false },
      { text: "Landscapes are amazing! I've been trying to get into portrait photography lately", isFromCurrentUser: true },
      { text: "That's awesome! I'd love to see some of your work sometime", isFromCurrentUser: false },
      { text: "For sure! Maybe we could go on a photo walk together?", isFromCurrentUser: true },
      { text: "That sounds perfect! I know some great spots in the city", isFromCurrentUser: false },
      { text: "Great! When would be a good time for you?", isFromCurrentUser: true },
      { text: "How about this weekend? The weather should be nice", isFromCurrentUser: false },
      { text: "Perfect! Saturday morning works for me", isFromCurrentUser: true },
      { text: "Awesome! I'll send you the details later", isFromCurrentUser: false },
      { text: "Looking forward to it! 😊", isFromCurrentUser: true },
      { text: "Me too! It'll be fun", isFromCurrentUser: false },
      { text: "By the way, do you have any favorite coffee spots?", isFromCurrentUser: true },
      { text: "Yes! There's this amazing place near the park. We should grab coffee after!", isFromCurrentUser: false }
    ],
    '2': [ // James Rodriguez
      { text: "Hey there! I noticed you're a chef 👨‍🍳", isFromCurrentUser: false },
      { text: "Yes! I love cooking. What's your favorite cuisine?", isFromCurrentUser: true },
      { text: "I'm really into Italian and Mexican food. What about you?", isFromCurrentUser: false },
      { text: "Italian is amazing! I've been trying to perfect my pasta making", isFromCurrentUser: true },
      { text: "That's impressive! Homemade pasta is the best", isFromCurrentUser: false },
      { text: "It's definitely a labor of love, but so worth it", isFromCurrentUser: true },
      { text: "I'd love to try your pasta sometime! 😋", isFromCurrentUser: false },
      { text: "I'd be happy to cook for you! What's your favorite type of pasta?", isFromCurrentUser: true },
      { text: "I love ravioli and fettuccine alfredo", isFromCurrentUser: false },
      { text: "Great choices! I make a mean mushroom ravioli", isFromCurrentUser: true },
      { text: "That sounds incredible! When can I try it? 😍", isFromCurrentUser: false },
      { text: "How about this Friday? I could cook dinner", isFromCurrentUser: true },
      { text: "That sounds perfect! I'll bring some wine", isFromCurrentUser: false },
      { text: "Perfect! I love a good wine pairing", isFromCurrentUser: true },
      { text: "Great! I'll see you Friday then 🍷", isFromCurrentUser: false }
    ],
    '3': [ // Sophie Chen
      { text: "Hi! I saw you're into art and yoga 🧘‍♀️", isFromCurrentUser: false },
      { text: "Yes! Both are such great ways to express creativity and find peace", isFromCurrentUser: true },
      { text: "I completely agree! Do you have a favorite yoga style?", isFromCurrentUser: false },
      { text: "I love vinyasa and yin yoga. What about you?", isFromCurrentUser: true },
      { text: "I'm really into hot yoga and restorative practices", isFromCurrentUser: false },
      { text: "That's awesome! Hot yoga is so challenging but rewarding", isFromCurrentUser: true },
      { text: "It really is! Maybe we could do a yoga session together sometime?", isFromCurrentUser: false },
      { text: "I'd love that! Do you have a favorite studio?", isFromCurrentUser: true },
      { text: "Yes! There's this amazing place downtown with great instructors", isFromCurrentUser: false },
      { text: "Perfect! I'd love to check it out", isFromCurrentUser: true },
      { text: "Great! I'll send you the details. What's your schedule like?", isFromCurrentUser: false },
      { text: "I'm pretty flexible! Weekends work best for me", isFromCurrentUser: true },
      { text: "Awesome! How about this Saturday morning?", isFromCurrentUser: false },
      { text: "That sounds perfect! Looking forward to it", isFromCurrentUser: true },
      { text: "Me too! It'll be great to practice together 🧘‍♀️", isFromCurrentUser: false }
    ]
  };

  const messages = messageTemplates[userId as keyof typeof messageTemplates] || [];
  
  return messages.map((msg, index) => ({
    id: `${userId}-${index}`,
    text: msg.text,
    timestamp: new Date(Date.now() - (messages.length - index) * 60000), // Messages spread over time
    isFromCurrentUser: msg.isFromCurrentUser
  }));
};
