import Masks from '../assets/Masks.webp';
import Clock from '../assets/Clock.webp';
import Rocket from '../assets/Rocket.webp';
import Box from '../assets/Box.webp';
import Money from '../assets/Money.webp';

export interface IBenefits {
  title: string;
  description: string;
  svg: string;
  class: string;
}

export const benefits: IBenefits[] = [
  {
    title: 'Атмосфера погружения',
    description:
      'Сказочные сценарии, тематическое оформление, музыкльное сопровождение — создаём полное погружение в мир квиза',
    svg: Masks,
    class: 'Masks',
  },
  {
    title: 'Решение «под ключ»',
    description:
      'От разработки сценария до подарков победителям — берём на себя все органиционные задачи',
    svg: Box,
    class: 'Box',
  },
  {
    title: 'Прозрачное ценообразование',
    description:
      '4 тарифа с фиксированной стоимостью — никаких скрытых платежей',
    svg: Money,
    class: 'Money',
  },
  {
    title: 'Экономия времени HR',
    description:
      'Вместо 40+ часов подготовки — 2-3 встречи с нашим координатором',
    svg: Rocket,
    class: 'Rocket',
  },
  {
    title: 'Гибкость и срочность',
    description:
      'Проведём мероприятие за 1–2 дня до нужной даты Адаптируемся под специфику вашей команды',
    svg: Clock,
    class: 'Clock',
  },
];
