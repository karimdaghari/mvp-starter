interface Props extends React.ComponentPropsWithoutRef<"div"> {
  title: string;
}

export default function Card({ className, children, title, ...props }: Props) {
  return (
    <div
      className="max-w-lg p-4 border border-gray-300 rounded-md shadow-lg"
      {...props}
    >
      <h1 className="mb-4 text-2xl font-medium">{title}</h1>
      {children}
    </div>
  );
}
