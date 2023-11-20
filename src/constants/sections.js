import FootballJPGx1 from '@/assets/request-sections/football/x1.jpg';
import FootballJPGx2 from '@/assets/request-sections/football/x2.jpg';
import FootballJPGx3 from '@/assets/request-sections/football/x3.jpg';

import FootballWEBPx1 from '@/assets/request-sections/football/x1.webp';
import FootballWEBPx2 from '@/assets/request-sections/football/x2.webp';
import FootballWEBPx3 from '@/assets/request-sections/football/x3.webp';

import VolleyballJPGx1 from '@/assets/request-sections/volleyball/x1.jpg';
import VolleyballJPGx2 from '@/assets/request-sections/volleyball/x2.jpg';
import VolleyballJPGx3 from '@/assets/request-sections/volleyball/x3.jpg';

import VolleyballWEBPx1 from '@/assets/request-sections/volleyball/x1.webp';
import VolleyballWEBPx2 from '@/assets/request-sections/volleyball/x2.webp';
import VolleyballWEBPx3 from '@/assets/request-sections/volleyball/x3.webp';

import ClimbingJPGx1 from '@/assets/request-sections/climbing/x1.jpg';
import ClimbingJPGx2 from '@/assets/request-sections/climbing/x2.jpg';
import ClimbingJPGx3 from '@/assets/request-sections/climbing/x3.jpg';

import ClimbingWEBPx1 from '@/assets/request-sections/climbing/x1.webp';
import ClimbingWEBPx2 from '@/assets/request-sections/climbing/x2.webp';
import ClimbingWEBPx3 from '@/assets/request-sections/climbing/x3.webp';

import TennisJPGx1 from '@/assets/request-sections/tennis/x1.jpg';
import TennisJPGx2 from '@/assets/request-sections/tennis/x2.jpg';
import TennisJPGx3 from '@/assets/request-sections/tennis/x3.jpg';

import TennisWEBPx1 from '@/assets/request-sections/tennis/x1.webp';
import TennisWEBPx2 from '@/assets/request-sections/tennis/x2.webp';
import TennisWEBPx3 from '@/assets/request-sections/tennis/x3.webp';

import BoxJPGx1 from '@/assets/request-sections/box/x1.jpg';
import BoxJPGx2 from '@/assets/request-sections/box/x2.jpg';
import BoxJPGx3 from '@/assets/request-sections/box/x3.jpg';

import BoxWEBPx1 from '@/assets/request-sections/box/x1.webp';
import BoxWEBPx2 from '@/assets/request-sections/box/x2.webp';
import BoxWEBPx3 from '@/assets/request-sections/box/x3.webp';

import SwimmingJPGx1 from '@/assets/request-sections/swimming/x1.jpg';
import SwimmingJPGx2 from '@/assets/request-sections/swimming/x2.jpg';
import SwimmingJPGx3 from '@/assets/request-sections/swimming/x3.jpg';

import SwimmingWEBPx1 from '@/assets/request-sections/swimming/x1.webp';
import SwimmingWEBPx2 from '@/assets/request-sections/swimming/x2.webp';
import SwimmingWEBPx3 from '@/assets/request-sections/swimming/x3.webp';

export const SECTIONS = [
  {
    name: 'football',
    label: 'Футбол',
    disabled: false,
    startAge: 6,
    endAge: 18,

    requestImages: {
      JPGx1: FootballJPGx1,
      JPGx2: FootballJPGx2,
      JPGx3: FootballJPGx3,
      WEBPx1: FootballWEBPx1,
      WEBPx2: FootballWEBPx2,
      WEBPx3: FootballWEBPx3,
    },
  },
  {
    name: 'volleyball',
    label: 'Волейбол',
    disabled: false,
    startAge: 8,
    endAge: 18,

    requestImages: {
      JPGx1: VolleyballJPGx1,
      JPGx2: VolleyballJPGx2,
      JPGx3: VolleyballJPGx3,
      WEBPx1: VolleyballWEBPx1,
      WEBPx2: VolleyballWEBPx2,
      WEBPx3: VolleyballWEBPx3,
    },
  },
  {
    name: 'climbing',
    label: 'Скелелазіння',
    disabled: false,
    startAge: 8,
    endAge: 18,

    requestImages: {
      JPGx1: ClimbingJPGx1,
      JPGx2: ClimbingJPGx2,
      JPGx3: ClimbingJPGx3,
      WEBPx1: ClimbingWEBPx1,
      WEBPx2: ClimbingWEBPx2,
      WEBPx3: ClimbingWEBPx3,
    },
  },
  {
    name: 'tennis',
    label: 'Теніс настільний',
    disabled: false,
    startAge: 7,
    endAge: 18,

    requestImages: {
      JPGx1: TennisJPGx1,
      JPGx2: TennisJPGx2,
      JPGx3: TennisJPGx3,
      WEBPx1: TennisWEBPx1,
      WEBPx2: TennisWEBPx2,
      WEBPx3: TennisWEBPx3,
    },
  },
  {
    name: 'box',
    label: 'Бокс',
    disabled: true,
    startAge: 10,
    endAge: 18,

    requestImages: {
      JPGx1: BoxJPGx1,
      JPGx2: BoxJPGx2,
      JPGx3: BoxJPGx3,
      WEBPx1: BoxWEBPx1,
      WEBPx2: BoxWEBPx2,
      WEBPx3: BoxWEBPx3,
    },
  },
  {
    name: 'swimming',
    label: 'Плавання',
    disabled: true,
    startAge: 8,
    endAge: 18,

    requestImages: {
      JPGx1: SwimmingJPGx1,
      JPGx2: SwimmingJPGx2,
      JPGx3: SwimmingJPGx3,
      WEBPx1: SwimmingWEBPx1,
      WEBPx2: SwimmingWEBPx2,
      WEBPx3: SwimmingWEBPx3,
    },
  },
];
