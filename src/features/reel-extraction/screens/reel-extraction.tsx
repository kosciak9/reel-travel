import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, TextInput, View } from 'react-native';
import { useAddPlace } from 'src/lib/db.ts';
import Text from 'src/ui/Text.tsx';
import { extractReel } from '../api/reel-extraction.ts';

export const ReelExtractionScreen = () => {
  const [reelUrl, setReelUrl] = useState('');
  const addPlace = useAddPlace();

  return (
    <View className="flex-1 items-center justify-center gap-4 px-10">
      <TextInput
        className="bg-white w-full rounded border-b-2 border-b-accent px-4 py-2 text-center text-lg"
        onChangeText={setReelUrl}
        placeholder="Enter TikTok reel link"
        value={reelUrl}
      />
      <Pressable
        className="w-full rounded bg-accent px-4 py-2"
        onPress={async () => {
          const extracted = await extractReel(reelUrl);
          if (!extracted) {
            return;
          }

          addPlace(extracted?.places[0]);
          setReelUrl('');

          router.push('/places');
        }}
      >
        <Text className="text-center text-lg color-[white]">Extract</Text>
      </Pressable>
    </View>
  );
};
