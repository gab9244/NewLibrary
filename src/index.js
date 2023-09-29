//Criando o layout to site
let body = document.querySelector('body')

const Header = document.createElement('header')
Header.textContent = 'Library'

const Main = document.createElement('main')
const cardsSpace = document.createElement('div')
cardsSpace.setAttribute('id','cardsSpace')



const form = document.createElement('form')
form.action = '#'
const formTitle = document.createElement('h3')
formTitle.textContent = 'Add new books'
const inputTitle = document.createElement('input')
inputTitle.placeholder = 'Title'
inputTitle.required = true

const inputAuthor = document.createElement('input')
inputAuthor.placeholder = 'Author'
inputAuthor.required = true

const inputPages = document.createElement('input')
inputPages.placeholder = 'Pages'
inputPages.type = 'number'
inputPages.required = true

let label = document.createElement('label')
label.for = 'isReaded'
label.textContent = 'Did you read this book?'

let isReaded = document.createElement('input')
isReaded.setAttribute('id', 'isReaded')
isReaded.type = 'checkbox'

let submitButton = document.createElement('button')
submitButton.type = 'submit'
submitButton.textContent = 'Submit'
submitButton.setAttribute('id','submitButton')

form.append(formTitle,inputTitle,inputAuthor,inputPages,label,isReaded,submitButton)


Main.append(form,cardsSpace)
body.append(Header,Main)


//Quando o botão submit for apertado um card deve ser criado e ele deve possuir o titúlo do livro, o nome to autor, a quantidade de páginas, um botão que remove o card do cardSpace e um botão que confirma se o livro foi lido ou não, se o checkbox no form for checado o botão readedButton aparecera como read se o botão não for checado o ele aparecerá como No Readed e terá cor vermelha.
//Todos os objetos livros seram guardados em uma array, então adicione uma função ao script que pega o input do usuário e guarda o novo objeto livro em uma array

//A array que guarda os objetos livros 
let myLibrary = [];


//A função que adiciona os livros a array e os mostra no DOM

function Book(){
    let newBook = {
        title : inputTitle.value,
        author:inputAuthor.value,
        pages : inputPages.value,
        checkbox: isReaded.value
    }
    myLibrary.push(newBook)
    console.log(myLibrary)
    
}

function addBookToLibrary(){
    let cards = document.createElement('div')
cards.classList.add('cards')

let Ptitle = document.createElement('p')
Ptitle.textContent = inputTitle.value

let Pauthor = document.createElement('p')
Pauthor.textContent = inputAuthor.value

let Ppages= document.createElement('p')
Ppages.textContent = inputPages.value

const removeButton = document.createElement('button')
removeButton.textContent = 'Remove'
removeButton.classList.add('removeButton')

let readedButton = document.createElement('button')
readedButton.textContent = 'read'
readedButton.classList.add('readedButton')

cards.append(Ptitle,Pauthor,Ppages,removeButton,readedButton)


cardsSpace.append(cards)



   
}

submitButton.addEventListener('click',Book)
submitButton.addEventListener('click',addBookToLibrary)

