import { Controller } from "react-hook-form";

import { cn } from "@/utils/helper";
import { ReactNode } from "react";

const BaseInput = ({
  className,
  control,
  name,
  disabled,
  rules,
  error,
  children,
  ...inputProps
}: any) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, formState: { errors } }) => {
        return (
          <div>
            <div className="relative w-full flex flex-col justify-center items-center">
              <input
                {...field}
                {...inputProps}
                disabled={disabled}
                className={cn(
                  `w-full bg-transparent border border-gray-200 placeholder:text-[#959191]/50 placeholder:text-sm placeholder:font-semibold rounded-md px-3 py-3 text-sm focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-gray-400`,
                  errors[name] && `focus:ring-offset-0 focus:ring-red-500`,
                  className
                )}
              />
              <label
                htmlFor="show-password"
                className="flex justify-center items-center absolute inset-y-0 right-2 cursor-pointer"
              >
                {children}
              </label>
            </div>
            {errors[name] && (
              <span className="text-xs leading-3 font-semibold text-red-500 mt-1">
                {errors[name]?.message as ReactNode}
              </span>
            )}
          </div>
        );
      }}
    />
  );
};

export default BaseInput;
