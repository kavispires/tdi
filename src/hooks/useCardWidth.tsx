import { useMemo } from 'react';

/**
 * Get a card width in px based on the window size of the user's browser
 * @param quantity how many cards should be fitted in the page screen width
 * @param gap total value of padding and margin on the left and right of the card
 * @param minWidth minimum width of a card
 * @param maxWidth maximum width of a card
 * @param margin the outer margin of the container that should be removed from the width
 * @returns
 */
export function useCardWidth(minWidth = 120, maxWidth = 600): number {
  const element = document.getElementById('page');

  const width = element?.offsetWidth ?? 320;

  const quantity = getQuantity(width);

  return useMemo(() => {
    const value = Math.min(Math.max(Math.floor(width / quantity), minWidth), maxWidth);
    return Number.isNaN(value) ? minWidth : value;
  }, [width, quantity, minWidth, maxWidth]);
}

const getQuantity = (pageWidth: number) => {
  if (pageWidth < 120) return 1;
  if (pageWidth < 400) return 2;
  if (pageWidth < 800) return 4;
  if (pageWidth < 1000) return 6;
  if (pageWidth < 1440) return 8;
  return 10;
};
