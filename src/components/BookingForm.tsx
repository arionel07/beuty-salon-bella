import { useEffect, useState, type FormEvent } from 'react'
import { bookingServices } from '../data/booking.services'
import { useLanguage } from './LanguageContext'

type BookingFormProps = {
	defaultService?: string
	onSuccess?: () => void
}

export function BookingForm({
	defaultService = '',
	onSuccess
}: BookingFormProps) {
	const { lang } = useLanguage()

	const [form, setForm] = useState({
		name: '',
		phone: '',
		service: defaultService,
		message: ''
	})

	const [isSending, setIsSending] = useState(false)

	useEffect(() => {
		setForm(prev => ({
			...prev,
			service: defaultService
		}))
	}, [defaultService])

	const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value.replace(/[^a-zA-Zа-яА-ЯёЁăĂâÂîÎșȘțȚ\s-]/g, '')

		setForm(prev => ({
			...prev,
			name: value
		}))
	}

	const formatPhone = (value: string) => {
		const digits = value.replace(/\D/g, '').replace(/^373/, '').slice(0, 8)

		const part1 = digits.slice(0, 2)
		const part2 = digits.slice(2, 5)
		const part3 = digits.slice(5, 8)

		let result = '+373'

		if (part1) result += ` (${part1}`
		if (part1.length === 2) result += ')'
		if (part2) result += ` ${part2}`
		if (part3) result += ` ${part3}`

		return result
	}

	const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm(prev => ({
			...prev,
			phone: formatPhone(e.target.value)
		}))
	}

	const handleChange = (
		e: React.ChangeEvent<HTMLTextAreaElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target

		setForm(prev => ({
			...prev,
			[name]: value
		}))
	}

	const isFormValid =
		form.name.trim().length >= 2 &&
		form.phone.replace(/\D/g, '').length === 11 &&
		form.service.trim() !== ''

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (!isFormValid) {
			alert(
				lang === 'ru'
					? 'Заполните имя, телефон и услугу'
					: 'Completați numele, telefonul și serviciul'
			)
			return
		}

		const selectedService = bookingServices.find(
			service => service.value === form.service
		)

		const serviceLabel = selectedService
			? selectedService.label[lang]
			: form.service

		const text = `
💄 Новая заявка BeLLa

👤 Имя: ${form.name}
📞 Телефон: ${form.phone}
📋 Услуга: ${serviceLabel}

💬 Комментарий:
${form.message || 'Без комментария'}
		`

		try {
			setIsSending(true)

			await fetch(
				`https://api.telegram.org/bot${import.meta.env.VITE_TELEGRAM_BOT_TOKEN}/sendMessage`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						chat_id: import.meta.env.VITE_TELEGRAM_CHAT_ID,
						text
					})
				}
			)

			alert(lang === 'ru' ? 'Заявка отправлена' : 'Cererea a fost trimisă')

			setForm({
				name: '',
				phone: '',
				service: defaultService,
				message: ''
			})

			onSuccess?.()
		} catch (error) {
			console.error(error)
			alert(lang === 'ru' ? 'Ошибка отправки' : 'Eroare la trimitere')
		} finally {
			setIsSending(false)
		}
	}

	return (
		<form
			className="booking-form"
			onSubmit={handleSubmit}
		>
			<input
				name="name"
				value={form.name}
				onChange={handleNameChange}
				placeholder={lang === 'ru' ? 'Ваше имя *' : 'Numele dvs. *'}
			/>

			<input
				name="phone"
				value={form.phone}
				onChange={handlePhoneChange}
				placeholder="+373 (__) ___ ___"
				inputMode="numeric"
			/>

			<div className="booking-select-wrap">
				<select
					name="service"
					value={form.service}
					onChange={handleChange}
				>
					<option value="">
						{lang === 'ru' ? 'Выберите направление *' : 'Alegeți serviciul *'}
					</option>

					{bookingServices.map(service => (
						<option
							key={service.value}
							value={service.value}
						>
							{service.label[lang]}
						</option>
					))}
				</select>
			</div>

			<textarea
				name="message"
				value={form.message}
				onChange={handleChange}
				placeholder={
					lang === 'ru'
						? 'Дополнительный комментарий...'
						: 'Comentariu suplimentar...'
				}
			/>

			<button
				className="btn booking-submit"
				disabled={!isFormValid || isSending}
			>
				{isSending
					? lang === 'ru'
						? 'Отправляем...'
						: 'Se trimite...'
					: lang === 'ru'
						? 'Отправить заявку'
						: 'Trimite cererea'}
			</button>
		</form>
	)
}
