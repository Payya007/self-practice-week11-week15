// lib ในการ เรียก


// GET
async function getItems(url) {
    try {
        const res = await fetch(url) // respose obj
        console.log(res)
        const data = await res.json()
        console.log(data)
        return data
    }
    catch (err) {
        throw new Error(err)
    }
}
export { getItems}
// fetch(`${import.meta.env.VITE_APP_URL}/quotes`)
