import { advantagesItems } from '../data/advantages.data'
import { useLanguage } from './LanguageContext'

export function Advantages() {
	const { lang } = useLanguage()

	return (
		<section className="advantages">
			<div className="advantages-container">
				<div className="advantages-wrapper">
					{advantagesItems.map(item => (
						<div
							className="advantages-item"
							key={item.title.ru}
						>
							<div className="advantages-icon">{item.icon}</div>

							<div className="advantages-text">
								<h3 className="advantages-item-title">{item.title[lang]}</h3>

								<p className="advantages-item-desc">{item.description[lang]}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
