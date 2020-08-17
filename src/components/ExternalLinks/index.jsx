import React from "react";

const ExternalLinks = ({ linkIds }) => {
  const { facebook_id, imdb_id, instagram_id, twitter_id, homepage } = linkIds;
  /*            
    facebook_id,
    imdb_id,
    instagram_id,
    twitter_id,
    homepage, 
  */
  return (
    <div>
      {imdb_id && (
        <a href={`https://www.imdb.com/title/${imdb_id}`}>Imdb Icon</a>
      )}
      {twitter_id && (
        <a href={`https://www.twitter.com/${twitter_id}`}>twitter Icon</a>
      )}
      {facebook_id && (
        <a href={`https://www.facebook.com/${facebook_id}`}>Facebook Icon</a>
      )}
      {instagram_id && (
        <a href={`https://www.instagram.com/${instagram_id}`}>Instagram Icon</a>
      )}
      {homepage && <a href={homepage}>Home Icon</a>}
    </div>
  );
};

export default ExternalLinks;
