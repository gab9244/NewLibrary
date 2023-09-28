/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXdsaWJyYXJ5Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vQ3JpYW5kbyBvIGxheW91dCB0byBzaXRlXHJcbmxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXHJcblxyXG5jb25zdCBIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKVxyXG5IZWFkZXIudGV4dENvbnRlbnQgPSAnTGlicmFyeSdcclxuXHJcbmNvbnN0IE1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJylcclxuXHJcbmNvbnN0IGJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbmJ1dHRvbkRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2J1dHRvbkRpdicpXHJcbmNvbnN0IEFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbkFkZEJ1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQgQm9va3MnXHJcbmJ1dHRvbkRpdi5hcHBlbmQoQWRkQnV0dG9uKVxyXG5jb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpXHJcblxyXG5cclxuXHJcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcclxuY29uc3QgZm9ybVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxyXG5cclxuY29uc3QgaW5wdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuXHJcbmlucHV0VGl0bGUucGxhY2Vob2xkZXIgPSAnVGl0bGUnXHJcbmNvbnN0IGlucHV0QXV0aG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG5cclxuaW5wdXRBdXRob3IucGxhY2Vob2xkZXIgPSAnQXV0aG9yJ1xyXG5jb25zdCBpbnB1dFBhZ2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG5cclxuaW5wdXRQYWdlcy5wbGFjZWhvbGRlciA9ICdQYWdlcydcclxuaW5wdXRQYWdlcy50eXBlID0gJ251bWJlcidcclxuXHJcbmxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcclxubGFiZWwuZm9yID0gJ2lzUmVhZGVkJ1xyXG5sYWJlbC50ZXh0Q29udGVudCA9ICdEaWQgeW91IHJlYWQgdGhpcyBib29rPydcclxuXHJcbmxldCBpc1JlYWRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuaXNSZWFkZWQuc2V0QXR0cmlidXRlKCdpZCcsICdpc1JlYWRlZCcpXHJcbmlzUmVhZGVkLnR5cGUgPSAnY2hlY2tib3gnXHJcbmxldCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG5zdWJtaXRCdXR0b24udHlwZSA9ICdzdWJtaXQnXHJcbnN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdTdWJtaXQnXHJcbnN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywnc3VibWl0QnV0dG9uJylcclxuXHJcbmZvcm0uYXBwZW5kKGZvcm1UaXRsZSxpbnB1dFRpdGxlLGlucHV0QXV0aG9yLGlucHV0UGFnZXMsbGFiZWwsaXNSZWFkZWQsc3VibWl0QnV0dG9uKVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuTWFpbi5hcHBlbmQoYnV0dG9uRGl2LGZvcm0sc2VjdGlvbilcclxuYm9keS5hcHBlbmQoSGVhZGVyLE1haW4pXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==