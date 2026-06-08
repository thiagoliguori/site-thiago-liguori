/* global React */
const { Wordmark, Button, Badge, Card, NumberedCard, NewsletterForm, Navbar } =
  window.DesignSystem_d7291f;

/* ---------------- helpers ---------------- */
function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 68;
  window.scrollTo({ top: y, behavior: 'smooth' });
}

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const LinkedInGlyph = ({ color = 'var(--color-primary)' }) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill={color} aria-hidden="true">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
  </svg>
);

/* ---------------- Header ---------------- */
function SiteHeader() {
  const [stuck, setStuck] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Eventos', href: '#eventos' },
    { label: 'Temas', href: '#temas' },
    { label: 'Newsletter', href: '#newsletter' },
  ];
  return (
    <header className={'site-header' + (stuck ? ' is-stuck' : '')}>
      <Navbar
        links={links}
        cta="Convide para um evento"
        onNavigate={(l) => scrollToId(l.href.slice(1))}
        onCta={() => scrollToId('contato')}
      />
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__grid">
        <div className="hero__copy">
          <div className="hero__badges reveal">
            <Badge variant="brand" icon={<LinkedInGlyph />}>
              LinkedIn Top Voice
            </Badge>
            <Badge variant="neutral" size="sm">Palestras · Painéis · Workshops</Badge>
          </div>
          <h1 className="hero__title reveal">
            Saúde e inovação<br />para <em className="hero__title-em">líderes.</em>
          </h1>
          <p className="hero__lead reveal">
            Médico, PhD e Top Voice no LinkedIn. Conecto inovação, tecnologia e
            negócios para preparar líderes para a saúde do futuro — com rigor
            científico e linguagem de quem vive o mercado por dentro.
          </p>
          <div className="hero__cta reveal">
            <Button variant="primary" size="lg"
              onClick={() => scrollToId('contato')}>Convide para um evento</Button>
            <Button variant="outline" size="lg"
              onClick={() => scrollToId('eventos')}>Veja no palco</Button>
          </div>

          <div className="hero__stats-bar reveal">
            <div className="hero__stat">
              <span className="hero__stat-num">53K</span>
              <span className="hero__stat-label">Seguidores LinkedIn</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num">2.000+</span>
              <span className="hero__stat-label">Líderes na newsletter</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num">9+</span>
              <span className="hero__stat-label">Marcas atendidas</span>
            </div>
          </div>
        </div>

        <div className="portrait portrait--cutout reveal">
          <div className="portrait__glow" />
          <img className="portrait__img" src="assets/thiago-cutout.png" alt="Dr. Thiago Liguori" />
          <div className="portrait__badge">
            <Badge variant="brand" icon={<LinkedInGlyph />}>
              Top Voice · 53.000
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Perfil ---------------- */
const CREDENTIALS = [
  ['Médico cardiologista', 'pelo Hospital Sírio-Libanês'],
  ['PhD em ciências médicas', 'pela Universidade de São Paulo'],
  ['Alumni da Stanford Graduate School of Business', ''],
  ['Coordenador do programa de Inteligência Artificial', 'na Afya'],
  ['Pós-graduação em telemedicina', 'pela USP'],
  ['Chief Medical Officer', 'na Pipo Saúde (2020–2024)'],
  ['Fundador e CEO', 'da Turi Saúde'],
  ['Top Voice no LinkedIn', '53.000 seguidores'],
];

const STATS = [
  ['53 mil', 'Seguidores no LinkedIn'],
  ['2.000+', 'Líderes na Carta do Doc'],
  ['9+', 'Marcas e instituições'],
  ['3', 'Frentes: ciência, inovação, gestão'],
];

function Perfil() {
  return (
    <section className="section" id="sobre">
      <div className="container perfil__grid">
        <div className="reveal">
          <p className="eyebrow">Perfil</p>
          <h2 className="section-title">Na fronteira entre medicina, tecnologia e negócios.</h2>
          <p className="section-sub">
            Cardiologista de formação, pesquisador (PhD/USP, Stanford GSB) e
            empreendedor por escolha. Fui CMO de uma das maiores healthtechs do
            Brasil, fundei a Turi Saúde e hoje coordeno o programa de IA na Afya.
            Conecto pontos que outros ainda não conectaram.
          </p>
        </div>
        <ul className="creds reveal">
          {CREDENTIALS.map(([a, b]) => (
            <li key={a}>
              <span className="creds__dot"><Check /></span>
              <span><strong>{a}</strong>{b ? ' ' + b : ''}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="container">
        <div className="stats reveal">
          {STATS.map(([n, l]) => (
            <div className="stat" key={l}>
              <div className="stat__num">{n}</div>
              <div className="stat__label">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Imprensa ---------------- */
function Imprensa() {
  return (
    <section className="section section--muted">
      <div className="container press reveal">
        <p className="press__label">Aparece na imprensa</p>
        <div className="press__logos">
          <img src="assets/press.png"
            alt="Estadão, CBN, Valor Econômico, Exame, Valor Investe" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- Clientes ---------------- */
const CLIENTS = [
  ['einstein', 'Hospital Israelita Albert Einstein'],
  ['novo-nordisk', 'Novo Nordisk'],
  ['msd', 'MSD'],
  ['cristalia', 'Cristália'],
  ['libbs', 'Libbs'],
  ['unimed', 'Unimed'],
  ['santo-digital', 'Santo Digital'],
  ['informa', 'Informa Markets'],
  ['starbem', 'Starbem'],
];

function Clientes() {
  return (
    <section className="section" id="clientes">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Clientes</p>
          <h2 className="section-title">Marcas e instituições com atuação prévia.</h2>
        </div>
        <div className="logos reveal">
          {CLIENTS.map(([file, name]) => (
            <div className="logo-cell" key={file} title={name}>
              <img src={`assets/clients/${file}.png`} alt={name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.SiteHeader = SiteHeader;
window.Hero = Hero;
window.Perfil = Perfil;
window.Imprensa = Imprensa;
window.Clientes = Clientes;
window.scrollToId = scrollToId;
window.LinkedInGlyph = LinkedInGlyph;
