import { loadQuotes, deleteQuote  , addQuote} from "./quoteManagement.js"

document.addEventListener("DOMContentLoaded", async () => {
  const quotes = await loadQuotes()
  console.log("✅ Quotes from loadQuotes():", quotes)
  const quoteListEle = document.getElementById("quoteList")
  quotes.forEach((quote) => {
    const quoteCardEle = newQuoteCard(quote)
    quoteListEle.appendChild(quoteCardEle)
  })
})
function newQuoteCard(quote) {
  // <div class="quote-card" data-id="1">
  const divEle = document.createElement("div")
  divEle.className = "quote-card"
  divEle.dataset.id = quote.id
  // <p>No one is perfect</p>
  const pQuote = document.createElement("p")
  pQuote.textContent = quote.content
  divEle.appendChild(pQuote)
  //<p class="author">someone</p>
  const pAuthor = document.createElement("p")
  pAuthor.className = "author"
  pAuthor.textContent = quote.author
  divEle.appendChild(pAuthor)

  //<div class="actions">
  const divActionsEle = document.createElement("div")
  divActionsEle.className = "actions"

  //  <button class="edit" data-id="1">Edit</button>
  const editButtonEle = document.createElement("button")
  editButtonEle.className = "edit"
  editButtonEle.dataset.id = quote.id
  editButtonEle.textContent = "Edit"
  divActionsEle.appendChild(editButtonEle)
  editButtonEle.addEventListener("")
  // <button class="delete" data-id="1">delete</button>
  const deleteButtonEle = document.createElement("button")
  deleteButtonEle.className = "delete"
  deleteButtonEle.dataset.id = quote.id
  deleteButtonEle.textContent = "Delete"
  divActionsEle.appendChild(deleteButtonEle)
  deleteButtonEle.addEventListener('click', handleDelete)

  divEle.appendChild(divActionsEle)
  return divEle //
}

function handleDelete(e) {
  console.log(e.target.dataset.id)
  const removeId = e.target.dataset.id
  const ans = confirm(`Do you want to delete quote: ${removeId}`)
 if (ans) {
    try {
      //1. delete quote in the backend
      const deletedId =  deleteQuote(removeId)
      // console.log(deletedId)
      //2. find remove quote div element
      const removeQuoteDivEle = document.querySelector(
        `div[data-id="${deletedId}"]`
      )
      // console.log(removeQuoteDivEle)
      const quoteListEle = document.querySelector("#quoteList")
      console.log(quoteListEle)
      //3. delete quote div element
      quoteListEle.removeChild(removeQuoteDivEle)
    } catch (e) {
      alert(`App: ${e.message}`)
    }
  }

}
const fromEle =document.getElementById("quoteForm")
fromEle.addEventListener("submit", handleAddEdit)
function handleAddEdit(event){
  event.preventDefault()
 const quoteId = formEle.quoteId.value
  const newContent = formEle.content.value
  const newAuthor = formEle.author.value
  

  
   const newQuote = addQuote({content: newContent, author: newAuthor })
  const newQuoteCard = newQuoteCard(newQuote)
  const quoteListEle = document.getElementById("quoteList")
  quoteListEle.appendChild(newQuoteCard)

  console.log(fromEle.quoteId.value)
  console.log(fromEle.content.value)
  console.log(fromEle.author.value)
}  
console.log(fromEle)

//create html quote cards
//   <div class="quote-card" data-id="1">
//    <p>No one is perfect</p>
//    <p class="author">someone</p>
//    <div class="actions">
//         <button class="edit" data-id="1">Edit</button>
//         <button class="delete" data-id="1">delete</button>
//    </div>
// </div>
