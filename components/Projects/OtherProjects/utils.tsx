import {
  Globe,
  Laptop2,
  MonitorSmartphone,
  Moon,
  Smartphone,
  Trophy,
} from "lucide-react";
import { ComponentType } from "react";

export function getProjectIcon(type: string): ComponentType {
  const shortType = type.toLowerCase().split(" ")[0];
  switch (shortType) {
    case "desktop":
      return Laptop2;
    case "web":
    case "website":
      return Globe;
    case "mobile":
      return Smartphone;
    case "hackathon":
      return Trophy;
    default:
      return Moon;
  }
}
