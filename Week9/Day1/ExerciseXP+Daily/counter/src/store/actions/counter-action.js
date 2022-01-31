export const incrementCounter = value => ({
   type: 'INCREMENT',
   payload: value + 1
})
export const decrementCounter = value => ({
   type: 'DECREMENT',
   payload: value - 1
})

