/* global React */
const { Wordmark, Button, Card, NumberedCard, NewsletterForm } =
  window.DesignSystem_d7291f;
const scrollToId = window.scrollToId;
const LinkedInGlyph = window.LinkedInGlyph;

/* ---------------- Eventos gallery ---------------- */
const EVENTS = [
  ['google-office', 'Google Office · Nilo Digital Health Summit'],
  ['his', 'Healthcare Innovation Show'],
  ['camara', 'Audiência na Câmara dos Deputados · Brasília'],
  ['google-campus', 'Fórum de Inovação · Google Campus'],
  ['workshop', 'Workshop · LinkedIn para líderes'],
  ['his2', 'Painel · Healthcare Innovation Show'],
  ['painel', 'Painel · Inovação em saúde'],
  ['hsm', 'Evento HSM+'],
];

function Eventos() {
  return (
    <section className="section section--soft" id="eventos">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">No palco</p>
          <h2 className="section-title">Palestras, painéis e workshops.</h2>
          <p className="section-sub">
            De fóruns de inovação a audiências públicas, alguns dos palcos onde
            levei a conversa sobre o futuro da saúde.
          </p>
        </div>
        <div className="gallery reveal">
          {EVENTS.map(([file, cap]) => (
            <figure className="gallery__item" key={file}>
              <img src={`assets/events/${file}.jpg`} alt={cap} loading="lazy" />
              <figcaption className="gallery__cap">{cap}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Temas ---------------- */
const TEMAS = [
  ['01', 'Inteligência artificial na saúde',
    'O que muda, e o que não muda, quando a IA entra na clínica, na operação e na decisão médica. Casos reais, riscos e oportunidades.'],
  ['02', 'Inovação e tecnologia em saúde',
    'Como transformar um mercado complexo: novos modelos de cuidado, dados e a jornada de adoção de tecnologia dentro das organizações.'],
  ['03', 'Saúde nas empresas',
    'Saúde corporativa como estratégia de negócio: bem-estar, produtividade e a nova relação entre empresas, pessoas e cuidado.'],
];

function Temas() {
  return (
    <section className="section section--blue" id="temas">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Principais temas</p>
          <h2 className="section-title">Três conversas que conectam o que você ainda não conectou.</h2>
        </div>
        <div className="temas__grid reveal">
          {TEMAS.map(([i, t, d]) => (
            <NumberedCard key={i} index={i} title={t} description={d} tone="blue" />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contato ---------------- */
function Contato() {
  return (
    <section className="section" id="contato">
      <div className="container">
        <div className="contato__card reveal">
          <div>
            <p className="eyebrow">Contato</p>
            <h2 className="section-title">Vamos levar essa conversa para o seu evento?</h2>
            <p className="section-sub">
              Para proposta comercial de palestras, painéis e workshops, é só
              chamar. Respondo pessoalmente.
            </p>
          </div>
          <div className="contato__actions">
            <Button as="a" variant="primary" size="lg" block
              href="mailto:thiago.liguori@gmail.com?subject=Convite%20para%20evento">
              Enviar convite por e-mail
            </Button>
            <Button as="a" variant="outline" size="lg" block
              href="https://www.linkedin.com/in/thiagoliguori/" target="_blank" rel="noopener">
              <LinkedInGlyph />&nbsp;Conectar no LinkedIn
            </Button>
            <a className="contato__email" href="mailto:thiago.liguori@gmail.com">
              thiago.liguori@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Newsletter ---------------- */
function Newsletter() {
  return (
    <section className="section section--navy" id="newsletter">
      <div className="container news__grid">
        <div className="reveal">
          <p className="eyebrow">Carta do Doc</p>
          <h2 className="section-title">Insights semanais sobre o mercado de saúde.</h2>
          <p className="section-sub">
            Todo domingo à tarde: um guia para navegar saúde e inovação sem
            enrolação. Ciência, mercado e tecnologia em linguagem de quem lidera.
            2.000+ líderes já recebem.
          </p>
        </div>
        <div className="news__form-wrap reveal">
          <NewsletterForm onDark cta="Quero receber" placeholder="Seu melhor e-mail"
            onSubmit={(email) => {
              fetch('https://api.beehiiv.com/v2/publications/pub_bbbdefa6-69b6-45e4-9550-cf14c0829c53/subscriptions', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': 'Bearer zb729mx0KjRdFfye57Hqa4erYHX4VzJ9WBtWhImjeaB6nABhA7GGyBpZpfG0S6dO',
                },
                body: JSON.stringify({ email, reactivate_existing: true, send_welcome_email: true, utm_source: 'website' }),
              });
            }} />
          <p className="news__meta">Sem spam. Cancele quando quiser.</p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__row">
          <Wordmark onDark size="md" />
          <nav className="footer__links">
            <a href="#sobre" onClick={(e) => { e.preventDefault(); scrollToId('sobre'); }}>Sobre</a>
            <a href="#eventos" onClick={(e) => { e.preventDefault(); scrollToId('eventos'); }}>Eventos</a>
            <a href="#temas" onClick={(e) => { e.preventDefault(); scrollToId('temas'); }}>Temas</a>
            <a href="#newsletter" onClick={(e) => { e.preventDefault(); scrollToId('newsletter'); }}>Newsletter</a>
            <a href="https://www.linkedin.com/in/thiagoliguori/" target="_blank" rel="noopener">LinkedIn</a>
            <a href="mailto:thiago.liguori@gmail.com">Contato</a>
          </nav>
        </div>
        <p className="footer__legal">
          © {new Date().getFullYear()} Thiago Liguori · Saúde e inovação para líderes.
        </p>
      </div>
    </footer>
  );
}

window.Eventos = Eventos;
window.Temas = Temas;
window.Contato = Contato;
window.Newsletter = Newsletter;
window.Footer = Footer;
