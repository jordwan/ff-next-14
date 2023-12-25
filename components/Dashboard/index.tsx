const Dashboard = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-red pb-16 pt-[120px] dark:bg-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px] h-screen"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center justify-center">
            <div className="w-full px-4">
              <div className="relative left-0 top-0 flex flex-col space-y-4">
                <a href="#">Menu Item 1</a>
                <a href="#">Menu Item 2</a>
                <a href="#">Menu Item 3</a>
                <a href="#">Menu Item 4</a>
                <a href="#">Menu Item 5</a>
                <a href="#">Menu Item 6</a>
                <a href="#">Menu Item 7</a>
                <a href="#">Menu Item 8</a>
                <a href="#">Menu Item 9</a>
                <a href="#">Menu Item 10</a>
              </div>
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center bg-white"
                data-wow-delay=".2s"
              >
                <div>
                  <p className="mb-12 text-base font-medium !leading-relaxed text-body-color dark:text-white dark:opacity-90 sm:text-lg md:text-xl">
                    FootyFiEND.com Next Generation Dashboard
                  </p>
                </div>
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

export default Dashboard;
