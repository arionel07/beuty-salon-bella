import { createContext, useContext, useEffect, useState } from 'react'
import { translations, type Lang } from '../lib/i18n'

type LanguageContextType = {
	lang: Lang
	setLang: (lang: Lang) => void
	t: typeof translations.ru
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
	const [lang, setLangState] = useState<Lang>('ru')

	useEffect(() => {
		const saved = localStorage.getItem('bella-lang')

		if (saved === 'ru' || saved === 'ro') {
			setLangState(saved)
		}
	}, [])

	const setLang = (value: Lang) => {
		setLangState(value)
		localStorage.setItem('bella-lang', value)
	}

	return (
		<LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
			{children}
		</LanguageContext.Provider>
	)
}

export function useLanguage() {
	const context = useContext(LanguageContext)

	if (!context) {
		throw new Error('useLanguage must be used inside LanguageProvider')
	}

	return context
}
