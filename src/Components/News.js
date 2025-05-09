

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function News() {
  const { category } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=7c9f55f53f0f4bd691bd2d93cc933349`
        );
        const data = await res.json();
        setArticles(data.articles);
      } catch (error) {
        console.error("Failed to fetch news", error);
      }
    };
    fetchNews();
  }, [category]);

  return (
    <div className="container my-4">
      <h2 className="mb-4 text-capitalize">{category} News</h2>
      <div className="row">
        {articles.map((article, index) => (
          <div className="col-md-4 mb-3" key={index}>
            <div className="card h-100">
              <img src={article.urlToImage} className="card-img-top" alt="news" />
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.description}</p>
                <a href={article.url} className="btn btn-primary" target="_blank" rel="noreferrer">
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

