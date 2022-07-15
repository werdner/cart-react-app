import React, {useState} from "react";
import Counter from "./counter";

const CountersList = () => {
    let initialState = [
        {id: 0, value: 0, name: 'Ненужная вещь'},
        {id: 1, value: 3, name: 'Ложка'},
        {id: 2, value: 0, name: 'Вилка'},
        {id: 3, value: 0, name: 'Тарелка'},
        {id: 4, value: 0, name: 'Набор минималиста'}
    ]

    const [counters, setCounter] = useState(initialState);

    const handeleDelete = (id) => {
        initialState = counters.filter(c => c.id !== id)
        setCounter(initialState)
    }

    const handleIncrement = (id) => {
        setCounter(prevState => prevState.map(item => {
            if (item.id === id) item.value += 1;
            return item;
        }));
    }

    const handleDecrement = (id) => {
        setCounter(prevState => prevState.map(item => {
            if (item.id === id) item.value -= 1;
            return item;
        }));
    }

    return (
        <> 
            {counters.map(count => (
                <Counter 
                    key={count.id} 
                    onDelete={handeleDelete} 
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                    {...count} 
                />
            ))}
        </>
    )
}

export default CountersList;
