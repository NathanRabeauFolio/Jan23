---
title: Introduction à Illustrator
date: 2020-01-01T08:00:00.000Z
summary: Adobe Illustrator est le logiciel de référence pour la conception graphique vectorielle. Dans ce cours, vous apprendrez toutes ses fonctionnalités essentielles pour libérer votre créativité et maîtriser le logiciel de graphisme vectoriel le plus puissant !. 
tags:
  - savoir-faire technique
  - logiciel
  - débutant
image: /assets/img/illustrator-intro.jpg
imageAlt: This is a test
color: eb6559
---
| ![Forst, Averell & Co. Affiche pour imprimerie Hoe 1870](/src/assets/img/illustrator-intro.jpg) |
|:--:|


Dans Illustrator, on travaille principalement avec des formes vectoriels (parfois objets vectoriels). Les formes vectoriels sont composés de lignes et de courbes définies par des objets mathématiques appelés vecteurs.
On peut déplacer ou modifier les graphiques vectoriels sans perdre de détails car ils sont corrélés des questions de résolution. En d'autres termes, ils conservent des contours nets lorsqu'ils sont redimensionnés, zoomés à l'écran, imprimés, enregistrés dans un fichier PDF ou importés dans une application supportant ce genre d'image. Ainsi, l'imagerie vectoriel est le meilleur choix pour la création de logos ou de pictogramme utilisés à différentes tailles et sur différents supports.

Illustrator permet cependant d'intégrer aussi des images bitmap, techniquement appelées images raster, qui utilisent une grille rectangulaire de pixels, pour représenter le visuel. Mais n'est pas conçus pour travailler ou retoucher ce type d'images.

## image matricielle et image vectorielle

![Logo PawPatrol vector et bitmap](/src/assets/img/logo-PawPatrol-vector-bitmap.jpg)

Une image matricielle, également appelée bitmap, est constituée d'une multitude de pixels, dont les seules caractéristiques sont leur couleur spécifique et éventuellement leur opacité. En revanche, une image vectorielle se compose d'objets qui présentent davantage de caractéristiques. Ces caractéristiques peuvent inclure des coordonnées dans un plan et une taille définie, souvent en association avec une forme géométrique précise (cercle, rectangle, etc.). De plus, ces objets peuvent avoir des propriétés graphiques comme une couleur de remplissage ou un contour défini par une couleur et une épaisseur.

![Du Raster au vecteur](/src/assets/img/gmap-raster.jpg)

La différence entre les images matricielle et vectorielles devient particulièrement évidente en cartographie, notamment lorsqu'on utilise Google Maps. Par exemple, en passant d'une vue satellite, où l'application propose une photographie du lieu vu du ciel composée de pixel (en cartographie on parlera de une donnée raster)...

![Du Raster au vecteur](/src/assets/img/Map-vector.jpg)

