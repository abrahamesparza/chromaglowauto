'use client'
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import sectionOneData from '../jsonData';
// import photo1 from '../../public/assets/photo1.jpg';

export default function Home() {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const res = await fetch('/api/photos')
        const data = await res.json()
        setPhotos(data)
      }
      catch (error) {
        console.error('Error fetching photos:', error)
      }
    };
    fetchPhotos();
  }, []);

  console.log('photos:', photos)

  return (
    <main className={styles.main}>
      
      <div class={styles.bubbleGradientadial}>
        <div className={styles.bubble} style={{ width: '40px', height: '40px', left: '20%', animationDelay: '0s' }}></div>
        <div className={styles.bubble} style={{ width: '60px', height: '60px', left: '50%', animationDelay: '2s' }}></div>
        <div className={styles.bubble} style={{ width: '30px', height: '30px', left: '75%', animationDelay: '4s' }}></div>

        <div className={styles.bubbleTwo} style={{ width: '40px', height: '40px', left: '25%', animationDelay: '1s' }}></div>
        <div className={styles.bubbleTwo} style={{ width: '60px', height: '60px', left: '55%', animationDelay: '3s' }}></div>
        <div className={styles.bubbleTwo} style={{ width: '30px', height: '30px', left: '80%', animationDelay: '5s' }}></div>
      </div>

      <div className={styles.container}>
        <ReviewSection />

        <PhotoSection/>

        <section key={sectionOneData.id} className={styles.section}>
          <h1>Other data goes here</h1>
        </section>

        <section key={sectionOneData.id} className={styles.section}>
          <h1>Other data goes here</h1>
        </section>
     </div>
    </main>
  );
}

function ReviewSection() {
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
    const totalReviews = sectionOneData.reviewData.length;

    const handleNext = () => {
        setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % totalReviews);
    };

    const handlePrevious = () => {
        setCurrentReviewIndex((prevIndex) => (prevIndex - 1 + totalReviews) % totalReviews);
    };

    const currentReview = sectionOneData.reviewData[currentReviewIndex];

    return (
        <section key={sectionOneData.id} className={styles.section}>
            <h1 className={styles.mainText}>{sectionOneData.mainText}</h1>
            <p className={styles.secondaryText}>{sectionOneData.secondaryText}</p>
            
            <h2 className={styles.reviews}>Reviews</h2>
            <div className={styles.reviewsList}>
                <button className={styles.arrowLeft} onClick={handlePrevious}>&#10094;</button>
                <div key={currentReview.id} className={styles.reviewsContainer}>
                    <p className={styles.reviewName}>{currentReview.name}</p>
                    <p className={styles.rating}>Rating: {currentReview.rating.toFixed(1)}</p>
                    <p className={styles.reviewText}>{currentReview.review}</p>
                </div>
                <button className={styles.arrowRight} onClick={handleNext}>&#10095;</button>
            </div>
        </section>
    );
}

const PhotoSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
      '/assets/photo1.jpg',
      '/assets/photo2.jpg',
      '/assets/photo3.jpg',
      '/assets/photo4.jpg',
      '/assets/photo5.jpg',
      '/assets/photo6.jpg',
      '/assets/photo7.jpg',
      '/assets/photo8.jpg',
      '/assets/photo9.jpg',
  ];

  const nextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
      <section className={styles.photoSection}>
          <h2 className={styles.photos}>Gallery</h2>
          <div className={styles.photoContainer}>
              <button className={styles.leftButton} onClick={prevImage}>&#10094;</button>
              <Image
              className={styles.imageGallery}
                  src={images[currentImageIndex]}
                  alt={`Photo ${currentImageIndex + 1}`}
                  width={500}
                  height={500}
              />
              <button className={styles.rightButton} onClick={nextImage}>&#10095;</button>
          </div>
      </section>
  );
};