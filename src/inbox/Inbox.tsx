import { useEffect, useState } from "react";

import { CaptionedImageComponent } from "./cards/CaptionedImage";
import { ClassicCardComponent } from "./cards/ClassicCard";
import { ImageOnlyComponent } from "./cards/ImageOnly";

import { useBraze } from "../braze/braze";
import { ImageOnly, ClassicCard, CaptionedImage, type Card } from "@braze/web-sdk";
import { headerStyle } from "./cards/style";

export const Inbox = () => {
  const braze = useBraze({
    apiKey: "REPLACE_WITH_YOUR_API_KEY",
    baseUrl: "REPLACE_WITH_YOUR_BASE_URL",
  });

  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    setCards(braze.getCachedContentCards()?.cards ?? []);

    braze.subscribeToContentCardsUpdates((contentCards) => {
      setCards(contentCards.cards);
    });

    braze.openSession();

    return () => {
      braze.removeAllSubscriptions();
    }
  }, []);

  const containerStyle = {
    backgroundColor: "white",
    margin: "0 auto",
    padding: "20px",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Current Deals</h1>
      {cards.map((card) => (
        <div key={card.id}>
          {card instanceof ImageOnly && <ImageOnlyComponent imageOnlyCard={card} />}
          {card instanceof ClassicCard && <ClassicCardComponent classicCard={card} />}
          {card instanceof CaptionedImage && <CaptionedImageComponent captionedImageCard={card} />}
        </div>
      ))}
    </div>
  );
};
