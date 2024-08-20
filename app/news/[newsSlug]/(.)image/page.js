import { DUMMY_NEWS } from '@/dummy-news';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default function InterceptedImagePage({ params }) {
	const newsItemSlug = params.newsSlug;
	const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsItemSlug);

	if (!newsItem) {
		notFound();
	}

	return (
		<>
			<div className="modal-backdrop" />
			<dialog className="modal" open>
				<div className="fullscreen-image">
					<Image
						src={`https://nextjs-realestate-app-bucket.s3.eu-north-1.amazonaws.com/news/${newsItem.image}`}
						alt={newsItem.title}
						width={1000}
						height={1000}
					/>
				</div>
			</dialog>
		</>
	);
}
