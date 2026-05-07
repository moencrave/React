import ulStyles from './components/ui/css_modules/ul.module.css';
import displayStyles from './components/ui/css_modules/display.module.css';
import { LinkButton } from './components/ui/button.jsx';
import { BluryBubble } from './components/ui/decorations.jsx';

function IntroText(props) {
    return (
        <div className='IntroBox'>
            <span className='TextCenter'>
                {props.text}
            </span>
        </div>
    )
}

function animatingDivs(){
    let a = document.getElementsByClassName('IntroBox');
    a[1].classList.add('.IntroBoxScaler');
}

export function HeroNav() {
    return (
        <div className="HeroNavManager">
            <div className={`NavBar ${displayStyles.FlexCenterAll}`}>
                <nav>
                    <ul className={`${ulStyles.UlStyle} ${displayStyles.FlexCenterAll}`}>
                        <li><LinkButton src={'#'} LinkText={'Home'} /></li>
                        <li><LinkButton src={'#'} LinkText={'Services'} /></li>
                        <li><LinkButton src={'#'} LinkText={'Pricing'} /></li>
                        <li><LinkButton src={'#'} LinkText={'About Us'} /></li>
                        <li><LinkButton src={'#'} LinkText={'Contact Us'} /></li>
                    </ul>
                </nav>
            </div>
            <div className="HeroPage">
                <BluryBubble rltb1={'left'} value1={'-3%'} rltb2={'top'} value2={'-5%'} />
                <BluryBubble rltb1={'right'} value1={'-3%'} rltb2={'bottom'} value2={'-5%'} />
                <div className="IntroTextHolder">
                    <IntroText text='I am Moeed He is a very good boy' />
                    <IntroText text='I am Moeed He is a very good boy' />
                    <IntroText text='I am Moeed He is a very good boy' />
                </div>

                <div className={`PhotoHolder ${displayStyles.FlexCenterAll}`}>
                    <img className='ImageSet' src="../public/pictures/Moeed_Pic.jpeg" alt="" />
                    <LinkButton src={'#'} LinkText={'Moeed'} />
                </div>
            </div>
        </div>
    )
}