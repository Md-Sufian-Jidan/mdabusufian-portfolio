import ContactMeeting from "../ContactMeeting/ContactMeeting";
import Features from "../Features/Features";
import Hero from "../Hero/Hero";
import Process from "../Process/Process";
import Projects from "../Projects/Projects";

const Home = () => {
    return (
        <main className="max-w-7xl mx-auto">
            <Hero />
            <Features />
            <Process />
            <Projects />
            <ContactMeeting />
        </main>
    );
};

export default Home;