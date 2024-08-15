import { twMerge } from "tailwind-merge";
import React, { ReactNode } from "react";

interface MainHeaderProps {
    className?: string;
    children: ReactNode;
}

export const Description: React.FC<MainHeaderProps> = ({ className, children }) => {
    return (
        <h1
            className={twMerge(
                'text-center   tracking-wide  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 max-w-2xl w-full',
                className
            )}
        >
            {children}
        </h1>
    );
};
