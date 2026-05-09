import { useEffect, useState } from 'react'

import { defaultServices } from '../data/defaultServices'
import {
	listenServices,
	saveServices,
	seedServicesIfEmpty
} from '../lib/servicesApi'
import type { ServiceCategory } from '../types/service.type'
import { useLanguage } from './LanguageContext'

const ADMIN_PASSWORD = 'q7AK2618!'

export function AdminServices() {
	const { t } = useLanguage()
	const [services, setServices] = useState<ServiceCategory[]>(defaultServices)
	const [status, setStatus] = useState('')
	const [isAllowed, setIsAllowed] = useState(false)
	const [password, setPassword] = useState('')

	useEffect(() => {
		let isFirstLoad = true

		seedServicesIfEmpty()

		const unsubscribe = listenServices(firebaseServices => {
			if (isFirstLoad) {
				setServices(firebaseServices)
				isFirstLoad = false
			}
		})

		return () => unsubscribe()
	}, [])

	const updateCategoryTitle = (
		categoryId: string,
		lang: 'ru' | 'ro',
		value: string
	) => {
		setServices(prev =>
			prev.map(category =>
				category.id === categoryId
					? { ...category, title: { ...category.title, [lang]: value } }
					: category
			)
		)
	}

	const updateService = (
		categoryId: string,
		serviceId: string,
		field: 'ru' | 'ro' | 'price',
		value: string
	) => {
		setServices(prev =>
			prev.map(category =>
				category.id === categoryId
					? {
							...category,
							services: category.services.map(service =>
								service.id === serviceId
									? field === 'price'
										? { ...service, price: value }
										: {
												...service,
												name: {
													...service.name,
													[field]: value
												}
											}
									: service
							)
						}
					: category
			)
		)
	}
	const addService = (categoryId: string) => {
		setServices(prev =>
			prev.map(category =>
				category.id === categoryId
					? {
							...category,
							services: [
								...category.services,
								{
									id: crypto.randomUUID(),
									name: {
										ru: 'Новая услуга',
										ro: 'Serviciu nou'
									},
									price: 'от 0 MDL'
								}
							]
						}
					: category
			)
		)
	}

	const removeService = (categoryId: string, serviceId: string) => {
		setServices(prev =>
			prev.map(category =>
				category.id === categoryId
					? {
							...category,
							services: category.services.filter(
								service => service.id !== serviceId
							)
						}
					: category
			)
		)
	}

	const handleSave = async () => {
		setStatus('Сохраняю...')

		try {
			console.log('Start save')
			await saveServices(services)
			console.log('Finish save')

			setStatus('Сохранено')

			setTimeout(() => {
				setStatus('')
			}, 2000)
		} catch (error) {
			console.error('Save error:', error)
			setStatus('Ошибка сохранения')
		}
	}

	if (!isAllowed) {
		return (
			<section className="admin-login">
				<div className="admin-login-card">
					<h2>Вход в админку</h2>

					<input
						type="password"
						placeholder="Пароль"
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>

					<button
						className="btn hero-btn-1"
						onClick={() => setIsAllowed(password === ADMIN_PASSWORD)}
					>
						Войти
					</button>
				</div>
			</section>
		)
	}

	return (
		<section className="admin-service">
			<div className="admin-container">
				<h2>{t.admin.title}</h2>

				<div className="admin-list">
					{services.map(category => (
						<div
							className="admin-card"
							key={category.id}
						>
							<div className="admin-grid">
								<label>
									{t.admin.categoryRu}
									<input
										value={category.title.ru}
										onChange={e =>
											updateCategoryTitle(category.id, 'ru', e.target.value)
										}
									/>
								</label>

								<label>
									{t.admin.categoryRo}
									<input
										value={category.title.ro}
										onChange={e =>
											updateCategoryTitle(category.id, 'ro', e.target.value)
										}
									/>
								</label>
							</div>

							{category.services.map(service => (
								<div
									className="admin-service-row"
									key={service.id}
								>
									<label>
										{t.admin.serviceRu}
										<input
											value={service.name.ru}
											onChange={e =>
												updateService(
													category.id,
													service.id,
													'ru',
													e.target.value
												)
											}
										/>
									</label>

									<label>
										{t.admin.serviceRo}
										<input
											value={service.name.ro}
											onChange={e =>
												updateService(
													category.id,
													service.id,
													'ro',
													e.target.value
												)
											}
										/>
									</label>

									<label>
										{t.admin.price}
										<input
											value={service.price}
											onChange={e =>
												updateService(
													category.id,
													service.id,
													'price',
													e.target.value
												)
											}
										/>
									</label>

									<button
										className="admin-delete"
										onClick={() => removeService(category.id, service.id)}
									>
										Удалить
									</button>
								</div>
							))}

							<button
								className="btn admin-add"
								onClick={() => addService(category.id)}
							>
								+ Добавить услугу
							</button>
						</div>
					))}
				</div>

				<div className="admin-actions">
					<button
						className="btn hero-btn-1"
						onClick={handleSave}
					>
						{t.admin.save}
					</button>

					<span>{status}</span>
				</div>
			</div>
		</section>
	)
}
