import { BookingForm } from './BookingForm'
import { useLanguage } from './LanguageContext'

export function BookingSection() {
	const { lang } = useLanguage()
	return (
		<section
			className="booking"
			id="registration"
		>
			<div className="booking-card">
				<h2>{lang === 'ru' ? 'Онлайн запись' : 'Programare online'}</h2>
				<BookingForm />
			</div>
		</section>
	)
}
