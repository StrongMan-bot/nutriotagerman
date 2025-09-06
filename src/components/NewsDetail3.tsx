import React from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
import ImportantBox from './ImportantBox';
import styles from '../styles/BlogTypography.module.css';

const NewsDetail3 = () => {
  const { t, i18n } = useTranslation('news3');
  const router = useRouter();

  const newsItem = {
    id: 3,
    title: t('title'),
    description: t('description'),
    image: "/images/NewsDetail3.webp",
    date: t('date'),
    category: t('category'),
    author: t('author'),
    readTime: t('readTime'),
    content: i18n.language === 'it' ? `
      <h3>La Molecola Rivoluzionaria Anti-Aging di Cui il Tuo Medico Non Parla</h3>
      <p>Gli scienziati la chiamano "l'antiossidante universale". Gli esperti di bellezza sussurrano sui suoi poteri trasformanti per la pelle. Ma la maggior parte delle persone non ha mai sentito parlare di questa fontana della giovinezza cellulare che si nasconde in piena vista.</p>

      <h3>La Scoperta che Cambia Tutto</h3>
      <p>Mentre spendi centinaia di euro in creme e trattamenti che agiscono solo in superficie, c'è una molecola che lavora a livello più profondo - i tuoi mitocondri - per rallentare effettivamente l'invecchiamento dall'interno.</p>

      <h4>Acido Alfa Lipoico (ALA): Il Protettore Cellulare Universale</h4>
      <p>Gli effetti anti-invecchiamento di questo antiossidante naturale sintetizzato nei tessuti umani hanno attirato un interesse crescente negli ultimi anni. Ma ecco cosa lo rende straordinario: è sia idrosolubile che liposolubile, il che significa che può proteggere ogni singola cellula del tuo corpo.</p>

      <h3>Perché la Tua Pelle Invecchia Più Velocemente del Dovuto</h3>
      <p>Ogni giorno, le tue cellule sono sotto attacco da:</p>
      <ul>
        <li><strong>Radicali liberi</strong> da inquinamento, stress e raggi UV</li>
        <li><strong>Glicazione</strong> - quando le molecole di zucchero danneggiano il tuo collagene</li>
        <li><strong>Infiammazione</strong> che degrada i tessuti sani</li>
        <li><strong>Stress ossidativo</strong> che accelera l'invecchiamento cellulare</li>
      </ul>

      <h3>L'Effetto Macchina del Tempo Cellulare</h3>
      <p>L'Acido Alfa Lipoico non neutralizza solo un tipo di radicale libero - è come avere una chiave master che sblocca la protezione per ogni parte della tua cellula:</p>
      <ul>
        <li><strong>Ricicla Altri Antiossidanti</strong> - Riporta in vita vitamina C, vitamina E e glutatione</li>
        <li><strong>Protegge i Tuoi Mitocondri</strong> - Le centrali elettriche delle tue cellule rimangono giovani ed energetiche</li>
        <li><strong>Previene la Glicazione</strong> - Impedisce allo zucchero di creare Prodotti Finali della Glicazione Avanzata (AGEs) che accelerano l'invecchiamento</li>
        <li><strong>Riduce l'Infiammazione</strong> - Calma l'infiammazione cronica che ti invecchia dall'interno</li>
      </ul>

      <h3>La Trasformazione Visibile</h3>
      <p>Entro poche settimane con livelli ottimali di ALA, le persone notano:</p>
      <ul>
        <li>Pelle che brilla con un alone sano che non vedevano da anni</li>
        <li>Riduzione delle rughe sottili mentre i meccanismi di riparazione cellulare si attivano</li>
        <li>Colorito più uniforme grazie alla guarigione dei danni infiammatori</li>
        <li>Miglioramento della texture grazie alla protezione avanzata del collagene</li>
      </ul>

      <h3>Oltre la Bellezza: Il Reset Totale del Corpo</h3>
      <p>Le proprietà anti-invecchiamento dell'ALA vanno ben oltre la pelle:</p>
      <ul>
        <li><strong>Energia Potenziata</strong> - I tuoi mitocondri diventano più efficienti, dandoti la vitalità di qualcuno più giovane</li>
        <li><strong>Maggiore Chiarezza Mentale</strong> - Cellule cerebrali protette significano migliore concentrazione e memoria</li>
        <li><strong>Recupero Migliorato</strong> - Il tuo corpo si riprende più velocemente da stress ed esercizio</li>
        <li><strong>Migliore Controllo della Glicemia</strong> - L'ALA aiuta le tue cellule a utilizzare il glucosio più efficacemente</li>
      </ul>

      <h3>La Ricerca che Ne Dimostra l'Efficacia</h3>
      <p>Studi recenti hanno dimostrato che l'ALA può agire sulle infezioni virali modulando parametri biochimici, virologici, immunologici e neurologici. Ma è nella ricerca anti-invecchiamento che le cose si fanno davvero eccitanti.</p>

      <h4>Le Basi Scientifiche</h4>
      <p>L'ALA è un acido grasso a catena corta contenente zolfo presente nei mitocondri di tutti i tipi di cellule eucariotiche, e sia la forma ossidata che quella ridotta forniscono una potente protezione contro i danni cellulari legati all'età.</p>

      <h3>Gli Acceleratori dell'Età Cellulare che Ti Stanno Attaccando in Questo Momento</h3>
      <p>Ogni secondo, le tue cellule sono sotto assedio da un esercito invisibile di acceleratori dell'età:</p>
      <ul>
        <li><strong>Assalto dei Radicali Liberi</strong> - Queste molecole instabili rubano elettroni alle tue cellule sane</li>
        <li><strong>Attacco di Glicazione</strong> - Le molecole di zucchero si legano a proteine come il collagene</li>
        <li><strong>Fuoco Infiammatorio</strong> - L'infiammazione cronica di basso livello brucia attraverso il tuo corpo come un fuoco lento</li>
        <li><strong>Decadimento Mitocondriale</strong> - Le tue centrali elettriche cellulari perdono gradualmente efficienza</li>
      </ul>

      <h3>Gli Standard di Qualità che Contano</h3>
      <p>L'industria degli integratori è inondata da prodotti ALA di qualità inferiore che non forniscono risultati. Ecco cosa cercare:</p>
      <ul>
        <li><strong>R-Acido Alfa Lipoico</strong> - Questa è la forma naturalmente presente che il tuo corpo utilizza effettivamente</li>
        <li><strong>Formulazione Stabilizzata</strong> - L'ALA puro è instabile e si degrada rapidamente</li>
        <li><strong>Dosaggio Corretto</strong> - La ricerca supporta 300-600mg giornalieri per benefici anti-invecchiamento</li>
        <li><strong>Test di Terze Parti</strong> - Il tuo ALA dovrebbe essere testato per purezza e potenza da un laboratorio indipendente</li>
      </ul>

      <h3>La Sfida della Giovinezza di 90 Giorni</h3>
      <ul>
        <li><strong>Mese 1: Le Fondamenta</strong> - Le tue difese antiossidanti cellulari si rafforzano</li>
        <li><strong>Mese 2: I Cambiamenti Visibili</strong> - La pelle inizia a apparire più luminosa e liscia</li>
        <li><strong>Mese 3: La Trasformazione</strong> - Gli effetti cumulativi diventano innegabili</li>
      </ul>

      <h3>Non Lasciare che il Tempo Vinca</h3>
      <p>Ogni giorno che passa senza livelli ottimali di ALA è un altro giorno di invecchiamento cellulare incontrollato. Ma hai più controllo sul tuo processo di invecchiamento di quanto tu abbia mai immaginato.</p>

      <p>La fontana della giovinezza non è una sorgente mitica - è la rigenerazione cellulare che sta avvenendo nei tuoi mitocondri in questo momento. Dalle il vantaggio dell'ALA e scopri cosa si prova a ringiovanire.</p>
    ` : `
      <h3>The Age-Reversing Molecule Your Doctor Isn't Telling You About</h3>
      <p>Scientists call it "the universal antioxidant." Beauty gurus whisper about its skin-transforming powers. But most people have never heard of the cellular fountain of youth hiding in plain sight.</p>

      <h3>The Discovery That Changes Everything</h3>
      <p>While you're spending hundreds on creams and procedures that only treat the surface, there's a molecule working at the deepest level - your mitochondria - to actually slow down aging from the inside out.</p>

      <h4>Alpha Lipoic Acid (ALA): The Universal Cellular Protector</h4>
      <p>The anti-aging effects of this natural antioxidant synthesized in human tissues have attracted a growing interest in recent years. But here's what makes it extraordinary: it's both water AND fat-soluble, meaning it can protect every single cell in your body.</p>

      <h3>Why Your Skin Is Aging Faster Than It Should</h3>
      <p>Every day, your cells are under attack from:</p>
      <ul>
        <li><strong>Free radicals</strong> from pollution, stress, and UV rays</li>
        <li><strong>Glycation</strong> - when sugar molecules damage your collagen</li>
        <li><strong>Inflammation</strong> that breaks down healthy tissue</li>
        <li><strong>Oxidative stress</strong> that accelerates cellular aging</li>
      </ul>

      <h3>The Cellular Time Machine Effect</h3>
      <p>Alpha Lipoic Acid doesn't just neutralize one type of free radical - it's like having a master key that unlocks protection for every part of your cell:</p>
      <ul>
        <li><strong>Recycles Other Antioxidants</strong> - Brings vitamin C, vitamin E, and glutathione back to life</li>
        <li><strong>Protects Your Mitochondria</strong> - The powerhouses of your cells stay young and energetic</li>
        <li><strong>Prevents Glycation</strong> - Stops sugar from creating age-accelerating Advanced Glycation End Products (AGEs)</li>
        <li><strong>Reduces Inflammation</strong> - Calms the chronic inflammation that ages you from the inside</li>
      </ul>

      <h3>The Visible Transformation</h3>
      <p>Within weeks of optimal ALA levels, people notice:</p>
      <ul>
        <li>Skin that glows with a healthy radiance they haven't seen in years</li>
        <li>Reduced fine lines as cellular repair mechanisms kick into high gear</li>
        <li>Even skin tone as inflammatory damage heals</li>
        <li>Improved texture from enhanced collagen protection</li>
      </ul>

      <h3>Beyond Beauty: The Total Body Reset</h3>
      <p>ALA's anti-aging properties extend far beyond skin deep:</p>
      <ul>
        <li><strong>Enhanced Energy</strong> - Your mitochondria become more efficient, giving you the vitality of someone years younger</li>
        <li><strong>Sharper Mental Clarity</strong> - Protected brain cells mean better focus and memory</li>
        <li><strong>Improved Recovery</strong> - Your body bounces back from stress and exercise faster</li>
        <li><strong>Better Blood Sugar Control</strong> - ALA helps your cells use glucose more effectively</li>
      </ul>

      <h3>The Research That Proves It Works</h3>
      <p>Recent studies have demonstrated that ALA can act on viral infections by modulating biochemical, virological, immunological, and neurological parameters. But the anti-aging research is where things get really exciting.</p>

      <h4>The Scientific Foundation</h4>
      <p>ALA is a short-chain sulfur-containing fatty acid occurring in the mitochondria of all kinds of eukaryotic cells, and both the oxidized and reduced forms provide powerful protection against age-related cellular damage.</p>

      <h3>The Cellular Age Accelerators Attacking You Right Now</h3>
      <p>Every second, your cells are under siege from an invisible army of age accelerators:</p>
      <ul>
        <li><strong>Free Radical Assault</strong> - These unstable molecules steal electrons from your healthy cells</li>
        <li><strong>Glycation Attack</strong> - Sugar molecules bind to proteins like collagen</li>
        <li><strong>Inflammatory Fire</strong> - Chronic low-level inflammation burns through your body like a slow fire</li>
        <li><strong>Mitochondrial Decay</strong> - Your cellular power plants gradually lose efficiency</li>
      </ul>

      <h3>The Quality Standards That Matter</h3>
      <p>The supplement industry is flooded with inferior ALA products that won't deliver results. Here's what to look for:</p>
      <ul>
        <li><strong>R-Alpha Lipoic Acid</strong> - This is the naturally occurring form that your body actually uses</li>
        <li><strong>Stabilized Formulation</strong> - Pure ALA is unstable and degrades quickly</li>
        <li><strong>Proper Dosage</strong> - Research supports 300-600mg daily for anti-aging benefits</li>
        <li><strong>Third-Party Testing</strong> - Your ALA should be tested for purity and potency by an independent laboratory</li>
      </ul>

      <h3>The 90-Day Youth Challenge</h3>
      <ul>
        <li><strong>Month 1: The Foundation</strong> - Your cellular antioxidant defenses strengthen</li>
        <li><strong>Month 2: The Visible Changes</strong> - Skin begins to look brighter and smoother</li>
        <li><strong>Month 3: The Transformation</strong> - The cumulative effects become undeniable</li>
      </ul>

      <h3>Don't Let Time Win</h3>
      <p>Every day that passes without optimal ALA levels is another day of unchecked cellular aging. But you have more control over your aging process than you ever imagined.</p>

      <p>The fountain of youth isn't a mythical spring - it's the cellular regeneration happening in your mitochondria right now. Give it the ALA advantage, and discover what it feels like to age backwards.</p>
    `
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Back Button */}
        <button 
          onClick={() => router.push('/news')}
          className="flex items-center gap-2 text-[#0089CF] hover:text-[#0074B7] font-semibold mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          {t('backToNews')}
        </button>

        {/* Article Header */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="relative h-64 md:h-80">
            <OptimizedImage
              src={newsItem.image}
              alt={newsItem.title}
              className="w-full h-full"
              priority={true}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-[#0089CF] px-3 py-1 rounded-full text-sm font-medium">
                  {newsItem.category}
                </span>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar size={16} />
                  {newsItem.date}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <User size={16} />
                  {newsItem.author}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock size={16} />
                  {newsItem.readTime}
                </div>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold leading-tight">
                {newsItem.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div 
            className={`prose prose-lg max-w-none ${styles.blogContent}`}
            dangerouslySetInnerHTML={{ __html: newsItem.content }}
          />
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center bg-blue-50 rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            {t('discoverMore')}
          </h3>
          <button 
            onClick={() => router.push('/news')}
            className="bg-[#0089CF] text-white px-6 py-3 rounded-lg hover:bg-[#0074B7] transition-colors font-semibold"
          >
            {t('backToNews')}
          </button>
        </div>
      </div>


    </div>
  );
};

export default NewsDetail3;