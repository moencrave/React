import { useEffect, useState } from 'react';

import { BluryBubble } from './components/ui/Decorations/decoration.jsx';
import { PrimaryLinkButton, SecondaryLinkButton } from './components/ui/Buttons/button.jsx';

import homeStyle from './home.module.css';

function HeroAchievements({ heading, name, p }) {
    return (
        <>
            <div className={`${homeStyle.heroText}`}>
                <h2 className={homeStyle.heroTextHeading}>{heading}</h2>
                <p>{p}</p>
                <h3 className={homeStyle.heroTextNames}>{name}</h3>
            </div>
        </>
    );
}

export function HeroNav() {
    return (

        <div>

            <section className={`${homeStyle.navBar} ${homeStyle.flexCenterAll}`}>

                <nav>

                    <ul className={`${homeStyle.ulStyle} ${homeStyle.flexCenterAll}`}>

                        <li>
                            <PrimaryLinkButton href={'#'} text={'Home'} />
                        </li>

                        <li>
                            <PrimaryLinkButton href={'#'} text={'Services'} />
                        </li>

                        <li>
                            <PrimaryLinkButton href={'#'} text={'Pricing'} />
                        </li>

                        <li>
                            <PrimaryLinkButton href={'#'} text={'About Us'} />
                        </li>

                        <li>
                            <PrimaryLinkButton href={'#'} text={'Contact Us'} />
                        </li>

                    </ul>

                </nav>

            </section>

            <div className={homeStyle.heroPage}>

                <BluryBubble name='rightBottomCorner' />

                <div className={homeStyle.heroTextHolder}>

                    <HeroAchievements
                        heading={'Overview'}
                        name={<><PrimaryLinkButton href={'#'}text={'Moeed Ul Haq'}/> &nbsp; (BS. Cyber Security)"</>}
                        p={<>'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam nam quis, quasi quidem recusandae quas. Magnam praesentium beatae, magni quibusdam soluta eum natus cupiditate. Consequuntur voluptates hic laboriosam aliquam obcaecati nam, in dolorum sint nihil officia {<SecondaryLinkButton href={'#'} text={'Moeed'} />} tenetur ad omnis beatae soluta velit quaerat aperiam temporibus voluptas placeat veritatis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam nam quis, quasi quidem recusandae quas. Magnam praesentium beatae, magni quibusdam soluta eum natus cupiditate. Consequuntur voluptates hic laboriosam aliquam obcaecati nam, in dolorum sint nihil officia tenetur ad omnis beatae soluta velit quaerat aperiam temporibus voluptas placeat veritatis, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint saepe molestiae nam, quod ipsum eos? Quam aperiam eligendi minus, numquam qui ad consectetur necessitatibus rem, fugiat veritatis maiores excepturi animi.'</>} />

                </div>

                <div className={`${homeStyle.heroPhotoHolder} ${homeStyle.flexCenterAll}`}>

                    <img
                        className={homeStyle.imgProfile}
                        src="src/assets/pictures/Moeed_Pic.jpeg"
                        alt="Moeed"
                    />

                    <PrimaryLinkButton
                        href={'#'}
                        text={'Moeed Ul Haq'}
                    />

                </div>

            </div>

        </div>

    );
}