import { useContext } from 'react'
import { CartContext } from '../context/cart'

export function Footer() {
	const cart = useContext(CartContext)

	return (
		<div className="w-full flex justify-between px-10">
			<h3>App Shopping</h3>
			<p>
				{
					JSON.stringify(cart, null, 2)
				}
			</p>
			<h3>@Fernando</h3>
		</div>
	)
}
