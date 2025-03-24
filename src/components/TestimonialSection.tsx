export function TestimonialSection() {
  return <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="mb-6 flex justify-center">
            <img src="/assets/photo.jpg" alt="Customer" className="w-20 h-20 rounded-full object-cover" />
          </div>
          <blockquote className="text-xl italic text-gray-600 mb-4">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris."
          </blockquote>
          <p className="font-semibold text-[#0a1e37]">Tsamejio Tatou Boris</p>
          <p className="text-sm text-gray-500">Directeur Financier</p>
        </div>
      </div>
    </section>;
}