import arrowStepDown from '../assets/sprite.svg';
import arrowStepLeft from '../assets/sprite.svg';
import arrowStepRight from '../assets/sprite.svg';

interface ISteps {
  text: string;
  svg?: string;
  id: string;
}

export const steps: ISteps[] = [
  {
    text: 'Оставьте заявку и наш менеджер свяжется с вами в ближайший будний день с 9:00 до 18:00',
    svg: arrowStepDown,
    id: 'arrowStepDown',
  },
  {
    text: 'Обсудим все появившиеся вопросы и начнём подготовку квиза — вы можете расслабиться и ни о чем не переживать',
    id: 'empty',
  },
  {
    text: 'На подготовку классического квиза уйдёт 1–2 дня, авторского — до 7 дней',
    svg: arrowStepLeft,
    id: 'arrowStepLeft',
  },
  {
    text: 'В назначенный день проведём квиз — вам остаётся только наслаждаться игрой',
    svg: arrowStepRight,
    id: 'arrowStepRight',
  },
];
