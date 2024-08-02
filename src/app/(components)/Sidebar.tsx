'client component'

import Image from 'next/image'
import { Menu } from 'lucide-react'

export default function Sidebar() {
	return (
		<div>
			{/* TOP LOGO */}
			<div className='flex gap-3 justify-between md:justify-normal items-center pt-8'>
				<Image
					src='https://s3-inventorymanagement.s3.us-east-2.amazonaws.com/logo.png'
					alt='edstock-logo'
					width={27}
					height={27}
					className='rounded w-8'
				/>
				<h1 className='font-extrabold text-2xl'>EDSTOCK</h1>

				<button className='md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100'>
					<Menu className='w-4 h-4' />
				</button>
			</div>

			{/* LINKS */}
			<div className='flex-grow mt-8'>{/* Links here */}</div>

			{/* FOOTER */}
			<div>
				<p className='text-center text-xs text-gray-500'>&copy; 2024 Edstock</p>
			</div>
		</div>
	)
}
