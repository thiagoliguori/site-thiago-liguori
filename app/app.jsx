/* global React, ReactDOM */
function App() {
  const {
    SiteHeader, Hero, Perfil, Imprensa, Clientes,
    Eventos, Temas, Contato, Newsletter, Footer,
  } = window;

  React.useEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal'));
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'));
      return;
    }
    const vh = window.innerHeight || document.documentElement.clientHeight;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    els.forEach((el) => {
      // Above-the-fold elements show instantly (never armed) so first paint
      // and screenshot capture always have content.
      if (el.getBoundingClientRect().top < vh * 0.85) {
        el.classList.add('in');
      } else {
        el.classList.add('armed');
        io.observe(el);
      }
    });
    return () => io.disconnect();
  }, []);

  return (
    <React.Fragment>
      <SiteHeader />
      <main>
        <Hero />
        <Perfil />
        <Imprensa />
        <Clientes />
        <Eventos />
        <Temas />
        <Contato />
        <Newsletter />
      </main>
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
