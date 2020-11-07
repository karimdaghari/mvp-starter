interface Props extends React.ComponentPropsWithoutRef<"div"> {
  title: string;
}

export default function Card({ className, ...props }: Props) {
  return <div className="" {...props}></div>;
}
