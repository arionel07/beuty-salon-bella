import { useEffect, useState } from 'react'

import { defaultServices } from '../data/defaultServices'
import { listenServices, seedServicesIfEmpty } from '../lib/servicesApi'
import type { ServiceCategory } from '../types/service.type'
import { useLanguage } from './LanguageContext'

type ServicesProps = {
	onBookingClick: (service: string) => void
}

export function Services({ onBookingClick }: ServicesProps) {
	const { lang, t } = useLanguage()
	const [services, setServices] = useState<ServiceCategory[]>(defaultServices)

	useEffect(() => {
		seedServicesIfEmpty()

		const unsubscribe = listenServices(setServices)

		return () => unsubscribe()
	}, [])

	return (
		<section
			className="services"
			id="services"
		>
			<div className="services-container">
				<p className="services-label">{t.services.label}</p>
				<h2 className="services-title">{t.services.title}</h2>

				<div className="services-wrapper">
					{services.map(category => (
						<div
							className={`service-card ${category.reversed ? 'reversed' : ''}`}
							key={category.id}
							id={category.id}
						>
							<div className="service-image">
								<img
									src={category.image}
									alt={category.title[lang]}
								/>
							</div>

							<div className="service-content">
								<h3>{category.title[lang]}</h3>

								<ul className="service-list">
									{category.services.map(service => (
										<li key={service.id}>
											<span>{service.name[lang]}</span>
											<strong>{service.price}</strong>
										</li>
									))}
								</ul>

								<button
									onClick={() => onBookingClick(category.id)}
									className="btn service-btn"
								>
									{t.services.button}
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
