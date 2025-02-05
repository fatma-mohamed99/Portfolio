import React, { Suspense, lazy, useState, useEffect } from "react";
import Home from "./pages/Home";

const FrontendBackground = lazy(() => import("./styles/FrontendBackground"));

function App() {
  const [isBgLoaded, setIsBgLoaded] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 640);
    };

    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div
      className={`px-2 bg-transparent ${isBgLoaded ? "bg-transparent" : "bg-main"
        } relative sm:px-4 md:px-10 xl:px-20 min-h-screen w-full overflow-x-hidden`}
    >
      {isDesktop && (
        <Suspense
          fallback={<div className="fixed inset-0 -z-10 bg-main"></div>}
        >
          <div className="fixed inset-0 -z-10">
            <FrontendBackground onLoad={() => setIsBgLoaded(true)} />
          </div>
        </Suspense>
      )}

      {!isDesktop && (
        <div className="fixed inset-0 -z-10 bg-main"></div>
      )}

      <div className="relative">
        <Home />
      </div>
    </div>
  );
}

export default App;