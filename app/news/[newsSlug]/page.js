import { DUMMY_NEWS } from '@/dummy-news';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function NewsDetailPage({ params }) {
	const newsSlug = params.newsSlug;
	const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug);

	if (!newsItem) {
		notFound();
	}
	
	return (
		<article className="news-article">
			<header>
				<Link href={`/news/${newsItem.slug}/image`}>
					<Image
						src={`https://nextjs-realestate-app-bucket.s3.eu-north-1.amazonaws.com/news/${newsItem.image}`}
						alt={newsItem.title}
						width={500}
						height={500}
					/>
				</Link>
				<h1>{newsItem.title}</h1>
				<time dateTime={newsItem.date}>{newsItem.date}</time>
			</header>
			<p>{newsItem.content}</p>
		</article>
	);
}
