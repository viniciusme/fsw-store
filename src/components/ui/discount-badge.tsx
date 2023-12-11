import { ArrowDownIcon } from "lucide-react";
import { Badge, BadgeProps } from "./badge";
import { twMerge } from "tailwind-merge";

const DiscountBadge = ({ children, className, ...props }: BadgeProps) => {
  return (
    <>
      <Badge className={twMerge("px-2 py-[2px]", className)} {...props}>
        <ArrowDownIcon size={12} />
        {children}% OFF
      </Badge>
    </>
  );
};

export default DiscountBadge;
