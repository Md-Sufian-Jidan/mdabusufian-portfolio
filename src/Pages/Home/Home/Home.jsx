import Features from "../Features/Features";
import Hero from "../Hero/Hero";
import Process from "../Process/Process";
import Projects from "../Projects/Projects";

const Home = () => {
    return (
        <main className="max-w-7xl mx-auto overflow-hidden">
            <Hero />
            <Features />
            <Process />
            <Projects />
        </main>
    );
};

export default Home;