import { Fragment } from "react";
import cn from "classnames";

interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  errors?: unknown;
}

export default function Input({ errors, ...props }: InputProps) {
  const { className, ...rest } = props;
  return (
    <Fragment>
      <input
        className={cn({
          "p-2 border rounded-md": true,
          "border-red-600": errors
        })}
        {...rest}
      />
      {errors && (
        <p className="text-sm font-medium text-red-500">An error occurred</p>
      )}
    </Fragment>
  );
}
