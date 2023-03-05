import Svg, { Props } from './Svg';

export function AnswerIcon(props: Props) {
  return (
    <Svg
      {...props}
      viewBox={props.viewBox || '0 0 24 24'}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="11" fill="#71727A" />
      <path
        d="M8.77344 17.5L9.80469 14.5156H14.2109L15.2422 17.5H17.0703L12.9922 6.1875H11.0078L6.94531 17.5H8.77344ZM10.2969 13.0781L11.9609 8.25H12.0391L13.7109 13.0781H10.2969Z"
        fill="#F7F7F7"
      />
    </Svg>
  );
}
