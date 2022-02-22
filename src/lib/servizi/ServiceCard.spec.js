/* eslint-disable no-undef */
import ServiceCard from './ServiceCard.svelte'
import { render } from '@testing-library/svelte'


it('giocando pulito, dati facili', async () => {
  const data = {
    "title": "TRUCCO VELOCE",
    "text":[ "prova"],
    "image": "stock-photo-makeup-artist-applies-applies-powder-and-blush-beautiful-woman-face-hand-of-make-up-master-1805797540.jpg",
    "duration": "",
    "price": "20,00 €",
    "section": "",
    "subscription": ""
  }
  const uidata = {
    titleColor:'text-gray-500', 
    bgColor: 'bg-white',  
    width:'lg:w-1/3'
  }

  const { getByText } = render(ServiceCard, {
    data: data,
    uiData:uidata
  })

  const card = document.querySelector('.card')
  const content = card.querySelector('.card-content')
  const title  = card.querySelector('h3')
  const price  = card.querySelector('.text-black.font-bold.text-md.pr-2')
  const image = card.querySelector('img')
  const paragraphs  = Array.from(card.querySelectorAll('.text-md.text-gray-600.italic.mt-4'))
  const text = getByText('prova')
  
  expect(card.classList.contains('lg:w-1/3')).toBe(true)
  expect(price.textContent).toBe('20,00 €')
  expect(title.textContent).toBe('TRUCCO VELOCE')
  expect(title.classList.contains('text-gray-500')).toBe(true)
  expect(content.classList.contains('bg-white')).toBe(true)
  //qui sto forse truccando e dovrei usare path...
  expect(image.src).toBe('http://localhost/static/img/'+ data.image)
  expect(paragraphs.length).toBe(1)
  expect(text).not.toBe(null)
})
it('paragrafi multipli', async () => {
  const data = {
    "title": "TRUCCO VELOCE",
    "text":[ "prova", "molto", "ancora!"],
    "image": "stock-photo-makeup-artist-applies-applies-powder-and-blush-beautiful-woman-face-hand-of-make-up-master-1805797540.jpg",
    "duration": "",
    "price": "20,00 €",
    "section": "",
    "subscription": ""
  }
  const uidata = {
    titleColor:'text-gray-500', 
    bgColor: 'bg-white',  
    width:'lg:w-1/3'
  }

  const { getByText } = render(ServiceCard, {
    data: data,
    uiData:uidata
  })

  const card = document.querySelector('.card')
  const content = card.querySelector('.card-content')
  const title  = card.querySelector('h3')
  const price  = card.querySelector('.text-black.font-bold.text-md.pr-2')
  const image = card.querySelector('img')
  const paragraphs  = Array.from(card.querySelectorAll('.text-md.text-gray-600.italic.mt-4'))
  const text = getByText('prova')
  
  expect(card.classList.contains('lg:w-1/3')).toBe(true)
  expect(price.textContent).toBe('20,00 €')
  expect(title.textContent).toBe('TRUCCO VELOCE')
  expect(title.classList.contains('text-gray-500')).toBe(true)
  expect(content.classList.contains('bg-white')).toBe(true)
  //qui sto forse truccando e dovrei usare path...
  expect(image.src).toBe('http://localhost/static/img/'+ data.image)
  expect(paragraphs.length).toBe(3)
  expect(text).not.toBe(null)
})