...au mode "carte", qui permet d'afficher des tracés de routes ou des points d'intérêt (données vectorielles par excellence, puisqu'elles sont définies par des coordonnées et des caractéristiques de couleurs, de contour, de forme ou encore de libélé : "ceci est une route nationale", "ceci est une piste cyclable", "ceci est un Mac Donald"). Grâce à ces formes et tracés vectoriels correctement renseigné, l'application est capable de proposer des itinéraires. En revanche, une simple photographie aérienne reste muette et inexploitable pour une machine.

![Du Raster au vecteur](/src/assets/img/Map-vector2.jpg)

## Ouverture de fichiers et espace de travail

On travaillera ici avec plusieurs fichiers vectoriel, mais avant de commencer, on restaurera les préférences par défaut d'Adobe Illustrator CC. Pour s'assurer que les outils et les panneaux fonctionnent exactement comme décrit dans ici-même.

On choisit <kbd>fichier</kbd> > <kbd>ouvrir</kbd> , on navigue jusqu'au dossier contenant les fichiers à télécharger sur cette page, et on ouvre le fichier <kbd>PawPatrol.ai</kbd> .

On choisit <kbd>Fenêtre</kbd> > <kbd>Espace de travail</kbd> > <kbd>les indispensables classique</kbd> puis <kbd>réinitialisé Les indispensables classique</kbd> pour s'assurer que l'espace de travail est réglé sur les paramètres par défaut.

On choisit <kbd>Affichage</kbd> > <kbd>Ajuster le plan de travail à la fenêtre</kbd> .

Cela adapte le plan de travail actif dans la fenêtre du document afin que l'on puisse voir l'ensemble du support. On apprendra bientôt qu'un plan de travail est la zone qui contient vos réalisations imprimables et est similaire à une feuille de dessin.

On clique sur l'onglet <kbd>Bibliothèques</kbd> à coté du panneau <kbd>Propriété</kbd> , et on opère un glissé-depausé avec le clic enfoncé. On constate alors que les panneaux sont déplaçable et agençable à loisir.

![Du Raster au vecteur](/src/assets/img/propriete-bibli.jpg)

Une fois cela fait, on clique sur la <kbd>×</kbd> de ce même onglet pour le fermer, nous n'en aurons pas besoin pour l'instant

![Du Raster au vecteur](/src/assets/img/bibli.jpg)

On peut remarqué que ces panneaux peuvent apparaitre ouvert, superposé en onglet ou replié sous la forme d'une icône

![Du Raster au vecteur](/src/assets/img/icon-palette-2.jpg)

### Explorer l'espace de travail

![Du Raster au vecteur](/src/assets/img/illufenetre.jpg)

1. La barre d'application, au dessu de la fenêtre du logiciel sur Mac OS ou dans la fenêtre sur Windows.
2. Le panneau de contrôle affiche les options de l'outils actuellement sélectionné.
3. Les palettes d'outils nous aident à surveiller et à modifier notre travail. Certains panneaux sont affichés par défaut, on peut en fermer certain, les réorganiser et en afficher d'autre rangé sous l'onglé <kbd>Fenêtre</kbd> de la barre d'application.
4. Le panneau d'outils contient des outils pour créer et modifier des élément. Les outils connexes sont regroupés ensemble.
![Du Raster au vecteur](/src/assets/img/outils-cache.jpg)
![Du Raster au vecteur](/src/assets/img/outils-ai.jpg)
5. La fenêtre de document affiche le fichier sur lequel on travaille.
6. La barre d'état apparaît en bas à gauche de la fenêtre du document. Elle affiche des informations, des contrôles de zoom et de navigation.

### Manipulation du panneau d'outils

1. On place le pointeur sur l'outil de sélection dans le panneau d'outils. On remarque que le nom (Outil de sélection), une petite illustration de son fonctionnement et le raccourci clavier (V) sont affichés dans une infobulle.
![Du Raster au vecteur](/src/assets/img/ai-selection.jpg)
2. On place le pointeur sur l'outil de sélection directe,
![Du Raster au vecteur](/src/assets/img/ai-selection-direct.jpg)
 et on maintient le bouton de la souris enfoncé jusqu'à ce qu'un menu d'outils apparaisse. (Sous Windows, on appuie toujours sur le bouton gauche de la souris sauf indication contraire.)
 ![Du Raster au vecteur](/src/assets/img/ai-selection-direct-2.jpg)
 On relâche le bouton de la souris, puis on clique sur l'outil de sélection de groupe pour le sélectionner. Tout outil dans le panneau d'outils qui affiche un petit triangle contient des outils supplémentaires qui peuvent être sélectionnés de cette manière. Les outils dans le menu sont dits "cachés" sous celui actuellement affiché dans le panneau.
 ![Du Raster au vecteur](/src/assets/img/ai-selection-direct-3.jpg)
 panneaux que l'on peut conserver afin de jongler entre les différents outils.

### Changement de la vue

Lors du travail sur des fichiers, il est probable qu'il soit nécessaire de modifier le niveau de grossissement et de naviguer parmi les planches. Le niveau de grossissement, pouvant aller de 3,13% à 64000%, est affiché dans la barre de titre (ou l'onglet du document) à côté du nom de fichier et dans le coin inférieur gauche de la fenêtre du document.

