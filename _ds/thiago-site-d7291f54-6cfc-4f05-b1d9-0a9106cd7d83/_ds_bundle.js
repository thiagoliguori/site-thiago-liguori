/* @ds-bundle: {"format":3,"namespace":"DesignSystem_d7291f","components":[{"name":"Badge","sourcePath":"components/badges/Badge.jsx"},{"name":"Wordmark","sourcePath":"components/brand/Wordmark.jsx"},{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"Card","sourcePath":"components/cards/Card.jsx"},{"name":"NumberedCard","sourcePath":"components/cards/NumberedCard.jsx"},{"name":"Input","sourcePath":"components/inputs/Input.jsx"},{"name":"Navbar","sourcePath":"components/site/Navbar.jsx"},{"name":"NewsletterForm","sourcePath":"components/site/NewsletterForm.jsx"}],"sourceHashes":{"components/badges/Badge.jsx":"04a974acf347","components/brand/Wordmark.jsx":"37e27bda0f9c","components/buttons/Button.jsx":"9cf0443313ad","components/cards/Card.jsx":"3486df2de937","components/cards/NumberedCard.jsx":"fa1c0090584e","components/inputs/Input.jsx":"d596224967ef","components/site/Navbar.jsx":"7e76d819f243","components/site/NewsletterForm.jsx":"cb3ea2863e82","ui_kits/personal-site/app.jsx":"13e9e036cf9a","ui_kits/personal-site/image-slot.js":"9309434cb09c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_d7291f = window.DesignSystem_d7291f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/badges/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — small pill label. The signature use is the LinkedIn
 * "Top Voice" badge that floats over the hero portrait, but it
 * also covers neutral tags and status chips.
 */

const CSS = `
.tl-badge{
  display:inline-flex; align-items:center; gap:.45em;
  font-family:var(--font-sans); font-weight:var(--fw-bold);
  font-size:var(--fs-label); line-height:1; white-space:nowrap;
  padding:.5em .9em; border-radius:var(--radius-pill);
  border:1px solid transparent;
}
.tl-badge--sm{ font-size:var(--fs-caption); padding:.4em .7em; }
.tl-badge__icon{ display:inline-flex; }
.tl-badge__icon img,.tl-badge__icon svg{ display:block; width:1.25em; height:1.25em; }

.tl-badge--brand{ background:var(--blue-50); color:var(--text-ink); border-color:var(--blue-100); box-shadow:var(--shadow-sm); }
.tl-badge--solid{ background:var(--color-primary); color:var(--color-on-primary); }
.tl-badge--neutral{ background:var(--gray-100); color:var(--text-strong); }
.tl-badge--outline{ background:transparent; color:var(--text-body); border-color:var(--border-default); }
.tl-badge--success{ background:rgba(24,169,87,.12); color:var(--green-500); }
.tl-badge--inverse{ background:rgba(255,255,255,.12); color:var(--white); border-color:var(--border-on-dark); }
`;
if (typeof document !== 'undefined' && !document.getElementById('tl-badge-css')) {
  const s = document.createElement('style');
  s.id = 'tl-badge-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Badge({
  variant = 'neutral',
  size = 'md',
  icon,
  className = '',
  children,
  ...rest
}) {
  const cls = ['tl-badge', `tl-badge--${variant}`, size === 'sm' ? 'tl-badge--sm' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    className: "tl-badge__icon"
  }, icon), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/badges/Badge.jsx", error: String((e && e.message) || e) }); }

// components/brand/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Wordmark — the typographic Thiago Liguori logo. Hanken Grotesk
 * ExtraBold, wide tracking. Adapts to light and dark backgrounds.
 */

