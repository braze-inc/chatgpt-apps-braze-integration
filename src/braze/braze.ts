import { useEffect, useState } from "react";

// You can import only the methods you need here to reduce bundle size
import * as braze from "@braze/web-sdk";

import { UseBrazeProps } from "./types";

export const useBraze = ({ apiKey, baseUrl }: UseBrazeProps) => {
  const [isInitialized, setIsInitialized] = useState(false);

  const destroy = () => {
    braze.destroy();
    setIsInitialized(false);
  }

  useEffect(() => {
    if (isInitialized) {
      return;
    }

    braze.initialize(apiKey, { baseUrl, enableLogging: true });

    setIsInitialized(true);
  }, [isInitialized, apiKey, baseUrl]);

  return { ...braze, isInitialized, destroy };
}
