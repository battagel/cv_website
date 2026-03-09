import { useState, useEffect } from "react";

const EMPTY_IMAGES: string[] = [];

export type PhotoCarouselConfig = {
  images?: string[];
  directory?: string; // Contains a manifest.json with an "images" array or is an array itself
  intervalMs?: number;
  prevLabel?: string;
  nextLabel?: string;
};

type PhotoCarouselProps = {
  uiConfig: PhotoCarouselConfig;
};

export default function PhotoCarousel({
  uiConfig,
}: PhotoCarouselProps) {
  const {
    images,
    directory,
    intervalMs = 5000,
    prevLabel = "Previous image",
    nextLabel = "Next image",
  } = uiConfig;

  const fallbackImages = images ?? EMPTY_IMAGES;

  const [resolvedImages, setResolvedImages] = useState<string[]>(fallbackImages);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  useEffect(() => {
    let isActive = true;

    if (!directory) {
      setResolvedImages(fallbackImages);
      return () => {
        isActive = false;
      };
    }

    const loadManifest = async () => {
      try {
        const response = await fetch(`${directory}/manifest.json`);
        if (!response.ok) {
          throw new Error("Failed to load image manifest");
        }

        const data = await response.json();
        const manifestImages: string[] = Array.isArray(data)
          ? data
          : Array.isArray(data.images)
            ? data.images
            : [];

        const normalized = manifestImages.map((path) => {
          if (path.startsWith("/")) {
            return path;
          }
          return `${directory}/${path}`;
        });

        if (isActive) {
          setResolvedImages(normalized);
          setCurrentIndex(0);
          setPrevIndex(0);
        }
      } catch {
        if (isActive) {
          setResolvedImages(fallbackImages);
          setCurrentIndex(0);
          setPrevIndex(0);
        }
      }
    };

    loadManifest();

    return () => {
      isActive = false;
    };
  }, [directory, fallbackImages]);

  useEffect(() => {
    if (resolvedImages.length <= 1) {
      return;
    }

    const interval = setInterval(() => {
      setPrevIndex(currentIndex);
      setDirection('right');
      setCurrentIndex((prev) => (prev + 1) % resolvedImages.length);
    }, intervalMs);

    return () => clearInterval(interval);
  }, [resolvedImages.length, intervalMs, currentIndex]);

  const handlePrev = () => {
    if (resolvedImages.length <= 1) return;
    setPrevIndex(currentIndex);
    setDirection('left');
    setCurrentIndex((prev) => (prev - 1 + resolvedImages.length) % resolvedImages.length);
  };

  const handleNext = () => {
    if (resolvedImages.length <= 1) return;
    setPrevIndex(currentIndex);
    setDirection('right');
    setCurrentIndex((prev) => (prev + 1) % resolvedImages.length);
  };

  const handleIndicatorClick = (index: number) => {
    if (index === currentIndex) return;
    setPrevIndex(currentIndex);
    setDirection(index > currentIndex ? 'right' : 'left');
    setCurrentIndex(index);
  };

  return (
    <div className="photo-carousel">
      <div className="carousel-container">
        {resolvedImages.length === 0 ? (
          <div className="carousel-empty" aria-live="polite">No images available.</div>
        ) : (
        <div className="carousel-track">
          {resolvedImages.map((img, index) => {
            const isActive = index === currentIndex;
            const isPrevious = index === prevIndex;
            
            let className = "carousel-image";
            if (isActive) {
              className += direction === 'right' ? " slide-in-right" : " slide-in-left";
            } else if (isPrevious) {
              className += direction === 'right' ? " slide-out-left" : " slide-out-right";
            }
            
            // Only show current and previous images during transition
            if (!isActive && !isPrevious) {
              return null;
            }
            
            return (
              <img
                key={index}
                src={img}
                alt={`Carousel image ${index + 1}`}
                className={className}
              />
            );
          })}
        </div>
        )}
        <button className="carousel-button prev" onClick={handlePrev} aria-label={prevLabel}>
          ◀
        </button>
        <button className="carousel-button next" onClick={handleNext} aria-label={nextLabel}>
          ▶
        </button>
      </div>
      <div className="carousel-indicators">
        {resolvedImages.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => handleIndicatorClick(index)}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
