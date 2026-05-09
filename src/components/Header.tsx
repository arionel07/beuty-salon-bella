import { useState } from 'react'
import { useLanguage } from './LanguageContext'
import { LanguageSwitcher } from './LanguageSwitcher'

export function Header() {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const { t } = useLanguage()

	const closeMenu = () => setIsOpen(false)

	const navLinks = [
		{ title: t.nav.services, href: '#services' },
		{ title: t.nav.location, href: '#location' },
		{ title: t.nav.gallery, href: '#gallery' },
		{ title: t.nav.contacts, href: '#registration' }
	]

	return (
		<header className="header">
			<div className="header-wrapper">
				<a
					href="#"
					className="logo"
					onClick={closeMenu}
				>
					BeLLa
				</a>
				<nav className={`header-nav ${isOpen ? 'active' : ''}`}>
					<ul className="header-list">
						{navLinks.map(link => (
							<li
								key={link.title}
								className="header-item"
							>
								<a
									href={link.href}
									className="header-link"
									onClick={closeMenu}
								>
									{link.title}
								</a>
							</li>
						))}
						<LanguageSwitcher />
					</ul>
				</nav>

				<button
					className={`burger ${isOpen ? 'active' : ''}`}
					onClick={() => setIsOpen(prev => !prev)}
					aria-label="Открыть меню"
				>
					<span></span>
					<span></span>
				</button>
			</div>
		</header>
	)
}
