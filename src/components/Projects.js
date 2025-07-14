import websiteImg1 from '../assets/website-blog.jpg';
import websiteImg2 from '../assets/food-ecommerce.jpg';
import websiteImg3 from '../assets/ecommerce-websites.jpg';

export default function Projects() {

    const config = {
        projects : [
            {
                image: websiteImg1,
                description: 'A Event Website. Built with HTML, CSS and JavaScript',
                link: 'https://github.com/jeevasivaa/eventwebpage'
            },
            {
                image: websiteImg2,
                description: 'Sports Tournament Management System. Built with Python and Flask',
                link: 'https://github.com/jeevasivaa/sports_tournament_management_system'
            },
            {
                image: websiteImg3,
                description: 'Basic Registration Form . Built with React JS and CSS',
                link: 'https://github.com/jeevasivaa/basic-regisrtation-form'
                
            }
        ]
    }

    return <section id='projects' className="flex flex-col py-20 px-5 justify-center bg-secondary text-white" data-aos="fade-up">
        <div className="w-full" data-aos="fade-right">
            <div className="flex flex-col px-10 py-5" data-aos="fade-right">
                <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
                <p>These are some of my best projects. I have built these with React, MERN and vanilla CSS. Check them out.</p>
            </div>
        </div>
        <div className="w-full" data-aos="fade-left">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project, idx) => (
                     <div className='relative' data-aos={idx % 2 === 0 ? "zoom-in" : "zoom-in-up"}>
                        <img className='h-[200px] w-[500px]' src={project.image}/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn' target='_blank' href={project.link}>View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
               
               
            </div>
        </div>
    </section>
}