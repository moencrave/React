import { useEffect, useState } from 'react';
import { BluryBubble } from '../../components/ui/Decorations/decoration.jsx';
import { PrimaryLinkButton, SecondaryLinkButton } from '../../components/ui/Buttons/button.jsx';
import navAndHeroStyle from './navAndHero.module.css';
import masterStyle from './master.module.css';

function HeroAchievements({ heading, name, p }) {
    return (
        <>
            <div className={`${masterStyle.flexColumn}`}>
                <h2 className={`${masterStyle.largerHeadingText}`}>{heading}</h2>
                <p>{p}</p>
                <h3>{name}</h3>
            </div>
        </>
    );
}

function HeroNav() {
    return (

        <>
            <nav className={`${navAndHeroStyle.navBar} ${masterStyle.normalText} ${masterStyle.flexRow}`}>
                <ul className={`${masterStyle.ulStyle} ${masterStyle.flexRow}`}>
                    <li><PrimaryLinkButton href={'#'} text={'Home'} /></li>
                    <li><PrimaryLinkButton href={'#'} text={'Services'} /></li>
                    <li><PrimaryLinkButton href={'#'} text={'Pricing'} /></li>
                    <li><PrimaryLinkButton href={'#'} text={'About '} /></li>
                    <li><PrimaryLinkButton href={'#'} text={'Contact'} /></li>
                </ul>

            </nav>

            <section className={masterStyle.normalText}>

                <div className={`${navAndHeroStyle.heroPage}`}>

                    <BluryBubble name='rightBottomCorner' />

                    <div className={navAndHeroStyle.heroTextHolder}>

                        <HeroAchievements
                            heading={<><PrimaryLinkButton href={'#'} text={'Web Application Testing'} headingName={'largerHeadingText'}/></>}
                            name={<><PrimaryLinkButton href={'#'} text={'Team Alpha'}/></>}
                            p={<>'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam nam quis, in dolorum {<SecondaryLinkButton href={'#'} text={'Moeed'} />} tenetur ad omnis'</>}
                        />

                    </div>

                    <div className={`${navAndHeroStyle.heroPhotoHolder} ${masterStyle.flexRow}`}>

                        <img
                            className={navAndHeroStyle.imgProfile}
                            src="src/assets/pictures/1.png"
                            alt="Moeed"
                        />

                    </div>

                </div>
            </section>

        </>

    );
}

export default HeroNav;