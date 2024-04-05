import React, {useEffect, useState} from 'react'
import ImageTypeEvent from '../../../../assets/images/3.jpg'
import PublicHeader from '../../../../components/Header/PublicHeader'
import './detailsEvent.scss'
import Footer from '../../../../components/Footer'
import {useParams} from "react-router-dom";
import {getEventsByCategoryAndId} from "../../../../data/events";

const DetailsEvent = () => {
    const { type, details } = useParams()
    const [event, setEvent] = useState({})

    useEffect(() => {
        setEvent(getEventsByCategoryAndId(type, details))
    }, [type, details]);
    return (
        <div className="details-event">
            <PublicHeader />
            <div className="content padding">
                <div className="short-view">
                    <img src={ImageTypeEvent} alt=""/>
                </div>
                <div className="description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam veniam ratione voluptas a,
                        eligendi assumenda eos dignissimos eius maiores non dolore distinctio quo accusamus voluptatem
                        laborum rem reprehenderit commodi ex.</p>
                    <br/>
                    <p>NB: Les billets sont non remboursables</p>
                </div>

                <div className="buy-ticket">
                    <form action="">
                        <h3 className=''>Formulaire de contact</h3>
                        <select>
                            <option value="1"> value 1</option>
                            <option value="2"> value 2</option>
                            <option value="3"> value 3</option>
                        </select>
                        {/*<input type="select" placeholder='type de ticket'/>*/}
                        <input type="number" placeholder='Nombre de tickets'/>
                        <input type="text" placeholder='Objet'/>
                        <button className='btn-custom primary'>Acheter un billet</button>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default DetailsEvent