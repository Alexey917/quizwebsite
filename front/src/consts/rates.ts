import elf from '../assets/elf.svg';
import fire from '../assets/fire.svg';
import dragon from '../assets/dragon.svg';
import god from '../assets/god.svg';

export type TRates = {
  title: string;
  description: string;
  list: string[];
  price: string;
  oldPrice?: string;
  img: string;
  isAuthorial: boolean;
};

export const rates: TRates[] = [
  {
    title: 'ЭЛЬФЫ',
    description: 'Идеальный баланс качества и заботы',
    list: [
      'Любой готовый квиз из нашей базы',
      'Проведение от команды QuizyTales',
      'Помощь в подборе подарков (за ваш счёт)',
    ],
    price: '14 000 ₽',
    oldPrice: '15 900 ₽',
    img: elf,
    isAuthorial: false,
  },
  {
    title: 'МАГИ',
    description: 'Волшебство с заботой о деталях',
    list: [
      'Любой готовый квиз из нашей базы',
      'Проведение от команды QuizyTales',
      'Подарки команде победителей (до 5 человек)',
      'Каждый участник команды-победителя получает тематический подарок стоимостью 1 500 рублей',
    ],
    price: '23 500 ₽',
    oldPrice: '25 500 ₽',
    img: fire,
    isAuthorial: false,
  },
  {
    title: 'ДРАКОНЫ',
    description: 'Эксклюзив под ваш запрос',
    list: [
      'Квиз из нашей базы ИЛИ авторский квиз по вашему запросу',
      'Уникальные вопросы и задания',
      'Подарки команде победителей (до 5 человек)',
      'Каждый участник команды-победителя получает тематический подарок стоимостью 3 000 рублей',
    ],
    price: '35 000 ₽',
    oldPrice: '39 900 ₽',
    img: dragon,
    isAuthorial: false,
  },
  {
    title: 'ДРЕВНИЕ БОГИ',
    description: 'Всё и сразу — для самых смелых',
    list: [
      'Авторский квиз с нуля по вашим запросам',
      'Тематические подарки для победителей в выбранной вами ценовой категории (обсуждается индивидуально)',
      'Рекомендуемый бюджет на подарок: от 5 000 рублей',
      'Персональная скидка на дальнейшие заказы',
      'Приоритетное производство и проведение игры',
    ],
    price: '69 000 ₽',
    img: god,
    isAuthorial: true,
  },
];
