import { TypeSide } from '../../types/type-side';
import * as C from './styles';


export const Person = ({ x, y, side }: { x: number, y: number, side: TypeSide }) => {
    const size = 30;
    const sides = {
        down: 0,
        left: -30,
        right: -60,
        up : -90
    }
    return (
        <C.Container
            size={size}
            left={x * size}
            top={y * size}
            sidePos={sides[side]}
        >
        </C.Container>
    )
}