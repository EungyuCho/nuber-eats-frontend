import nuberLogo from "../images/logo.svg";

interface INuberLogoProps {
  width?: number;
  mb?: number;
}

export const NuberLogo: React.FC<INuberLogoProps> = ({ width, mb }) => {
  let marginBottom = "";
  if (mb) {
    marginBottom = "mb-" + mb;
  }
  return (
    <img
      src={nuberLogo}
      className={`w-${width} ${marginBottom}`}
      alt="Nuber logo"
    />
  );
};

NuberLogo.defaultProps = { width: 52 };
