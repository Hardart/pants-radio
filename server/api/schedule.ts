export default defineEventHandler(event => {
  const schedule = [
    {
      weekdayTitle: 'Понедельник',
      weekdayId: 1,
      programs: [
        { start: '07:00', end: '10:00', title: 'Тапки ШОУ', replay: false, image: '/logo.svg' },
        { start: '14:00', end: '15:00', title: 'Программа «ЛИЧКА»', replay: false, image: '/logo.svg' },
        {
          start: '16:00',
          end: '18:00',
          title: 'TOP Chart 20 – Лучшие треки недели',
          replay: true,
          image: '/images/programs/top-chart.webp',
        },
        { start: '18:00', end: '21:00', title: 'Вечерний отрыв', replay: false, image: '/logo.svg' },
      ],
    },
    {
      weekdayTitle: 'Вторник',
      weekdayId: 2,
      programs: [
        { start: '07:00', end: '10:00', title: 'Тапки ШОУ', replay: false, image: '/logo.svg' },
        { start: '14:00', end: '15:00', title: 'Программа «ЛИЧКА»', replay: false, image: '/logo.svg' },
        { start: '18:00', end: '21:00', title: 'Вечерний отрыв', replay: false, image: '/logo.svg' },
      ],
    },
    {
      weekdayTitle: 'Среда',
      weekdayId: 3,
      programs: [
        { start: '07:00', end: '10:00', title: 'Тапки ШОУ', replay: false, image: '/logo.svg' },
        { start: '14:00', end: '15:00', title: 'Программа «ЛИЧКА»', replay: false, image: '/logo.svg' },
        { start: '16:00', end: '18:00', title: 'TOP Chart 20 – Итоги недели', replay: true, image: '/logo.svg' },
        { start: '18:00', end: '21:00', title: 'Вечерний отрыв', replay: false, image: '/logo.svg' },
      ],
    },
    {
      weekdayTitle: 'Четверг',
      weekdayId: 4,
      programs: [
        { start: '07:00', end: '10:00', title: 'Тапки ШОУ', replay: false, image: '/logo.svg' },
        { start: '14:00', end: '15:00', title: 'Программа «ЛИЧКА»', replay: false, image: '/logo.svg' },
        { start: '18:00', end: '21:00', title: 'Вечерний отрыв', replay: false, image: '/logo.svg' },
      ],
    },
    {
      weekdayTitle: 'Пятница',
      weekdayId: 5,
      programs: [
        { start: '07:00', end: '10:00', title: 'Тапки ШОУ', replay: false, image: '/logo.svg' },
        { start: '14:00', end: '15:00', title: 'Программа «ЛИЧКА»', replay: false, image: '/logo.svg' },
        { start: '18:00', end: '21:00', title: 'Вечерний отрыв', replay: false, image: '/logo.svg' },
        { start: '21:00', end: '00:00', title: 'Атмосферные выходные', replay: false, image: '/logo.svg' },
      ],
    },
    {
      weekdayTitle: 'Суббота',
      weekdayId: 6,
      programs: [
        { start: '10:00', end: '14:00', title: 'Атмосферные выходные', replay: false, image: '/logo.svg' },
        { start: '14:00', end: '15:00', title: 'Программа «ЛИЧКА»', replay: false, image: '/logo.svg' },
        { start: '15:00', end: '18:00', title: 'Атмосферные выходные', replay: false, image: '/logo.svg' },
        {
          start: '18:00',
          end: '19:00',
          title: 'TOP Chart 20 – Лучшие треки недели',
          replay: false,
          image: '/images/programs/top-chart.webp',
        },
      ],
    },
    {
      weekdayTitle: 'Воскресенье',
      weekdayId: 0,
      programs: [
        { start: '10:00', end: '14:00', title: 'Атмосферные выходные', replay: false, image: '/logo.svg' },
        { start: '14:00', end: '15:00', title: 'Программа «ЛИЧКА»', replay: false, image: '/logo.svg' },
        { start: '15:00', end: '18:00', title: 'Атмосферные выходные', replay: false, image: '/logo.svg' },
        { start: '18:00', end: '19:00', title: 'TOP Chart 20 – Итоги недели', replay: false, image: '/logo.svg' },
      ],
    },
  ]
  return schedule
})
