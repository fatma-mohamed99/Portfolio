import React, { Suspense, lazy, useState, useEffect } from "react";
import Home from "./pages/Home";

const FrontendBackground = lazy(() => import("./styles/FrontendBackground"));

function App() {
  const [isBgLoaded, setIsBgLoaded] = useState(false);

  return (
    <div
      className={`px-2 bg-transparent ${isBgLoaded ? "bg-transparent" : "bg-main"
        } relative sm:px-4 md:px-10 xl:px-20 min-h-screen w-full overflow-x-hidden`}
    >

      <Suspense
        fallback={<div className="fixed inset-0 -z-10 bg-main"></div>}
      >
        <div className="fixed inset-0 -z-10">
          <FrontendBackground onLoad={() => setIsBgLoaded(true)} />
        </div>
      </Suspense>

      <div className="relative">
        <Home />
      </div>
    </div>
  );
}

export default App;
