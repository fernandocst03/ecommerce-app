import { useCart } from '../hooks/useCart'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'

export function Products({ products }) {
	const { addToCart, removeFromCart, cart } = useCart()

	const checkPructInCart = product => {
		return cart.some(item => item.id === product.id)
	}

	return (
		<main className='w-full flex justify-center items-center p-20'>
			<ul className='flex flex-wrap w-full justify-center items-center gap-10'>
				{products.slice(0, 10).map(product => {
					const isProductInCart = checkPructInCart(product)

					return (
						<li key={product.id} className='w-1/3 bg-gray-100 rounded-lg shadow' >
							<img src={product.thumbnail} alt={product.title} />
							<div>
								<p>{product.title}</p>
								<p>{product.price}</p>
							</div>
							<div>
								<button onClick={() => {
									isProductInCart
										? removeFromCart(product)
										: addToCart(product)
								}}>
									{
										isProductInCart
											? <RemoveFromCartIcon />
											: <AddToCartIcon />
									}
								</button>
							</div>
						</li>
					)
				})}
			</ul>
		</main >
	)
}
