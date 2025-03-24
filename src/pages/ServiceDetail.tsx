import { useParams, Link } from "react-router-dom";
import { CheckCircleIcon, ClockIcon, PhoneIcon, MailIcon, ChevronRightIcon } from "lucide-react";
// Mock data - In a real app, this would come from an API
const servicesData = {
  construction: {
    title: "Construction De Bâtiment",
    description: "Notre service de construction de bâtiment comprend la réalisation de projets résidentiels, commerciaux et industriels.",
    image: "/assets/ex1.jpg",
    benefits: ["Expertise technique approfondie", "Matériaux de haute qualité", "Respect des délais", "Gestion de projet professionnelle", "Conformité aux normes"],
    process: [{
      title: "Consultation initiale",
      description: "Discussion détaillée de vos besoins et objectifs"
    }, {
      title: "Planification",
      description: "Élaboration des plans et du calendrier"
    }, {
      title: "Construction",
      description: "Réalisation des travaux selon les spécifications"
    }, {
      title: "Contrôle qualité",
      description: "Vérification rigoureuse des travaux"
    }, {
      title: "Livraison",
      description: "Remise des clés et documentation"
    }],
    relatedServices: [{
      id: "renovation",
      title: "Rénovation",
      image: "/assets/serv3.jpg"
    }, {
      id: "architecture",
      title: "Conception Architecturale",
      image: "/assets/ex2.jfif"
    }]
  }
  // Add more services as needed
};
export function ServiceDetail() {
  const {
    id
  } = useParams();
  const service = servicesData[id as keyof typeof servicesData];
  if (!service) {
    return <div>Service non trouvé</div>;
  }
  return <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-[#0a1e37] text-white py-32" style={{
      backgroundImage: `linear-gradient(rgba(10, 30, 55, 0.5), rgba(10, 30, 55, 0.5)), url(${service.image})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
          <p className="max-w-2xl text-lg">{service.description}</p>
        </div>
      </div>
      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            {/* Benefits */}
            <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-6 text-[#0a1e37]">Avantages du Service</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.benefits.map((benefit, index) => <div key={index} className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-[#3498db] mt-1 mr-3 flex-shrink-0" />
                    <p>{benefit}</p>
                  </div>)}
              </div>
            </div>
            {/* Process */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 text-[#0a1e37]">Notre Processus</h2>
              <div className="space-y-8">
                {service.process.map((step, index) => <div key={index} className="flex">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#3498db] text-white flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold mb-2 text-[#0a1e37]">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* CTA Card */}
            <div className="bg-[#0a1e37] text-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4">
                Besoin de nos services ?
              </h3>
              <p className="mb-6">
                Contactez-nous dès maintenant pour discuter de votre projet.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <PhoneIcon className="w-5 h-5 mr-3" />
                  <span>+237 695 674 827</span>
                </div>
                <div className="flex items-center">
                  <MailIcon className="w-5 h-5 mr-3" />
                  <span>tatouboris78@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <ClockIcon className="w-5 h-5 mr-3" />
                  <span>Lun-Ven: 8h-18h</span>
                </div>
              </div>
              <Link to="/contact" className="bg-[#3498db] hover:bg-white hover:text-[#0a1e37] text-white px-6 py-3 rounded transition block text-center">
                Demander un devis
              </Link>
            </div>
            {/* Related Services */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-[#0a1e37]">Services Associés</h3>
              <div className="space-y-4">
                {service.relatedServices.map(relatedService => <Link key={relatedService.id} to={`/services/${relatedService.id}`} className="flex items-center group">
                    <img src={relatedService.image} alt={relatedService.title} className="w-20 h-20 object-cover rounded" />
                    <div className="ml-4 flex-grow">
                      <h4 className="font-semibold group-hover:text-[#3498db] transition">
                        {relatedService.title}
                      </h4>
                    </div>
                    <ChevronRightIcon className="w-5 h-5 text-gray-400 group-hover:text-[#3498db] transition" />
                  </Link>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}