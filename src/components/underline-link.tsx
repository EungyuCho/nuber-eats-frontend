import { Link } from "react-router-dom";

interface ILinkunderlineProps {
  message: string;
  to: string;
}

export const UnderlineLink: React.FC<ILinkunderlineProps> = ({
  message,
  to: linkTo,
}) => (
  <Link to={linkTo} className="text-lime-600 hover:underline">
    {message}
  </Link>
);
