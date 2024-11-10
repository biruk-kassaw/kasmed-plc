import { StaticImageData } from "next/image";

export interface Machine {
    id: number;
    name: string;
    image: StaticImageData;
    description: string []
}