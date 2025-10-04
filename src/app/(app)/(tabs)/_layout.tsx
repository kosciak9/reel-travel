import _AntDesign from '@expo/vector-icons/AntDesign.js';
import { type IconProps } from '@expo/vector-icons/build/createIconSet.js';
import { Tabs } from 'expo-router';
import { useLocaleContext } from 'fbtee';
import { FC, useTransition } from 'react';
import { Pressable, View } from 'react-native';
import colors from 'src/ui/colors.ts';
import Text from 'src/ui/Text.tsx';

// Types in `@expo/vector-icons` do not currently work correctly in `"type": "module"` packages.
const AntDesign = _AntDesign as unknown as FC<IconProps<string>>;

export default function TabLayout() {
  const [, startTransition] = useTransition();
  const { locale, setLocale } = useLocaleContext();

  return (
    <Tabs
      screenOptions={{
        sceneStyle: {
          backgroundColor: colors.screen,
        },
        tabBarActiveTintColor: colors.accent,
      }}
    >
      <Tabs.Screen
        name="save"
        options={{
          headerRight: () => (
            <Pressable
              className="mr-2 rounded px-4 py-0"
              onPress={() =>
                startTransition(() =>
                  setLocale(locale === 'ja_JP' ? 'en_US' : 'ja_JP'),
                )
              }
            >
              {({ pressed }) => (
                <View
                  style={{
                    opacity: pressed ? 0.5 : 1,
                  }}
                >
                  <Text>{locale.split('_')[0]}</Text>
                </View>
              )}
            </Pressable>
          ),
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <AntDesign
              color={focused ? colors.accent : colors.text}
              name="plus-circle"
              size={24}
            />
          ),
          title: 'Zapisz',
        }}
      />
      <Tabs.Screen
        name="places"
        options={{
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <AntDesign
              color={focused ? colors.accent : colors.text}
              name="book"
              size={24}
            />
          ),
          title: 'Zapisane',
        }}
      />
    </Tabs>
  );
}
