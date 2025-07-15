import { LiaMedalSolid } from "react-icons/lia";
import { getMedalConfig } from "@/lib/medal-utils";

interface MedalProps {
  place: number;
  className?: string;
}

export function Medal({ place, className = "" }: MedalProps) {
  const config = getMedalConfig(place);
  
  if (!config.shouldShow) {
    return null;
  }

  return (
    <LiaMedalSolid 
      className={`${config.className} ${className}`}
      aria-label={config.ariaLabel}
      role="img"
    />
  );
}