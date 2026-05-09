import { doc, getDoc, onSnapshot, setDoc } from 'firebase/firestore'
import { defaultServices } from '../data/defaultServices'
import type { ServiceCategory } from '../types/service.type'
import { db } from './firebase'

const servicesRef = doc(db, 'siteContent', 'services')

export async function seedServicesIfEmpty() {
	const snapshot = await getDoc(servicesRef)

	if (!snapshot.exists()) {
		await setDoc(servicesRef, {
			items: defaultServices,
			updatedAt: new Date().toISOString()
		})
	}
}

export function listenServices(
	callback: (services: ServiceCategory[]) => void
) {
	return onSnapshot(servicesRef, snapshot => {
		if (!snapshot.exists()) {
			callback(defaultServices)
			return
		}

		const data = snapshot.data()
		callback(data.items ?? defaultServices)
	})
}

export async function saveServices(services: ServiceCategory[]) {
	console.log('Saving services:', services)

	await setDoc(servicesRef, {
		items: services,
		updatedAt: new Date().toISOString()
	})

	console.log('Saved successfully')
}
