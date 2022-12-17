import { useRecoilState } from 'recoil';
import { counterState } from './atoms';

export default function CounterButton() {
    const [count, setCount] = useRecoilState(counterState);

    return <button onClick={() => setCount(count + 1)}>Number Go Up</button>;
}