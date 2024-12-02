import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/acceuil.html", []),
    new Route("/avis", "Les avis", "/pages/avis.html", []),
    new Route("/contact", "Contact", "/pages/contact.html", []),
    new Route("/signin", "Signin", "/pages/signin.html", [], "/js/auth/signin.js"),
    new Route("/signup", "Inscription", "/pages/admin/signup.html", ["admin"], "/js/auth/signup.js"),
    new Route("/admin", "compte Admin", "/pages/admin/admin.html", ["admin"]),
    new Route("/editpassword", "Chamgement de mot de passe",["admin"], "/pages/admin/editpassword.html", []),
    new Route("/role", "Role", "/pages/admin/role.html", ["admin"]),
    new Route("/employers", "Employers", "/pages/employer/employer/employers.html", ["admin, employer, veterinaire"]),
    new Route("/rapporta", "Allimentations", "/pages/employer/employer/rapporta.html", ["admin, employer, veterinaire"]),
    new Route("/veterinaires", "Veterinaires", "/pages/employer/veterinaires/veterinaires.html", ["admin, employer, veterinaire"]),
    new Route("/rapportv", "Rapport veterinaires", "/pages/employer/veterinaires/rapportv.html", ["admin, employer, veterinaire"]),
    new Route("/habitat", "Habitat", "/pages/habitat/habitat.html", []),
    //new Route("/newhabitat", "New Habitat", "/pages/habitat/newhabitat.html", []),
    new Route("/enclos", "Enclos", "/pages/enclos/enclos.html", []),
    //new Route("/newenclos", "NewEnclos", "/pages/enclos/newenclos.html", []),
    new Route("/annimaux", "Annimaux", "/pages/enclos/annimaux/annimaux.html", []),
    //new Route("/newannimaux", "New Annimaux", "/pages/enclos/annimaux/newannimaux.html", []),
    new Route("/race", "Race", "/pages/enclos/annimaux/race/race.html", []),
    //new Route("/newrapport", "NewRapport", "/pages/enclos/annimaux/rapportvetaux/newrapport.html", []),
    new Route("/services", "Services", "/pages/services/services.html", []),
    //new Route("/servicesedit", "Nouveau Services", "/pages/services/servicesedit.html", []),
    new Route("/restauration", "Restauration", "/pages/services/service/restauration.html", []),
    new Route("/safari", "Safari", "/pages/services/service/safari.html", []),
    new Route("/visite", "Visite", "/pages/services/service/visite.html", []),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Zoo Arcadia";