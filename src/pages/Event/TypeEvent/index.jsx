import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PublicHeader from '../../../components/Header/PublicHeader'
import ImageTypeEvent from '../../../assets/images/3.jpg'
import './typeEvent.scss'
import Footer from '../../../components/Footer'

const TypeEvent = () => {
  const { type } = useParams()
  const Navigate = useNavigate()
  return (
    <div className="type-event">
      <PublicHeader />
      <div className="content padding">
        <div className="short-view">
          <img src={ImageTypeEvent} alt="" />
          <div className="search-content">
            <input type="text" name="" className='search' placeholder={`Rechercher un(e) ${type}`} />
            <button className='btn-custom primary'>Rechercher</button>
          </div>
        </div>

        <div className="more-event">
          <h1 className='title'>Trouvez des évènements</h1>
          <div className="other">
            <div className="custom-Event">
              <div className="icon">1</div>
              <div className="details">
                <span>Aujourd'hui</span>
                <small>Découvre les concepts près de chez toi pour un programme denière minute</small>
              </div>
            </div>
            <div className="custom-Event">
              <div className="icon">2</div>
              <div className="details">
                <span>Ce week-end</span>
                <small>Découvre les evènements à venir vendredi, samedi et dimanche</small>
              </div>
            </div>
            <div className="custom-Event">
              <div className="icon">3</div>
              <div className="details">
                <span>Recherche personnalisée</span>
                <small>Indique le lieu, la catégorie</small>
              </div>
            </div>
          </div>
        </div>

        <div className="some-event">
          <h1 className='title'>Quelques évènements</h1>
          <div className="some-event-details">
            <div className="list" onClick={() => Navigate('/event/conference/details/1')}>AAA YYY ZZZ</div>
            <div className="list" onClick={() => Navigate('/event/conference/details/1')}>AAA YYY ZZZ</div>
            <div className="list" onClick={() => Navigate('/event/conference/details/1')}>AAA YYY ZZZ</div>
            <div className="list" onClick={() => Navigate('/event/conference/details/1')}>AAA YYY ZZZ</div>
          </div>
        </div>
      </div>/
      <Footer />
    </div>
  )
}

export default TypeEvent