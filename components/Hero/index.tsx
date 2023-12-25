import Link from 'next/link';

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
                  <span className="absolute left-0 top-0 z-[-1]">
                    <svg
                      width="287"
                      height="420"
                      viewBox="0 0 287 254"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.2"
                        d="M286.5 0.5L-14.5 354.5V69.5L286.5 -1000.5Z"
                        fill="url(#paint0_linear_111:578)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_111:578"
                          x1="-40.5"
                          y1="117"
                          x2="301.926"
                          y2="-97.1485"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#dcff00" />
                          <stop
                            offset="1"
                            stopColor="#4A6CF7"
                            stopOpacity="0"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <span className="absolute right-0 top-0 z-[-1]">
                    <svg
                      width="628"
                      height="528"
                      viewBox="0 0 628 258"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.2"
                        d="M669.125 357.002L345.875 131.9983L524.571 -15.8832L669.125 257.002Z"
                        fill="url(#paint0_linear_0:1)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_0:1"
                          x1="644"
                          y1="221"
                          x2="429.946"
                          y2="37.0429"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#dcff00" />
                          <stop
                            offset="1"
                            stopColor="#4A6CF7"
                            stopOpacity="0"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                </div>
                <div className="p-10">
                  <svg
                    width="80%"
                    height="auto"
                    viewBox="0 0 133.86 10.25"
                    className="mx-auto fill-current"
                  >
                    <path
                      d="M60.62,66.52h2.93l-.9,7.32h1.47l.9-7.32H68l-.9,7.32h1.46l.9-7.32h2.93L71.08,76.77H59.36Z"
                      transform="translate(-59 -66.52)"
                    />
                    <path
                      d="M78.49,76.77H75.56l1.26-10.25h2.93Z"
                      transform="translate(-59 -66.52)"
                    />
                    <path
                      d="M93,66.52l-.81,6.59H90.56l1.66,3.66H88.83l-1.66-3.66h-.82l-.44,3.66H83l1.26-10.25Zm-3.28,2.93H86.81l-.09.73h2.93Z"
                      transform="translate(-59 -66.52)"
                    />
                    <path
                      d="M99.54,73.84h5.85L105,76.77H96.25l1.26-10.25h8.79l-.36,2.93h-5.86l-.09.73h5.86l-.37,2.93H99.62Z"
                      transform="translate(-59 -66.52)"
                    />
                    <path
                      d="M119.57,66.52l-.36,2.93h-5.86l-.09.73h5.86l-.81,6.59h-8.79l.36-2.93h5.86l.08-.73H110l.81-6.59Z"
                      transform="translate(-59 -66.52)"
                    />
                    <path
                      d="M143.54,70.18h2.93L146,73.84h2.92l.55-4.39h-5.86l.36-2.93h8.79l-1.26,10.25h-8.79Z"
                      transform="translate(-59 -66.52)"
                    />
                    <path
                      d="M157.89,66.52h8.79l-1.26,10.25h-2.93l.27-2.19h-2.93l-.27,2.19h-2.93Zm2.57,2.93-.27,2.2h2.93l.27-2.2Z"
                      transform="translate(-59 -66.52)"
                    />
                    <path
                      d="M176.67,69.45l-.9,7.32h-2.93l.9-7.32h-2.93l.36-2.93H180l-.35,2.93Z"
                      transform="translate(-59 -66.52)"
                    />
                    <path
                      d="M184.44,66.52h8.79L192,76.77H189l.27-2.19h-2.93l-.27,2.19h-2.93ZM187,69.45l-.27,2.2h2.93l.27-2.2Z"
                      transform="translate(-59 -66.52)"
                    />
                    <path
                      d="M123.11,69.25h4.1L126.63,74h-1.37l.13-1H124l-.13,1h-1.36Zm1.2,1.37-.12,1h1.36l.13-1Z"
                      transform="translate(-59 -66.52)"
                    />
                    <path
                      d="M130.48,70.83,130.09,74h-1.37l.59-4.79h1.36l1.27.79.1-.79h1.37L132.82,74h-1.37l.3-2.42Z"
                      transform="translate(-59 -66.52)"
                    />
                    <path
                      d="M135.29,71h1.37l-.21,1.71h1.36l.26-2h-2.74l.17-1.37h4.1L139,74h-4.1Z"
                      transform="translate(-59 -66.52)"
                    />
                  </svg>
                </div>
                <div>
                  <p className="mb-12 text-base font-medium !leading-relaxed text-body-color dark:text-white dark:opacity-90 sm:text-lg md:text-xl">
                    Home Automation, TV Wall Mounting, Smart Lighting Control,
                    Hi-Fi Audio, Home Theater Installations, Home Security,
                    Wi-Fi Networking and Access Control in Kelowna, BC and South
                    Okanagan. Contact us today for a free quote!
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="/contact"
                    className="rounded-md bg-primary px-8 py-4 text-base font-semibold text-black duration-300 ease-in-out hover:bg-primary/80"
                  >
                    Get a Free Quote
                  </Link>
                  <Link
                    href="/services"
                    className="rounded-md bg-black/20 px-8 py-4 text-base font-semibold text-black duration-300 ease-in-out hover:bg-black/30 dark:bg-white/20 dark:text-white dark:hover:bg-white/30"
                  >
                    Explore Services
                  </Link>
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

export default Hero;
