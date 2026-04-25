export const LeafA = ({ style, className }) => (
  <svg
    viewBox="0 0 80 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    className={`leaf-deco ${className || ""}`}
  >
    <path
      d="M40 110 C40 110 10 80 8 50 C6 20 30 5 40 5 C50 5 74 20 72 50 C70 80 40 110 40 110Z"
      fill="currentColor"
      opacity="0.18"
    />
    <path
      d="M40 110 C40 110 10 80 8 50 C6 20 30 5 40 5 C50 5 74 20 72 50 C70 80 40 110 40 110Z"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
      opacity="0.4"
    />
    <path
      d="M40 10 L40 108"
      stroke="currentColor"
      strokeWidth="0.8"
      opacity="0.35"
    />
    <path
      d="M40 30 C30 35 18 42 12 52"
      stroke="currentColor"
      strokeWidth="0.7"
      opacity="0.3"
    />
    <path
      d="M40 45 C50 50 62 57 68 67"
      stroke="currentColor"
      strokeWidth="0.7"
      opacity="0.3"
    />
    <path
      d="M40 60 C30 65 20 70 15 78"
      stroke="currentColor"
      strokeWidth="0.7"
      opacity="0.3"
    />
  </svg>
);

export const LeafB = ({ style, className }) => (
  <svg
    viewBox="0 0 100 140"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    className={`leaf-deco ${className || ""}`}
  >
    <path
      d="M50 130 C20 100 5 70 5 45 C5 15 25 5 50 8 C75 5 95 15 95 45 C95 70 80 100 50 130Z"
      fill="currentColor"
      opacity="0.12"
    />
    <path
      d="M50 130 C20 100 5 70 5 45 C5 15 25 5 50 8 C75 5 95 15 95 45 C95 70 80 100 50 130Z"
      stroke="currentColor"
      strokeWidth="1.2"
      fill="none"
      opacity="0.3"
    />
    <path
      d="M50 12 L50 128"
      stroke="currentColor"
      strokeWidth="1"
      opacity="0.3"
    />
  </svg>
);

export const BranchLeft = ({ style, className }) => (
  <svg
    viewBox="0 0 120 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    className={`leaf-deco ${className || ""}`}
  >
    <path
      d="M110 190 C100 160 80 130 60 110 C40 90 20 75 10 50"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.35"
    />
    <path
      d="M60 110 C45 95 35 80 40 60 C45 42 60 30 70 18"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.28"
    />
  </svg>
);

export const SprigRight = ({ style, className }) => (
  <svg
    viewBox="0 0 100 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    className={`leaf-deco ${className || ""}`}
  >
    <path
      d="M20 155 C30 125 50 95 65 70 C80 45 90 25 88 10"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      opacity="0.3"
    />
    <ellipse
      cx="88"
      cy="10"
      rx="10"
      ry="16"
      transform="rotate(15 88 10)"
      fill="currentColor"
      opacity="0.2"
    />
  </svg>
);
