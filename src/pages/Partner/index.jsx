import React from 'react'
import PublicHeader from '../../components/Header/PublicHeader'
import './partner.scss'
import part1 from '../../assets/images/1.jpg'
import part2 from '../../assets/images/2.jpg'
import part3 from '../../assets/images/3.jpg'
import part4 from '../../assets/images/4.jpg'
import Footer from '../../components/Footer'

const Partner = () => {
  return (
    <div className='partner'>
      <PublicHeader />

      <div className="content padding">
        {/* <h1 className='first-title'>Devenir Partenaire</h1> */}
        <div className="type-partner">
          <h3 className='second-title'>Nos differents partenaires</h3>
          <div className="type-partner-picture">
            <img src={part1} alt="" />
            <img src={part2} alt="" />
            <img src={part3} alt="" />
            <img src={part4} alt="" />
          </div>

          <div className="details-parter">
            <div className="infos-company">
              <h3 className='second-title'>Nous Contacter</h3>
              <p>Contactez-nous pour plus d'informations sur comment ça marche</p>
              <p>Téléphone: 6xx xxx xxx</p>
              <p>Email: xxx@xxx.com</p>
              <p>Adresse: Rue xxx</p>
            </div>

            <div className="contact">
              <form action="">
                <h3 className=''>Formulaire de contact</h3>
                <input type="text" placeholder='Nom complet' />
                <input type="email" placeholder='Adresse email' />
                <input type="text" placeholder='Objet' />
                <textarea name="" id="" cols="30" rows="5" placeholder='Votre message'>
                </textarea>
                <button className='btn-custom primary'>Envoyer</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Partner