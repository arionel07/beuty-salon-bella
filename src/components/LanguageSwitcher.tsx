import { useLanguage } from './LanguageContext'

export function LanguageSwitcher() {
	const { lang, setLang } = useLanguage()

	return (
		<div className="language-switcher">
			<button
				className={lang === 'ru' ? 'active' : ''}
				onClick={() => setLang('ru')}
			>
				RU
			</button>

			<button
				className={lang === 'ro' ? 'active' : ''}
				onClick={() => setLang('ro')}
			>
				RO
			</button>
		</div>
	)
}
