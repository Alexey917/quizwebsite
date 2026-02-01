import AroundTheWorld from '../assets/AroundTheWorld.jpg';
import NewYear from '../assets/NewYear.jpg';
import CinemaQuiz from '../assets/CinemaQuiz.jpg';
import Halloween from '../assets/Halloween.jpg';
import ForGirls from '../assets/ForGirls.jpg';

interface IPopularQuizzes {
  img: string;
  title: string;
  description: string;
  link: string;
}

export const popularQuizzes: IPopularQuizzes[] = [
  {
    img: AroundTheWorld,
    title: 'Вокруг света за 2 часа!',
    description:
      'Галопом промчитесь по всему земному шару и узнайте как отмечают Новый год в других странах!',
    link: 'AroundTheWorld',
  },

  {
    img: NewYear,
    title: 'Новый год на тарелке',
    description:
      'Помогите нашим эльфам накрыть новогодний стол и узнайте увлекательные факты о своих любимых блюдах!',
    link: 'NewYear',
  },

  {
    img: CinemaQuiz,
    title: 'Киноквиз',
    description:
      'Фильмы, мультфильмы и сериалы — а что вы любите пересматривать перед Новым годом? Окунитесь в этот сказочный мир снова с нашим Киноквизом!',
    link: 'CinemaQuiz',
  },

  {
    img: Halloween,
    title: 'Halloween',
    description:
      'Галопом промчитесь по всему земному шару и узнайте как отмечают Новый год в других странах!',
    link: 'Halloween',
  },

  {
    img: ForGirls,
    title: 'Для девушек',
    description:
      'Фильмы, мультфильмы и сериалы - а что вы любите пересматривать перед Новым годом? Окунитесь в этот сказочный мир снова с нашим Киноквизом!',
    link: 'ForGirls',
  },
];
