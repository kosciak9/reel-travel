import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { Image, Pressable, TextInput, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { usePlaces } from 'src/lib/db.ts';
import colors from 'src/ui/colors.ts';
import Text from 'src/ui/Text.tsx';

const categoryColors: Record<string, string> = {
  museum: '#fce7f3',
  muzeum: '#fce7f3',
  restauracja: '#fce7f3',
  restaurant: '#fce7f3',
  rozrywka: '#fce7f3',
};

const categoryTextColors: Record<string, string> = {
  museum: '#ec4899',
  muzeum: '#ec4899',
  restauracja: '#ec4899',
  restaurant: '#ec4899',
  rozrywka: '#ec4899',
};

export const PlacesListScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const places = usePlaces();

  return (
    <View className="bg-white flex-1">
      <View className="bg-gray-100 mx-4 mb-4 flex-row items-center rounded-lg px-4 py-3">
        <Ionicons color="#999" name="search" size={20} />
        <TextInput
          className="ml-2 flex-1 text-base"
          onChangeText={setSearchQuery}
          placeholder="Szukaj"
          placeholderTextColor="#999"
          value={searchQuery}
        />
      </View>

      {/* Filter Buttons */}
      <View className="mb-4 flex-row px-4">
        <Pressable className="bg-gray-100 mr-3 flex-row items-center rounded-lg px-4 py-2">
          <Text className="text-gray-600 mr-2 text-sm font-medium">MIASTO</Text>
          <Ionicons color="#666" name="chevron-down" size={16} />
        </Pressable>
        <Pressable className="bg-gray-100 flex-row items-center rounded-lg px-4 py-2">
          <Text className="text-gray-600 mr-2 text-sm font-medium">
            KATEGORIA
          </Text>
          <Ionicons color="#666" name="chevron-down" size={16} />
        </Pressable>
      </View>

      {/* Places List */}
      <ScrollView className="flex-1 px-4">
        {places.map((place, index) => (
          <View
            className="bg-white mb-4 flex-row rounded-lg pb-3"
            key={place.place_name + index}
          >
            {/* Thumbnail */}
            <View className="relative mr-3">
              <Image
                className="h-24 w-20 rounded-lg"
                resizeMode="cover"
                source={{
                  uri: place.photos[0] || 'https://picsum.photos/200/200',
                }}
              />
              {place.hasInstagram && (
                <View className="bg-white/90 absolute bottom-1 left-1 rounded p-0.5">
                  <Ionicons color="#E4405F" name="logo-instagram" size={16} />
                </View>
              )}
              {place.in_reel && !place.hasInstagram && (
                <View className="bg-white/90 absolute bottom-1 left-1 rounded p-0.5">
                  <Ionicons color="#E4405F" name="logo-instagram" size={16} />
                </View>
              )}
            </View>

            {/* Content */}
            <View className="flex-1">
              {/* Place Name */}
              <Text className="text-gray-900 mb-1 text-base font-semibold">
                {place.place_name}
              </Text>

              {/* City */}
              {place.city && (
                <View className="mb-1 flex-row items-center">
                  <Ionicons color="#666" name="location-outline" size={14} />
                  <Text className="text-gray-600 ml-1 text-sm">
                    {place.city}
                  </Text>
                </View>
              )}

              {/* Address as fallback for city */}
              {!place.city && place.address && (
                <View className="mb-1 flex-row items-center">
                  <Ionicons color="#666" name="location-outline" size={14} />
                  <Text className="text-gray-600 ml-1 text-sm">
                    {place.address}
                  </Text>
                </View>
              )}

              {/* Date */}
              {place.date && (
                <View className="mb-2 flex-row items-center">
                  <Ionicons color="#666" name="calendar-outline" size={14} />
                  <Text className="text-gray-600 ml-1 text-sm">
                    {place.date}
                  </Text>
                </View>
              )}

              {/* Opening Hours as fallback for date */}
              {!place.date && place.opening_hours && (
                <View className="mb-2 flex-row items-center">
                  <Ionicons color="#666" name="time-outline" size={14} />
                  <Text className="text-gray-600 ml-1 text-sm">
                    {place.opening_hours}
                  </Text>
                </View>
              )}

              {/* Category Badge */}
              <View className="flex-row items-center">
                <View
                  className="rounded-full px-3 py-1"
                  style={{
                    backgroundColor:
                      categoryColors[place.category] || '#f3f4f6',
                  }}
                >
                  <Text
                    className="text-xs font-medium"
                    style={{
                      color: categoryTextColors[place.category] || colors.text,
                    }}
                  >
                    {place.category}
                  </Text>
                </View>
                {place.hasTikTok && (
                  <View className="bg-black ml-2 rounded-full p-1">
                    <MaterialCommunityIcons
                      color="white"
                      name="music-note"
                      size={12}
                    />
                  </View>
                )}
              </View>
            </View>

            {/* Menu Button */}
            <Pressable className="pl-2">
              <Ionicons color="#666" name="ellipsis-horizontal" size={20} />
            </Pressable>
          </View>
        ))}
      </ScrollView>

      {/* Floating Action Button */}
      <View className="absolute bottom-20 right-6">
        <Pressable
          className="h-14 w-14 items-center justify-center rounded-full shadow-lg"
          style={{ backgroundColor: '#ec4899' }}
        >
          <Ionicons color="white" name="map-outline" size={24} />
        </Pressable>
      </View>
    </View>
  );
};
