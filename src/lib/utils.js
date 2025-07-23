import clsx from "clsx"
import { twMerge } from "tailwind-merge"


// This cn stands for the className and can be used anywhere
export const cn = (...inputs)=>{
    return twMerge(clsx((inputs)))
}