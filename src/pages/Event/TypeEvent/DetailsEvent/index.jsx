import React from 'react'
import ImageTypeEvent from '../../../../assets/images/3.jpg'
import PublicHeader from '../../../../components/Header/PublicHeader'
import './detailsEvent.scss'
import Footer from '../../../../components/Footer'

const DetailsEvent = () => {
    return (
        <div className="details-event">
            <PublicHeader />
            <div className="content padding">
                <div className="short-view">
                    <img src={ImageTypeEvent} alt="" />
                </div>
                <div className="description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam veniam ratione voluptas a, eligendi assumenda eos dignissimos eius maiores non dolore distinctio quo accusamus voluptatem laborum rem reprehenderit commodi ex.</p>
                    <br />
                    <p>NB: Les billets sont non remboursables</p>
                </div>
                <button className='btn-custom primary'>Acheter un billet</button>
            </div>
            <Footer />
        </div>
    )
}

export default DetailsEvent