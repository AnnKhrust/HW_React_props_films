import { Star } from "../Star/Star";

interface StarsProps {
  count: number;
}

export const Stars: React.FC<StarsProps> = ({ count = 0}) => {
  if (typeof count !== "number" || count < 1 || count > 5) {
    return null;
  }

  const starsArray = Array.from({ length: count }, (_, index) => (
    <li key={index}>
      <Star />
    </li>
  ));

  return (
    <ul className="card-body-stars u-clearfix">
      {starsArray}
    </ul>
  );
};
