export function BrandLogo() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      {/* Bow (смычок) */}
      <path
        d="M4 20L20 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M6.2 21.2L2.8 17.8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Instrument body (корпус) */}
      <path
        d="M12.2 4.5c1.2-1.2 3.3-1 4.3.1 1.1 1.1 1.3 3.1.1 4.3l-1 1
           c.7 1.1.7 2.6-.2 3.5l-1.2 1.2c-.9.9-2.4.9-3.5.2l-1 1
           c-1.2 1.2-3.2 1-4.3-.1-1.1-1.1-1.3-3.1-.1-4.3l1-1
           c-.7-1.1-.7-2.6.2-3.5l1.2-1.2c.9-.9 2.4-.9 3.5-.2l1-1Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      {/* Strings (струны) */}
      <path
        d="M9.2 8.6l6.2 6.2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.9"
      />
      <path
        d="M10.8 7l6.2 6.2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.7"
      />

      {/* Neck (гриф) */}
      <path
        d="M16.9 4.7l2.4-2.4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
