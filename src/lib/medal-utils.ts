/**
 * Utility functions for determining medal eligibility and configuration
 */

export interface MedalConfig {
  shouldShow: boolean;
  ariaLabel: string;
  className: string;
}

/**
 * Determines if an achievement deserves a medal based on placement
 * @param place - The numerical placement (1st, 2nd, 3rd, etc.)
 * @returns boolean indicating if medal should be displayed
 */
export function shouldShowMedal(place: number): boolean {
  return place <= 3 && place >= 1;
}

/**
 * Gets medal configuration for an achievement
 * @param place - The numerical placement
 * @returns MedalConfig object with display and accessibility properties
 */
export function getMedalConfig(place: number): MedalConfig {
  const shouldShow = shouldShowMedal(place);
  
  if (!shouldShow) {
    return {
      shouldShow: false,
      ariaLabel: '',
      className: ''
    };
  }

  const placeText = getPlaceText(place);
  
  return {
    shouldShow: true,
    ariaLabel: `Gold medal for ${placeText} place achievement`,
    className: 'text-yellow-500 drop-shadow-lg'
  };
}

/**
 * Converts numerical place to ordinal text
 * @param place - The numerical placement
 * @returns string representation (e.g., "1st", "2nd", "3rd")
 */
function getPlaceText(place: number): string {
  const suffix = getOrdinalSuffix(place);
  return `${place}${suffix}`;
}

/**
 * Gets the ordinal suffix for a number
 * @param num - The number to get suffix for
 * @returns string suffix ("st", "nd", "rd", "th")
 */
function getOrdinalSuffix(num: number): string {
  const lastDigit = num % 10;
  const lastTwoDigits = num % 100;
  
  // Handle special cases for 11th, 12th, 13th
  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return 'th';
  }
  
  switch (lastDigit) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}