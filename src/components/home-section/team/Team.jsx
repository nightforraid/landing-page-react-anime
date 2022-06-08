import { useEffect } from 'react'
import './team.scss'

import HomeSection from '../HomeSection'
import Button from '../../button/Button'


import hoverEffect from 'hover-effect'

import {
    logo,
    bg1,
    champAshe,
    champAhri,
    champGaren,
    distortion,
    iconLuciel
} from '../../../assets/images'


const Team = props => {

    useEffect(() => {
        const teamImgs = document.querySelectorAll('#team__img__slide > img')
        let animates = []
        teamImgs.forEach((item, index) => {
            let nextImg = teamImgs[index === teamImgs.length - 1 ? 0 : index + 1].getAttribute('src')
            let animation = new hoverEffect({
                parent: document.querySelector('#team__img__slide'),
                intensity: 0.5,
                image1: item.getAttribute('src'),
                image2: nextImg,
                displacementImage: distortion,
                hover: false
            })
            animates.push(animation)
        })
        teamImgs.forEach(e => e.remove())

        let currItem = 0

        const autoImageSlide = () => {
            let prevItem = currItem
            currItem = (currItem + 1) % animates.length

            if (!document.hidden) {
                animates[prevItem].next()
            }

            setTimeout(() => {
                let canvas = document.querySelectorAll('#team__img__slide > canvas')
                document.querySelector('#team__img__slide').appendChild(canvas[0])
                animates[prevItem].previous()
            }, 3000);
        }

        setInterval(autoImageSlide, 3000);
    }, [])

    return (
        <HomeSection
            className={`team ${props.isActive ? 'active' : ''}`}
            contentClassName="overlay team__content"
            bgImage={bg1}
        >
            <div className="team__info relative">
                <div className="team__info__content">
                    <div className="title">
                    <h2 className="main-color">Team</h2>
                    </div>
                    <div className="description m-t-4">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere beatae quae facilis cumque impedit consectetur officia reiciendis excepturi! Adipisci reiciendis labore beatae quam fugit ratione facilis fuga commodi, consequatur voluptas!
                    </div>
                    <div className="team__info relative">
                        <div className="team__info__content">
                            <div className="team__icon">
                                <img className="icon" src={iconLuciel} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </HomeSection>
    )
}

export default Team
