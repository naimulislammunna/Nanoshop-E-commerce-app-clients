
const About = () => {
    const about = [
        {
            "title": "Our Story",
            "description": "ShopVerse was born in 2020 with a simple dream — to make quality shopping easy, affordable, and enjoyable for everyone. What started as a small online store run by a passionate team has now grown into a trusted e-commerce brand serving thousands."
        },
        {
            "title": "Our Mission",
            "description": "Our mission is to redefine the online shopping experience through trust, transparency, and technology. We believe shopping should be simple and enjoyable, not stressful. That’s why we work tirelessly to bring you high-quality products, smooth."
        },
        {
            "title": "Our Vision",
            "description": "At ShopVerse, our vision is to become a global leader in e-commerce that empowers people to buy confidently and live better. We dream of a world where technology and trust create the most seamless shopping experience possible. Our long-term goal"
        },
        {
            "title": "Why Choose Us",
            "description": "We go beyond just selling products — we deliver experiences. Our customers choose us because we combine unbeatable prices with exceptional service. From secure payment systems and fast nationwide delivery to hassle-free returns, every step of your journey"
        },
        {
            "title": "Sustainability Commitment",
            "description": "We believe that great business should also be responsible business. At ShopVerse, we are deeply committed to sustainability and environmental care. Our team continuously works on reducing waste through eco-friendly packaging, paperless"
        },
        {
            "title": "Customer Promise",
            "description": "Your trust is our greatest reward. We promise to provide products that match what you see online — no fake deals, no hidden conditions. Our team ensures that every customer receives genuine products, timely updates, and friendly support."
        }
    ]

    return (
        <div className="container my-20">
            E-commerce, or electronic commerce, is the buying and selling of goods and services online. It can take place on a variety of digital platforms, including: websites, online marketplaces, social media, apps, and email ordering.
            E-commerce can be conducted on computers, tablets, smartphones, and other smart devices. It can operate in several market segments, including: Business-to-business (B2B), Business-to-consumer (B2C), Consumer-to-consumer, and Consumer-to-business. <br />
            <ul className="my-5">
                <li>Lowering barriers to entry for many types of businesses</li>
                <li>Allowing small to medium businesses (SMBs) to reach global markets</li>
                <li>Providing an accessible opportunity for business owners to sell their products and services online without investing in a physical storefront</li>
            </ul>
            <div className="grid grid-cols-3 gap-6">
                {
                    about.map((item , idx)=> <div key={idx} className="card w-auto bg-base-100 card-md shadow-sm">
                        <div className="card-body">
                            <h2 className="card-title text-primary">{item.title}</h2>
                            <p>{item.description}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default About;