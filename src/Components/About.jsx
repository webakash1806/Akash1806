import aboutImg from '../assets/code-snapshot.png'
const About = () => {
    return (

        <section className='flex flex-col'>
            about Us
            <div className='flex flex-col md:flex-row items-center justify-between lg:px-[6rem]'>
                <div className="left">
                    <img className='w-[24rem] p-4 sm:w-[28rem] md:w-[24rem] md:pl-12 lg:w-[32rem]' src={aboutImg} alt="" />
                </div>
                <div className="right p-4 sm:px-[6.5rem] md:p-12 md:pl-2 md:w-8/12 lg:w-6/12">
                    <p>Welcome to my corner of the web! I'm <span>Akash Kumar Singh</span>, a passionate Frontend Web Developer with a flair for creating beautiful, interactive, and user-friendly websites. With a strong foundation in HTML, CSS, and JavaScript, along with expertise in React and Tailwind CSS. I understand the importance of responsive web design and ensure that all my projects are optimized for seamless performance across different devices and browsers. I'm here to turn your digital dreams into reality.</p>
                    {/* <p>I'm excited to embark on a web development journey with you. Whether you have a project in mind or want to discuss how I can help improve your online presence, feel free to reach out. Together, we can create a digital masterpiece that leaves a lasting impression.</p> */}
                </div>
            </div>
        </section>
    )
}

export default About
