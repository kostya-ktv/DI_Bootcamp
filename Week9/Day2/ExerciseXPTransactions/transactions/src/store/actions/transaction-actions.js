export const insertTransaction = data => ({
   type: 'INSERT',
   payload: data
})
export const updateTransaction = data => ({
   type: 'UPDATE',
   payload: data
})
export const deleteTransaction = id => ({
   type: 'DELETE',
   payload: id
})
export const updateIndexTransaction = data => ({
   type: 'UPDATE-INDEX',
   payload: data
})


