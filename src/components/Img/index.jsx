import React, { useState } from "react";
import { FiImage } from "react-icons/fi";

const Img = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const handleOnLoad = () => {
    setIsLoaded(true);
  };
  const handleOnError = () => {
    setIsError(true);
  };

  return (
    <>
      {!isError && (
        <img
          src={src}
          alt={alt}
          className={className}
          onLoad={handleOnLoad}
          onError={handleOnError}
        />
      )}
      {!isLoaded && (
        <div className="img--default">
          <FiImage className="img--default--icon"></FiImage>
        </div>
      )}
    </>
  );
};

export default Img;
