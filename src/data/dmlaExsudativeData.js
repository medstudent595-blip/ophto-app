// Atlas interactif — DMLA exsudative (OCT structurel & OCT-angiographie)
// Contenu pedagogique reorganise : chaque figure est placee juste apres le
// paragraphe qui la cite. Figures numerotees de facon autonome (Fig. 1..31)
// et rendues en composite depuis le rapport source (voir extract_dmla_exsudative.py).
//
// Correspondance Fig. atlas -> fichier :
//  1:4-50 2:4-51 3:4-52 4:4-53 5:4-54 6:4-55 7:4-56 8:4-57 9:4-58 10:4-59
//  11:4-60 12:4-61 13:4-62 14:4-63 15:4-64 16:4-65 17:4-71 18:4-66 19:4-67
//  20:4-68 21:4-69 22:4-70 23:4-72 24:4-73 25:4-74 26:4-75 27:4-76 28:4-77
//  29:4-78 30:4-79 31:4-80

const IMG = '/images/dmla-exsudative';

const fig = (n, src, caption) => `
<figure class="md-image-container atlas-figure">
  <img src="${IMG}/${src}" alt="${caption.replace(/<[^>]+>/g, '').replace(/"/g, '&quot;')}" loading="lazy" />
  <figcaption class="md-caption"><span class="fig-num">Fig. ${n}</span> ${caption}</figcaption>
</figure>`;

