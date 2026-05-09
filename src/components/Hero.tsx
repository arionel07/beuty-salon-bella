import { Header } from './Header'

import image from '../assets/hero/hero-image.jpg'
import { useLanguage } from './LanguageContext'

export function Hero() {
	const { t } = useLanguage()
	return (
		<section className="hero">
			<Header />
			<div className="hero-container">
				<div className="hero-wrapper">
					<div className="hero-text">
						<p className="hero-desc-1">{t.hero.label}</p>
						<h1 className="hero-title">{t.hero.title}</h1>
						<p className="hero-desc-2">{t.hero.desc}</p>
						<div className="hero-links">
							<a
								href="#registration"
								className="btn hero-btn-1"
							>
								{t.hero.booking}
							</a>
							<a
								href="#services"
								className="btn hero-btn-2"
							>
								{t.hero.services}
							</a>
						</div>
					</div>
					<div className="hero-img">
						<img
							src={image}
							alt="Клиентка салона красоты BeLLa"
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
