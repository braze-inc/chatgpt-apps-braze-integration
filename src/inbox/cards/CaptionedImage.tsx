import { CaptionedImageProps } from "./types";
import { CardContainer } from "./CardContainer";
import { contentContainerStyle, headerStyle, pStyle, linkStyle, flexColumnContainerStyle } from "./style";

export const CaptionedImageComponent = ({ captionedImageCard }: CaptionedImageProps) => {
  const imgContainerStyle = { display: "inline-block", verticalAlign: "top", width: "100%" };
  const imgStyle = { width: "100%", height: "auto", objectFit: "contain" as const };

  return (
    <CardContainer>
      <div style={flexColumnContainerStyle}>
        <div style={imgContainerStyle}>
          <img
            src={captionedImageCard.imageUrl}
            alt={captionedImageCard.altImageText}
            style={imgStyle}
          />
        </div>
        <div style={{ ...flexColumnContainerStyle, ...contentContainerStyle }}>
          {captionedImageCard.title && (
            <h3 style={headerStyle}>{captionedImageCard.title}</h3>
          )}
          {captionedImageCard.description && (
            <p style={pStyle}>{captionedImageCard.description}</p>
          )}
          {captionedImageCard.url && captionedImageCard.linkText && (
            <a
              style={linkStyle}
              href={captionedImageCard.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {captionedImageCard.linkText}
            </a>
          )}
        </div>
      </div>
    </CardContainer>
  );
};
