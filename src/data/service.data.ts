import cosmetologyImage from '../assets/offers/Rectangle 18.jpg'
import nailsImage from '../assets/offers/Rectangle 19.jpg'
import browsImage from '../assets/offers/Rectangle 20.jpg'
import hairImage from '../assets/Дизайн без названия.jpg'

export const defaultServices = [
	{
		id: 'hair',
		title: 'Волосы',
		image: hairImage,
		reversed: false,
		services: [
			{ id: '1', name: 'Женская стрижка', price: 'от 80 MDL' },
			{ id: '2', name: 'Мужская стрижка', price: 'от 55 MDL' },
			{ id: '3', name: 'Сложное окрашивание', price: 'от 190 MDL' },
			{ id: '4', name: 'Уходовые процедуры', price: 'от 95 MDL' }
		]
	},
	{
		id: 'cosmetology',
		title: 'Косметология',
		image: cosmetologyImage,
		reversed: true,
		services: [
			{ id: '1', name: 'Чистка лица', price: 'от 110 MDL' },
			{ id: '2', name: 'Пилинг', price: 'от 125 MDL' },
			{ id: '3', name: 'Биоревитализация', price: 'от 250 MDL' },
			{ id: '4', name: 'Массаж лица', price: 'от 80 MDL' }
		]
	},
	{
		id: 'nails',
		title: 'Ногтевой. сервис',
		image: nailsImage,
		reversed: true,
		services: [
			{ id: '1', name: 'Чистка лица', price: 'от 110 MDL' },
			{ id: '2', name: 'Пилинг', price: 'от 125 MDL' },
			{ id: '3', name: 'Биоревитализация', price: 'от 250 MDL' },
			{ id: '4', name: 'Массаж лица', price: 'от 80 MDL' }
		]
	},
	{
		id: 'brows',
		title: 'Брови и ресницы',
		image: browsImage,
		reversed: false,
		services: [
			{ id: '1', name: 'Чистка лица', price: 'от 110 MDL' },
			{ id: '2', name: 'Пилинг', price: 'от 125 MDL' },
			{ id: '3', name: 'Биоревитализация', price: 'от 250 MDL' },
			{ id: '4', name: 'Массаж лица', price: 'от 80 MDL' }
		]
	}
]
