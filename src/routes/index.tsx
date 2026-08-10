import { createFileRoute } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Twitter, Music2, Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "@/components/portfolio/Logo";
import {
  MetaIcon,
  GoogleAdsIcon,
  TikTokIcon,
  XIcon,
  PinterestIcon,
  SnapchatIcon,
} from "@/components/portfolio/PlatformIcons";
import theSistersLogo from "@/assets/the-sisters.png.asset.json";
import gaanaLogo from "@/assets/gaana.jpg.asset.json";
import dsTravelLogo from "@/assets/ds-travel.jpg.asset.json";
import angelinaLogo from "@/assets/angelina-shapper.jpg.asset.json";
import orbisLogo from "@/assets/orbis-creativa.jpg.asset.json";
import portrait from "@/assets/aroman-portrait.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aroman EMETSHU — Media Buyer & Performance Marketing" },
      {
        name: "description",
        content:
          "Portfolio d'Aroman EMETSHU, Media Buyer et Performance Marketer à Brazzaville : stratégie publicitaire, acquisition, optimisation et scaling sur Meta, Google, TikTok, X, Pinterest et Snapchat.",
      },
      { property: "og:title", content: "Aroman EMETSHU — Media Buyer & Performance Marketing" },
      {
        property: "og:description",
        content:
          "Media Buyer / Performance Marketer : campagnes publicitaires orientées performance sur les principales plateformes digitales.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const stats = [
  { value: "11+", label: "ans dans le digital" },
  { value: "5+", label: "ans en Media Buying" },
  { value: "75+", label: "projets accompagnés" },
];

const expertise = [
  { title: "Stratégie publicitaire", desc: "Construction du plan média et des axes d'acquisition." },
  { title: "Acquisition", desc: "Génération de trafic et de demandes qualifiées." },
  { title: "Gestion de budget", desc: "Répartition, arbitrage et contrôle des dépenses média." },
  { title: "Ciblage", desc: "Définition et segmentation des audiences." },
  { title: "Retargeting", desc: "Séquences de reciblage sur les audiences chaudes." },
  { title: "Conversion", desc: "Alignement offre, message et parcours d'achat." },
  { title: "Analyse de performance", desc: "Lecture des indicateurs et des signaux de campagne." },
  { title: "Reporting", desc: "Restitution claire et lisible des résultats." },
  { title: "Optimisation", desc: "Itérations continues sur créatifs, audiences et enchères." },
  { title: "Scaling", desc: "Montée en budget maîtrisée sur les campagnes rentables." },
  { title: "Audit", desc: "Diagnostic des comptes publicitaires existants." },
  { title: "Conseil", desc: "Accompagnement sur les décisions média et acquisition." },
];

const platforms = [
  { name: "Meta Ads", detail: "Facebook / Instagram", Icon: MetaIcon },
  { name: "Google Ads", detail: "Search / Display / YouTube", Icon: GoogleAdsIcon },
  { name: "TikTok Ads", detail: "Vidéo courte & créatifs natifs", Icon: TikTokIcon },
  { name: "X Ads", detail: "Twitter", Icon: XIcon },
  { name: "Pinterest Ads", detail: "Découverte & intention visuelle", Icon: PinterestIcon },
  { name: "Snapchat Ads", detail: "Audiences jeunes & formats verticaux", Icon: SnapchatIcon },
];

const method = [
  { num: "01", title: "Comprendre", desc: "Business, offre, marché, audience." },
  { num: "02", title: "Construire", desc: "Stratégie, ciblage, campagnes, créatifs." },
  { num: "03", title: "Mesurer", desc: "CTR, CPC, CPA, ROAS, conversions." },
  { num: "04", title: "Optimiser", desc: "Tests, analyse, arbitrage, scaling." },
];

const collaborations = [
  {
    name: "The Sisters Africa",
    logo: theSistersLogo.url,
    desc: "Pilotage de campagnes publicitaires et suivi des performances.",
  },
  {
    name: "GAANA",
    logo: gaanaLogo.url,
    desc: "Gestion des campagnes d'acquisition et optimisation des audiences.",
  },
  {
    name: "DS Travel",
    logo: dsTravelLogo.url,
    desc: "Campagnes de visibilité et de génération de demandes.",
  },
  {
    name: "Angelina Shapper",
    logo: angelinaLogo.url,
    desc: "Campagnes de vente en ligne, retargeting et scaling.",
  },
  {
    name: "Orbis Creative Agency",
    logo: orbisLogo.url,
    desc: "Accompagnement média et suivi des campagnes clients.",
  },
];

