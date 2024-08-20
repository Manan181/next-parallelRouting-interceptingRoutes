/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'nextjs-realestate-app-bucket.s3.eu-north-1.amazonaws.com',
				port: '',
				pathname: '/news/**',
			},
		],
	},
};

export default nextConfig;
