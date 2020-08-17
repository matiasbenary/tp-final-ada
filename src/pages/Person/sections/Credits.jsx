import React from "react";
import { useDetail } from "../../../utils/hooks/useDetail";
import CardContainer from "../../../components/CardContainer";

const Credits = ({ id }) => {
  const [credits] = useDetail("person", id, "combined_credits");
  if (credits) {
    return (
      <div>
        <CardContainer cards={credits.cast} media="multi"></CardContainer>
      </div>
    );
  }
  return null;
};

export default Credits;
