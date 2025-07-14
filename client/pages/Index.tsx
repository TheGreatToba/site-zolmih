import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  ChevronRight,
  Building,
  Users,
  Target,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary">
                Zlomih Holding
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button
                  onClick={() => scrollToSection("accueil")}
                  className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                >
                  Accueil
                </button>
                <button
                  onClick={() => scrollToSection("a-propos")}
                  className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                >
                  À propos
                </button>
                <button
                  onClick={() => scrollToSection("activites")}
                  className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                >
                  Nos activités
                </button>
                <button
                  onClick={() => scrollToSection("societes")}
                  className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                >
                  Nos sociétés
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-foreground hover:text-primary p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t">
              <button
                onClick={() => scrollToSection("accueil")}
                className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium w-full text-left"
              >
                Accueil
              </button>
              <button
                onClick={() => scrollToSection("a-propos")}
                className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium w-full text-left"
              >
                À propos
              </button>
              <button
                onClick={() => scrollToSection("activites")}
                className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium w-full text-left"
              >
                Nos activités
              </button>
              <button
                onClick={() => scrollToSection("societes")}
                className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium w-full text-left"
              >
                Nos sociétés
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium w-full text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Accueil */}
      <section
        id="accueil"
        className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-background to-secondary/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Zlomih Holding
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Excellence entrepreneuriale et vision stratégique pour un
              développement durable
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => scrollToSection("a-propos")}
                className="text-lg px-8 py-6"
              >
                Découvrir notre vision
                <ChevronRight className="ml-2" size={20} />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="text-lg px-8 py-6"
              >
                Nous contacter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* À propos Section */}
      <section id="a-propos" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              À propos de nous
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Zlomih Holding incarne l'excellence dans la gestion d'actifs et le
              développement stratégique d'entreprises.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Notre Mission
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Nous nous engageons à créer de la valeur durable en accompagnant
                les entreprises dans leur croissance et leur transformation.
                Notre approche repose sur l'innovation, l'excellence
                opérationnelle et une vision à long terme.
              </p>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Nos Valeurs
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <ChevronRight size={16} className="text-primary mr-2" />
                  Excellence et intégrité
                </li>
                <li className="flex items-center">
                  <ChevronRight size={16} className="text-primary mr-2" />
                  Innovation et adaptabilité
                </li>
                <li className="flex items-center">
                  <ChevronRight size={16} className="text-primary mr-2" />
                  Responsabilité sociétale
                </li>
                <li className="flex items-center">
                  <ChevronRight size={16} className="text-primary mr-2" />
                  Partenariat de confiance
                </li>
              </ul>
            </div>
            <div className="bg-secondary/20 rounded-lg p-8">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    15+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Années d'expertise
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    50+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Projets réalisés
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    25+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Entreprises accompagnées
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">10</div>
                  <div className="text-sm text-muted-foreground">
                    Secteurs d'activité
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos activités Section */}
      <section id="activites" className="py-20 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nos activités
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Découvrez nos domaines d'expertise et notre approche stratégique
              du développement d'entreprises.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
              <Building className="text-primary w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Investissement Stratégique
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Identification et développement d'opportunités d'investissement
                dans des secteurs porteurs, avec une approche centrée sur la
                création de valeur à long terme.
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
              <Users className="text-primary w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Conseil en Management
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Accompagnement des dirigeants dans leurs décisions stratégiques,
                optimisation des processus et développement des compétences
                managériales.
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
              <Target className="text-primary w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Développement d'Affaires
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Expansion commerciale, développement de nouveaux marchés et mise
                en place de stratégies de croissance adaptées aux spécificités
                de chaque entreprise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos sociétés Section */}
      <section id="societes" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nos sociétés
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Un portefeuille diversifié d'entreprises dans des secteurs
              d'avenir, témoignant de notre expertise et de notre vision
              stratégique.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg border hover:border-primary/50 transition-colors">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Building className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Technologie & Innovation
              </h3>
              <p className="text-muted-foreground text-sm">
                Solutions digitales et technologies émergentes pour transformer
                les entreprises.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border hover:border-primary/50 transition-colors">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Building className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Services Financiers
              </h3>
              <p className="text-muted-foreground text-sm">
                Expertise en gestion d'actifs et conseil financier personnalisé.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border hover:border-primary/50 transition-colors">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Building className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Développement Durable
              </h3>
              <p className="text-muted-foreground text-sm">
                Projets écologiques et solutions durables pour un avenir
                responsable.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border hover:border-primary/50 transition-colors">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Building className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Santé & Bien-être
              </h3>
              <p className="text-muted-foreground text-sm">
                Innovation dans les secteurs de la santé et du bien-être des
                populations.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border hover:border-primary/50 transition-colors">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Building className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Éducation & Formation
              </h3>
              <p className="text-muted-foreground text-sm">
                Programmes éducatifs innovants et formation professionnelle de
                qualité.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border hover:border-primary/50 transition-colors">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Building className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Immobilier
              </h3>
              <p className="text-muted-foreground text-sm">
                Développement immobilier moderne et gestion de patrimoine
                foncier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Contact
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Prêt à explorer de nouvelles opportunités ? Contactez-nous pour
              discuter de vos projets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Parlons de vos projets
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Notre équipe d'experts est à votre disposition pour étudier vos
                besoins et vous accompagner dans la réalisation de vos ambitions
                entrepreneuriales.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="text-primary w-5 h-5 mr-4" />
                  <span className="text-foreground">+33 1 23 45 67 89</span>
                </div>
                <div className="flex items-center">
                  <Mail className="text-primary w-5 h-5 mr-4" />
                  <span className="text-foreground">
                    contact@zlomihholding.com
                  </span>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-primary w-5 h-5 mr-4" />
                  <span className="text-foreground">Paris, France</span>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-lg border">
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Entreprise
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Nom de votre entreprise"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Décrivez votre projet ou vos besoins..."
                  ></textarea>
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Envoyer le message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Zlomih Holding</h3>
            <p className="text-background/80 mb-6">
              Excellence entrepreneuriale et vision stratégique pour un
              développement durable
            </p>
            <div className="border-t border-background/20 pt-6">
              <p className="text-background/60">
                © 2024 Zlomih Holding. Tous droits réservés.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
