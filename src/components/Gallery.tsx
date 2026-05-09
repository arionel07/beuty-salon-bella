import { useEffect, useState } from 'react'

import brow1 from '../assets/gallery/brow-1.jpg'
import brow2 from '../assets/gallery/brow-2.jpg'
import hair1 from '../assets/gallery/hair-1.jpg'
import hair2 from '../assets/gallery/hair-2.jpg'
import makeup1 from '../assets/gallery/makeup-1.jpg'
import makeup2 from '../assets/gallery/makeup-2.jpg'
import nails1 from '../assets/gallery/nails-1.jpg'
import nails2 from '../assets/gallery/nails-2.jpg'
import { useLanguage } from './LanguageContext'

const galleryItems = [
	{
		image: makeup1,
		title: {
			ru: 'Макияж',
			ro: 'Machiaj'
		}
	},
	{
		image: brow1,
		title: {
			ru: 'Брови и ресницы',
			ro: 'Sprâncene și gene'
		}
	},
	{
		image: hair1,
		title: {
			ru: 'Волосы',
			ro: 'Păr'
		}
	},
	{
		image: nails1,
		title: {
			ru: 'Ногти',
			ro: 'Unghii'
		}
	},
	{
		image: nails2,
		title: {
			ru: 'Ногти',
			ro: 'Unghii'
		}
	},
	{
		image: hair2,
		title: {
			ru: 'Волосы',
			ro: 'Păr'
		}
	},
	{
		image: makeup2,
		title: {
			ru: 'Макияж',
			ro: 'Machiaj'
		}
	},
	{
		image: brow2,
		title: {
			ru: 'Брови и ресницы',
			ro: 'Sprâncene și gene'
		}
	}
]

export function Gallery() {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [slidesPerView, setSlidesPerView] = useState(4)
	const { lang, t } = useLanguage()

	useEffect(() => {
		const updateSlidesPerView = () => {
			if (window.innerWidth <= 640) setSlidesPerView(1)
			else if (window.innerWidth <= 992) setSlidesPerView(2)
			else setSlidesPerView(4)
		}

		updateSlidesPerView()
		window.addEventListener('resize', updateSlidesPerView)

		return () => window.removeEventListener('resize', updateSlidesPerView)
	}, [])

	const maxIndex = galleryItems.length - slidesPerView

	const nextSlide = () => {
		setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1))
	}

	const prevSlide = () => {
		setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1))
	}

	return (
		<section
			className="gallery"
			id="gallery"
		>
			<div className="gallery-container">
				<div className="gallery-head">
					<p className="gallery-label">{t.gallery.label}</p>
					<h2 className="gallery-title">{t.gallery.title}</h2>
					<p className="gallery-desc">{t.gallery.desc}</p>
				</div>

				<div className="gallery-slider">
					<button
						className="gallery-arrow gallery-arrow-left"
						onClick={prevSlide}
						aria-label="Предыдущее фото"
					>
						‹
					</button>

					<div className="gallery-window">
						<div
							className="gallery-track"
							style={
								{
									'--index': currentIndex,
									'--slides': slidesPerView
								} as React.CSSProperties
							}
						>
							{galleryItems.map(item => (
								<article
									className="gallery-slide"
									key={item.title.ru}
								>
									<div className="gallery-card">
										<img
											src={item.image}
											alt={item.title[lang]}
										/>
										<span>{item.title[lang]}</span>
									</div>
								</article>
							))}
						</div>
					</div>

					<button
						className="gallery-arrow gallery-arrow-right"
						onClick={nextSlide}
						aria-label="Следующее фото"
					>
						›
					</button>
				</div>

				<div className="gallery-dots">
					{Array.from({ length: maxIndex + 1 }).map((_, index) => (
						<button
							key={index}
							className={`gallery-dot ${
								index === currentIndex ? 'active' : ''
							}`}
							onClick={() => setCurrentIndex(index)}
							aria-label={`Перейти к слайду ${index + 1}`}
						/>
					))}
				</div>

				<a
					href="https://instagram.com"
					className="gallery-instagram"
					target="_blank"
					rel="noreferrer"
				>
					@bella.salon.chisinau
				</a>
			</div>
		</section>
	)
}
