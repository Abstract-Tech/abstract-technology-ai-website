export type BackgroundVariant = "default" | "surface" | "muted" | "primary" | "accent";

export const backgroundVariants: Record<BackgroundVariant, string> = {
  default: "bg-background",
  surface: "bg-surface",
  muted: "bg-muted",
  primary: "bg-primary text-primary-foreground",
  accent: "bg-accent text-accent-foreground",
};
