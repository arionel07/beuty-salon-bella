import { useLanguage } from './LanguageContext'

export function Map() {
	const { t } = useLanguage()
	return (
		<section
			className="map"
			id="location"
		>
			<div className="map-container">
				<div className="map-header">
					<h2 className="map-title">{t.map.title}</h2>

					<div className="map-info">
						<p>{t.map.hours}</p>
						<p>{t.map.address}</p>
					</div>
				</div>

				<div className="map-item">
					<iframe
						title="Google Map"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2718.6574185067416!2d28.885206999999994!3d47.0469528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97dddf0b4a19d%3A0x77cc8e100a324e6!2sBeauty%20Oasis!5e0!3m2!1sru!2s!4v1778171576120!5m2!1sru!2s"
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			</div>
		</section>
	)
}