Il existe de nombreuses façons de changer le niveau de zoom dans Illustrator, et dans cette section, plusieurs des méthodes les plus couramment utilisées seront explorées.

Pour agrandir ou réduire la vue de l'œuvre en utilisant le menu <kbd>Affichage</kbd> , l'une des actions suivantes est effectuée :

<kbd>Affichage</kbd> > <kbd>Zoom avant</kbd> est sélectionné pour agrandir l'affichage de l'œuvre.
<kbd>Affichage</kbd> > <kbd>Zoom arrière</kbd> est sélectionné pour réduire la vue de l'œuvre.
Il est également possible de zoomer et dézoomer à l'aide de raccourcis clavier :
<kbd>Command</kbd> (Mac OS) ou <kbd>Ctrl</kbd> (Windows) + <kbd>+</kbd> permet de zoomer.
<kbd>Command</kbd> (Mac OS) ou <kbd>Ctrl</kbd> (Windows) + <kbd>-</kbd> permet de dézoomer.
Chaque fois qu'une option de zoom est choisie, la vue de l'œuvre est redimensionnée au niveau de zoom prédéfini le plus proche. Les niveaux de zoom prédéfinis apparaissent dans un menu dans le coin inférieur gauche de la fenêtre du document, identifié par une flèche vers le bas à côté d'un pourcentage.
![Du Raster au vecteur](/src/assets/img/ai-zoom.jpg)
En plus des options du menu <kbd>Affichage</kbd> , l'outil Zoom peut être utilisé pour agrandir et réduire la vue de l'œuvre à des niveaux de grossissement prédéfinis.

Lors de l'ouverture d'un fichier, celui-ci est automatiquement affiché en mode Aperçu, cependant d'autre mode d'affichage vont nous permettre de controler notre travail.
![Du Raster au vecteur](/src/assets/img/vue-ai-aper.jpg)
<kbd>Affichage</kbd> > <kbd>Tracés</kbd> Permet de n'afficher que les contours des objets. Cette vue peut être utilisée pour trouver et sélectionner facilement des objets qui pourraient ne pas être visibles en mode Aperçu.
![Du Raster au vecteur](/src/assets/img/vue-ai-trac.jpg)
<kbd>Affichage</kbd> > <kbd>Couleurs d'épreuve</kbd> permet de visualiser la conversion des couleurs dans un espace colorimétrique choisi. Par exemple un espace colorimétrique CMJN pour l'impression.
![Du Raster au vecteur](/src/assets/img/vue-ai-print.jpg)
ou un espace Colorimétrique simulant une vision daltonnienne comme ici :
![Du Raster au vecteur](/src/assets/img/vue-ai-dalto.jpg)
On accède à ces conversions par <kbd>Affichage</kbd> > <kbd>Format d'épreuve</kbd> , On l'applique par <kbd>Affichage</kbd> > <kbd>Couleurs d'épreuve</kbd>
<kbd>Affichage</kbd> > <kbd>Aperçus en pixel</kbd> permet de simulé une vue rasterisé de votre image vectoriel
![Du Raster au vecteur](/src/assets/img/vue-ai-pix.jpg)

### la fenêtre des calques

