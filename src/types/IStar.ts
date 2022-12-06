import type ISpaceItem from "@/types/ISpaceItem";

interface IStar extends ISpaceItem{
    mass: string;
    location: string;
    distance: string;
}

export default IStar;