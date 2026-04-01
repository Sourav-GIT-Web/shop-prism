// Create typography components for headings and paragraphs
import { cn } from "@/lib/utils";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
    className?: string;
}

export const H1: React.FC<HeadingProps> = ({ children, className, ...props }) => {
    return (
        <h1 className={cn("text-4xl font-bold", className)} {...props}>
            {children}
        </h1>
    );
};

export const H2: React.FC<HeadingProps> = ({ children, className, ...props }) => {
    return (
        <h2 className={cn("text-3xl font-bold", className)} {...props}>
            {children}
        </h2>
    );
};

export const P: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({ children, className, ...props }) => {
    return (
        <p className={cn("text-lg", className)} {...props}>
            {children}
        </p>
    );
};
