import { ImageOnlyProps } from "./types";
import { CardContainer } from "./CardContainer";

export const ImageOnlyComponent = ({ imageOnlyCard }: ImageOnlyProps) => {
  const imgStyle = { width: "100%", height: "auto", objectFit: "contain" as const };

  return (
    <CardContainer>
      <img src={imageOnlyCard.imageUrl} alt={imageOnlyCard.altImageText} style={imgStyle} />
    </CardContainer>
  );
};
