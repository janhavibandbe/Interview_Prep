import { Link, useParams } from "react-router-dom";
import { topics, topicContent } from "../data/Topics";

import ConceptTitle from "../components/ConceptTitle";
import TheorySection from "../components/TheorySection";
import DiagramSection from "../components/DiagramSection";
import CodeSection from "../components/CodeSection";
import TrickyQuestions from "../components/TrickyQuestions";
import TopicSidebar from "../components/TopicSidebar";

function Topic() {
 const { topicId } = useParams();

  const topic = topics.find((item) => item.id === topicId);
  const content = topicContent[topicId];

  if (!topic || !content) {
    return (
      <main className="min-h-screen bg-gray-50 px-4 py-10 dark:bg-gray-950">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Topic content is not available yet.
          </h1>

          {/* <Link
            to="/"
            className="mt-4 inline-block text-blue-600 hover:underline dark:text-blue-400"
          >
            ← Back to topics
          </Link> */}
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-6 dark:bg-gray-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-9xl">

        {/* Back button */}
        {/* <Link
          to="/"
          className="mb-6 inline-block text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
        >
          ← Back to topics
        </Link> */}

        {/* Topic Header */}
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            {topic.name}
          </h1>

          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Important concepts for interview preparation
          </p>
        </header>

        {/* Sidebar + Content */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start">

          <TopicSidebar concepts={content.concepts} />

          <div className="min-w-0 flex-1 space-y-8">

            {content.concepts.map((concept, index) => (
              <article
                key={concept.id}
                id={concept.id}
                className="scroll-mt-24 rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:p-6"
              >
                <ConceptTitle
                  name={concept.name}
                />

                <div className="mt-5 space-y-6">

                  {/* Theory */}
                  {concept.theory && (
                    <TheorySection theory={concept.theory} />
                  )}

                  {/* Diagram */}
                  {concept.diagram && (
                    <DiagramSection diagram={concept.diagram} />
                  )}

                  {/* Code */}
                  {concept.code && (
                    <CodeSection code={concept.code} />
                  )}

                  {/* Tricky Questions */}
                  {concept.trickyQuestions &&
                    concept.trickyQuestions.length > 0 && (
                      <TrickyQuestions
                        questions={concept.trickyQuestions}
                      />
                    )}

                </div>
              </article>
            ))}

          </div>
        </div>
      </div>
    </main>
  );
}

export default Topic;