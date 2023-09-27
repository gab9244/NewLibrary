//Criando o layout to site
const body=document.querySelector('body') const Header=document.createElement('header') Header.textContent='Library'

const Main=document.createElement('main') const AddButton=document.createElement('button') AddButton.textContent='Add Books'
Main.append(AddButton) body.append(Header, Main)