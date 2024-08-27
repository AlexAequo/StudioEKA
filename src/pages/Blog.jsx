import React from 'react';
import Cardarticleblog from '../Components/Cardarticleblog/Cardarticleblog';
import articlenotion from '../Components/Assets/articlenotion.jpg';
import articleprint from '../Components/Assets/articleprint.jpg';
import articletendances from '../Components/Assets/articletendances.jpg';

const articles = [
    {
        image: articlenotion,
        title: 'Notion pour les Débutants',
        category: 'Productivité',
        link: '/blog/notion-pour-debutants'
    },
    {
        image: articleprint,
        title: "L'Impression 3D: Le Futur de la Fabrication",
        category: 'Technologie',
        link: '/blog/impression-3d'
    },
    {
        image: articletendances,
        title: 'Tendances de Design 2024',
        category: 'Design',
        link: '/blog/tendances-design-2024'
    }
];

const Blog = () => {
    return (
        <div>
            <h1>Blog</h1>
            <div className="articles-container">
                {articles.map((article, index) => (
                    <Cardarticleblog
                        key={index}
                        image={article.image}
                        title={article.title}
                        category={article.category}
                        link={article.link}
                    />
                ))}
            </div>
        </div>
    );
};

export default Blog;