export const dmlaExsudativeChapters = [
  // ============================================================= 1
  {
    title: 'Introduction : de la maculopathie liée à l’âge à la DMLA néovasculaire',
    content: `
La **dégénérescence maculaire liée à l’âge (DMLA)** demeure la première cause de cécité légale (acuité < 1/10) dans les pays industrialisés. Elle s’exprime sous deux formes : une forme **atrophique** (« sèche ») et une forme **exsudative** (« humide », néovasculaire). Longtemps responsable de la majorité des cécités légales liées à la DMLA, la forme exsudative — grâce aux anti-VEGF — n’en représente probablement plus aujourd’hui que la moitié environ.

La DMLA exsudative est définie par le développement de **néovaisseaux** dont l’origine est soit choroïdienne, soit rétinienne profonde. Ces vaisseaux **immatures**, à parois perméables, laissent fuir sérosités et parfois sang. C’est cette fuite qui fait toute la séméiologie de l’OCT.

<div class="alert alert-note">
<strong>Les trois compartiments de l’exsudation</strong> — quel que soit le liquide, sa localisation définit le signe OCT :
<ul>
<li><strong>Intrarétinien (œdème / logettes cystoïdes)</strong> — remaniement des espaces extracellulaires de la rétine sensorielle.</li>
<li><strong>Sous-rétinien (décollement séreux rétinien, DSR)</strong> — entre les articles externes des photorécepteurs et l’épithélium pigmentaire (EP).</li>
<li><strong>Sous-épithélial (décollement de l’EP, DEP)</strong> — entre l’EP et la membrane de Bruch.</li>
</ul>
</div>

Sur une simple coupe verticale, l’OCT sait déjà **matérialiser et séparer** ces trois compartiments : c’est la première force de l’examen.

${fig(1, 'fig_4-50.png', 'Coupe B-scan matérialisant les trois compartiments d’accumulation liquidienne : logettes d’œdème maculaire cystoïde (<em>flèches blanches</em>), décollement séreux rétinien (<em>flèches jaunes</em>) et soulèvement de l’épithélium pigmentaire (<em>flèches rouges</em>).')}

Le liquide n’est pas toujours « débordant » : un DEP peut coexister avec un simple DSR **sans** véritable épaississement de la rétine sensorielle. La perméabilité des néovaisseaux, entretenue par un excès local de **VEGF**, explique cette accumulation ; l’origine du liquide intrarétinien pourrait aussi tenir à une hyperperméabilité des capillaires rétiniens matures.

${fig(2, 'fig_4-51.png', 'Soulèvement <em>irrégulier</em> de l’EP (<em>flèches rouges</em>), très évocateur de néovaisseaux de type 1, associé à un décollement séreux rétinien (<em>flèches jaunes</em>). Ici, pas d’épaississement rétinien ni de liquide intrarétinien franc.')}

<div class="alert alert-tip">
<strong>Clinique</strong> — la fuite se traduit surtout par des <strong>métamorphopsies</strong> et une baisse d’acuité visuelle, plus rarement une micropsie. Avant l’OCT, l’exsudation ne se lisait qu’indirectement, sur les diffusions du colorant en angiographie. L’OCT a rendu ce diagnostic direct, topographique et quantifiable.
</div>
`,
  },

  // ============================================================= 2
  {
    title: 'Séméiologie OCT de l’exsudation',
    content: `
Dans la DMLA exsudative, la perturbation de l’OCT est **globale** : la **cartographie (mapping)** repère les zones d’épaississement, tandis que les **coupes B-scan** en précisent la nature. L’OCT « en face » complète l’analyse dans certaines formes.

${fig(3, 'fig_4-52.png', 'Cartographie très perturbée (<strong>a</strong>) traduisant d’importantes différences d’épaisseur ; la coupe verticale (<strong>b</strong>) montre un soulèvement inhomogène de l’EP (<em>flèches rouges</em>), du liquide intrarétinien et un DSR, ainsi qu’un matériel hyper-réflectif sous-rétinien (<em>flèches jaunes</em>).')}

${fig(4, 'fig_4-53.png', 'Autre exemple : cartographie perturbée (<strong>a</strong>) et coupe (<strong>b</strong>) associant une lésion hyper-réflective sous-rétinienne (<em>flèches rouges</em>), un œdème intrarétinien et un DSR. Noter les <strong>points hyper-réflectifs intrarétiniens</strong> (<em>flèches jaunes</em>).')}

### Le liquide intrarétinien (œdème maculaire)
L’œdème débute par un épaississement diffus de la couche nucléaire externe, puis se collecte en **logettes cystoïdes** rondes ou ovalaires. Non traité, il évolue vers une **dégénérescence maculaire cystoïde** : des kystes chroniques, souvent sur une rétine d’épaisseur **normale**, de valeur pronostique **péjorative**.

<div class="alert alert-warning">
<strong>À ne pas confondre</strong> : les logettes d’œdème avec (1) les <strong>tubulations de la rétine externe</strong> (paroi propre hyper-réflective — voir plus loin) et (2) les <strong>pseudokystes</strong> dégénératifs de la DMLA atrophique.
</div>

### Les points hyper-réflectifs intrarétiniens
Petites particules denses de la rétine externe (*hyper-reflective foci*). Leur origine — probablement des cellules de la **microglie activée** — reste discutée, mais leur **disparition rapide** sous anti-VEGF est associée à un meilleur pronostic visuel.

### Le liquide sous-rétinien (DSR)
Espace hypo-réflectif entre les articles externes des photorécepteurs et l’EP (ou le néovaisseau pré-épithélial). Sa présence est plutôt de **bon** pronostic (meilleure acuité initiale et meilleur gain sous traitement).

### Le matériel hyper-réflectif sous-rétinien (SHRM)
Aspect **dense, gris, à bords flous** de l’espace sous-rétinien (*subretinal hyper-reflective material/exsudation*), correspondant à des débris protéiques ou fibrineux. Parfois **seule** manifestation exsudative, il est souvent associé à un œdème ou à un DSR, et péjore le pronostic.

${fig(5, 'fig_4-54.png', 'Matériel sous-rétinien hyper-réflectif : lésion grise à bords inhomogènes dans l’espace sous-rétinien (<em>flèche rouge</em>), ici associée à un décollement séreux rétinien (<em>flèche blanche</em>).')}

${fig(6, 'fig_4-55.png', 'Lésion hyper-réflective sous-rétinienne comme <strong>seule</strong> traduction exsudative : fond d’œil sans hémorragie (<strong>a</strong>), hyperfluorescence inhomogène en angiographie (<strong>b</strong>), épaississement à la cartographie (<strong>c</strong>) et, sur la coupe (<strong>d</strong>), lésion sous-rétinienne (<em>flèche</em>) en regard d’une surélévation inhomogène de l’EP — très évocatrice de néovascularisation.')}

<div class="alert alert-warning">
Le SHRM ne doit pas être confondu avec une <strong>hémorragie</strong> ni avec des <strong>exsudats lipidiques</strong>.
</div>

### Les décollements séreux « en arche de pont »
Lorsqu’une exsudation riche en fibrine cloisonne le liquide sous-rétinien, le DSR prend un aspect **en arche de pont**, habituellement associé à une fibrose sous-rétinienne : évolution chronique et pronostic réservé.

${fig(7, 'fig_4-56.png', 'Exemples de décollements séreux « en arche de pont » : cloisonnement du liquide sous-rétinien par des membranes fibrineuses, habituellement associé à une fibrose sous-rétinienne.')}
`,
  },

  // ============================================================= 3
  {
    title: 'Les décollements de l’épithélium pigmentaire (DEP)',
    content: `
Le **DEP** correspond à une séparation entre l’EP et la membrane de Bruch. Dans la DMLA, il faut distinguer :

* le **DEP drusénoïde** (confluence de drusen séreux) — forme **non** néovasculaire ;
* le **DEP séreux réactionnel** à un néovaisseau de type 1, logé dans son encoche (*pigment epithelial detachment with notch*) : l’EP est soulevé de façon **assez homogène**, la membrane néovasculaire dessinant une berge **inhomogène et irrégulière** ;
* le **DEP vascularisé** proprement dit.

<div class="alert alert-tip">
<strong>Astuce de lecture</strong> — un soulèvement <strong>homogène</strong> de l’EP évoque le contenu séreux ; un soulèvement <strong>inhomogène / irrégulier</strong> signe la présence de tissu néovasculaire. Le mode <strong>EDI</strong> améliore l’analyse du contenu du DEP, où l’on peut voir une organisation multilamellaire et une membrane néovasculaire adhérente à la face postérieure de l’EP.
</div>

La morphologie du DEP a une valeur pronostique et thérapeutique. Associé aux néovaisseaux de type 1, il peut être **plan** ou **saillant** — ce dernier exposant à la **déchirure**. Associé à un néovaisseau de type 3 débutant, il est souvent minime, ressemblant à un simple drusen séreux.

${fig(8, 'fig_4-57.png', 'DEP selon le type néovasculaire : associé aux néovaisseaux de type 1, il est plan (<strong>a, b</strong>) ou saillant (<strong>c, d</strong>, risque accru de déchirure). Associé aux néovaisseaux de type 3 débutants, il est de petite taille, pseudo-drusénoïde (<strong>e, f</strong>).')}

<div class="alert alert-note">
Le DEP est un <strong>biomarqueur</strong> : il tend à s’associer à une moindre réponse aux anti-VEGF et à un pronostic ultérieur plus réservé.
</div>
`,
  },

  // ============================================================= 4
  {
    title: 'Classification des néovaisseaux maculaires (types 1, 2, 3) et vasculopathie polypoïdale',
    content: `
Historiquement, les néovaisseaux étaient séparés en **type 1** (sous l’EP) et **type 2** (ayant franchi l’EP, dans l’espace sous-rétinien). L’apport du SD-OCT a permis d’ajouter un **type 3** (anastomose rétinochoroïdienne / *retinal angiomatous proliferation*, RAP). Comme le type 3 n’est pas d’origine choroïdienne, on parle plus justement de **néovascularisation maculaire** de type 1, 2 ou 3.

### <span class="nvc-badge nvc-1">Type 1</span> — le plus fréquent (sous-épithélial, « occulte »)
Membrane néovasculaire d’origine choroïdienne franchissant la membrane de Bruch mais **respectant l’EP**. Fond d’œil peu perturbé (aspect grisâtre central, parfois hémorragies/exsudats). Angiographie à la fluorescéine : diffusions **imprécises**, tardives, parfois *pin points* ; ICG : plaque néovasculaire large. En OCT : EP soulevé et irrégulier, avec **DSR** plus souvent qu’un œdème intrarétinien.

${fig(9, 'fig_4-58.png', '<span class="nvc-badge nvc-1">NVC type 1</span> : drusen au fond d’œil (<strong>a</strong>), autofluorescence perturbée (<strong>b</strong>), diffusions imprécises maximales aux temps tardifs (<strong>c, d</strong>), épaississement discret à la cartographie (<strong>e</strong>) et, sur la coupe (<strong>f</strong>), surélévation inhomogène de l’EP (<em>flèche blanche</em>) avec DSR et points hyper-réflectifs intrarétiniens (<em>flèche jaune</em>).')}

${fig(10, 'fig_4-59.png', 'Second exemple de <span class="nvc-badge nvc-1">NVC type 1</span> avec suivi thérapeutique : diffusion tardive à <em>pin points</em> (<strong>a–c</strong>), DSR discret et lésion hyper-réflective sous-rétinienne (<strong>e</strong>), néovaisseau visible en OCT-A (<strong>f</strong>), puis réapplication rétinienne progressive après injections d’anti-VEGF (<strong>g–l</strong>). Une pachychoroïde fait discuter l’origine.')}

### <span class="nvc-badge nvc-2">Type 2</span> — néovaisseau « visible » (classique, pré-épithélial)
Le premier reconnu en angiographie : membrane **bien individualisée** dès les temps précoces (tronc nourricier + arcade en rayon de roue), à diffusion précoce et intense. En OCT : épaississement **hyper-réflectif pré-épithélial**, exsudation marquée (**œdème intrarétinien fréquent**, DSR périlésionnel, SHRM et points hyper-réflectifs abondants, hémorragies > exsudats).

${fig(11, 'fig_4-60.png', '<span class="nvc-badge nvc-2">NVC type 2</span> : aspect grisâtre central (<strong>a</strong>), membrane bien délimitée au temps précoce (<strong>b</strong>), épaississement central (<strong>c</strong>) et lésion hyper-réflective sous-rétinienne avec œdème (<strong>d</strong>, <em>flèches jaunes</em> ; DSR de voisinage, <em>flèche blanche</em>). Après anti-VEGF (<strong>e–h</strong>) : assèchement et hyperréflectivité postérieure d’atrophie de l’EP.')}

${fig(12, 'fig_4-61.png', 'Second exemple de <span class="nvc-badge nvc-2">NVC type 2</span> : membrane à bords nets (<strong>b</strong>), diffusion tardive importante (<strong>c</strong>), et selon les coupes : zone hyper-réflective sous-rétinienne (<strong>e</strong>), DSR (<strong>f</strong>) et logettes d’œdème cystoïde (<strong>g</strong>).')}

<div class="alert alert-tip">
<strong>Aspect en « igloo »</strong> — après traitement, un néovaisseau de type 2 peut s’encapsuler dans l’EP et régresser en un aspect de type 1 : une cicatrice sous-rétinienne caractéristique.
</div>

${fig(13, 'fig_4-62.png', '<span class="nvc-badge nvc-2">Type 2</span> régressant en <span class="nvc-badge nvc-1">type 1</span> : l’OCT-A montre le réseau de type 2 dans la rétine externe (<strong>b</strong>) et des ramifications profondes de type 1 associé (<strong>c</strong>, <em>flèches</em>) ; après plusieurs cycles d’anti-VEGF, cicatrice en « igloo » (<strong>f</strong>, <em>flèche</em>).')}

### <span class="nvc-badge nvc-3">Type 3</span> — anastomose rétinochoroïdienne (RAP)
Prolifération débutant dans la **rétine externe** puis s’étendant vers l’EP et la choroïde. Petites hémorragies superficielles, veinule à angle droit de voisinage. Angiographie : hyperfluorescence **très localisée précoce** puis noyée dans l’œdème cystoïde ; ICG : ***hot spot*** caractéristique. En OCT : rupture focale de l’EP et **kissing sign** (extension en doigt de gant de l’EP vers la rétine). Contexte fréquent de **pseudo-drusen réticulés** et de **choroïde fine**.

${fig(14, 'fig_4-63.png', '<span class="nvc-badge nvc-3">NVC type 3</span> : drusen (<strong>a</strong>), lésion hyperfluorescente ponctiforme précoce (<strong>b</strong>) noyée au temps tardif (<strong>c</strong>) ; la coupe (<strong>d</strong>) montre l’épaississement de la rétine externe (<em>flèche</em>) et des logettes cystoïdes.')}

${fig(15, 'fig_4-64.png', '<span class="nvc-badge nvc-3">Type 3</span> évolué avec DEP : lésion disciforme et exsudats (<strong>a</strong>), point hyperfluorescent précoce (<strong>b</strong>), diffusion sur la zone d’anastomose (<strong>c</strong>), <em>hot spot</em> en ICG (<strong>d</strong>) ; la coupe (<strong>f</strong>) matérialise l’anastomose adhérente à la rétine (<strong>kissing sign</strong>, <em>flèche</em>) avec liquide sous-EP, sous-rétinien et intrarétinien.')}

${fig(16, 'fig_4-65.png', '<span class="nvc-badge nvc-3">Type 3</span> : anastomose visible en angiographie (<strong>a</strong>) ; la coupe (<strong>b</strong>) montre une surélévation inhomogène de l’EP avec densification de la rétine externe (<em>flèche</em>), logettes cystoïdes et lésions hyper-réflectives intrarétiniennes.')}

<div class="alert alert-warning">
Le <span class="nvc-badge nvc-3">type 3</span> : bonne réponse initiale aux anti-VEGF (surtout sans connexion choroïdienne), mais <strong>résistance fréquente</strong> en cas de DEP significatif et <strong>évolution atrophique</strong> — d’où un pronostic à long terme réservé.
</div>

### <span class="nvc-badge nvc-vpc">Vasculopathie polypoïdale choroïdienne (VPC)</span>
Maculopathie récidivante séro-sanguine à **nodules orange**, prédominant dans les populations africaines et asiatiques. Volontiers considérée comme un néovaisseau de type 1 **anévrismal**, parfois sur pachychoroïde. En OCT : DEP **saillant à parois verticales** (*thumb-like*), **signe de la double couche** (dédoublement de l’EP correspondant au *branching network*) et choroïde épaisse ; l’OCT « en face » et l’ICG sont précieux.

${fig(17, 'fig_4-71.png', '<span class="nvc-badge nvc-vpc">Vasculopathie polypoïdale</span> : aspect orangé maculaire (<strong>a</strong>, <em>flèche</em>), lésions hyperfluorescentes arrondies en angiographie et en ICG (<strong>b–d</strong>) ; la coupe (<strong>e</strong>) montre les polypes en « doigt de gant » de l’EP avec signe de la double couche (<em>flèches jaunes</em>), et l’OCT « en face » (<strong>f</strong>) individualise le polype et sa paroi.')}
`,
  },

  // ============================================================= 5
  {
    title: 'Formes évoluées et compliquées',
    content: `
### Déchirure de l’épithélium pigmentaire
Complication des néovaisseaux de type 1 à **DEP significatif**, elle survient lors de la contraction de la membrane néovasculaire adhérente à la paroi interne du DEP — spontanément ou après une injection intravitréenne.

<div class="alert alert-warning">
<strong>Facteurs de risque de déchirure</strong> : hauteur du DEP > <strong>600 µm</strong>, diamètre > <strong>5 mm</strong>, anneau hyperfluorescent en angiographie.
</div>

L’OCT est l’examen clé : **EP rétracté sur lui-même** d’un côté, **zone dénudée** de l’autre (avec hyper-transmission choroïdo-sclérale). La baisse d’acuité est habituelle, mais certaines déchirures périphériques laissent une vision centrale utile — justifiant la poursuite des anti-VEGF pour assécher la lésion.

${fig(18, 'fig_4-66.png', 'DEP évoluant en déchirure : avant traitement, fond d’œil peu altéré (<strong>a</strong>), fluorescence inhomogène (<strong>b</strong>, <em>flèches</em>) et soulèvement festonné de l’EP (<strong>c</strong>). Après déchirure : plage claire temporo-maculaire (<strong>d</strong>), zone sombre en autofluorescence (<strong>e</strong>) et, en OCT (<strong>f</strong>), EP rétracté (<em>flèche jaune</em>) avec zone dénudée (<em>flèches blanches</em>).')}

À l’inverse, un aspect **festonné / plissé** du DEP apparu après traitement est de **bon pronostic** et à faible risque de déchirure.

${fig(19, 'fig_4-67.png', 'DEP évoluant vers un aspect plissé, de bon pronostic : clichés couleur (<strong>a, c</strong>) et infrarouge (<strong>b, d</strong>) avant/après anti-VEGF ; l’OCT (<strong>e</strong>) montre le plissement caractéristique et la disparition de l’hyper-réflectivité sous-rétinienne.')}

### Tubulations de la rétine externe
Lésions **arrondies/ovalaires à paroi propre hyper-réflective** et centre hypo-réflectif, témoins de formes évoluées (disciformes ou atrophiques). Très bien vues en **OCT « en face »**.

<div class="alert alert-warning">
<strong>Piège majeur</strong> — ne pas confondre une tubulation (paroi hyper-réflective) avec une logette d’œdème (simplement hypo-réflective) : la tubulation <strong>ne nécessite aucun traitement</strong>. La traiter par anti-VEGF serait une erreur.
</div>

${fig(20, 'fig_4-68.png', 'Tubulations intrarétiniennes : drusen et fibrose sous-rétinienne (<strong>a</strong>) ; en B-scan (<strong>b</strong>), lésions sombres à paroi hyper-réflective au-dessus de la fibrose (<em>flèches</em>) ; en OCT « en face » (<strong>c</strong>), réseaux tubulaires caractéristiques (<em>flèche</em>).')}

${fig(21, 'fig_4-69.png', 'Tubulations en B-scan (<strong>a</strong>) et OCT « en face » (<strong>b</strong>) : la <strong>paroi hyper-réflective</strong> des tubulations (<em>flèches jaunes</em>) les distingue des logettes cystoïdes de voisinage, simplement hypo-réflectives (<em>flèches blanches</em>).')}

### Cicatrice disciforme (fibrose)
Stade cicatriciel : lésion **épaisse, hyper-réflective**, effaçant les couches rétiniennes et l’EP, parfois surmontée de logettes et d’un DSR. Acuité habituellement très basse ; la poursuite des injections dépend de l’état de l’œil adelphe et du bénéfice fonctionnel.

${fig(22, 'fig_4-70.png', 'Coupe B-scan typique d’une lésion disciforme : fibrose sous-rétinienne hyper-réflective surmontée de logettes cystoïdes et d’un discret décollement séreux.')}

### Hématome sous-rétinien
La photographie, l’autofluorescence et l’OCT (EDI, **SS-OCT**) localisent le sang et distinguent l’hématome **pré-épithélial** de l’hématome **sous l’EP** — distinction **décisionnelle** : la chirurgie de déplacement se discute si l’hématome est pré-épithélial, mais n’est guère indiquée s’il est sous l’EP. Une VPC est fréquemment associée.

${fig(23, 'fig_4-72.png', 'Hématome sous-rétinien en SS-OCT : sang essentiellement <strong>pré-épithélial</strong>, associé à un décollement séreux rétinien et à un décollement de l’EP.')}

${fig(24, 'fig_4-73.png', 'Hématome sous-rétinien en SS-OCT : collection très épaisse et surtout <strong>pré-épithéliale</strong>.')}
`,
  },

  // ============================================================= 6
  {
    title: 'Place de l’OCT dans la stratégie thérapeutique',
    content: `
L’OCT est le **marqueur de substitution du VEGF en excès** : il détecte la reprise exsudative bien avant la baisse d’acuité. Son rôle dépend du schéma thérapeutique choisi.

| Stratégie | Place de l’OCT |
| --- | --- |
| **Régime fixe** (mensuel / bimestriel) | Aucune : injections programmées d’emblée |
| **PRN** (*pro re nata*, à la demande) | **Centrale** : l’OCT décide du retraitement (visites mensuelles indispensables) |
| **Treat & extend** (proactif) | **Importante** : traitement systématique, mais l’OCT module l’intervalle |

<div class="alert alert-note">
<strong>OCT-guided PRN</strong> — retraiter sur : baisse d’AV > 5 lettres, augmentation de l’épaisseur centrale > 100 µm, nouvelle hémorragie ou nouveaux néovaisseaux. <strong>Treat &amp; extend</strong> — après 3 injections mensuelles, allonger l’intervalle par paliers de 2 semaines tant que la macula reste sèche, le raccourcir dès la réapparition de liquide.
</div>

### Biomarqueurs OCT et pronostic

| Signe OCT | Valeur pronostique |
| --- | --- |
| Liquide **intrarétinien** / kystes dégénératifs | **Péjoratif** (moindre gain d’AV) |
| Liquide **sous-rétinien** (DSR) | **Favorable** (meilleure AV et meilleur gain) |
| Points hyper-réflectifs ; **SHRM** | Plutôt péjoratif |
| **DEP** | Moindre réponse aux anti-VEGF, pronostic réservé |
| Tubulations de la rétine externe | Mauvaise acuité (lésion évoluée) |
| Atrophie de l’EP, altération MLE/photorécepteurs, choroïde fine, adhérence vitréomaculaire | Péjoratif |

<div class="alert alert-tip">
En somme, l’OCT a <strong>doublement</strong> révolutionné la DMLA exsudative : diagnostic plus aisé de la complication néovasculaire, et adaptation individualisée du traitement à l’évolution du patient.
</div>
`,
  },

  // ============================================================= 7
  {
    title: 'OCT-angiographie de la DMLA exsudative',
    content: `
L’**OCT-angiographie (OCT-A)** visualise, **sans injection**, le flux des vaisseaux du fond d’œil. Elle affirme la néovascularisation par un **hypersignal de flux en avant de la membrane de Bruch**, corrélé au flux coloré superposé sur l’OCT « cross-sectionnel » — là où l’OCT structurel n’en donnait que des signes **indirects** (exsudation).

### Lire l’activité d’un néovaisseau
L’hypersignal se lit selon un **spectre d’activité** :

* **Actif** — capillaires fins, tortueux, denses, **interconnectés** avec boucles et anastomoses, **arcade périphérique** anastomotique et **halo sombre** périlésionnel ;
* **Inactif / « mature »** — vaisseaux volumineux, raréfiés, linéaires, centrifuges, à tronc nourricier, **sans** fines ramifications ni arcade : aspect en **« arbre mort »** ;
* **Quiescent** — néovaisseau détectable **sans** exsudation ni retentissement fonctionnel.

${fig(25, 'fig_4-74.png', 'Imagerie type des néovaisseaux en OCT-A : NVC actif naïf, réseau dense de fins capillaires interconnectés avec arcade périphérique et halo sombre (<strong>a</strong>) ; front de récidive (<strong>b</strong>) ; lésion fibrosée remodelée en « arbre mort » (<strong>c</strong>).')}

<div class="alert alert-tip">
Les <strong>cinq critères d’activité</strong> d’un néovaisseau en OCT-A : (1) forme bien définie ; (2) anastomoses et boucles ; (3) fins capillaires nombreux interconnectés ; (4) arcade périphérique complète ; (5) halo hypo-intense périlésionnel.
</div>

### <span class="nvc-badge nvc-1">Type 1</span> en OCT-A
Hypersignal **sous l’EP** (entre membrane de Bruch et face postérieure de l’EP), en *sea fan* / rayon de roue ou *medusa*. L’OCT-A augmente la détection (pas de diffusion), mais l’hypersignal peut être **masqué** par un DEP saillant ou une hémorragie. La fibrose se traduit par un aspect en « arbre mort ».

${fig(26, 'fig_4-75.png', '<span class="nvc-badge nvc-1">NVC type 1</span> en OCT-A : néovascularisation occulte hémorragique en angiographie (<strong>a–c</strong>) ; l’OCT-A montre le flux actif entre choriocapillaire et EP (<strong>d</strong>) ; segmentation de 30 µm alignée sur la membrane de Bruch (<strong>g, h</strong>) et DEP avec hémorragie en EDI (<strong>i</strong>).')}

### <span class="nvc-badge nvc-2">Type 2</span> en OCT-A
Réseaux en **« glomérules » / « méduses »** connectés à un pédicule nourricier, avec atteinte sévère de la choriocapillaire en regard. L’OCT-A voit l’ensemble des rameaux sans masquage : **sensibilité proche de 100 %**.

${fig(27, 'fig_4-76.png', '<span class="nvc-badge nvc-2">NVC type 2</span> en OCT-A : néovascularisation visible bien définie en angiographie (<strong>a, b</strong>), hyper-réflectivité pré-épithéliale en B-scan (<strong>c</strong>) et hypersignal de flux actif en avant de l’EP réunissant les cinq critères d’activité (<strong>d</strong>).')}

### <span class="nvc-badge nvc-3">Type 3</span> en OCT-A
Lésion **très localisée en touffe (*tuft*)** de la rétine externe. La segmentation « cross-sectionnelle » retrouve ses composantes rétinienne et sous-EP ; les plexus superficiel et profond montrent l’**angulation** du trajet capillaire vers la profondeur au niveau de l’anastomose.

${fig(28, 'fig_4-77.png', '<span class="nvc-badge nvc-3">NVC type 3</span> en OCT-A : diffusion juxtafovéale et masquage hémorragique en angiographie (<strong>a</strong>), deux <em>hot spots</em> en ICG (<strong>b</strong>), deux hypersignaux de flux en touffe (<strong>c</strong>) ; le flux intrarétinien est codé en rouge, le flux sous-EP en violet (<strong>d–f</strong>).')}

${fig(29, 'fig_4-78.png', 'Analyse d’un <span class="nvc-badge nvc-3">NVC type 3</span> : modification du trajet des capillaires rétiniens superficiels (<em>rond jaune</em>) et hypersignal de flux en touffe intrarétinien (<strong>b</strong>), localisé par la segmentation « cross-sectionnelle » (<strong>c</strong>).')}

### <span class="nvc-badge nvc-vpc">Vasculopathie polypoïdale</span> en OCT-A
Le **réseau choroïdien anormal** (branching network) est bien détecté en arrière de la membrane de Bruch ; les **polypes** restent difficiles à individualiser (débit lent), un peu mieux vus en **SS-OCT-A**. L’ICG demeure la référence diagnostique.

${fig(30, 'fig_4-79.png', '<span class="nvc-badge nvc-vpc">Vasculopathie polypoïdale</span> en OCT-A : hyperfluorescence mal définie (<strong>a</strong>), vaisseaux choroïdiens anormaux à ectasies polypoïdales en ICG (<strong>b</strong>), DEP inhomogène (<strong>c</strong>) et hypersignal de flux des vaisseaux dilatés avec polypes hyperdenses (<strong>d, e</strong>).')}

### Suivi sous anti-VEGF et pièges
Sous traitement : **raréfaction des fines ramifications**, évolution vers un tronc nourricier « artérialisé » et un aspect en « arbre mort », avec **récidives** possibles (bourgeons capillaires périphériques). Il n’existe pas encore de consensus de suivi en OCT-A, d’autant que les **type 1** — les plus fréquents — ne sont pas toujours détectés.

${fig(31, 'fig_4-80.png', 'Évolution d’un néovaisseau sous anti-VEGF (post-processing point par point) : flux actif initial, raréfaction à 4 mois après induction, réactivation à 5 mois (réseau plus dense) motivant une réinjection, puis remodelage en « arbre mort » à 7 mois.')}

<div class="alert alert-warning">
<strong>Artéfacts à connaître</strong> : (1) <strong>projection</strong> des vaisseaux rétiniens sur l’EP (effet miroir) ; (2) <strong>blocage / atténuation</strong> du signal (hémorragie, liquide, DEP saillant, matériel dense) pouvant mimer ou masquer un flux ; (3) <strong>perte de l’effet écran</strong> sur une atrophie de l’EP, rendant les vaisseaux choroïdiens hyper-intenses. En pratique, l’OCT-A repère aisément les <span class="nvc-badge nvc-2">type 2</span> et <span class="nvc-badge nvc-3">type 3</span> ; en cas de doute, les angiographies avec colorant restent indiquées.
</div>
`,
  },
];

export default dmlaExsudativeChapters;
