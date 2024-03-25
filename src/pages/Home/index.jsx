import React from 'react'
import PublicHeader from '../../components/Header/PublicHeader'
import './home.scss'
import CodeQR from '../../assets/images/codeQr.jpg'
import AboutUs from '../../assets/images/aboutUs.svg'
import Mission from '../../assets/images/mission.png'
import Footer from '../../components/Footer'

const Home = () => {
    return (
        <div className='home'>
            <PublicHeader />
            <div className="SectionMain padding">
                <div className="left">
                    <h1 className='title'>Achète et vend ton E-Billet en toute sécurité</h1>
                    <p className='description'>
                        EventWorld est la principale plateforme de gestion et de croissance d'évènements qui aide les créateurs et les entrepreneurs à propérer.
                    </p>
                    <div className="search-content">
                        <input type="text" name="" className='search' placeholder='Rechercher un évènement' />
                        <button className='btn-custom primary'>Rechercher</button>
                    </div>
                </div>

                <div className="right">
                    <img src={CodeQR} alt="code qr" />
                </div>
            </div>
            <div className="about padding">
                <div className="left">
                    <img src={AboutUs} alt="AboutUs" />
                </div>
                <div className="right">
                    <h1 className='first-title'>A propos</h1>
                    <p>
                        Event World est une plateforme de billeterie qui vous offre la possibité er réserver facilement des billets pour une variété d'évènements
                        passionnants. Aue ce soit des concerts, des spectacles, des festivals ou évènéments sportifs, notre plateformes conviviale vous permet de
                        parcourir les différents évènements, de consulter les détails et de sécuriser vos places en quelques clics. De plus, les organisateurs
                        d'évènements peuvent également utiliser notre plateforme pour organiser leurs évènements et mettre  les billets en vente, offrant ainsi
                        une solution complète pour la gestion d'évènements. 
                        {/* Profitez une expérience simple et pratique pour planifier vos sorties et ne manquez
                        aucun moment inoubliable grâce à Event World. */}
                    </p>
                </div>
            </div>
            <div className="mission padding">
                <div className="left">
                    <h1 className="first-title">Notre mission</h1>
                    <p>
                        La mission d'EventWorld est de rassembler le monde à travers une expérience inédite, sûr et sécurisée. Elle est toutefois destinée à deux acteurs:
                    </p>
                    <br />
                    <ul className='actor'>
                        <li>Pour le grand public</li>
                        <ul className='actor-details'>
                            <li>Centralisation des évènements et des tickets</li>
                            <li>Aucun risque de perte et d'endommagement du ticket</li>
                            <li>Possibilité de revendre</li>
                        </ul>
                    </ul>
                    <br />
                    <ul className='actor'>
                        <li>Pour les créateurs d'évènements</li>
                        <ul className='actor-details'>
                            <li>Facilité la création d'évènements</li>
                            <li>Bonne gestion de la trésorerie</li>
                        </ul>
                    </ul>
                </div>
                <div className="right">
                    <img src={Mission} alt="Mission" />
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home