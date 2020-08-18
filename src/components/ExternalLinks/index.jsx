import React from "react";
import {
  FaImdb,
  FaTwitter,
  FaFacebookSquare,
  FaInstagram,
  FaLink,
} from "react-icons/fa";

const ExternalLinks = ({ linkIds, classname }) => {
  const { facebook_id, imdb_id, instagram_id, twitter_id, homepage } = linkIds;
  /*            
    facebook_id,
    imdb_id,
    instagram_id,
    twitter_id,
    homepage, 
  */
  return (
    <div className={classname}>
      {imdb_id && (
        <a href={`https://www.imdb.com/title/${imdb_id}`}>
          <FaImdb className="externalLinks--icon" />
        </a>
      )}
      {twitter_id && (
        <a href={`https://www.twitter.com/${twitter_id}`}>
          <FaTwitter className="externalLinks--icon" />
        </a>
      )}
      {facebook_id && (
        <a href={`https://www.facebook.com/${facebook_id}`}>
          <FaFacebookSquare className="externalLinks--icon" />
        </a>
      )}
      {instagram_id && (
        <a href={`https://www.instagram.com/${instagram_id}`}>
          <FaInstagram className="externalLinks--icon" />
        </a>
      )}
      {homepage && (
        <a href={homepage}>
          <FaLink className="externalLinks--icon" />
        </a>
      )}
    </div>
  );
};

export default ExternalLinks;
