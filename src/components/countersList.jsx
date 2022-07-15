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
        const indexItem = findItemById(counters, id); indexItem = findIndex((item) => item._id === id));
        counters[indexItem].value -= 1;
        setCounter(counters);
    }

    const handleDecrement = (id) => {
        const indexItem = findItemById(counters, id); indexItem = findIndex((item) => item._id === id));
        counters[indexItem].value -= 1;
        setCounter(counters); // смотри, в setCounter - надо передавать новый массив, помнишь, в начале, я обращал внимание, чтобы вы возвращали новый массив
    }

    // Если смотри, вообще такие функции лучше выносить из компонента
    const findItemById = (array, target) => { // за бинарный поиск плюсик, но бинарный поиск работает на сортированном массиве, тут тебе он не вау прям нужен
        let low = 0;
        let high = array.length - 1;

        while (low <= high) {
            const mid = Math.floor((low + high) / 2);

            switch (true) {
                case array[mid].id === target:
                    return mid;
                case array[mid].id > target:
                    high -= 1;
                    break;
                default:
                    low += 1;
                    break;
            }
        }
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
