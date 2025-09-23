const Footer = () => {
  return (
    <div>
        <footer className="bg-gray-900 w-full flex gap-10">
            <section className="flex-col ml-10">
                <h1 className="text-3xl">CODEando</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa deserunt praesentium laudantium laboriosam maiores saepe.</p>
                
            </section>
            <section className="flex-col ml-10">
                <h1 className="text-2xl">Encontranos</h1>
                <div className="flex gap-4 pt-2">
                    <a href="https://github.com/TobiEscoca/Proyect_CODEando.git" target="_blank" aria-label="git" title="Ir al Repo GitHub">
                        <svg className="w-6 h-6 fill-white hover:fill-gray-400" >
                            <use xlinkHref="/sprite.svg#github" />
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/tobi.escoca/?hl=es-la" target="_blank" aria-label="git" title="Ir al Instagram">
                        <svg className="w-6 h-6 fill-white hover:fill-gray-400" >
                            <use xlinkHref="/sprite.svg#instagram" />
                        </svg>
                    </a>
                    <a href="https://vsco.co/tobiescoca/gallery" target="_blank" aria-label="git" title="Ir al VSCO">
                        <svg className="w-6 h-6 fill-white hover:fill-gray-400" >
                            <use xlinkHref="/sprite.svg#x" />
                        </svg>
                    </a>
                </div>
            </section>
        </footer>
    </div>
  )
}

export default Footer