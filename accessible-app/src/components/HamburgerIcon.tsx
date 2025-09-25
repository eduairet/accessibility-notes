import { useEffect, useRef, useState, type FC, type SVGProps } from "react";
import { lerpValue } from "@/shared/helpers/lerp";

type LineProps = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
};

export type HamburgerIconProps = {
  lines?: {
    top: LineProps;
    middle: LineProps;
    bottom: LineProps;
  };
  className?: string;
};

const initialLines = {
  top: { x1: 4, y1: 7, x2: 20, y2: 7 },
  middle: { x1: 4, y1: 12, x2: 20, y2: 12 },
  bottom: { x1: 4, y1: 17, x2: 20, y2: 17 },
};
const openLines = {
  top: { x1: 6, y1: 6, x2: 18, y2: 18 },
  middle: { x1: 12, y1: 12, x2: 12, y2: 12 },
  bottom: { x1: 6, y1: 18, x2: 18, y2: 6 },
};

interface IProps extends SVGProps<SVGSVGElement> {
  open?: boolean;
}

const HamburgerIcon: FC<IProps> = ({ open = false, ...props }) => {
  const [lines, setLines] = useState(initialLines);
  const animating = useRef(false);

  const animateLines = (
    from: typeof initialLines,
    to: typeof initialLines,
    duration = 300,
  ) => {
    animating.current = true;
    const start = performance.now();

    function frame(now: number) {
      const t = Math.min((now - start) / duration, 1);
      setLines({
        top: {
          x1: lerpValue(from.top.x1, to.top.x1, t),
          y1: lerpValue(from.top.y1, to.top.y1, t),
          x2: lerpValue(from.top.x2, to.top.x2, t),
          y2: lerpValue(from.top.y2, to.top.y2, t),
        },
        middle: {
          x1: lerpValue(from.middle.x1, to.middle.x1, t),
          y1: lerpValue(from.middle.y1, to.middle.y1, t),
          x2: lerpValue(from.middle.x2, to.middle.x2, t),
          y2: lerpValue(from.middle.y2, to.middle.y2, t),
        },
        bottom: {
          x1: lerpValue(from.bottom.x1, to.bottom.x1, t),
          y1: lerpValue(from.bottom.y1, to.bottom.y1, t),
          x2: lerpValue(from.bottom.x2, to.bottom.x2, t),
          y2: lerpValue(from.bottom.y2, to.bottom.y2, t),
        },
      });
      if (t < 1) {
        requestAnimationFrame(frame);
      } else {
        animating.current = false;
      }
    }
    requestAnimationFrame(frame);
  };

  useEffect(() => {
    if (animating.current) return;
    animateLines(
      open ? initialLines : openLines,
      open ? openLines : initialLines,
    );
  }, [open]);

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {(["top", "middle", "bottom"] as const).map((key) => (
        <line
          key={key}
          id={`${key}-line`}
          x1={lines[key].x1}
          y1={lines[key].y1}
          x2={lines[key].x2}
          y2={lines[key].y2}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
};

export default HamburgerIcon;
