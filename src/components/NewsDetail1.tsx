import React from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
import ImportantBox from './ImportantBox';
import styles from '../styles/BlogTypography.module.css';

const NewsDetail1 = () => {
  const { t } = useTranslation('news1');
  const router = useRouter();

  const newsItem = {
    id: 1,
    title: t('title', 'La tua energia sta svanendo e non sai nemmeno perché: la crisi nascosta delle vitamine del gruppo B'),
    description: t('description', 'Sei sempre stanco? La nebbia cerebrale ti colpisce come un camion? Il tuo corpo potrebbe stare urlando aiuto. Scopri la crisi nascosta delle vitamine B che sta prosciugando la tua energia e come risolverla.'),
    image: "/images/NewsDetail1.webp",
    date: t('date', '15 Dicembre 2024'),
    category: t('category', 'Energia & Benessere'),
    author: t('author', 'Team Nutriota'),
    readTime: t('readTime', '12 min di lettura'),
    content: `
      <div class="section-divider"></div>
      <p>${t('content.intro', 'Sei sempre stanco? La nebbia cerebrale ti colpisce come un camion? Il tuo corpo potrebbe stare urlando aiuto.')}</p>
      <p>${t('content.shockingTruth', 'Ecco la scioccante verità: cotture prolungate, lavorazione industriale degli alimenti e consumo eccessivo di alcol possono distruggere o ridurre la disponibilità di molte di queste vitamine. Il tuo stile di vita moderno ti sta letteralmente rubando l\'energia a livello cellulare.')}</p>

      <div class="section-divider"></div>
      <h3>${t('content.silentThieves', 'I Ladri Silenziosi di Energia nella Tua Vita Quotidiana')}</h3>
      <p>${t('content.silentThievesText', 'Ogni caffellatte del mattino, ogni maratona notturna su Netflix, ogni pasto processato sta silenziosamente prosciugando le tue riserve di vitamine del gruppo B. Pensaci:')}</p>

      <div class="highlight-box">
        <ul>
          <li><strong>${t('content.fastFood', 'Quel pranzo fast food?')}</strong> ${t('content.fastFoodText', 'Carico di calorie vuote ma privato delle vitamine B di cui il tuo corpo ha disperatamente bisogno')}</li>
          <li><strong>${t('content.weekendDrinks', 'Bevute del fine settimana con gli amici?')}</strong> ${t('content.weekendDrinksText', 'L\'alcol è un distruttore di vitamine B, prendendo di mira in particolare B1, B6 e B12')}</li>
          <li><strong>${t('content.chronicStress', 'Stress cronico da lavoro?')}</strong> ${t('content.chronicStressText', 'Brucia le tue riserve di vitamine B più velocemente di quanto tu possa dire "scadenza"')}</li>
        </ul>
      </div>

      <div class="section-divider"></div>
      <h3>${t('content.powerSource', 'Perché le Vitamine B sono la Tua Fonte di Energia')}</h3>
      <p>${t('content.powerSourceText', 'Pensa alle vitamine B come alle candele d\'accensione delle tue cellule. Senza di esse, il tuo motore energetico si ingolfa e smette di funzionare. Ecco cosa fa ognuna per te:')}</p>

      <div class="step-box">
        <h4>${t('content.b1', 'B1 (Tiamina) - Il migliore amico del tuo cervello')}</h4>
        <p>${t('content.b1Text', 'Mantiene il tuo sistema nervoso reattivo e la tua mente lucida.')}</p>
      </div>

      <div class="step-box">
        <h4>${t('content.b2', 'B2 (Riboflavina) - Il convertitore di energia')}</h4>
        <p>${t('content.b2Text', 'Trasforma il cibo in energia effettivamente utilizzabile.')}</p>
      </div>

      <div class="step-box">
        <h4>${t('content.b3', 'B3 (Niacina) - L\'eroe della circolazione')}</h4>
        <p>${t('content.b3Text', 'Mantiene il sangue fluido e la pelle luminosa.')}</p>
      </div>

      <div class="step-box">
        <h4>${t('content.b5', 'B5 (Acido Pantotenico) - L\'antistress')}</h4>
        <p>${t('content.b5Text', 'Un maggiore apporto di vitamina B5 potrebbe ridurre le probabilità di COVID-19 del 47%')}</p>
      </div>

      <div class="step-box">
        <h4>${t('content.b6', 'B6 (Piridossina) - Il tuo stabilizzatore dell\'umore')}</h4>
        <p>${t('content.b6Text', 'Essenziale per produrre i neurotrasmettitori che ti mantengono felice.')}</p>
      </div>

      <div class="section-divider"></div>
      <h3>${t('content.warningSigns', 'I Segnali d\'Allarme che il Tuo Corpo Sta Inviando')}</h3>
      <p>${t('content.warningSignsText', 'Il tuo corpo ti sta inviando costantemente segnali. Stai ascoltando?')}</p>

      <div class="warning-box">
        <ul>
          <li>${t('content.sign1', 'Sensazione di esaurimento anche dopo 8 ore di sonno')}</li>
          <li>${t('content.sign2', 'Nebbia cerebrale che rende impossibili anche compiti semplici')}</li>
          <li>${t('content.sign3', 'Sbalzi d\'umore che arrivano dal nulla')}</li>
          <li>${t('content.sign4', 'Crampi muscolari e strane sensazioni di formicolio')}</li>
          <li>${t('content.sign5', 'Pelle spenta e senza vita')}</li>
        </ul>
      </div>

      <p>${t('content.notJustAging', 'Questi non sono solo sintomi dell\'"invecchiamento". Sono i segnali di SOS del tuo corpo.')}</p>

      <div class="section-divider"></div>
      <h3>${t('content.modernDiet', 'Il Disastro della Dieta Moderna')}</h3>
      <p>${t('content.modernDietText', 'Nel 2025, le tendenze alimentari sono in parte guidate dai social media, e molti americani pianificano di iniziare nuovi modelli alimentari. Ma ecco il problema: la maggior parte delle diete alla moda manca della base di vitamine B di cui il tuo corpo ha bisogno.')}</p>
      <p>${t('content.processedFoods', 'I cibi processati dominano i nostri piatti, ma sono lande desolate dal punto di vista nutrizionale. Quella convenienza ha un costo devastante per la tua energia e vitalità.')}</p>

      <div class="section-divider"></div>
      <h3>${t('content.comebackPlan', 'Il Tuo Piano di Recupero dell\'Energia')}</h3>
      <p>${t('content.comebackPlanText', 'La buona notizia? Puoi invertire questa tendenza più velocemente di quanto pensi. Il tuo corpo è incredibilmente resiliente quando gli dai ciò di cui ha bisogno.')}</p>

      <div class="tip-box">
        <h4>${t('content.startWithBComplex', 'Inizia con l\'intera famiglia del complesso B')}</h4>
        <p>${t('content.startWithBComplexText', 'Non fare preferenze. Il tuo corpo ha bisogno che tutte lavorino insieme come una macchina ben oliata.')}</p>
      </div>

      <div class="tip-box">
        <h4>${t('content.timingMatters', 'Il tempismo è importante')}</h4>
        <p>${t('content.timingMattersText', 'Prendi le vitamine B al mattino. Sono energizzanti e possono interferire con il sonno se prese troppo tardi.')}</p>
      </div>

      <div class="tip-box">
        <h4>${t('content.qualityCounts', 'La qualità conta')}</h4>
        <p>${t('content.qualityCountsText', 'Cerca forme che il tuo corpo possa effettivamente utilizzare. Le versioni sintetiche economiche spesso ti passano semplicemente attraverso.')}</p>
      </div>

      <div class="section-divider"></div>
      <h3>${t('content.hiddenEpidemic', 'L\'Epidemia Nascosta di Cui Nessuno Parla')}</h3>
      <p>${t('content.hiddenEpidemicText', 'Non sei solo in questa lotta. Milioni di persone camminano in una nebbia di stanchezza, pensando che sia solo parte della vita moderna. Ma ecco cosa sta realmente accadendo:')}</p>

      <div class="key-points-box">
        <h4>${t('content.perfectStorm', 'La Tempesta Perfetta dell\'Esaurimento:')}</h4>
        <ul>
          <li>${t('content.storm1', 'Cibi ultra-processati privati delle vitamine B naturali durante la lavorazione')}</li>
          <li>${t('content.storm2', 'Stress cronico da lavoro, relazioni e connettività costante')}</li>
          <li>${t('content.storm3', 'Scarsa salute intestinale che impedisce il corretto assorbimento delle vitamine')}</li>
          <li>${t('content.storm4', 'Farmaci che interferiscono con il metabolismo delle vitamine B')}</li>
          <li>${t('content.storm5', 'Consumo di alcol che letteralmente elimina queste vitamine dal tuo sistema')}</li>
        </ul>
      </div>

      <p>${t('content.notJustTired', 'Non si tratta solo di essere stanchi. Si tratta del tuo cervello, del tuo cuore, del tuo sistema nervoso e del tuo metabolismo che implorano aiuto.')}</p>

      <div class="section-divider"></div>
      <h3>${t('content.dominoEffect', 'L\'Effetto Domino della Carenza di Vitamine B')}</h3>
      <p>${t('content.dominoEffectText', 'Quando le tue vitamine B scarseggiano, tutto inizia a cadere a pezzi in una cascata prevedibile:')}</p>

      <div class="step-box">
        <h4>${t('content.first', 'Primo: La tua energia crolla')}</h4>
        <p>${t('content.firstText', 'Semplici compiti diventano montagne da scalare.')}</p>
      </div>

      <div class="step-box">
        <h4>${t('content.then', 'Poi: Il tuo umore si destabilizza')}</h4>
        <p>${t('content.thenText', 'Irritabilità, ansia e depressione si insinuano.')}</p>
      </div>

      <div class="step-box">
        <h4>${t('content.next', 'Quindi: La tua nebbia cerebrale si infittisce')}</h4>
        <p>${t('content.nextText', 'Non riesci a pensare chiaramente, a ricordare i nomi o a concentrarti su compiti importanti.')}</p>
      </div>

      <div class="step-box">
        <h4>${t('content.finally', 'Infine: Il tuo corpo inizia a cedere')}</h4>
        <p>${t('content.finallyText', 'Seguono debolezza muscolare, problemi digestivi e immunità compromessa.')}</p>
      </div>

      <p>${t('content.goodNews', 'Ma ecco la buona notizia: questa cascata può essere invertita con la stessa prevedibilità.')}</p>

      <div class="section-divider"></div>
      <h3>${t('content.powerhouseBreakdown', 'Analisi delle Vitamine B come Fonte di Energia')}</h3>

      <div class="comparison-box">
        <div class="comparison-item">
          <h4>${t('content.b1Detailed', 'B1 (Tiamina) - L\'Accenditore di Energia')}</h4>
          <p>${t('content.b1DetailedText', 'Le tue cellule non possono convertire i carboidrati in energia senza di essa. Bassa B1 equivale a stanchezza istantanea e confusione mentale. L\'alcol è il più grande nemico della tiamina, il che spiega perché i forti bevitori spesso soffrono di grave affaticamento e "nebbia cerebrale".')}</p>
        </div>
        <div class="comparison-divider"></div>
        <div class="comparison-item">
          <h4>${t('content.b2Detailed', 'B2 (Riboflavina) - L\'Energizzante Cellulare')}</h4>
          <p>${t('content.b2DetailedText', 'Questa vitamina illumina letteralmente le fabbriche di energia delle tue cellule. Senza abbastanza B2, ti senti come se la tua batteria interna si stesse costantemente scaricando. È anche cruciale per una pelle sana, occhi e globuli rossi.')}</p>
        </div>
      </div>

      <div class="comparison-box">
        <div class="comparison-item">
          <h4>${t('content.b3Detailed', 'B3 (Niacina) - L\'Eroe della Circolazione')}</h4>
          <p>${t('content.b3DetailedText', 'Scarsa circolazione? Mani e piedi freddi? Lentezza mentale? La carenza di B3 potrebbe essere la colpevole. Questa vitamina mantiene il sangue fluido e la mente acuta.')}</p>
        </div>
        <div class="comparison-divider"></div>
        <div class="comparison-item">
          <h4>${t('content.b5Detailed', 'B5 (Acido Pantotenico) - Lo Scudo contro lo Stress')}</h4>
          <p>${t('content.b5DetailedText', 'Le tue ghiandole surrenali divorano B5 quando sei sotto stress. Senza livelli adeguati, lo stress diventa opprimente e il tuo corpo non può produrre gli ormoni necessari per affrontare le sfide quotidiane.')}</p>
        </div>
      </div>

      <div class="comparison-box">
        <div class="comparison-item">
          <h4>${t('content.b6Detailed', 'B6 (Piridossina) - Il Maestro dell\'Umore')}</h4>
          <p>${t('content.b6DetailedText', 'Questo è il migliore amico del tuo cervello per produrre serotonina, dopamina e altre sostanze chimiche del benessere. Una B6 bassa si manifesta spesso come depressione, irritabilità e problemi di sonno.')}</p>
        </div>
        <div class="comparison-divider"></div>
        <div class="comparison-item">
          <h4>${t('content.b12Detailed', 'B12 - Il Protettore dei Nervi')}</h4>
          <p>${t('content.b12DetailedText', 'Forse la vitamina B più famosa, la B12 mantiene intatto il tuo sistema nervoso e la tua mente acuta. La carenza può imitare condizioni neurologiche serie ed è epidemica tra gli anziani.')}</p>
        </div>
      </div>

      <div class="section-divider"></div>
      <h3>${t('content.modernLifeDestroyers', 'I Distruttori Moderni delle Vitamine B')}</h3>

      <div class="warning-box">
        <h4>${t('content.coffeeHabit', 'La Tua Abitudine del Caffè Mattutino')}</h4>
        <p>${t('content.coffeeHabitText', 'Quella dose giornaliera di caffeina? Sta accelerando l\'esaurimento delle vitamine B. La caffeina agisce come diuretico, eliminando le vitamine B idrosolubili dal tuo sistema.')}</p>

        <h4>${t('content.wineWindDown', 'Il Tuo Bicchiere di Vino Sera per Rilassarti')}</h4>
        <p>${t('content.wineWindDownText', 'L\'alcol non si limita a bloccare l\'assorbimento delle vitamine B - le distrugge attivamente. Un bicchiere di vino può esaurire le tue riserve di B1 per ore.')}</p>

        <h4>${t('content.processedConvenience', 'La Tua Convenienza di Cibo Processato')}</h4>
        <p>${t('content.processedConvenienceText', 'Quella barretta per la colazione da asporto, la cena congelata o il pranzo fast food? Sono buchi neri nutrizionali che richiedono vitamine B per la digestione ma non ne forniscono alcuna in cambio.')}</p>

        <h4>${t('content.highStressLifestyle', 'Il Tuo Stile di Vita ad Alto Stress')}</h4>
        <p>${t('content.highStressLifestyleText', 'Ogni scadenza, litigio o preoccupazione brucia letteralmente le tue riserve di vitamine B come combustibile in un fuoco.')}</p>
      </div>

      <div class="section-divider"></div>
      <h3>${t('content.thirtyDayRevolution', 'Il Protocollo della Rivoluzione Energetica di 30 Giorni')}</h3>

      <div class="step-box">
        <h4>${t('content.week1', 'Settimana 1: Le Fondamenta')}</h4>
        <p>${t('content.week1Text', 'Il tuo corpo inizia a ricostruire le sue riserve di vitamine B. Il sonno inizia a migliorare per primo - noterai di addormentarti più facilmente e di svegliarti meno intontito.')}</p>
      </div>

      <div class="step-box">
        <h4>${t('content.week2', 'Settimana 2: Lo Slancio')}</h4>
        <p>${t('content.week2Text', 'I livelli di energia si stabilizzano durante il giorno. Il calo delle 15:00 diventa meno severo, per poi scomparire del tutto. La chiarezza mentale si acuisce in modo evidente.')}</p>
      </div>

      <div class="step-box">
        <h4>${t('content.week3', 'Settimana 3: La Trasformazione')}</h4>
        <p>${t('content.week3Text', 'Gli sbalzi d\'umore si livellano. Ti senti più emotivamente resiliente e meno reattivo allo stress. Le persone iniziano a commentare quanto stai meglio.')}</p>
      </div>

      <div class="step-box">
        <h4>${t('content.week4', 'Settimana 4: Il Nuovo Te')}</h4>
        <p>${t('content.week4Text', 'L\'energia sostenuta diventa la tua nuova normalità. Dormi meglio, pensi in modo più chiaro e ti senti più te stesso di quanto non sia accaduto da anni.')}</p>
      </div>

      <div class="section-divider"></div>
      <h3>${t('content.realStories', 'Storie Vere di Persone Reali')}</h3>

      <div class="testimonial-box">
        <p><em>"${t('content.testimonial1', 'Pensavo che stessi solo invecchiando e che dovessi accettare di essere sempre stanco. Dopo tre settimane con un complesso B completo, mi sento come se mi fossi ripreso la vita. Mi sveglio energizzato e rimango lucido tutto il giorno."')}</em> - ${t('content.sarah', 'Sarah, 42')}</p>
      </div>

      <div class="testimonial-box">
        <p><em>"${t('content.testimonial2', 'Il mio medico ha detto che le mie analisi del sangue erano "normali", ma io non mi sentivo affatto normale. Aggiungere le vitamine B ha cambiato tutto. La mia ansia è diminuita, la mia concentrazione è migliorata e ora ho davvero energia per i miei figli dopo il lavoro."')}</em> - ${t('content.mike', 'Mike, 38')}</p>
      </div>

      <div class="section-divider"></div>
      <h3>${t('content.qualityGameChanger', 'Il Punto di Svolta della Qualità')}</h3>
      <p>${t('content.qualityGameChangerText', 'Non tutti gli integratori di vitamine B sono creati uguali. Ecco cosa separa le formule che cambiano la vita dagli inutili impostori:')}</p>

      <div class="key-points-box">
        <ul>
          <li><strong>${t('content.bioavailableForms', 'Forme Biodisponibili:')}</strong> ${t('content.bioavailableFormsText', 'Cerca vitamine B metilate che il tuo corpo possa effettivamente utilizzare, non versioni sintetiche economiche che ti passano semplicemente attraverso.')}</li>
          <li><strong>${t('content.properRatios', 'Proporzioni Corrette:')}</strong> ${t('content.properRatiosText', 'Le vitamine B lavorano in squadra. Assumere dosi elevate di una può creare squilibri con le altre.')}</li>
          <li><strong>${t('content.thirdPartyTesting', 'Test di Terze Parti:')}</strong> ${t('content.thirdPartyTestingText', 'Il tuo integratore dovrebbe essere testato per purezza e potenza da un laboratorio indipendente.')}</li>
          <li><strong>${t('content.noFillers', 'Niente Riempitivi o Schifezze:')}</strong> ${t('content.noFillersText', 'Coloranti artificiali, agenti leganti non necessari e allergeni non hanno posto in una formula premium.')}</li>
        </ul>
      </div>

      <div class="section-divider"></div>
      <h3>${t('content.investmentPays', 'L\'Investimento che Paga Dividend')}</h3>
      <p>${t('content.investmentPaysText', 'Pensa a cosa ti sta realmente costando la bassa energia:')}</p>

      <div class="warning-box">
        <ul>
          <li>${t('content.cost1', 'Opportunità mancate perché sei troppo stanco per perseguirle')}</li>
          <li>${t('content.cost2', 'Tensioni relazionali a causa di irritabilità e umore basso')}</li>
          <li>${t('content.cost3', 'Limitazioni di carriera a causa di scarsa concentrazione e produttività')}</li>
          <li>${t('content.cost4', 'Problemi di salute a causa di un sistema immunitario compromesso')}</li>
          <li>${t('content.cost5', 'Perdita del piacere per hobby e attività che amavi fare')}</li>
        </ul>
      </div>

      <p>${t('content.lessThanCoffee', 'Un integratore di complesso B di qualità costa meno di un\'abitudine quotidiana al caffè, ma i rendimenti - in energia, umore e qualità della vita - sono incommensurabili.')}</p>

      <div class="section-divider"></div>
      <h3>${t('content.dontLetSlip', 'Non Lasciare che un Altro Giorno Sfugga')}</h3>
      <p>${t('content.dontLetSlipText', 'La tua energia è la tua risorsa più preziosa. Ogni giorno che ritardi è un altro giorno in cui ti senti meno al tuo meglio, un altro giorno in cui il tuo corpo lotta per funzionare in modo ottimale senza i nutrienti di cui ha disperatamente bisogno.')}</p>

      <p>${t('content.stopAccepting', 'Smetti di accettare la stanchezza come tua nuova normalità. Smetti di incolpare il tuo programma frenetico per il tuo esaurimento. Smetti di pensare che sentirsi stanco, confuso e sopraffatto sia solo parte dell\'invecchiamento.')}</p>

      <p>${t('content.bodyTrying', 'Il tuo corpo ha cercato di dirti qualcosa di importante, e ora sai come ascoltare. La soluzione non è complicata, costosa o che richiede tempo. È semplice come dare alle tue cellule le vitamine B di cui hanno bisogno per creare l\'energia che meriti.')}</p>

      <p>${t('content.researchClear', 'La ricerca è chiara. Le testimonianze sono convincenti. L\'unica domanda che rimane è: Sei pronto a sentirti di nuovo fantastico?')}</p>

      <div class="conclusion-box">
        <h3>${t('content.futureSelf', 'Il Tuo Futuro Sé Energizzato Conta su di Te')}</h3>
        <p>${t('content.futureSelfText', 'Il tuo futuro sé energizzato conta sulla decisione che prendi oggi. Scegli la vitalità. Scegli la chiarezza. Scegli il vantaggio delle vitamine B.')}</p>
      </div>
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
          {t('backToNews', 'Torna alle Notizie')}
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
              <h1 className="text-3xl md:text-4xl font-bold leading-tight">
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
            {t('discoverMore', 'Scopri Altri Consigli sulla Salute e Articoli sul Benessere')}
          </h3>
          <button 
            onClick={() => router.push('/news')}
            className="bg-[#0089CF] text-white px-6 py-3 rounded-lg hover:bg-[#0074B7] transition-colors font-semibold"
          >
            {t('backToMainNews', 'Torna alla Pagina Principale delle Notizie')}
          </button>
        </div>
      </div>


    </div>
  );
};

export default NewsDetail1;