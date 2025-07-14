import AboutImg from '../assets/about.png';

export default function About () {
    const config  = {
        line1: 'Hi! I\'m Jeeva S, an aspiring Full Stack Web Developer with a strong passion for creating dynamic and responsive websites. I\'m on a journey to build real-world projects using the latest technologies and improve my problem-solving skills every day.',
        line2: 'I focus on frontend tools like HTML, CSS, JavaScript, and frameworks such as React.js, along with styling libraries like Tailwind CSS and Bootstrap.',
        line3: 'On the backend, I\'m learning and building with Node.js, Express.js, and MongoDB, aiming to create complete, functional web applications.',
        line4: 'I\'m always eager to grow as a developer, take on new challenges, and collaborate with others in the tech community. Whether it\'s for internships, freelance work, or open source—I\'m ready to contribute and learn!'
    }

    return <section className='flex flex-col md:flex-row bg-accent px-5 py-20' id='about' data-aos="fade-up">
        <div className='py-5 md:w-1/2' data-aos="fade-right">
            <img src={AboutImg} className="shadow-lg" data-aos="zoom-in" />
        </div>
        <div className='md:w-1/2 flex justify-center' data-aos="fade-left">
            <div className='flex flex-col justify-center text-primary'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold text-primary'>About Me</h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
                <p className='pb-5'>{config.line3}</p>
                <p className='pb-5'>{config.line4}</p>
            </div>
        </div>
    </section>
}