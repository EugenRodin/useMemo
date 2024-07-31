import {useMemo, useState} from "react"

const ProblematicComponent = () => {
    const [count, setCount] = useState(0)
    const [item, setItem] = useState(1)

    const computeExpensiveValue = (num: number) => {
        console.log('Початок дуже складного обчислення...')
        let value = num
        for (let i = 0; i < 1000000000; i++) {
            value += num
        }
        console.log('Завершення дуже складного обчислення...')
        return value
    }
    const expensiveValue = useMemo(() => computeExpensiveValue(count), [count])

    return (
        <div>
            <p>Складне значення: {expensiveValue}</p>
            <p>Просте значення: {item}</p>
            <button onClick={() => setCount(count + 1)}>Збільшити count</button>
            <button onClick={() => setItem(item + 1)}>Збільшити item</button>
        </div>
    )
}

export default ProblematicComponent