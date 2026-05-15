import { useEffect, useState } from 'react';
import { BluryBubble } from '../../components/ui/Decorations/decoration.jsx';
import { PrimaryLinkButton, SecondaryLinkButton } from '../../components/ui/Buttons/button.jsx';

import profileImg from '../../assets/pictures/1.png';
import menuWhite from '../../assets/Web Icons/menu-white.png';
import crossWhite from '../../assets/Web Icons/cross-white.png';

import navAndHeroStyle from './navAndHero.module.css';
import masterStyle from './master.module.css';

function HeroAchievements({ heading, name, p }) {
    return (
        <div className={`${masterStyle.flexColumn}`}>
            <h2 className={`${masterStyle.largerHeadingText}`}>{heading}</h2>
            <p>{p}</p>
            <h3>{name}</h3>
        </div>
    );
}

function HeroNav() {

    const [isMobile, setIsMobile] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {

        function handleResize() {
            setIsMobile(window.innerWidth <= 768);
        }

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };

    }, []);

    useEffect(() => { 

        if (!isMobile) {
            setMenuOpen(false);
        } 

    }, [isMobile]);

    useEffect(() => {

        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

    }, [menuOpen]);

    return (
        <>
            {menuOpen && (
                <div
                    className={navAndHeroStyle.overlay}
                    onClick={() => setMenuOpen(false)}
                />
            )}

            <nav className={`${navAndHeroStyle.navBar} ${masterStyle.headingText} ${masterStyle.flexRow}`}>

                {isMobile && (
                    <div className={`${navAndHeroStyle.menuMobileHolder} ${masterStyle.flexRow}`}>

                        <button onClick={() => setMenuOpen(true)}>

                            <img src={menuWhite} alt="Menu" />

                        </button>

                    </div>
                )}

                <div className={`${masterStyle.flexColumn} ${navAndHeroStyle.navLinksHolder} ${menuOpen ? navAndHeroStyle.navLinksInOut : ""}`}>

                    {isMobile && (

                        <div className={`${navAndHeroStyle.menuMobileClose} ${masterStyle.flexRow}`}>

                            <button onClick={() => setMenuOpen(false)}>

                                <img src={crossWhite} alt="Close" />

                            </button>

                        </div>
                    )}

                    <ul className={`${masterStyle.ulStyle} ${masterStyle.flexRow}`}>

                        <li><PrimaryLinkButton href={'#'} text={'Home'} /></li>
                        <li><PrimaryLinkButton href={'#'} text={'Services'} /></li>
                        <li><PrimaryLinkButton href={'#'} text={'Pricing'} /></li>
                        <li><PrimaryLinkButton href={'#'} text={'About'} /></li>
                        <li><PrimaryLinkButton href={'#'} text={'Contact'} /></li>

                    </ul>

                </div>

            </nav>

            <section className={masterStyle.normalText}>

                <div className={`${navAndHeroStyle.heroPage}`}>

                    <BluryBubble name='rightBottomCorner' />

                    <div className={navAndHeroStyle.heroTextHolder}>

                        <HeroAchievements
                            heading={
                                <PrimaryLinkButton
                                    href={'#'}
                                    text={'Web Application Testing'}
                                    headingName={'largerHeadingText'}
                                />
                            }

                            name={
                                <PrimaryLinkButton
                                    href={'#'}
                                    text={'Team Alpha'}
                                />
                            }

                            p={
                                <>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                    Quam nam quis, in dolorum

                                    <SecondaryLinkButton
                                        href={'#'}
                                        text={' Moeed '}
                                    />

                                    tenetur ad omnis
                                </>
                            }
                        />

                    </div>

                    <div className={`${navAndHeroStyle.heroPhotoHolder} ${masterStyle.flexRow}`}>

                        <img
                            className={navAndHeroStyle.imgProfile}
                            src={profileImg}
                            alt="Moeed"
                        />

                    </div>

                </div>

            </section>
        </>
    );
}

export default HeroNav;