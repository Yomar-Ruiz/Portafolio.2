import './App.css';

const projects = [
  {
    title: 'Audio Transcriber AI',
    description: 'Aplicación para transcribir audio con inteligencia artificial y organizar resultados de forma clara.',
    url: 'https://audio-transcriber-ai-nu.vercel.app/'
  },
  {
    title: 'Panoramic Studio',
    description: 'Proyecto enfocado en experiencias visuales y presentaciones inmersivas para marcas y productos.',
    url: 'https://panoramic-studio.vercel.app/'
  },
  {
    title: 'Exo Market',
    description: 'Plataforma digital para explorar productos y servicios con una interfaz moderna y simple.',
    url: 'https://exo-market-5fcd.vercel.app/'
  },
  {
    title: 'Álbum de fotos de Sofía',
    description: 'Un álbum de fotos elegante y emotivo dedicado a Sofía, con una experiencia visual cuidada y romántica.',
    url: 'https://sofia-primera.vercel.app/'
  },
  {
    title: 'Pokedex Kanto',
    description: 'Una web con todos los pokemones de la primera region y generacion de pokemon.',
    url: 'https://pokedex-eta-orpin.vercel.app/'
  }
];

function App() {
  return (
    <div className="app-shell">
      <main className="portfolio">
        <section className="hero">
          <p className="eyebrow">Portafolio de proyectos</p>
          <h1>Yomar Gabriel Ruiz</h1>
          <p className="hero-copy">
            Desarrollador enfocado en crear experiencias digitales claras, modernas y funcionales. Aquí presento algunos de mis proyectos más destacados.
          </p>
        </section>

        <section className="projects-grid" aria-label="Proyectos destacados">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.url} target="_blank" rel="noreferrer">
                Ver proyecto
              </a>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
