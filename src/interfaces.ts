export interface Product {
	id: number
	uid: string
	title: string
	subTitle: string
	category: string
	sizes: Array<number>
	gallery: Array<string>
	thumbnail: string
	price: number
	description?: string
	genre?: string
}
