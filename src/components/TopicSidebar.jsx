import { useEffect, useRef, useState } from "react";

function TopicSidebar({concepts}) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToConcept = (conceptId) => {
    const element = document.getElementById(conceptId);

    if (element) {
      setIsOpen(false);

      setTimeout(() => {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 200);
    }
  };

  // Prevent background page from scrolling while mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* ================= MOBILE ================= */}

      <div className="lg:hidden">
        {/* Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="fixed left-4 top-3 z-40 flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-xl text-gray-700 shadow-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200"
          aria-label="Open concepts"
        >
          ☰
        </button>

        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/40"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* Mobile Sidebar */}
        <aside
          className={`fixed left-0 top-0 z-50 h-screen w-72 max-w-[85vw] transform border-r border-gray-200 bg-white shadow-xl transition-transform duration-200 dark:border-gray-700 dark:bg-gray-900 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Sidebar Header */}
          <div className="flex h-16 items-center justify-between border-b border-gray-200 px-5 dark:border-gray-700">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Concepts
            </h2>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-xl text-gray-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
              aria-label="Close concepts"
            >
              ×
            </button>
          </div>

          {/* Concepts */}
          <nav className="h-[calc(100vh-4rem)] overflow-y-auto p-3">
            <div className="space-y-1">
              {concepts.map((concept, index) => (
                <button
                  key={concept.id}
                  type="button"
                  onClick={() => scrollToConcept(concept.id)}
                  className="block w-full rounded-lg px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-400"
                >
                  {index + 1}. {concept.name}
                </button>
              ))}
            </div>
          </nav>
        </aside>
      </div>

      {/* ================= DESKTOP ================= */}

      <aside className="hidden w-64 shrink-0 lg:sticky lg:top-4 lg:block">
        <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
            Concepts
          </h2>

          <nav className="max-h-[calc(100vh-7rem)] space-y-1 overflow-y-auto">
            {concepts.map((concept, index) => (
              <button
                key={concept.id}
                type="button"
                onClick={() => scrollToConcept(concept.id)}
                className="block w-full rounded-lg px-3 py-2 text-left text-sm text-gray-700 transition hover:bg-gray-100 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-400"
              >
                {index + 1}. {concept.name}
              </button>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}

export default TopicSidebar;