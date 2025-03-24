import { useNavigate } from "react-router-dom";

export function NewsletterSection() {

  const navigate = useNavigate();

  return <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-[#0a1e37]">NewsLetter</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
              Curabitur facilisis ornare.
            </p>
          </div>
          <div className="w-full md:w-auto">
            <div className="flex">
              <input type="email" placeholder="Votre email" className="px-4 py-2 border border-gray-300 focus:outline-none focus:border-[#3498db] w-full md:w-64" />
              <button onClick={() => navigate("#")} className="bg-[#3498db] hover:bg-[#0a1e37] text-white px-4 py-2 transition">
                Soumettre
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>;
}