import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from './buttons/Button';
import {  AppContext } from './Contax';

const HeroSection = ({name,image}) => {
    const value = useContext(AppContext);
    return (
        <Wrapper>
            <div className="container grid grid-two-column">
                <div className="hero-section-data">
                    <p className='hero-top-data'>THIS IS ME</p>
                    <h1 className='hero-heading'>{name}</h1>
                    <p className='hero-para'>{value}Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet repellendus aspernatur excepturi, minima ab, nisi nam optio, atque provident ipsum unde aliquid. Velit.</p>

                    <Button className='btn hire-me'>
                    <NavLink to='/contacts'>hire me</NavLink>
                    </Button>
                </div>
                <div className="hero-image-data">
                    <picture>
                         <img src={image} alt="Hero images" className='hero-img' />
                    </picture>
                </div>
                
            </div>

        </Wrapper>
    )
}

const Wrapper = styled.section`
    padding: 0 9rem;
    
    .hero-section-data{
        display: flex;
        justify-content: center;
        /* align-items: center; */
        flex-direction: column;
    }
    .btn{
        max-width: 16rem;
    }

    .hero-top-data{
        text-transform: uppercase;
        font-weight: 500;
        font-size: 1.5rem;
        color: ${({theme})=>theme.colors.helper};
    }
    .hero-heading{
        text-transform: uppercase;
        font-size: 4.4rem;
    }

    .hero-pra{
        margin-top: 1.2rem;
        margin-bottom: 3.2rem;
        max-width: 50rem;
    }
    .hero-image-data{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    picture{
        text-align: center;
    }
    .hero-img{
        max-width: 40rem;
        margin-top: 5rem;
    }
`;

export default HeroSection
