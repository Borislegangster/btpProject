import { Link } from "react-router-dom";
const services = [{
  id: "construction",
  title: "Construction De Bâtiment",
  description: "Construction de bâtiments résidentiels, commerciaux et industriels.",
  image: "/assets/ex3.jfif"
}, {
  id: "renovation",
  title: "Rénovation et Design d'interieur",
  description: "Rénovation et modernisation de bâtiments existants.",
  image: "/assets/serv3.jpg"
}, {
  id: "architecture",
  title: "conception architecturale",
  description: "Conception de des plans des batiments et plan de structure.",
  image: "/assets/ex2.jfif"
}
// Add more services as needed
];
export function Services() {
  return <div className="min-h-screen bg-gray-50">
      <div className="bg-[#0a1e37] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Nos Services</h1>
          <p className="text-center mt-4 max-w-2xl mx-auto">
            Découvrez notre gamme complète de services de construction et
            d'architecture
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => <Link key={service.id} to={`/services/${service.id}`} className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#0a1e37] mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <span className="text-[#3498db] font-medium">
                  En savoir plus →
                </span>
              </div>
            </Link>)}
        </div>
      </div>
    </div>;
}