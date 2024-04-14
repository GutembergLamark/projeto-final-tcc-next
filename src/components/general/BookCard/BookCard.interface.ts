export interface BookCardProps {
  type: "vertical" | "horizontal";
  image: string;
  title: string;
  description: string;
  status: string;
  author: string;
  saved: boolean;
}
