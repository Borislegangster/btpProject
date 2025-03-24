import { useParams, Link } from "react-router-dom";
import { CalendarIcon, MapPinIcon, ClockIcon, CheckCircleIcon, BuildingIcon, UsersIcon, WrenchIcon } from "lucide-react";
// Mock data - In a real app, this would come from an API
const projectDetails = {
  "commercial-center": {
    title: "Centre Commercial de la Place",
    status: "ongoing",
    progress: 80,
    location: "Douala-Akwa",
    startDate: "2023-03-15",
    endDate: "2024-06-30",
    description: "Un centre commercial moderne comprenant 45 boutiques, un food court et un parking souterrain de 500 places.",
    mainImage: "/assets/ex1.jpg",
    gallery: ["/assets/img1.jfif", "/assets/img2.jfif", "/assets/ex3.jfif"],
    specifications: {
      surface: "25,000 m²",
      budget: "45M €",
      duration: "15 mois",
      team: "120 personnes"
    },
    milestones: [{
      date: "2023-03-15",
      title: "Début des travaux",
      completed: true
    }, {
      date: "2023-08-30",
      title: "Fondations terminées",
      completed: true
    }, {
      date: "2023-12-15",
      title: "Structure principale",
      completed: true
    }, {
      date: "2024-03-30",
      title: "Aménagement intérieur",
      completed: false
    }, {
      date: "2024-06-30",
      title: "Livraison",
      completed: false
    }]
  }
  // Add more projects as needed
};
export function ProjectDetail() {
  const {
    id
  } = useParams();
  const project = projectDetails[id as keyof typeof projectDetails];
  if (!project) {
    return <div>Projet non trouvé</div>;
  }
  return <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#0a1e37] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <div className="mb-6">
              {project.status === "ongoing" ? <div className="bg-yellow-500 text-white px-4 py-1 rounded-full flex items-center">
                  <ClockIcon className="w-4 h-4 mr-2" />
                  En cours
                </div> : <div className="bg-green-500 text-white px-4 py-1 rounded-full flex items-center">
                  <CheckCircleIcon className="w-4 h-4 mr-2" />
                  Terminé
                </div>}
            </div>
            <h1 className="text-4xl font-bold text-center mb-4">
              {project.title}
            </h1>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center">
                <MapPinIcon className="w-4 h-4 mr-2" />
                {project.location}
              </div>
              <div className="flex items-center">
                <CalendarIcon className="w-4 h-4 mr-2" />
                {new Date(project.startDate).toLocaleDateString("fr-FR")}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="mb-12">
              <img src={project.mainImage} alt={project.title} className="w-full h-[400px] object-cover rounded-lg mb-4" />
              <div className="grid grid-cols-3 gap-4">
                {project.gallery.map((image, index) => <img key={index} src={image} alt={`${project.title} ${index + 1}`} className="w-full h-32 object-cover rounded-lg" />)}
              </div>
            </div>
            {/* Description */}
            <div className="bg-white rounded-lg p-8 mb-8 shadow-sm">
              <h2 className="text-2xl font-bold mb- text-[#0a1e37]">Description du Projet</h2>
              <p className="text-gray-600">{project.description}</p>
            </div>
            {/* Timeline */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 text-[#0a1e37]">Progression du Projet</h2>
              <div className="space-y-6">
                {project.milestones.map((milestone, index) => <div key={index} className="flex items-start">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${milestone.completed ? "bg-green-500" : "bg-gray-200"}`}>
                      <CheckCircleIcon className={`w-5 h-5 ${milestone.completed ? "text-white" : "text-gray-400"}`} />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-[#0a1e37]">{milestone.title}</h3>
                      <p className="text-sm text-gray-500">
                        {new Date(milestone.date).toLocaleDateString("fr-FR")}
                      </p>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
          {/* Right Column */}
          <div className="space-y-8">
            {/* Project Stats */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-[#0a1e37]">Spécifications</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <BuildingIcon className="w-5 h-5 text-[#3498db] mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Surface</p>
                    <p className="font-semibold text-[#0a1e37]">
                      {project.specifications.surface}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <UsersIcon className="w-5 h-5 text-[#3498db] mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Équipe</p>
                    <p className="font-semibold text-[#0a1e37]">
                      {project.specifications.team}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <WrenchIcon className="w-5 h-5 text-[#3498db] mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Durée</p>
                    <p className="font-semibold text-[#0a1e37]">
                      {project.specifications.duration}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* CTA */}
            <div className="bg-[#0a1e37] text-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4">
                Intéressé par ce projet ?
              </h3>
              <p className="mb-4">
                Contactez-nous pour en savoir plus sur nos services et discuter
                de votre projet.
              </p>
              <Link to="/contact" className="bg-[#3498db] hover:bg-white hover:text-[#0a1e37] text-white px-6 py-3 rounded transition block text-center">
                Obtenir un devis
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>;
}