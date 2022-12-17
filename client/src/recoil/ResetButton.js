import { useSetRecoilState } from "recoil";
import { counterState } from "./atoms";

export default function ResetButton() {
    const setCount = useSetRecoilState(counterState);
    const reset = () => setCount(0);

    return <button onClick={reset}>Reset</button>;
}