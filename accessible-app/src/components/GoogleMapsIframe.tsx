import { type FC } from "react";

const Position = {
  LEFT: "LEFT",
  CENTER: "CENTER",
  RIGHT: "RIGHT",
} as const;
type Position = (typeof Position)[keyof typeof Position];

interface IProps extends React.IframeHTMLAttributes<HTMLIFrameElement> {
  title: string;
  embedQuery: string;
  driveDirections?: string;
  position?: Position;
  width?: string | number;
  height?: string | number;
  style?: React.CSSProperties;
}

const GoogleMapsIframe: FC<IProps> = ({
  title,
  embedQuery,
  driveDirections,
  position = Position.LEFT,
  width = "600",
  height = "450",
  ...props
}) => {
  const googleMapsBaseUrl = "https://www.google.com/maps/embed";

  const positionClass =
    position === Position.LEFT
      ? "ml-0 mr-auto"
      : position === Position.CENTER
        ? "mx-auto"
        : "mr-0 ml-auto";

  return (
    <div
      className={`${positionClass} overflow-hidden rounded`}
      role="region"
      aria-label={title}
    >
      <iframe
        title={title}
        src={`${googleMapsBaseUrl}?${embedQuery}`}
        width={width}
        height={height}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        aria-label={title}
        {...props}
      ></iframe>
      {driveDirections && (
        <details className="mt-2 max-w-fit rounded bg-gray-800 p-4 text-lg">
          <summary className="cursor-pointer font-medium">
            Drive Directions
          </summary>
          <p className="my-2 max-w-[60ch] text-[1rem] text-balance text-white">
            {driveDirections}
          </p>
          <button
            type="button"
            className="mt-2 rounded bg-blue-600 px-3 py-1 text-[1rem] font-medium text-white transition-colors hover:bg-blue-100 hover:text-blue-950 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            onClick={() => window.print()}
          >
            Print Directions
          </button>
        </details>
      )}
    </div>
  );
};

export default GoogleMapsIframe;
