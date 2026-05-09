export type Lang = 'ru' | 'ro'

export type ServiceItem = {
	id: string
	name: {
		ru: string
		ro: string
	}
	price: string
}

export type ServiceCategory = {
	id: string
	title: {
		ru: string
		ro: string
	}
	image: string
	reversed?: boolean
	services: ServiceItem[]
}
