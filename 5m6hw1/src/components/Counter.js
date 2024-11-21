import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../store/counterSlice';

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(increment())}>Увеличить</button>
            <button onClick={() => dispatch(decrement())}>Уменьшить</button>
            <button onClick={() => dispatch(incrementByAmount(5))}>Увеличить на 5</button>
        </div>
    );
};

export default Counter;
