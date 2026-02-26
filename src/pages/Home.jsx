const Home = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10 lg:px-16">
        
        <section id="inicio">
          <Hero />
        </section>

        <section id="soluciones">
          <ServicesCatalog />
        </section>

        <section id="servicios">
          <Automation />
        </section>

        <section id="confianza">
          <Guarantee />
        </section>

        <section id="contacto">
          <Contact />
        </section>

      </div>
    </div>
  );
};

export default Home;
