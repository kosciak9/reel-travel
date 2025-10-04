import { atom, useAtomValue, useSetAtom } from 'jotai';
import { Place } from 'src/lib/db/places.ts';

const placesAtom = atom<Array<Place>>([
  {
    address: 'Sikornik Hill',
    category: 'restaurant',
    in_post: true,
    in_reel: true,
    opening_hours: '11:00-17:00',
    outdoor: 'no',
    photos: [],
    place_name: 'Wojciech',
    short_description:
      'Wojciech is a cozy vegetarian breakfast café in central Kraków. It serves creative breakfasts and fresh cakes in a relaxed atmosphere, with vegan options available. In the evenings, it can be rented for small private events.',
  },
]);

export const usePlaces = () => useAtomValue(placesAtom);

export const useAddPlace = () => {
  const setPlaces = useSetAtom(placesAtom);
  return (place: Place) => {
    setPlaces((prev) => [...prev, place]);
  };
};

// Legacy exports for backward compatibility (deprecated)
export const listPlaces = () => {
  throw new Error(
    'listPlaces is deprecated. Use usePlaces hook instead for automatic reactivity.',
  );
};

export const addPlace = () => {
  throw new Error(
    'addPlace is deprecated. Use useAddPlace hook instead for automatic reactivity.',
  );
};
