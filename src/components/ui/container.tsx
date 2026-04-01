// Create a container component that centers its children and applies a max-width
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className, ...props }) => {
    return (
        <div className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)} {...props}>
            {children}
        </div>
    );
};