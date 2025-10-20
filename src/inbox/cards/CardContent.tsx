import { CardContentProps } from "./types";
import { flexColumnContainerStyle, headerStyle, linkStyle, pStyle } from "./style";

export const CardContent = ({ title, description, url, linkText }: CardContentProps) => {
  return (
    <div style={flexColumnContainerStyle}>
      <h3 style={headerStyle}>{title}</h3>
      <p style={pStyle}>{description}</p>
      {url && linkText && (
        <a
          style={linkStyle}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkText} →
        </a>
      )}
    </div>
  );
};
