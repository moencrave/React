import { useEffect, useState } from 'react';
import { BluryBubble } from '../../components/ui/Decorations/decoration.jsx';
import { PrimaryLinkButton, SecondaryLinkButton } from '../../components/ui/Buttons/button.jsx';
import navAndHeroStyle from './navAndHero.module.css';
import masterStyle from './master.module.css';
import aboutUsStyle from './aboutUs.module.css'


function MemberIntroduction({ role, name, p, src, alt }) {
    return (
        <div className={`${aboutUsStyle.memberCard} ${masterStyle.flexRow}`}>
            <div className={`${aboutUsStyle.memberCardLeft} ${masterStyle.flexColumn}`}>
                <img src={src} alt={alt} />
                <h3 className={`${masterStyle.lineBeforeText}`}>{name}</h3>
            </div>
            <div className={` ${aboutUsStyle.memberCardRight} ${masterStyle.flexColumn}`}>
                <h2 className={`${masterStyle.headingText}`}>{role}</h2>
                <p className={`${masterStyle.normalText}`}>{p}</p>
                <div className={`${aboutUsStyle.socialLinks} ${masterStyle.flexRow}`}>
                    <a href=""><img src="src/assets/pictures/1.png" alt="F" /></a>
                    <a href=""><img src="src/assets/pictures/1.png" alt="F" /></a>
                    <a href=""><img src="src/assets/pictures/1.png" alt="F" /></a>
                </div>
            </div>
        </div>
    );
}

function AboutUs() {
    return (
        <section className={masterStyle.normalText}>

            <div className={`${aboutUsStyle.memberCardsHolder}`}>
                <MemberIntroduction role={'Web Pentester'} name={'Moeed Ul Haq (BS)'} p={<>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim voluptates voluptatibus laboriosam ut deleniti! Similique provident aspernatur facere, excepturi perspiciatis dicta nostrum qui quia iusto ipsa mollitia eum magnam repellendus!</>} src={'src/assets/pictures/Moeed_Pic.jpg'} alt={'Moeed Pic'} />

                <MemberIntroduction role={'Web Pentester'} name={'Hasnat Farooq (BS)'} p={<>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim voluptates voluptatibus laboriosam ut deleniti! Similique provident aspernatur facere, excepturi perspiciatis dicta nostrum qui quia iusto ipsa mollitia eum magnam repellendus!</>} src={'src/assets/pictures/Hasnat_Pic.png'} alt={'Hasnat Pic'} />

                <MemberIntroduction role={'Web Pentester'} name={'Ahmad Abdullah (BS)'} p={<>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim voluptates voluptatibus laboriosam ut deleniti! Similique provident aspernatur facere, excepturi perspiciatis dicta nostrum qui quia iusto ipsa mollitia eum magnam repellendus!</>} src={'src/assets/pictures/Ahmad_Pic.jpeg'} alt={'Ahmad Pic'} />
            </div>
        </section>
    )
}

export default AboutUs;