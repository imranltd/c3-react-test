export const appendData = (originalData, newData) => ({ 
	users: [...originalData, ...newData] 
})

export const deleteUser = (state, deleteUserId) => ({
 	users: state.filter( (_, i) => (i !== deleteUserId) ? _ : false)
 })

export const removeDuplicates = (data) => (data.users.reduce( (prv, nxt) => prv.findIndex(item => item.id === nxt.id)<0 ? [...prv, nxt] : prv, []))