const caseMetrics = [
  { value: "150", label: "ventes" },
  { value: "4,2 %", label: "CTR" },
  { value: "0,28 $", label: "CPC" },
  { value: "5,7x", label: "ROAS" },
];

const ecosystem = [
  "Meta Ads Manager",
  "Google Ads",
  "TikTok Ads Manager",
  "Snapchat Ads Manager",
  "X Ads Manager",
  "Pinterest Ads",
  "Analytics & Reporting",
  "Audience & Retargeting",
  "Conversion & Acquisition",
  "E-commerce & Entrepreneurs",
];

const socials = [
  { label: "Facebook", Icon: Facebook },
  { label: "Instagram", Icon: Instagram },
  { label: "X / Twitter", Icon: Twitter },
  { label: "LinkedIn", Icon: Linkedin },
  { label: "TikTok", Icon: Music2 },
];

function SectionTag({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="rule-gold" />
      <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
        {children}
      </span>
    </div>
  );
}

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-6xl items-center px-6 md:px-10">
          <Logo className="h-11 w-auto" />
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:px-10 md:pt-32 md:pb-32">
          <div className="fade-up">
            <SectionTag>Media Buyer</SectionTag>
            <h1 className="mt-8 text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
              Aroman
              <span className="block font-light text-muted-foreground">EMETSHU</span>
            </h1>
            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Je conçois, pilote et optimise des campagnes publicitaires orientées performance sur
              les principales plateformes digitales.
            </p>
          </div>

          <dl className="mt-16 grid grid-cols-1 gap-px overflow-hidden border-y border-border sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="bg-background py-8 sm:px-2">
                <dt className="text-4xl font-extrabold tracking-tight md:text-5xl">{s.value}</dt>
                <dd className="mt-2 text-sm uppercase tracking-[0.18em] text-muted-foreground">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* PROFIL */}
        <section className="border-t border-border bg-secondary/40">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:px-10 md:py-32">
            <div>
              <SectionTag>Profil</SectionTag>
              <h2 className="mt-6 text-3xl font-bold leading-tight md:text-4xl">
                Media Buyer &<br className="hidden md:block" /> Performance Marketer
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                J'accompagne entreprises, marques et entrepreneurs dans la mise en place de
                dispositifs publicitaires structurés. Mon travail commence toujours par la
                compréhension du business : l'offre, la marge, le marché et l'audience réelle.
              </p>
              <p>
                Vient ensuite la stratégie : quelles plateformes, quels messages, quels formats,
                quel budget. Chaque campagne est traitée comme un système de test — hypothèses
                claires, variables isolées, lecture rigoureuse des données.
              </p>
              <p>
                L'optimisation est continue : arbitrage des budgets, itération sur les créatifs et
                les audiences, puis scaling uniquement sur ce qui est démontré rentable.
              </p>
            </div>
          </div>
        </section>

        {/* EXPERTISE */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
            <SectionTag>Expertise</SectionTag>
            <h2 className="mt-6 max-w-xl text-3xl font-bold leading-tight md:text-4xl">
              Domaines d'intervention
            </h2>
            <div className="mt-14 grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {expertise.map((e, i) => (
                <div key={e.title} className="border-t border-border pt-5">
                  <span className="text-xs font-semibold tracking-[0.2em] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold">{e.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PLATEFORMES */}
        <section className="border-t border-border bg-primary text-primary-foreground">
          <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
            <div className="flex items-center gap-3">
              <span className="rule-gold" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary-foreground/60">
                Plateformes publicitaires
              </span>
            </div>
            <h2 className="mt-6 max-w-xl text-3xl font-bold leading-tight md:text-4xl">
              Six écosystèmes maîtrisés
            </h2>
            <div className="mt-14 grid grid-cols-1 gap-px bg-primary-foreground/15 sm:grid-cols-2 lg:grid-cols-3">
              {platforms.map((p) => (
                <div
                  key={p.name}
                  className="group bg-primary p-8 transition-colors duration-300 hover:bg-primary-foreground/5"
                >
                  {/* Emplacement logo plateforme — remplacer par une image si besoin */}
                  <div className="grid h-12 w-12 shrink-0 place-items-center border border-primary-foreground/25 text-lg font-bold text-accent">
                    {p.mark}
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">{p.name}</h3>
                  <p className="mt-1 text-sm text-primary-foreground/60">{p.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MÉTHODE */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
            <SectionTag>Méthode</SectionTag>
            <h2 className="mt-6 max-w-xl text-3xl font-bold leading-tight md:text-4xl">
              Un process en quatre temps
            </h2>
            <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {method.map((m) => (
                <div key={m.num} className="border-t-2 border-foreground pt-6">
                  <span className="text-5xl font-extrabold tracking-tight text-accent">
                    {m.num}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COLLABORATIONS */}
        <section className="border-t border-border bg-secondary/40">
          <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
            <SectionTag>Collaborations récentes</SectionTag>
            <h2 className="mt-6 max-w-xl text-3xl font-bold leading-tight md:text-4xl">
              Marques et structures accompagnées
            </h2>
            <div className="mt-14 grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
              {collaborations.map((c) => (
                <article key={c.name} className="bg-background p-8">
                  {/* Emplacement logo client — remplacer ce bloc par <img src=... /> */}
                  <div className="grid h-16 w-16 place-items-center border border-border bg-secondary text-lg font-bold tracking-tight text-muted-foreground">
                    {c.name
                      .split(" ")
                      .slice(0, 2)
                      .map((w) => w[0])
                      .join("")}
                  </div>
                  <h3 className="mt-6 text-lg font-semibold">{c.name}</h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    Media Buyer
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CASE STUDY */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
            <SectionTag>Résultats · Case study</SectionTag>
            <h2 className="mt-6 text-3xl font-bold leading-tight md:text-4xl">Angelina Shapper</h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Campagnes publicitaires de vente en ligne pilotées de bout en bout : ciblage,
              créatifs, retargeting et optimisation continue.
            </p>
            <dl className="mt-14 grid grid-cols-2 gap-px bg-border lg:grid-cols-4">
              {caseMetrics.map((m) => (
                <div key={m.label} className="bg-background px-6 py-10">
                  <dt className="text-4xl font-extrabold tracking-tight md:text-5xl">{m.value}</dt>
                  <dd className="mt-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    {m.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ÉCOSYSTÈME */}
        <section className="border-t border-border bg-secondary/40">
          <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">
            <SectionTag>Écosystème</SectionTag>
            <ul className="mt-10 flex flex-wrap gap-3">
              {ecosystem.map((e) => (
                <li
                  key={e}
                  className="border border-border bg-background px-5 py-3 text-sm font-medium tracking-tight"
                >
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* PROFIL FINAL */}
        <section className="border-t border-border">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[minmax(0,320px)_minmax(0,1fr)] md:px-10 md:py-32">
            {/* Emplacement photo professionnelle — remplacer par <img src=... alt="Aroman EMETSHU" /> */}
            <div className="aspect-[4/5] w-full max-w-[320px] border border-border bg-secondary">
              <div className="grid h-full place-items-center px-6 text-center text-xs uppercase tracking-[0.22em] text-muted-foreground">
                Photo professionnelle
              </div>
            </div>
            <div className="min-w-0">
              <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
                Aroman EMETSHU
              </h2>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                Media Buyer · Performance Marketing
              </p>
              <p className="mt-6 flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                Brazzaville, Congo
              </p>

              <dl className="mt-10 space-y-4 border-t border-border pt-8">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                  <dd className="truncate text-base">contact@aromanemetshu.com</dd>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                  <dd className="text-base">+242 06 745 8011 · WhatsApp</dd>
                </div>
              </dl>

              {/* Emplacements réseaux sociaux — ajouter les URL réelles quand elles seront fournies */}
              <div className="mt-10">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                  Réseaux
                </p>
                <ul className="mt-4 flex flex-wrap gap-3">
                  {socials.map(({ label, Icon }) => (
                    <li
                      key={label}
                      title={label}
                      className="grid h-11 w-11 place-items-center border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                      <span className="sr-only">{label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-14 md:flex-row md:items-center md:justify-between md:px-10">
          <div className="flex min-w-0 items-center gap-4">
            <Logo className="h-10 w-auto shrink-0" />
            <div className="min-w-0">
              <p className="truncate font-semibold">Aroman EMETSHU</p>
              <p className="text-sm text-primary-foreground/60">
                Media Buyer · Performance Marketing
              </p>
            </div>
          </div>
          <p className="text-sm text-primary-foreground/60">© 2026 Aroman EMETSHU</p>
        </div>
      </footer>
    </div>
  );
}