const CSS = `
.tl-wordmark{
  display:inline-block; font-family:var(--font-display);
  font-weight:var(--fw-extrabold); letter-spacing:var(--ls-overline);
  line-height:1; text-transform:uppercase; text-decoration:none;
  color:var(--text-ink); white-space:nowrap;
}
.tl-wordmark--onDark{ color:var(--white); }
.tl-wordmark--sm{ font-size:15px; }
.tl-wordmark--md{ font-size:18px; }
.tl-wordmark--lg{ font-size:26px; }
`;
if (typeof document !== 'undefined' && !document.getElementById('tl-wordmark-css')) {
  const s = document.createElement('style');
  s.id = 'tl-wordmark-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Wordmark({
  onDark = false,
  size = 'md',
  as = 'span',
  className = '',
  children = 'Thiago Liguori',
  ...rest
}) {
  const Tag = as;
  const cls = ['tl-wordmark', onDark ? 'tl-wordmark--onDark' : '', `tl-wordmark--${size}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — primary call-to-action for the Thiago Liguori brand.
 * Pill-shaped, Hanken Grotesk semibold. Solid blue is the hero CTA
 * ("Inscreva-se"); outline is the quiet nav action ("Login").
 */

const CSS = `
.tl-btn{
  --_h: var(--control-h-lg);
  display:inline-flex; align-items:center; justify-content:center; gap:.5em;
  height:var(--_h); padding:0 1.6em;
  font-family:var(--font-sans); font-weight:var(--fw-semibold); font-size:var(--fs-label);
  line-height:1; letter-spacing:0; white-space:nowrap;
  border-radius:var(--radius-pill); border:1.5px solid transparent;
  cursor:pointer; user-select:none; text-decoration:none;
  transition: background var(--dur-fast) var(--ease-out),
              color var(--dur-fast) var(--ease-out),
              border-color var(--dur-fast) var(--ease-out),
              transform var(--dur-fast) var(--ease-out),
              box-shadow var(--dur-base) var(--ease-out);
}
.tl-btn:active{ transform: translateY(1px) scale(.99); }
.tl-btn:focus-visible{ outline:none; box-shadow:0 0 0 3px var(--blue-200); }
.tl-btn[disabled]{ opacity:.45; pointer-events:none; }
.tl-btn--sm{ --_h: var(--control-h-sm); font-size:var(--fs-caption); padding:0 1.1em; }
.tl-btn--md{ --_h: var(--control-h-md); }
.tl-btn--lg{ --_h: var(--control-h-lg); }
.tl-btn--block{ width:100%; }

.tl-btn--primary{ background:var(--color-primary); color:var(--color-on-primary); box-shadow:var(--shadow-primary); }
.tl-btn--primary:hover{ background:var(--color-primary-hover); }
.tl-btn--primary:active{ background:var(--color-primary-press); }

.tl-btn--outline{ background:transparent; color:var(--text-ink); border-color:var(--border-default); }
.tl-btn--outline:hover{ border-color:var(--text-ink); }

.tl-btn--ghost{ background:transparent; color:var(--text-body); }
.tl-btn--ghost:hover{ background:var(--gray-100); color:var(--text-ink); }

.tl-btn--inverse{ background:var(--white); color:var(--navy-900); }
.tl-btn--inverse:hover{ background:var(--blue-50); }

/* On dark surfaces, outline switches to light hairline */
.tl-btn--outline.tl-on-dark{ color:var(--white); border-color:var(--border-on-dark); }
.tl-btn--outline.tl-on-dark:hover{ border-color:var(--white); }
`;
if (typeof document !== 'undefined' && !document.getElementById('tl-btn-css')) {
  const s = document.createElement('style');
  s.id = 'tl-btn-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Button({
  variant = 'primary',
  size = 'lg',
  block = false,
  onDark = false,
  as = 'button',
  className = '',
  children,
  ...rest
}) {
  const Tag = as;
  const cls = ['tl-btn', `tl-btn--${variant}`, `tl-btn--${size}`, block ? 'tl-btn--block' : '', onDark ? 'tl-on-dark' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/cards/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — surface container. Three tones matching the brand's
 * section system: light (default), blue (accent sections),
 * navy (inverted). Soft rounding, cool shadow, optional hover lift.
 */

const CSS = `
.tl-card{
  position:relative;
  background:var(--surface-card);
  border-radius:var(--radius-lg);
  padding:var(--space-6);
  box-shadow:var(--shadow-md);
  font-family:var(--font-sans);
  color:var(--text-body);
  transition: transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out);
}
.tl-card--blue{ background:var(--blue-500); color:var(--text-on-primary); box-shadow:0 14px 34px rgba(16,42,120,.28); }
.tl-card--navy{ background:var(--navy-900); color:var(--text-on-dark); box-shadow:var(--shadow-lg); }
.tl-card--flat{ box-shadow:var(--shadow-inset-hairline); }
.tl-card--pad-lg{ padding:var(--space-8); }
.tl-card--interactive{ cursor:pointer; }
.tl-card--interactive:hover{ transform:translateY(-3px); box-shadow:var(--shadow-lg); }
`;
if (typeof document !== 'undefined' && !document.getElementById('tl-card-css')) {
  const s = document.createElement('style');
  s.id = 'tl-card-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Card({
  tone = 'light',
  flat = false,
  padLg = false,
  interactive = false,
  className = '',
  children,
  ...rest
}) {
  const cls = ['tl-card', tone !== 'light' ? `tl-card--${tone}` : '', flat ? 'tl-card--flat' : '', padLg ? 'tl-card--pad-lg' : '', interactive ? 'tl-card--interactive' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/Card.jsx", error: String((e && e.message) || e) }); }

// components/cards/NumberedCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NumberedCard — the "Três formas que eu posso te ajudar" feature
 * card: a large index number beside a title and optional description.
 * Renders on the blue accent surface by default.
 */

const CSS = `
.tl-numcard{ display:grid; grid-template-columns:auto 1fr; gap:var(--space-4); align-items:start; min-height:180px; }
.tl-numcard__index{ font-family:var(--font-display); font-weight:var(--fw-bold); font-size:1.25rem; line-height:1; opacity:.92; font-variant-numeric:tabular-nums; }
.tl-numcard__body{ display:flex; flex-direction:column; gap:var(--space-3); }
.tl-numcard__title{ font-family:var(--font-display); font-weight:var(--fw-bold); font-size:var(--fs-h3); line-height:var(--lh-snug); letter-spacing:var(--ls-tight); margin:0; }
.tl-numcard__desc{ font-family:var(--font-serif); font-size:var(--fs-body-sm); line-height:var(--lh-relaxed); margin:0; opacity:.86; }
`;
if (typeof document !== 'undefined' && !document.getElementById('tl-numcard-css')) {
  const s = document.createElement('style');
  s.id = 'tl-numcard-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function NumberedCard({
  index = '01',
  title,
  description,
  tone = 'blue',
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    tone: tone,
    padLg: true,
    className: "tl-numcard"
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "tl-numcard__index"
  }, index), /*#__PURE__*/React.createElement("div", {
    className: "tl-numcard__body"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "tl-numcard__title"
  }, title), description && /*#__PURE__*/React.createElement("p", {
    className: "tl-numcard__desc"
  }, description)));
}
Object.assign(__ds_scope, { NumberedCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/NumberedCard.jsx", error: String((e && e.message) || e) }); }

// components/inputs/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — pill text field used in newsletter sign-up forms.
 * White fill, hairline border, generous rounding. Works on light
 * and dark (navy) surfaces.
 */

const CSS = `
.tl-field{ display:flex; flex-direction:column; gap:.5rem; font-family:var(--font-sans); }
.tl-field__label{ font-size:var(--fs-label); font-weight:var(--fw-semibold); color:var(--text-strong); }
.tl-field.tl-on-dark .tl-field__label{ color:var(--text-on-dark); }
.tl-input{
  height:var(--control-h-lg); width:100%;
  padding:0 1.25rem;
  font-family:var(--font-sans); font-size:var(--fs-body); color:var(--text-ink);
  background:var(--white); border:1.5px solid var(--border-default);
  border-radius:var(--radius-pill); outline:none;
  transition: border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out);
}
.tl-input::placeholder{ color:var(--text-muted); }
.tl-input:hover{ border-color:var(--border-strong); }
.tl-input:focus{ border-color:var(--color-primary); box-shadow:0 0 0 3px var(--blue-100); }
.tl-input[aria-invalid="true"]{ border-color:var(--red-500); }
.tl-input[aria-invalid="true"]:focus{ box-shadow:0 0 0 3px rgba(229,72,77,.18); }
.tl-input:disabled{ background:var(--gray-50); color:var(--text-muted); cursor:not-allowed; }
.tl-field.tl-on-dark .tl-input{ border-color:transparent; box-shadow:var(--shadow-sm); }
.tl-field.tl-on-dark .tl-input:focus{ box-shadow:0 0 0 3px var(--blue-300); }
.tl-field__hint{ font-size:var(--fs-caption); color:var(--text-muted); }
.tl-field.tl-on-dark .tl-field__hint{ color:var(--text-on-dark-muted); }
.tl-field__hint--error{ color:var(--red-500); }
`;
if (typeof document !== 'undefined' && !document.getElementById('tl-input-css')) {
  const s = document.createElement('style');
  s.id = 'tl-input-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Input({
  label,
  hint,
  error,
  onDark = false,
  id,
  className = '',
  ...rest
}) {
  const fid = id || (label ? 'tl-' + String(label).replace(/\s+/g, '-').toLowerCase() : undefined);
  return /*#__PURE__*/React.createElement("label", {
    className: ['tl-field', onDark ? 'tl-on-dark' : '', className].filter(Boolean).join(' '),
    htmlFor: fid
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "tl-field__label"
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    className: "tl-input",
    "aria-invalid": error ? 'true' : undefined
  }, rest)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    className: ['tl-field__hint', error ? 'tl-field__hint--error' : ''].filter(Boolean).join(' ')
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/inputs/Input.jsx", error: String((e && e.message) || e) }); }

// components/site/Navbar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Navbar — the site header: wordmark left, centered/right nav links,
 * outlined Login pill. Transparent over hero and navy variants.
 */

const CSS = `
.tl-nav{
  display:flex; align-items:center; justify-content:space-between; gap:var(--space-8);
  padding:var(--space-5) var(--gutter);
  font-family:var(--font-sans);
}
.tl-nav__links{ display:flex; align-items:center; gap:var(--space-8); }
.tl-nav__link{
  font-size:var(--fs-body); font-weight:var(--fw-medium); color:var(--text-body);
  text-decoration:none; cursor:pointer; position:relative; padding:2px 0;
  transition: color var(--dur-fast) var(--ease-out);
}
.tl-nav__link:hover{ color:var(--text-ink); }
.tl-nav__link--active{ color:var(--text-ink); }
.tl-nav__link--active::after{ content:""; position:absolute; left:0; right:0; bottom:-3px; height:2px; background:currentColor; border-radius:2px; }
.tl-nav.tl-on-dark .tl-nav__link{ color:var(--text-on-dark-muted); }
.tl-nav.tl-on-dark .tl-nav__link:hover,
.tl-nav.tl-on-dark .tl-nav__link--active{ color:var(--white); }
.tl-nav__right{ display:flex; align-items:center; gap:var(--space-4); }
`;
if (typeof document !== 'undefined' && !document.getElementById('tl-nav-css')) {
  const s = document.createElement('style');
  s.id = 'tl-nav-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
const DEFAULT_LINKS = [{
  label: 'Sobre',
  href: '#sobre'
}, {
  label: 'Newsletter',
  href: '#newsletter'
}, {
  label: 'Cursos',
  href: '#cursos'
}];
function Navbar({
  links = DEFAULT_LINKS,
  active,
  onDark = false,
  onNavigate,
  cta = 'Login',
  onCta,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    className: ['tl-nav', onDark ? 'tl-on-dark' : '', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    onDark: onDark,
    size: "md"
  }), /*#__PURE__*/React.createElement("div", {
    className: "tl-nav__links"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href || '#',
    className: ['tl-nav__link', active === l.label ? 'tl-nav__link--active' : ''].filter(Boolean).join(' '),
    onClick: e => {
      if (onNavigate) {
        e.preventDefault();
        onNavigate(l);
      }
    }
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    className: "tl-nav__right"
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "outline",
    size: "md",
    onDark: onDark,
    onClick: onCta
  }, cta)));
}
Object.assign(__ds_scope, { Navbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/Navbar.jsx", error: String((e && e.message) || e) }); }

// components/site/NewsletterForm.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NewsletterForm — the Carta do Doc sign-up: a pill e-mail input
 * stacked above a full-width "Inscreva-se" button. Handles a simple
 * submitted state. Light or on-dark (navy) styling.
 */

const CSS = `
.tl-newsletter{ display:flex; flex-direction:column; gap:var(--space-3); width:100%; max-width:420px; font-family:var(--font-sans); }
.tl-newsletter__done{
  display:flex; align-items:center; gap:.6em; justify-content:center;
  height:var(--control-h-lg); padding:0 1.25rem; border-radius:var(--radius-pill);
  background:rgba(24,169,87,.12); color:var(--green-500);
  font-weight:var(--fw-semibold); font-size:var(--fs-body);
}
.tl-newsletter.tl-on-dark .tl-newsletter__done{ background:rgba(255,255,255,.12); color:var(--white); }
`;
if (typeof document !== 'undefined' && !document.getElementById('tl-newsletter-css')) {
  const s = document.createElement('style');
  s.id = 'tl-newsletter-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function NewsletterForm({
  onDark = false,
  placeholder = 'E-mail',
  cta = 'Inscreva-se',
  done = 'Pronto! Confira sua caixa de entrada.',
  onSubmit,
  className = '',
  ...rest
}) {
  const [value, setValue] = React.useState('');
  const [sent, setSent] = React.useState(false);
  const submit = e => {
    e.preventDefault();
    if (!value.trim()) return;
    if (onSubmit) onSubmit(value);
    setSent(true);
  };
  if (sent) {
    return /*#__PURE__*/React.createElement("div", {
      className: ['tl-newsletter', onDark ? 'tl-on-dark' : '', className].filter(Boolean).join(' ')
    }, /*#__PURE__*/React.createElement("div", {
      className: "tl-newsletter__done"
    }, done));
  }
  return /*#__PURE__*/React.createElement("form", _extends({
    className: ['tl-newsletter', onDark ? 'tl-on-dark' : '', className].filter(Boolean).join(' '),
    onSubmit: submit
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Input, {
    type: "email",
    placeholder: placeholder,
    "aria-label": placeholder,
    onDark: onDark,
    value: value,
    onChange: e => setValue(e.target.value)
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    type: "submit",
    variant: "primary",
    block: true
  }, cta));
}
Object.assign(__ds_scope, { NewsletterForm });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/NewsletterForm.jsx", error: String((e && e.message) || e) }); }

// ui_kits/personal-site/app.jsx
try { (() => {
// Personal site UI kit — single app bundle.
// All section components + router in one babel script so definition
// order and scope are guaranteed (multiple external text/babel scripts
// are not order-guaranteed).
const {
  Button,
  Badge,
  Input,
  Navbar,
  NewsletterForm,
  NumberedCard,
  Wordmark
} = window.DesignSystem_d7291f;

/* ---------------- Hero ---------------- */
function Hero({
  onSubscribe
}) {
  const li = /*#__PURE__*/React.createElement("img", {
    src: "assets/icons/linkedin.svg",
    alt: ""
  });
  return /*#__PURE__*/React.createElement("section", {
    className: "hero",
    id: "topo"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__copy"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "hero__title"
  }, "Sa\xFAde e inova\xE7\xE3o para ", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "l\xEDderes")), /*#__PURE__*/React.createElement("p", {
    className: "hero__lead"
  }, "Estrat\xE9gias pr\xE1ticas sobre o mercado de sa\xFAde, inova\xE7\xE3o e tecnologia \u2014 para quem lidera a transforma\xE7\xE3o do setor."), /*#__PURE__*/React.createElement("div", {
    className: "hero__actions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onSubscribe
  }, "Assinar a Carta do Doc"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    as: "a",
    href: "#cursos"
  }, "Ver cursos"))), /*#__PURE__*/React.createElement("div", {
    className: "hero__media"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__glow"
  }), /*#__PURE__*/React.createElement("image-slot", {
    id: "hero-portrait",
    class: "hero__portrait",
    shape: "rounded",
    radius: "20",
    placeholder: "Arraste seu retrato"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero__badge"
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "brand",
    icon: li
  }, "Top Voice")))));
}

/* ---------------- Marketing sections ---------------- */
function PressStrip() {
  return /*#__PURE__*/React.createElement("section", {
    className: "press",
    "aria-label": "Citado em"
  }, /*#__PURE__*/React.createElement("div", {
    className: "press__row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "press__logo serif",
    style: {
      fontSize: '30px'
    }
  }, "Valor", /*#__PURE__*/React.createElement("span", {
    className: "tiny",
    style: {
      marginLeft: '.3em'
    }
  }, "Econ\xF4mico")), /*#__PURE__*/React.createElement("span", {
    className: "press__logo serif",
    style: {
      fontSize: '30px',
      fontStyle: 'italic'
    }
  }, "exame."), /*#__PURE__*/React.createElement("span", {
    className: "press__logo",
    style: {
      fontSize: '30px',
      letterSpacing: '.02em'
    }
  }, "CBN"), /*#__PURE__*/React.createElement("span", {
    className: "press__logo",
    style: {
      fontSize: '22px',
      lineHeight: 1
    }
  }, "LinkedIn", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500
    }
  }, "Not\xEDcias"))));
}
function NewsletterCTA({
  id
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: id
  }, /*#__PURE__*/React.createElement("div", {
    className: "container cta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cta__copy"
  }, /*#__PURE__*/React.createElement("h2", null, "Quer participar?"), /*#__PURE__*/React.createElement("p", null, "Junte-se a 1.000+ l\xEDderes em sa\xFAde na Carta do Doc para dicas, estrat\xE9gias e recursos sobre o mercado de sa\xFAde e inova\xE7\xE3o.")), /*#__PURE__*/React.createElement("div", {
    className: "cta__form"
  }, /*#__PURE__*/React.createElement("h2", null, "Comece aqui"), /*#__PURE__*/React.createElement(NewsletterForm, null))));
}
const WAYS = [{
  index: '01',
  title: 'Newsletter semanal Carta do Doc',
  description: 'Todo domingo à tarde, eu compartilho um guia prático para navegar no mercado de saúde e inovação.'
}, {
  index: '02',
  title: 'Curso LinkedIn para líderes',
  description: 'Construa autoridade e presença no LinkedIn com um método pensado para líderes de saúde.'
}, {
  index: '03',
  title: 'Mentoria — LinkedIn para líderes',
  description: 'Acompanhamento próximo para acelerar o seu posicionamento e a sua rede.'
}, {
  index: '04',
  title: 'Promova sua empresa',
  description: 'Anuncie na minha newsletter e alcance 1.000+ líderes do setor de saúde.'
}];
function WaysToHelp({
  id
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "ways section",
    id: id
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "ways__title"
  }, "Tr\xEAs formas que eu posso te ajudar"), /*#__PURE__*/React.createElement("div", {
    className: "ways__grid"
  }, WAYS.map(w => /*#__PURE__*/React.createElement(NumberedCard, {
    key: w.index,
    index: w.index,
    title: w.title,
    description: w.description
  })))));
}
function AboutBanner({
  id
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "about section",
    id: id
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("p", {
    className: "about__quote"
  }, "Ol\xE1, eu sou o Thiago Liguori. Eu ajudo l\xEDderes de sa\xFAde na sua jornada de crescimento.")));
}
function SiteFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container footer__row"
  }, /*#__PURE__*/React.createElement(Wordmark, {
    onDark: true,
    size: "md"
  }), /*#__PURE__*/React.createElement("nav", {
    className: "footer__links"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#sobre"
  }, "Sobre"), /*#__PURE__*/React.createElement("a", {
    href: "#newsletter"
  }, "Newsletter"), /*#__PURE__*/React.createElement("a", {
    href: "#cursos"
  }, "Cursos"), /*#__PURE__*/React.createElement("a", {
    href: "#contato"
  }, "Contato")), /*#__PURE__*/React.createElement("span", {
    className: "footer__legal"
  }, "\xA9 2026 Thiago Liguori")));
}

/* ---------------- Newsletter page ---------------- */
function NewsletterPage({
  onNavigate,
  onLogin
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "npage"
  }, /*#__PURE__*/React.createElement(Navbar, {
    active: "Newsletter",
    onDark: true,
    onNavigate: l => onNavigate(l.label === 'Newsletter' ? 'newsletter' : 'home'),
    onCta: onLogin
  }), /*#__PURE__*/React.createElement("div", {
    className: "npage__hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "npage__avatar"
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: "news-avatar",
    shape: "circle",
    placeholder: "Retrato"
  })), /*#__PURE__*/React.createElement("h1", {
    className: "npage__title"
  }, "Carta do Doc"), /*#__PURE__*/React.createElement("p", {
    className: "npage__lead"
  }, "Insights semanais sobre o mercado de sa\xFAde, com um toque de inova\xE7\xE3o e tecnologia no caminho."), /*#__PURE__*/React.createElement(NewsletterForm, {
    onDark: true
  })));
}

/* ---------------- Login modal ---------------- */
function LoginModal({
  open,
  onClose
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "modal__scrim",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    className: "modal__close",
    "aria-label": "Fechar",
    onClick: onClose
  }, "\xD7"), /*#__PURE__*/React.createElement("h2", {
    className: "modal__title"
  }, "Entrar"), /*#__PURE__*/React.createElement("p", {
    className: "modal__sub"
  }, "Acesse seus cursos e a \xE1rea de membros."), /*#__PURE__*/React.createElement("form", {
    className: "modal__form",
    onSubmit: e => {
      e.preventDefault();
      onClose();
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "E-mail",
    type: "email",
    placeholder: "voce@email.com"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Senha",
    type: "password",
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "primary",
    block: true
  }, "Entrar"))));
}

/* ---------------- App / router ---------------- */
function HomePage({
  onNavigate,
  onLogin,
  onSubscribe
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "site"
  }, /*#__PURE__*/React.createElement(Navbar, {
    active: "Sobre",
    onNavigate: l => onNavigate(l.label === 'Newsletter' ? 'newsletter' : 'home'),
    onCta: onLogin
  }), /*#__PURE__*/React.createElement(Hero, {
    onSubscribe: onSubscribe
  }), /*#__PURE__*/React.createElement(NewsletterCTA, {
    id: "newsletter"
  }), /*#__PURE__*/React.createElement(PressStrip, null), /*#__PURE__*/React.createElement(AboutBanner, {
    id: "sobre"
  }), /*#__PURE__*/React.createElement(WaysToHelp, {
    id: "cursos"
  }), /*#__PURE__*/React.createElement(SiteFooter, null));
}
function App() {
  const [route, setRoute] = React.useState('home');
  const [login, setLogin] = React.useState(false);
  const go = r => {
    setRoute(r);
    window.scrollTo({
      top: 0
    });
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, route === 'home' ? /*#__PURE__*/React.createElement(HomePage, {
    onNavigate: go,
    onLogin: () => setLogin(true),
    onSubscribe: () => go('newsletter')
  }) : /*#__PURE__*/React.createElement(NewsletterPage, {
    onNavigate: go,
    onLogin: () => setLogin(true)
  }), /*#__PURE__*/React.createElement(LoginModal, {
    open: login,
    onClose: () => setLogin(false)
  }));
}

/* ---------------- Mount (idempotent) ---------------- */
function mountApp() {
  const el = document.getElementById('root');
  const ns = window.DesignSystem_d7291f;
  // Wait until the DS bundle namespace is fully available.
  if (!el || !ns || !ns.Navbar || !ns.NumberedCard) {
    return requestAnimationFrame(mountApp);
  }
  // Guard against the preview harness evaluating this script twice.
  if (window.__tlRoot) return;
  window.__tlRoot = ReactDOM.createRoot(el);
  window.__tlRoot.render(/*#__PURE__*/React.createElement(App, null));
}
mountApp();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/personal-site/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/personal-site/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever you want the user to
 * supply an image. You control the slot's shape and size; the user fills it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The host bridge only allows sidecar writes at the project root, so the
 * HTML that uses this component is assumed to live at the project root too
 * (same constraint as design_canvas.jsx).
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          object-fit: cover | contain | fill.       (default 'cover')
 *                With cover (the default) double-clicking the filled slot
 *                enters a reframe mode: the whole image spills past the mask
 *                (translucent outside, opaque inside), drag to reposition,
 *                corner-drag to scale. The crop persists alongside the image
 *                in the sidecar. contain/fill stay static.
 *   position     object-position for fit=contain|fill.     (default '50% 50%')
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. A user drop overrides
 *                it; clearing the drop reveals src again.
 *
 * Size and layout come from ordinary CSS on the element — width/height
 * inline or from a parent grid — so it composes with any layout.
 *
 * Usage:
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet = ':host{display:inline-block;position:relative;vertical-align:top;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;color:rgba(0,0,0,.55);width:240px;height:160px}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(0,0,0,.04)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  '.spill{position:absolute;transform:translate(-50%,-50%);display:none;z-index:1;' + '  cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .spill{display:block}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px;text-decoration-color:rgba(0,0,0,.25)}' + '.empty:hover .sub u{color:rgba(0,0,0,.75);text-decoration-color:currentColor}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed rgba(0,0,0,.25);' + '  transition:border-color .12s}' + ':host([data-over]) .ring{border-color:#c96442}' + ':host([data-filled]) .ring{display:none}' +
  // Controls sit BELOW the mask (top:100%), absolutely positioned so the
  // author-declared slot height is unaffected. The gap is padding, not a
  // top offset, so the hover target stays contiguous with the frame.
  '.ctl{position:absolute;top:100%;left:50%;transform:translateX(-50%);padding-top:8px;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'position', 'placeholder', 'src', 'id'];
    }
    constructor() {
      super();
      const root = this.attachShadow({
        mode: 'open'
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="ring" part="ring"></div>' + '</div>' + '<div class="spill">' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' + '<div class="ctl"><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="clear" title="Remove image">Remove</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (act === 'replace') {
          this._exitReframe(true);
          this._input.click();
        }
        if (act === 'clear') {
          this._exitReframe(false);
          this._gen++;
          this._local = null;
          if (this.id) setSlot(this.id, null);else this._render();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      this._img.addEventListener('load', () => this._applyView());
      // Gated on editable + fit=cover so share links and contain/fill slots
      // stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const base = Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (commit) this._commitView();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is only meaningful for fit=cover — contain/fill
    // keep the old object-fit path and double-click is a no-op.
    _reframes() {
      return this.hasAttribute('data-filled') && (this.getAttribute('fit') || 'cover') === 'cover';
    }

    // Cover-baseline geometry, shared by clamp/apply/resize. Null until the
    // img has loaded (naturalWidth is 0 before that) or when the slot has no
    // layout box — ResizeObserver fires with a 0×0 rect under display:none,
    // and clamping against a degenerate 1×1 frame would silently pull the
    // stored pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      return {
        iw,
        ih,
        fw,
        fh,
        base: Math.max(fw / iw, fh / ih)
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      const fit = this.getAttribute('fit') || 'cover';
      if (fit !== 'cover' || !g) {
        // Non-cover, or dimensions not known yet (before img load).
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = fit;
        this._img.style.objectPosition = this.getAttribute('position') || '50% 50%';
        return;
      }
      // Cover baseline: img fills the frame on its tighter axis at s=1, so
      // pan works immediately on the overflowing axis without zooming first.
      // Width/height and left/top are all frame-% — depends only on the
      // frame aspect ratio, so a responsive resize keeps the same crop. The
      // spill layer mirrors the same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      this._spill.style.width = w;
      this._spill.style.height = h;
      this._spill.style.left = l;
      this._spill.style.top = t;
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      if (url) {
        if (this._img.getAttribute('src') !== url) {
          this._img.src = url;
          this._ghost.src = url;
        }
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        this._empty.style.display = 'flex';
        this.removeAttribute('data-filled');
      }
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/personal-site/image-slot.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.NumberedCard = __ds_scope.NumberedCard;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Navbar = __ds_scope.Navbar;

__ds_ns.NewsletterForm = __ds_scope.NewsletterForm;

})();
