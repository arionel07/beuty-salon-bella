import browsImage from '../assets/services/service-brow.jpg'
import hairImage from '../assets/services/service-hair.jpg'
import makeup from '../assets/services/service-makeup.jpg'
import nailsImage from '../assets/services/service-nails.jpg'
import type { ServiceCategory } from '../types/service.type'

export const defaultServices: ServiceCategory[] = [
	{
		id: 'hair',
		title: {
			ru: 'Волосы',
			ro: 'Păr'
		},
		image: hairImage,
		services: [
			{
				id: 'hair-1',
				name: {
					ru: 'Женская стрижка',
					ro: 'Tunsoare femei'
				},
				price: 'от 80 MDL'
			},
			{
				id: 'hair-2',
				name: {
					ru: 'Мужская стрижка',
					ro: 'Tunsoare bărbați'
				},
				price: 'от 55 MDL'
			},
			{
				id: 'hair-3',
				name: {
					ru: 'Сложное окрашивание',
					ro: 'Vopsire complexă'
				},
				price: 'от 190 MDL'
			}
		]
	},
	{
		id: 'makeup',
		title: {
			ru: 'Макияж',
			ro: 'Machiaj'
		},
		image: makeup,
		reversed: true,
		services: [
			{
				id: 'makeup-1',
				name: {
					ru: 'Дневной макияж',
					ro: 'Machiaj de zi'
				},
				price: 'от 110 MDL'
			},
			{
				id: 'makeup-2',
				name: {
					ru: 'Вечерний макияж',
					ro: 'Machiaj de seară'
				},
				price: 'от 150 MDL'
			},
			{
				id: 'makeup-3',
				name: {
					ru: 'Свадебный макияж',
					ro: 'Machiaj de mireasă'
				},
				price: 'от 250 MDL'
			},
			{
				id: 'makeup-4',
				name: {
					ru: 'Макияж глаз',
					ro: 'Machiaj pentru ochi'
				},
				price: 'от 80 MDL'
			}
		]
	},
	{
		id: 'nails',
		title: {
			ru: 'Ногтевой сервис',
			ro: 'Servicii unghii'
		},
		image: nailsImage,
		services: [
			{
				id: 'makeup-1',
				name: {
					ru: 'Дневной макияж',
					ro: 'Machiaj de zi'
				},
				price: 'от 110 MDL'
			},
			{
				id: 'makeup-2',
				name: {
					ru: 'Вечерний макияж',
					ro: 'Machiaj de seară'
				},
				price: 'от 150 MDL'
			},
			{
				id: 'makeup-3',
				name: {
					ru: 'Свадебный макияж',
					ro: 'Machiaj de mireasă'
				},
				price: 'от 250 MDL'
			},
			{
				id: 'makeup-4',
				name: {
					ru: 'Макияж глаз',
					ro: 'Machiaj pentru ochi'
				},
				price: 'от 80 MDL'
			}
		]
	},
	{
		id: 'brows',
		title: {
			ru: 'Брови и ресницы',
			ro: 'Sprâncene și gene'
		},
		image: browsImage,
		reversed: true,
		services: [
			{
				id: 'brow-1',
				name: {
					ru: 'Архитектура бровей',
					ro: 'Arhitectura sprâncenelor'
				},
				price: 'от 45 MDL'
			},
			{
				id: 'brow-2',
				name: {
					ru: 'Ламинирование бровей',
					ro: 'Laminare sprâncene'
				},
				price: 'от 80 MDL'
			},
			{
				id: 'brow-3',
				name: {
					ru: 'Наращивание ресниц',
					ro: 'Extensii gene'
				},
				price: 'от 95 MDL'
			}
		]
	}
]
