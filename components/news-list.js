import Image from 'next/image';
import Link from 'next/link';

export default function NewsList({ news }) {
	return (
		<ul className="news-list">
			{news.map((newsItem) => (
				<li key={newsItem.id}>
					<Link href={`/news/${newsItem.slug}`}>
						<Image
							src={`https://nextjs-realestate-app-bucket.s3.eu-north-1.amazonaws.com/news/${newsItem.image}`}
							alt={newsItem.title}
							width={500}
							height={500}
						/>
                        <span>{newsItem.title}</span>
					</Link>
				</li>
			))}
		</ul>
	);
}
