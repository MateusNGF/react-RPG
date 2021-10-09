import { useState, KeyboardEvent } from "react";
import { TypeSide } from "../types/type-side";
import { mapSpots } from '../data/mapSpots';

export const usePerson = () => {
    const [posicao, setPosicao] = useState({ x: 2, y: 2 });
    const [side, setSide] = useState<TypeSide>("up");

    const MovieLeft = () => {
        setPosicao((ps) => ({
            x: canMove(ps.x - 1, ps.y) ? ps.x - 1 : ps.x,
            y: ps.y,
        }));
        setSide("left")
    };
    const MovieRight = () => {
        setPosicao((ps) => ({
            x: canMove(ps.x + 1, ps.y) ? ps.x + 1 : ps.x,
            y: ps.y,
        }));
        setSide("right")
    };
    const MovieUp = () => {
        setPosicao((ps) => ({
            x: ps.x,
            y: canMove(ps.x, ps.y - 1) ? ps.y - 1 : ps.y
        }));
        setSide("up")
    };
    const MovieDown = () => {
        setPosicao((ps) => ({
            x: ps.x,
            y: canMove(ps.x, ps.y + 1) ? ps.y + 1 : ps.y,
        }));
        setSide("down")
    };

    const canMove = (x: number, y: number) => {
        if (mapSpots[y] !== undefined && mapSpots[x] !== undefined) {
            if (mapSpots[y][x] === 1) return true
        }
        return false
    }
    return {
        x: posicao.x,
        y: posicao.y,
        side,
        MovieLeft, MovieRight, MovieUp, MovieDown
    };
};
