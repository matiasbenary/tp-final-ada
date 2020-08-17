import React from "react";
import CardContainer from "../../../components/CardContainer";
import { useDetail } from "../../../utils/hooks/useDetail";

const Similar = ({ media, id }) => {
  const [similar] = useDetail(media, id, "similar");
  if (similar) {
    return (
      <div>
        <CardContainer cards={similar.results} media={media}></CardContainer>
      </div>
    );
  }
  return null;
};

export default Similar;
