import { Footer } from './components/Footer'

import { useState } from 'react'
import { AdminServices } from './components/AdminServices'
import { Advantages } from './components/Advantages'
import { BookingModal } from './components/BookingModal'
import { BookingSection } from './components/BookingSection'
import { Gallery } from './components/Gallery'
import { Hero } from './components/Hero'
import { Offers } from './components/Offers'
import { Services } from './components/Services'

import { Map } from './components/Map'

function App() {
	const isAdmin = window.location.pathname === '/admin'

	const [isBookingOpen, setIsBookingOpen] = useState(false)
	const [selectedService, setSelectedService] = useState('')

	const openBooking = (service = '') => {
		setSelectedService(service)
		setIsBookingOpen(true)
	}

	if (isAdmin) {
		return <AdminServices />
	}
	return (
		<main>
			<Hero />

			<Advantages />
			<Offers />
			<Gallery />
			<Services onBookingClick={openBooking} />
			<BookingSection />
			<Map />
			<Footer />

			<BookingModal
				isOpen={isBookingOpen}
				selectedService={selectedService}
				onClose={() => setIsBookingOpen(false)}
			/>
		</main>
	)
}

export default App
