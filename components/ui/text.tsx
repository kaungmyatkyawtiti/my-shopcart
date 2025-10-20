import { cn } from "@/lib/utils";

interface TextProps {
  children: React.ReactNode;
  className?: string;
}

function Title({
  children,
  className,
}: TextProps) {
  return (
    <h2
      className={cn(
        "text-[1.7rem] font-bold italic capitalize text-foreground/85",
        className,
      )}
    >
      {children}
    </h2>
  )
}

function SubTitle({
  children,
  className,
}: TextProps) {
  return (
    <h3
      className={cn(
        "font-bold text-[16px]",
        className,
      )}
    >
      {children}
    </h3>
  )
}

function SubText({
  children,
  className,
}: TextProps) {
  return (
    <p
      className={cn(
        "text-[14px] font-semibold text-muted-foreground",
        className,
      )}
    >
      {children}
    </p>
  )
}

export {
  Title,
  SubTitle,
  SubText,
};
