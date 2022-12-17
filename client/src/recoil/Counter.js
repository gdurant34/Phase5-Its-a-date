import { useRecoilValue } from "recoil";
import { counterState } from './atoms';

export default function Counter() {
    const count = useRecoilValue(counterState);

    return <h1>Count: {count}</h1>
}