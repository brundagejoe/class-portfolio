import classNames from "classnames";

export const Logo = () => {
  return (
    <svg
      className="w-96 fill-blue-500"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 429.201 429.201"
    >
      <path
        d="M428.413,350.659l-16.113-38.866c-2.188-5.273-8.236-7.777-13.514-5.592c-5.271,2.187-7.775,8.234-5.588,13.513
		l6.553,15.807l-34.943-14.46V166.956c0-4.346-2.715-8.228-6.801-9.716L224.94,108.764V74.901l12.101,12.102
		c2.019,2.019,4.665,3.028,7.313,3.028c2.644,0,5.291-1.01,7.311-3.028c4.038-4.039,4.038-10.584,0-14.621L221.912,42.63
		c-4.039-4.037-10.582-4.039-14.621,0l-29.754,29.752c-4.037,4.037-4.037,10.582,0,14.621c4.037,4.036,10.585,4.038,14.625,0
		l12.1-12.102v33.863L71.196,157.241c-4.085,1.488-6.801,5.37-6.801,9.716v154.104l-34.943,14.46l6.553-15.807
		c2.188-5.277-0.316-11.326-5.589-13.513c-5.281-2.188-11.326,0.317-13.513,5.592L0.79,350.659
		c-1.052,2.533-1.052,5.382-0.003,7.916c1.05,2.533,3.062,4.547,5.596,5.596l38.869,16.112c1.294,0.537,2.635,0.791,3.954,0.791
		c4.055,0,7.906-2.401,9.555-6.385c2.187-5.272-0.315-11.322-5.592-13.51l-15.808-6.553l37.18-15.388l136.523,49.735
		c0,0,1.945,0.625,3.551,0.625c1.606,0,3.522-0.625,3.522-0.625l136.523-49.735l37.18,15.388l-15.809,6.553
		c-5.275,2.188-7.777,8.236-5.592,13.51c1.65,3.983,5.5,6.385,9.555,6.385c1.32,0,2.66-0.254,3.955-0.791l38.869-16.112
		c2.533-1.049,4.545-3.062,5.596-5.596C429.463,356.04,429.463,353.192,428.413,350.659z M204.261,364.491L102.822,327.54
		l101.439-41.132V364.491z M204.261,264.11L85.073,312.217V182.896L204.261,231V264.11z M204.261,208.703l-101.479-40.96
		l101.479-36.969V208.703z M224.94,130.774l101.48,36.969l-101.48,40.96V130.774z M224.94,364.491v-78.083l101.439,41.132
		L224.94,364.491z M344.127,312.217L224.94,264.11v-33.109l119.189-48.104v129.32H344.127z"
      />
    </svg>
  );
};

interface DownArrowProps {
  color?: string;
  onClick?: () => void | undefined;
}

export const DownArrow: React.FC<DownArrowProps> = ({ color, onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={classNames("w-12 h-12", color && `stroke-${color}`, {
        "cursor-pointer": onClick,
      })}
      onClick={onClick ? onClick : undefined}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
};

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  size?:
    | "xs"
    | "sm"
    | "base"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl"
    | "9xl";
}

export const GradientText: React.FC<GradientTextProps> = ({
  children,
  className = "",
  size = "base",
}) => {
  return (
    <div
      className={classNames(
        "w-fit bg-clip-text text-transparent bg-gradient-to-tr from-cyan-500 to-indigo-500",
        {
          "text-9xl": size === "9xl",
          "text-8xl": size === "8xl",
          "text-7xl": size === "7xl",
          "text-6xl": size === "6xl",
          "text-5xl": size === "5xl",
          "text-4xl": size === "4xl",
          "text-3xl": size === "3xl",
          "text-2xl": size === "2xl",
          "text-xl": size === "xl",
          "text-lg": size === "lg",
          "text-base": size === "base",
          "text-sm": size === "sm",
          "text-xs": size === "xs",
        },
        "font-bold",
        { [className]: className }
      )}
    >
      {children}
    </div>
  );
};
