// lib ในการ เรียก


// GET
async function getItems(url) {
    try {
        const res = await fetch(url) // respose obj
        console.log(res)
        if (!res.ok) {
             let message = ''
            switch (res.status) {
                case 404:
                    message: '404 - Item not found'
                    break
                case 409:
                    message: '409 - Conflict'
                    break
                case 500:
                    message: '500 - Server error '
                    break
                default:
                    message: "Fail to get item , please try again "
            }
            throw new Error(message)
        }// ไม่ทำบรรทัดต่่อไปแล้ว ออกมาเลย
        // บรรทัด 9 เป็น การดัก erorr พวก 404 504 error มาเป็น respond 
        const data = await res.json()
        console.log(data)
        return data
    }
    catch (err) { // error 
        throw new Error(err.message)
    }
}

// fetch(`${import.meta.env.VITE_APP_URL}/quotes`)
// POST
// PUT
// DELETE

async function deleteItem(url, id) {
    try {
        await fetch(`${url}/${id}`, { method: "DELETE" })
        if (!res.ok) throw new Error ("Fail to delete item")
        return id
    } catch (error){
        throw new Error(error.message)
    }

}
//ADD
//POST
async function addItem(url, item) {
  try {
    const res = await fetch(`${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    })
    if (res.status !== 201) throw new Error("Fail to add item")
    const addedItem = res.json()
    return addedItem
  } catch (error) {
    throw new Error(error.message)
  }
}
async function editQuote(item) {
  try {
    const editedQuote = await editItem(quoteURL, item)
    return editedQuote
  } catch (error) {
    alert(`Quote: ${error}`)
  }
}
export { getItems , deleteItem ,addItem ,editQuote }