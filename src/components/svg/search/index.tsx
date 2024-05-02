import React from 'react';
type iconType = {
    width?:string;
    className?: string;
    height?: string;
    active?: boolean;
  }

const Search: React.FC<iconType> = ({ width, height }) => (
  <svg
    width={width ?? 16}
    height={height ?? 16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_843_11565)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.88881 2.44444C4.43421 2.44444 2.44436 4.43429 2.44436 6.88889C2.44436 9.34349 4.43421 11.3333 6.88881 11.3333C9.34341 11.3333 11.3333 9.34349 11.3333 6.88889C11.3333 4.43429 9.34341 2.44444 6.88881 2.44444ZM1.33325 6.88889C1.33325 3.82064 3.82056 1.33333 6.88881 1.33333C9.95706 1.33333 12.4444 3.82064 12.4444 6.88889C12.4444 8.22293 11.9742 9.44715 11.1904 10.4049L14.5039 13.7183C14.7208 13.9352 14.7208 14.287 14.5039 14.5039C14.2869 14.7209 13.9352 14.7209 13.7182 14.5039L10.4048 11.1905C9.44706 11.9742 8.22285 12.4444 6.88881 12.4444C3.82056 12.4444 1.33325 9.95714 1.33325 6.88889Z"
        fill="#C3CED2"
      />
    </g>
    <defs>
      <clipPath id="clip0_843_11565">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default Search;
