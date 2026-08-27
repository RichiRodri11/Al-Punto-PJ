import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Problem from './components/Problem';
import ValueProps from './components/ValueProps';
import CoursesToggle from './components/CoursesToggle';
import CertificateCard from './components/CertificateCard';
import Roadmap from './components/Roadmap';
import WaitlistForm from './components/WaitlistForm';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <ValueProps />
        <CoursesToggle />
        <CertificateCard />
        <Roadmap />
        <WaitlistForm />
      </main>
      <Footer />
    </>
  );
}
