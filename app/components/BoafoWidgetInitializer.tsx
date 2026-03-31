"use client";

import { useEffect } from "react";
import { initializeBoafoWidget } from "boafo-accessibility-widget";

export default function BoafoWidgetInitializer() {
  useEffect(() => {
if (import.meta.env.VITE_BOAFO_API_KEY) {
  initializeBoafoWidget(import.meta.env.VITE_BOAFO_API_KEY);
}
  }, []);

  return null; // nothing to render
}