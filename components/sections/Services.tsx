import Image from "next/image";

const services = [
  {
    name: "Letras Caixa",
    image: "/portfolio/servicos/letras-caixa.webp",
    alt: "Letras caixa metálicas sobre painel de madeira em consultório odontológico",
    description: "Volume, presença e acabamento refinado para destacar sua marca em fachadas e ambientes internos.",
  },
  {
    name: "ACM e LED",
    image: "/portfolio/servicos/acm-led.webp",
    alt: "Fachada Rei do Conforto com revestimento ACM e iluminação LED",
    description: "Revestimento em ACM e iluminação LED que valorizam a arquitetura e a identidade da sua fachada.",
  },
  {
    name: "Neon LED",
    image: "/portfolio/servicos/neon-led.webp",
    alt: "Neon LED flexível com iluminação colorida",
    description: "Luz e formas personalizadas para criar ambientes marcantes e dar personalidade ao seu espaço.",
  },
  {
    name: "Acrílico e LED",
    image: "/portfolio/servicos/acrilico-led.webp",
    alt: "Placa Nobre Nails em acrílico com iluminação LED",
    description: "Peças em acrílico com iluminação delicada para apresentar sua marca com elegância em cada detalhe.",
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      aria-labelledby="services-heading"
      className="scroll-mt-32 border-t border-[#D4AF37]/15 bg-[#080808] py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-2xl md:mb-12">
          <span aria-hidden="true" className="mb-5 block h-px w-12 bg-[#D4AF37]" />
          <h2 id="services-heading" className="text-3xl font-semibold leading-tight text-[#C0C0C0] md:text-4xl">
            Soluções em Comunicação Visual
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.image}
              className="overflow-hidden rounded-xl border border-[#D4AF37]/30 bg-linear-to-b from-[#C0C0C0]/5 to-[#080808] shadow-[0_12px_32px_rgba(0,0,0,0.2)]"
            >
              <div className="relative aspect-[4/3] border-b border-[#D4AF37]/20">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(min-width: 1280px) 290px, (min-width: 1024px) calc((100vw - 120px) / 4), (min-width: 640px) calc((100vw - 72px) / 2), calc(100vw - 48px)"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-[#D4AF37]">{service.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#C0C0C0]">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
