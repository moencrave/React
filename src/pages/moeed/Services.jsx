import servicesStyle from './services.module.css';
import masterStyle from './master.module.css';

function ServicesCard(props) {
    return (
        <div className={`${servicesStyle.servicesCard} ${masterStyle.headingText}`}>
            <div className={servicesStyle.servicesCardImgHolder}>
                <img src={props.imgSrc} alt={props.imgAlt} />
            </div>
            <p>{props.p}</p>
        </div>
    )
}

function Services() {
    return (
        <main>
            <section>
                <div className={servicesStyle.servicesCardHolder}>
                    <ServicesCard
                        imgSrc={'src/assets/pictures/1.png'}
                        imgAlt={'Nothing'}
                        p={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis veritatis, repellat iste unde ratione dolore, sint commodi provident, officiis accusantium voluptas. Atque, cumque.'}

                    />
                    <ServicesCard
                        imgSrc={'src/assets/pictures/1.png'}
                        imgAlt={'Nothing T'}
                        p={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis veritatis, repellat iste unde ratione dolore, sint commodi provident, officiis accusantium voluptas. Atque, cumque.'}
                    />
                    <ServicesCard
                        imgSrc={'src/assets/pictures/1.png'}
                        imgAlt={'Nothing A'}
                        p={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis veritatis, repellat iste unde ratione dolore, sint commodi provident, officiis accusantium voluptas. Atque, cumque.'}
                    />
                </div>
            </section>
        </main>
    )
}

export default Services;