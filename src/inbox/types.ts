export type CardType = "image-only" | "classic-card" | "captioned-image";

export interface ImageOnly {
  type: "image-only";
  imageUrl: string;
  altText: string;
}

export interface ClassicCard {
  type: "classic-card";
  title: string;
  description: string;
}

export interface CaptionedImage {
  type: "captioned-image";
  imageUrl: string;
  altText: string;
  caption: string;
}

export type Card = ImageOnly | ClassicCard | CaptionedImage;
