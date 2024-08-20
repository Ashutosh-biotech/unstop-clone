// import React from 'react'
import unstopLogo from '../assets/img/unstop-logo.png'

function Navbar() {
	return (
		<nav className='bg-white shadow-md p-4 flex justify-between items-center fixed top-0 left-0 right-0'>
			<div>
				<img src={unstopLogo} alt="Unstop Logo" className='w-20' />
			</div>
		</nav>
	)
}

export default Navbar;