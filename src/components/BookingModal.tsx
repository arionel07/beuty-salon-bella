import { BookingForm } from './BookingForm'

type BookingModalProps = {
	isOpen: boolean
	selectedService: string
	onClose: () => void
}

export function BookingModal({
	isOpen,
	selectedService,
	onClose
}: BookingModalProps) {
	if (!isOpen) return null

	return (
		<div className="booking-modal">
			<div
				className="booking-modal-overlay"
				onClick={onClose}
			/>

			<div className="booking-modal-content">
				<button
					className="booking-modal-close"
					onClick={onClose}
				>
					×
				</button>

				<h2>Онлайн запись</h2>

				<BookingForm
					defaultService={selectedService}
					onSuccess={onClose}
				/>
			</div>
		</div>
	)
}
