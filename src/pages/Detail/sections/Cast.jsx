import React from "react";
import CardContainer from "../../../components/CardContainer";
import { useDetail } from "../../../utils/hooks/useDetail";

const Cast = ({ media, id }) => {
  const [credits] = useDetail(media, id, "credits");
  if (credits) {
    return (
      <div>
        <CardContainer cards={credits.cast} media="person"></CardContainer>
      </div>
    );
  }
  return null;
};

export default Cast;
