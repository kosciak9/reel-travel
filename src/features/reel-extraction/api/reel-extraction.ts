import { Place } from 'src/lib/db/places.ts';

export const extractReel = async (
  reelUrl: string,
): Promise<
  | {
      city: string;
      places: Array<Place>;
      tags: Array<string>;
      url: string;
    }
  | undefined
> => {
  return mockExtractions.find((reel) => reel.url === reelUrl.toLowerCase());
};

const mockExtractions = [
  {
    city: 'Kraków',
    places: [
      {
        address: 'Marszałka Józefa Piłsudskiego 5, 31-110 Kraków',
        category: 'restaurant',
        in_post: true,
        in_reel: true,
        opening_hours: '9:00-20:00',
        outdoor: 'no',
        photos: [],
        place_name: 'Przesada',
        short_description:
          'Przesada is a cozy vegetarian breakfast café in central Kraków. It serves creative breakfasts and fresh cakes in a relaxed atmosphere, with vegan options available. In the evenings, it can be rented for small private events.',
      },
    ],
    tags: ['zwiedzanie', 'jedzenie', 'rozrywka'],
    url: 'https://www.instagram.com/reel/DKt7_WRokFO/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
  {
    city: 'Kraków',
    places: [
      {
        address: 'Rynek Główny 3, 31-042 Kraków',
        category: 'object',
        in_post: true,
        in_reel: true,
        opening_hours: '24/7',
        outdoor: 'yes',
        photos: [],
        place_name: 'Sukiennice (entrance openings)',
        short_description:
          'The Sukiennice is a Renaissance cloth hall in Kraków’s Main Market Square. The small stone holes near its entrances were once torch sockets that illuminated the arcades and entryways after dusk.',
      },
      {
        address: null,
        category: 'park',
        in_post: true,
        in_reel: true,
        opening_hours: '24/7',
        outdoor: 'yes',
        photos: [],
        place_name: 'Polana i punkt widokowy',
        short_description:
          'The picnic clearing on Sikornik lies just one kilometer from Kościuszko Mound. The trail is easy — a car-free asphalt path (black route) passing by the Music Glade.',
      },
      {
        address: null,
        category: 'park',
        in_post: true,
        in_reel: true,
        opening_hours: '24/7',
        outdoor: 'yes',
        photos: [],
        place_name: 'Sikornik',
        short_description:
          'Sikornik Hill offers gentle walking paths and viewpoints over Kraków. The nearby picnic clearing and Music Glade make it a popular leisure spot close to Kościuszko Mound.',
      },
    ],
    tags: ['4 miejsca'],
    url: 'https://www.instagram.com/reel/DCHWdDdN0c7/',
  },
  {
    city: 'Warszawa',
    places: [
      {
        address: 'Warszawa',
        category: 'rozrywka',
        in_post: true,
        in_reel: true,
        opening_hours: '24/7',
        outdoor: 'yes',
        photos: [],
        place_name: 'Warszawa',
        short_description:
          'Warszawa is a vibrant and bustling city in central Poland. It is known for its rich history, cultural diversity, and modern architecture. The city is home to numerous museums, galleries, and cultural institutions, making it a popular destination for tourists and locals alike.',
      },
    ],
    tags: [],
    url: 'testurl',
  },
];
