import { Field, ICoords } from 'types';

export const validateCoords = (coords: ICoords, field: Field): boolean => {
    if (coords.x < 0 || coords.x < 0) return false;
    // if (coords.x > lengths.x - 1 || coords.y > lengths.y - 1) return false;
    if (field?.[coords.y]?.[coords.x] == null) return false;
    return true;
};
