'use client'

import CardPopularProducts from './CardPopularProducts'
import CardPurchaseSummary from './CardPurchaseSummary'

export default function Dashboard() {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows'>
			<CardPopularProducts />
			<CardPurchaseSummary />
		</div>
	)
}
