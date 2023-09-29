import React from "react"
import Image from "next/image"
import styles from './build_your_dream.module.css'
import ContactSection from "./ContactSection"

const description = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere recusandae molestias provident officiis omnis, temporibus voluptatibus illum eos magnam consequuntur.`

const subSection = [
    {
        title: 'Marketing Strategy',
        description,
        image: '/sub-section-1.jpg'
    },
    {
        title: 'SEO Tools & Digital Presence Planning',
        description,
        image: '/sub-section-2.jpg'
    },
    {
        title: 'Email Marketing Planning & Copywriting',
        description,
        image: '/sub-section-3.jpg'
    }
]

export default function BuildYourDream(): React.JSX.Element {
    return (
        <section>
            <div className={styles.main_section}>
                <div className={`${styles.section__left} bg-primary flex justify-center items-center`}>
                    <div className="px-16 font-semibold">
                        <h1 className="text-lg sm:text-2xl lg:text-4xl text-primary leading-normal">
                            Welcome to <span className="text-secondary-blue">Dreamcather</span>
                        </h1>
                        <h2 className="text-lg sm:text-2xl lg:text-4xl text-primary leading-normal">
                            Where Software Dreams Become Reality. {`Let's build your dream together.`}
                        </h2>
                    </div>
                </div>
                <div className="relative">
                    <Image
                        src="/section-background.jpeg"
                        alt="Background"
                        priority
                        fill
                        className={`${styles.section__right} absolute top-0 left-0 w-full h-full object-cover`}
                    />
                    <div className={`${styles.section__right} absolute bottom-0 right-0`}>
                        <a href="https://www.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_10421502.htm#query=profile&position=36&from_view=keyword&track=sph">Image by wayhomestudio</a> on Freepik
                    </div>
                </div>
            </div>
            {subSection.map((item) => (
                <React.Fragment key={item.title}>
                    <div className={styles.sub_section_desktop}>
                        <div className={styles.sub_section_desktop__item}>
                            <div className="w-2/3">
                                <h1 className="text-3xl text-primary">
                                    <span className="text-secondary-blue">
                                        {item.title}
                                    </span>
                                </h1>
                                <p className="text-sm leading-normal mt-2">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                        <div className={styles.sub_section_desktop__item}>
                            <div className="w-2/3 h-full relative">
                                <Image
                                    src={item.image}
                                    alt="Background"
                                    priority
                                    fill
                                    className="absolute top-0 left-0 w-full h-full object-cover"
                                />
                                <div className="absolute bottom-0 left-0">
                                    <a href="https://www.freepik.com/free-vector/connected-world-concept-illustration_9793220.htm#&position=36&from_view=author">Image by storyset</a> on Freepik
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            ))}
            {subSection.map((item) => (
                <React.Fragment key={item.title}>
                    <div className={styles.sub_section_mobile}>
                        <h1 className="text-2xl text-secondary-blue">{item.title}</h1>
                        <Image
                            src={item.image}
                            priority
                            alt="section_image_mobile"
                            width={300}
                            height={300}
                        />
                        <p>{item.description}</p>
                    </div>
                </React.Fragment>
            ))}
            <ContactSection />
        </section>
    )
}