La vue en tracés, nous a permis de saisir commemnt l'illustration était composé, On comprend qu'il s'agit de forme empilé. Si l'on selectionne avec l'outils de selection <kbd>V</kbd> le blason, on observe l'ensemble des formes qui composent cette partis de l'illustration surligné en rouge
![Du Raster au vecteur](/src/assets/img/calque-ai-01.jpg)
en bleu pour le lettrage "PAW"
![Du Raster au vecteur](/src/assets/img/calque-ai-02.jpg)
et vert pour la pancarte "Patrol"
![Du Raster au vecteur](/src/assets/img/calque-ai-03.jpg)
Ces éléments sont sont des calques différent, c'est à dire 3 niveaux de constructions différent.
On peux accédés à la palette par <kbd>Affichage</kbd> > <kbd>Calques</kbd>
![Du Raster au vecteur](/src/assets/img/calque-ai-04.jpg)
Lorsque un élement d'un calque est selectionné, un pastille de la couleur du-dit calque apparait.
dans cette exemeple l'outil selection nous permet de selectionner un groupe d'objets composant l'ensemble du blason.
L'outils de selection direct (fleche blanche) <kbd>A</kbd> nous permet de selection un objet au sein de ce groupe, encore une fois nous observont une pastille s'activée en face de l'objet "Tracé transparent" selectionner
![Du Raster au vecteur](/src/assets/img/calque-ai-05.jpg)
On Observe à cette occasion que l'indicateur de remplissage et de contour affiche maintenant les caractères de l'object selection. A savoir un remplissage en dégradé et un contour gris.
![Du Raster au vecteur](/src/assets/img/selectcolor.jpg)

## Composer avec des objet pré-dessiné

![Du Raster au vecteur](/src/assets/img/matreau.jpg)
1. ouvrir le fichier marteau.ai
2. ajuster le zoom <kbd>Affichage</kbd> > <kbd>Ajuster le plan de travail à la fenêtre</kbd>
3. Ouvrir la palette des calques <kbd>Fenêtre</kbd> > <kbd>Calques</kbd>
![Du Raster au vecteur](/src/assets/img/matreau-calques.jpg)

On va devoir réagencer les objets predessiné et duement nommée dans la palette des calques.
Commençont par le bloc tete du marteau. afin de selection les objets tete et frappe nous avons plusieurs possibilité
Celle de la selection direct (flèche noire) <kbd>V</kbd> ou l'on cliquera d'abord sur le rectangle vertical en haut a gauche (preferenciellement sur son contour puisque son remplisage est vide) puis on cliquera sur le polygone complexe en dessous avec <kbd>shift</kbd> enfoncé.
![Du Raster au vecteur](/src/assets/img/matreau-selection01.jpg)
On peut aussi selectionner deux objets distinct en formant une zone de selection avec un click maintenue à proximité de la première forme et en dessinant une zone en excartant le curseur jusqu'a englobé tout ou partie de la seconde forme.
![Du Raster au vecteur](/src/assets/img/matreau-selection02.jpg)
On peut encore selectionner 1 ou plusieur objet en cliquant dans le petit rond en face de l'objet dans la fenêtre des calques, on appuiera la <kbd>Cmd</kbd> ou <kbd>ctrl</kbd> en cliquant pour selectionner les objets suivant
![Du Raster au vecteur](/src/assets/img/matreau-selection-calque.jpg)

![Du Raster au vecteur](/src/assets/img/matreau-selection-duo.jpg)

Lorsque l'on reclique sur un des élements selectionnés, celui-ci apparait comme surligné.

![Du Raster au vecteur](/src/assets/img/matreau-selection-cle.jpg)

on observe alors que l'indicateur de reference des alignement (palette proprieté) passe alors de <kbd>aligner sur une selection</kbd> à <kbd>aligner sur un objet clé</kbd>. On comprend alors que l'objet surligné devient l'objet de reference pour nos action d'alignement

![Du Raster au vecteur](/src/assets/img/matreau-allign00.jpg)

on clique alors sur <kbd>alignement vertical en haut</kbd>

![Du Raster au vecteur](/src/assets/img/matreau-allign05.jpg)

On observe alors que le 

![Du Raster au vecteur](/src/assets/img/matreau-allign06.jpg)