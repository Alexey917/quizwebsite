import { useState } from 'react';

import logo from '../assets/Logo.png';

export const useImageError = (img: string) => {
  const [imageSrc, setImageSrc] = useState<string>(img || logo);
  const [isLoadingImage, setIsLoadingImage] = useState(true);

  const handleImageError = () => {
    setIsLoadingImage(false);
    setImageSrc(logo);
  };

  return { imageSrc, handleImageError, setIsLoadingImage, isLoadingImage };
};
