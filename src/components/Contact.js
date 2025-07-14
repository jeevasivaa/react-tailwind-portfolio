
export default function Contact () {

    const config = {
        email : 'jeevasivaa@outlook.com',
        phone: '+91 8838509447'
    }

    return <section id='contact' className='flex flex-col bg-primary px-5 py-32 text-white' data-aos="fade-up">
        <div className='flex flex-col items-center' data-aos="zoom-in">
            <h1 className='text-4xl border-b-4  border-secondary mb-5 w-[140px] font-bold'>Contact</h1>
            <p className='pb-5'>If you want to discuss more in detail, please contact me</p>
            <p className='py-2'><span className='font-bold'>Email :</span> {config.email}</p>
            <p className='py-2'><span className='font-bold'>Phone :</span> {config.phone}</p>
        </div>
    </section>
}