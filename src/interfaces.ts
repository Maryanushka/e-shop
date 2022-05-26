export interface Product {
	id: number
	title: string
	subTitle: string
	sizes: Array<number>
	thumbnail: string
	price: number
	description?: string
}
