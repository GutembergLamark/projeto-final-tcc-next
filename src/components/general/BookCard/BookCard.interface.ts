export interface BookCardProps {
  type: "vertical" | "horizontal";
  image: string;
  title: string;
  description: string;
  status: boolean;
  author: string;
  edit?: boolean;
}
