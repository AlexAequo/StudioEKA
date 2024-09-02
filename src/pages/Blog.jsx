import React from 'react';
import Cardarticleblog from '../Components/Cardarticleblog/Cardarticleblog';
import articlenotion from '../Components/Assets/articlenotion.jpg';
import articleprint from '../Components/Assets/articleprint.jpg';
import articletendances from '../Components/Assets/articletendances.jpg';
import './Blog.css'; // Assurez-vous d'avoir ce fichier

const articles = [
    {
        image: articletendances,
        title: 'Les Dernières Tendances en Webdesign pour 2024',
        category: 'Webdesign',
        link: '/tendances-webdesign-2024'
    },
    {
        image: articlenotion,
        title: 'Les Avantages de Notion par Rapport aux Autres Outils de Gestion',
        category: 'Productivité',
        link: '/avantages-notion'
    },
    {
        image: articleprint,
        title: 'Les Erreurs à Éviter Lors de la Création de Vos Supports Print',
        category: 'Design',
        link: '/erreurs-supports-print'
    }
];

const Blog = () => {
    return (
        <div className="blog-container">
            <div className="blog-header">
                <p className="blog-subtitle">NOTRE BLOG</p>
                <h1 className="blog-title"><span className="blog-slash">/</span> Découvrez Nos Articles</h1>
            </div>
            <div className="blog-intro">
                <p>
                    Explorez notre blog pour des articles captivants sur les dernières tendances, conseils pratiques et innovations. Que vous cherchiez de l'inspiration ou des stratégies pour améliorer vos projets, nos articles sont conçus pour vous offrir des insights précieux.
                </p>
            </div>
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
