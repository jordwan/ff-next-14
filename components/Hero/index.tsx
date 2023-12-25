const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center justify-center">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <div>
                  <span className="absolute left-0 top-0 z-[-1]"></span>
                  <span className="absolute right-0 top-0 z-[-1]"></span>
                </div>
                <div className="p-10"></div>
                <div>
                  <p className="mb-12 text-base font-medium !leading-relaxed text-body-color dark:text-white dark:opacity-90 sm:text-lg md:text-xl">
                    FootyFiEND.com Next Generation HERO Home
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-0 top-0 z-[-1] opacity-30 lg:opacity-50"></div>

        <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100"></div>
      </section>
    </>
  );
};

export default Hero;
