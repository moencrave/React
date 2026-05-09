import { useEffect, useState } from 'react';
import { BluryBubble } from '../../components/ui/Decorations/decoration.jsx';
import { PrimaryLinkButton, SecondaryLinkButton } from '../../components/ui/Buttons/button.jsx';
import navAndHeroStyle from './navAndHero.module.css';
import masterStyle from './master.module.css';

function HeroAchievements({ heading, name, p }) {
    return (
        <>
            <div className={`${navAndHeroStyle.heroText}`}>
                <h2 className={`${navAndHeroStyle.heroTextHeading}`}>{heading}</h2>
                <p>{p}</p>
                <h3 className={navAndHeroStyle.heroTextNames}>{name}</h3>
            </div>
        </>
    );
}

function HeroNav() {
    return (

        <header className={masterStyle.normalText}>

            <section>

                <nav className={`${navAndHeroStyle.navBar} ${masterStyle.flexCenterAll}`}>

                    <ul className={`${masterStyle.ulStyle} ${masterStyle.flexCenterAll}`}>

                        <li><PrimaryLinkButton href={'#'} text={'Home'} /></li>
                        <li><PrimaryLinkButton href={'#'} text={'Services'} /></li>
                        <li><PrimaryLinkButton href={'#'} text={'Pricing'} /></li>
                        <li><PrimaryLinkButton href={'#'} text={'About Us'} /></li>
                        <li><PrimaryLinkButton href={'#'} text={'Contact Us'} /></li>

                    </ul>

                </nav>

            </section>

            <section>

                <div className={`${navAndHeroStyle.heroPage}`}>

                    <BluryBubble name='rightBottomCorner' />

                    <div className={navAndHeroStyle.heroTextHolder}>

                        <HeroAchievements
                            heading={'Overview'}
                            name={<><PrimaryLinkButton href={'#'} text={'Moeed Ul Haq'} /> &nbsp; (BS. Cyber Security)</>}
                            p={<>'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam nam quis, quasi quidem recusandae quas. Magnam praesentium beatae, magni quibusdam soluta eum natus cupiditate. Consequuntur voluptates hic laboriosam aliquam obcaecati nam, in dolorum sint nihil officia {<SecondaryLinkButton href={'#'} text={'Moeed'} />} tenetur ad omnis beatae soluta velit quaerat aperiam temporibus voluptas placeat veritatis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam nam quis, quasi quidem recusandae quas. Magnam praesentium beatae, magni quibusdam soluta eum natus cupiditate. Consequuntur voluptates hic laboriosam aliquam obcaecati nam, in dolorum sint nihil officia tenetur ad omnis beatae soluta velit quaerat aperiam temporibus voluptas placeat veritatis, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint saepe molestiae nam, quod ipsum eos? Quam aperiam eligendi minus, numquam qui ad consectetur necessitatibus rem, fugiat veritatis maiores excepturi animi.'</>}
                        />

                    </div>

                    <div className={`${navAndHeroStyle.heroPhotoHolder} ${masterStyle.flexCenterAll}`}>

                        <img
                            className={navAndHeroStyle.imgProfile}
                            src="src/assets/pictures/Moeed_Pic.jpg"
                            alt="Moeed"
                        />

                    </div>

                </div>
            </section>

        </header>

    );
}

export default HeroNav;