import type { CaptionedImage, ClassicCard, ImageOnly } from "@braze/web-sdk";

export interface ImageOnlyProps {
  imageOnlyCard: ImageOnly
}

export interface ClassicCardProps {
  classicCard: ClassicCard
}

export interface CaptionedImageProps {
  captionedImageCard: CaptionedImage
}

export interface CardContentProps {
  title: string;
  description: string;
  url?: string;
  linkText?: string;
}
