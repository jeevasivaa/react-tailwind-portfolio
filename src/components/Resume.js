import ResumeImg from '../assets/resume.jpg';

export default function Resume () {
    const config = {
        link: 'https://purple-terrie-68.tiiny.site/'
    }

    return <section id='resume' className='flex flex-col md:flex-row bg-background px-5 py-20' data-aos="fade-up">
        <div className='py-5 md:w-1/2 flex justify-center md:justify-end' data-aos="fade-right">
            <img className='w-[300px]' src={ResumeImg} data-aos="zoom-in" />
        </div>
        <div className='md:w-1/2 flex justify-center' data-aos="fade-left">
            <div className='flex flex-col justify-center text-black'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[140px] font-bold'>Resume</h1>
                <p className='pb-5'>You can view my resume <a className='btn' href={config.link} download> Download</a></p>
            </div>
        </div>
    </section>
}