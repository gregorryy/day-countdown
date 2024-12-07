// Fonction pour mettre à jour le compte à rebours
function mettreAJourCompteARebours() {
  const maintenant = new Date(); // Obtenir la date et l'heure actuelles
  const prochainNoel = new Date(maintenant.getFullYear(), 11, 25); // Définir la date du prochain Noël
  if (maintenant > prochainNoel) {
    prochainNoel.setFullYear(prochainNoel.getFullYear() + 1); // Si Noël est déjà passé cette année, prendre Noël de l'année prochaine
  }
  const diff = prochainNoel - maintenant; // Calculer la différence en millisecondes

  // Calculer le temps restant en jours, heures, minutes et secondes
  const jours = Math.floor(diff / (1000 * 60 * 60 * 24));
  const heures = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const secondes = Math.floor((diff % (1000 * 60)) / 1000);

  // Mettre à jour les éléments HTML avec le temps restant calculé
  document.getElementById(
    "jours"
  ).innerHTML = `<span class="jour">${jours}</span> <span class="day">days</span>`;
  document.getElementById(
    "heures"
  ).innerHTML = `<span class="heure">${heures}</span> <span class="hr">hours</span>`;
  document.getElementById(
    "minutes"
  ).innerHTML = `<span class="minutes">${minutes}</span> <span class="min">minutes</span>`;
  document.getElementById(
    "secondes"
  ).innerHTML = `<span class="seconde">${secondes}</span> <span class="sec">seconds</span>`;
}

// Mettre à jour le compte à rebours toutes les secondes
setInterval(mettreAJourCompteARebours, 1000);
mettreAJourCompteARebours(); // Appel initial pour afficher immédiatement le compte à rebours
