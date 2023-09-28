//Criando o layout to site
let body = document.querySelector('body')

const Header = document.createElement('header')
Header.textContent = 'Library'

const Main = document.createElement('main')

const buttonDiv = document.createElement('div')
buttonDiv.setAttribute('id', 'buttonDiv')
const AddButton = document.createElement('button')
AddButton.textContent = 'Add Books'
buttonDiv.append(AddButton)
const section = document.createElement('section')



const form = document.createElement('form')
const formTitle = document.createElement('h3')

const inputTitle = document.createElement('input')

inputTitle.placeholder = 'Title'
const inputAuthor = document.createElement('input')

inputAuthor.placeholder = 'Author'
const inputPages = document.createElement('input')

inputPages.placeholder = 'Pages'
inputPages.type = 'number'

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







Main.append(buttonDiv,form,section)
body.append(Header,Main)
