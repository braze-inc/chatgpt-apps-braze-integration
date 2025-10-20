import { ClassicCardProps } from "./types";
import { CardContainer } from "./CardContainer";
import { flexRowContainerStyle } from "./style";
import { CardContent } from "./CardContent";

export const ClassicCardComponent = ({ classicCard }: ClassicCardProps) => {
  const hasImage = classicCard.imageUrl !== undefined;

  const imgStyle = { maxWidth: "75px", height: "auto", objectFit: "contain" as const };

  return (
    <CardContainer withPadding>
      {hasImage ? (
        <div style={flexRowContainerStyle}>
          <img src={classicCard.imageUrl} alt={classicCard.altImageText} style={imgStyle} />
          <CardContent title={classicCard.title} description={classicCard.description} url={classicCard.url} linkText={classicCard.linkText} />
        </div>
      ) : (
          <CardContent title={classicCard.title} description={classicCard.description} url={classicCard.url} linkText={classicCard.linkText} />
      )}
    </CardContainer>
  );
};
