export default function Experiance() {
  return (
    <>
      <div className="flex items-start justify-center p-4 font-mono">
        <div className="relative border-s border-gray-200 dark:border-gray-700">
          <GraduateAssistance />
          <MachineLearningIntern />
        </div>
      </div>
    </>
  );
}

export function GraduateAssistance() {
  return (
    <div class="mb-4 ms-4 bg-white rounded-lg shadow-md p-2">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <div className="text-sm font-normal text-gray-400 dark:text-gray-500">
        May 2023 - Jan 2024
      </div>
      <div className="text-xl font-bold text-gray-900 dark:text-white font">
        <a href="https://www.montclair.edu"> MONTCLAIR CESAC </a>
      </div>
      <div className="text-lg font-semibold text-gray-700 dark:text-white">
        Graduate Student Researcher
      </div>
      <div className="max-w-md mx-auto text-gray-500">
        <ol>
          <li>
            ➡️ Utilized Support Vector regression with a radial basis function
            kernel and forecasted pollutants and predicted the air quality index
            by 80%
          </li>
          <li>
            ➡️ Full-stack developer- Wrote and reviewed code for JS using React,
            Node to run the ML model
          </li>
        </ol>
      </div>
    </div>
  );
}

export function MachineLearningIntern() {
  return (
    <div class="mb-4 ms-4 bg-white rounded-lg shadow-md p-2">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <div className="text-sm font-normal text-gray-400 dark:text-gray-500">
        June 2021 - Aug 2021
      </div>
      <div className="text-xl font-bold text-gray-900 dark:text-white font">
        INDIAN SERVERS
      </div>
      <div className="text-lg font-semibold text-gray-700 dark:text-white">
        Machine Learning Intern
      </div>
      <div className="max-w-md mx-auto text-gray-500">
        <ol>
          <li>
            ➡️ Designed a scalable microservices architecture using AWS EC2
            instances and Network Load Balancer(NLB), enabling the system to
            handle millions of requests per second
          </li>
          <li>
            ➡️ Enhanced model and algorithm performance by 50% through
            evaluation and implementation of innovative improvements.
          </li>
        </ol>
      </div>
    </div>
  );
}
