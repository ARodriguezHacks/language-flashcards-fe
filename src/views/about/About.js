function About() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl p-4">About Page</h1>
      <div className="grid grid-cols-6 grid-rows-6 gap-2 h-80">
        <div className="bg-gray-50 col-span-6">
          Flashcards is an application that encourages language learning!
        </div>
        <div className="bg-red-100 col-span-3">Create your own flashcards</div>
      </div>
    </div>
  );
}

export default About;
