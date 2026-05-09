import { offersItems } from '../data/offer.data'
import { useLanguage } from './LanguageContext'

export function Offers() {
	const { lang, t } = useLanguage()

	return (
		<section className="offer">
			<div className="offer-container">
				<p className="offer-head">{t.offers.label}</p>

				<h2 className="offer-title">{t.offers.title}</h2>

				<div className="offer-line" />

				<div className="offer-wrapper">
					{offersItems.map(item => (
						<a
							key={item.title.ru}
							href={item.link}
							className="offer-item"
							style={{
								backgroundImage: `url(${item.image})`
							}}
						>
							<span>{item.title[lang]}</span>
						</a>
					))}
				</div>

				<a
					href="#services"
					className="btn offer-btn"
				>
					{t.offers.button}
				</a>
			</div>
		</section>
	)
}
