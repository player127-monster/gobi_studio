import Home from '../components/Home';
import About from '../components/About';
import Info from '../components/Info';

export default function HomePage({ shopName }) {
  return (
    <>
      <section id="home"><Home name={shopName} /></section>
      <section id="about"><About name={shopName} /></section>
      <section id="contact"><Info /></section>
    </>
  );
}
