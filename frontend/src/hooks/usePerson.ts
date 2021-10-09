import { useState, KeyboardEvent } from "react";
import { TypeSide } from "../types/type-side";

export const usePerson = () => {
    const [posicao, setPosicao] = useState({ x: 2, y: 2 });
    const [side, setSide] = useState<TypeSide>("up");

    const MovieLeft = () => {
        setPosicao((ps) => ({
            x: ps.x - 1,
            y: ps.y,
        }));
        setSide("left")
    };
    const MovieRight = () => {
        setPosicao((ps) => ({
            x: ps.x + 1,
            y: ps.y,
        }));
        setSide("right")
    };
    const MovieUp = () => {
        setPosicao((ps) => ({
            x: ps.x,
            y: ps.y - 1,
        }));
        setSide("up")
    };
    const MovieDown = () => {
        setPosicao((ps) => ({
            x: ps.x,
            y: ps.y + 1,
        }));
        setSide("down")
    };
    return {
        x: posicao.x,
        y: posicao.y,
        side,
        MovieLeft, MovieRight, MovieUp, MovieDown
    };
};
