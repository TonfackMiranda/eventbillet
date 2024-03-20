import React from 'react'
import PublicHeader from '../../components/Header/PublicHeader'
import './event.scss'
import ImgCategory from '../../assets/images/1.jpg'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer'

export const Event = () => {
  const Navigate = useNavigate()
  const TypesEvent = [
    {
      image: ImgCategory,
      name: 'Concert',
      path: '/event/concert'
    },
    {
      image: ImgCategory,
      name: 'Spectacle pour enfant',
      path: '/event/spectacle-enfant'
    },
    {
      image: ImgCategory,
      name: 'Conférence',
      path: '/event/conference'
    },
    {
      image: ImgCategory,
      name: 'Cinema',
      path: '/event/cinema'
    },
    {
      image: ImgCategory,
      name: 'Sport',
      path: '/event/sport'
    },
    {
      image: ImgCategory,
      name: 'Activité en plein air',
      path: '/event/activite-en-lair'
    },
  ]

  return (
    <div className='event'>
      <PublicHeader />

      <div className="content padding">
        <h1 className='first-title'>Catégorie d'évènement</h1>
        <div className="categories">
          {TypesEvent.map((typeEvent, index) => (
            <div className="category" key={index} onClick={() => Navigate(typeEvent.path)}>
              <img src={typeEvent.image} alt="" />
              <span>{typeEvent.name}</span>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Event