import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import Loader from './loader';

const b = () => {
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	useEffect(() => {}, []);

	return (
		<div>
			{loading ? (
				<div className='flex flex-col items-center content-center'>
					<Loader />
				</div>
			) : (
				<div className='bg-white rounded-[30px] p-4 '></div>
			)}
			<ToastContainer position='top-right' autoClose={5000} />
		</div>
	);
};

export default b;
