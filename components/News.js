'use client';
import React, { useEffect, useState } from 'react';
import Newscomponent from './Newscomponent';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = ({ country, pageSize , category , apikey }) => {
    const [articles, setArticles] = useState([]);
    const [totalResults, setTotalResults] = useState(0);
    const [page, setPage] = useState(1);
    const [error, setError] = useState(null);


    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    const fetchNews = async () => {
        try {
            const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apikey}&page=${page}&pageSize=${pageSize}`;
            const res = await fetch(url);
            //console.log(res)
            if (res.status == 429) {
                //console.log("TO MANY REQUEST");
                setError("You've hit the API rate limit.")
                return
            }
            const data = await res.json();
            setArticles(data.articles);
            setTotalResults(data.totalResults);
        } catch (err) {
            console.error('Error fetching news:', err);
        }
    };

    useEffect(() => {
        fetchNews();
    }, []);

    const fetchMoreData = async () => {
        const nextPage = page + 1;
        setPage(nextPage);

        try {
            const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apikey}&page=${nextPage}&pageSize=${pageSize}`;
            const res = await fetch(url);
            const data = await res.json();
            setArticles((prev) => [...prev, ...data.articles]);
            setTotalResults(data.totalResults);
        } catch (err) {
            console.error('Error loading more news:', err);
        }
    };



    return (
        <div className="pt-24 px-4 ">
            <h1 className="text-3xl font-semibold text-center text-white mb-6">
                Top News - {capitalize(category)}
            </h1>

            {articles && Array.isArray(articles) && (<InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<p className="text-center text-gray-500 py-4">Loading more news...</p>}
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {articles.map((article) => (
                        <Newscomponent
                            key={article.url}
                            title={article.title || ''}
                            desc={article.description || ''}
                            imgUrl={
                                article.urlToImage ||
                                'https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg'
                            }
                            newsurl={article.url}
                            author={article.author}
                            time={new Date(article.publishedAt).toGMTString()}
                            source={article.source.name}
                        />
                    ))}
                </div>
            </InfiniteScroll>)}
            {error && (
                <div className="text-red-500 bg-red-100 border border-red-300 p-3 rounded mb-4 text-center">
                    {error}
                </div>
            )}

        </div>
    );
};

export default News;
