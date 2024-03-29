export default function Education() {
  return (
    <>
      <div className="flex items-start justify-center p-4 font-mono">
        <div className="relative border-s border-gray-200 dark:border-gray-700">
          <Masters />
          <Batchlers />
        </div>
      </div>
    </>
  );
}

function Masters() {
  return (
    <div class="mb-4 ms-4 bg-white rounded-lg shadow-md p-2">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <div className="text-sm font-normal text-gray-400 dark:text-gray-500">
        Aug 2022 - May 2024
      </div>
      <div className="text-xl font-bold text-gray-900 dark:text-white font">
        <a href="https://www.montclair.edu"> MONTCLAIR STATE UNIVERSITY ⤴</a>
      </div>
      <div className="text-lg font-semibold text-gray-700 dark:text-white">
        Masters in Computer Science
      </div>
      <div className="max-w-md mx-auto text-gray-500">
        <strong className="text-gray-700">CourseWork : </strong>Computer Algorithms & Analysis, Computer
        Architecture, Software Engineering, Human-Computer Interactn(HCI), Web
        Development, Computer Networks, Machine Learning, Robotics
      </div>
    </div>
  );
}

function Batchlers() {
  return (
    <div class="mb-4 ms-4 bg-white rounded-lg shadow-md p-2">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

      <div className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        Aug 2018 - May 2022
      </div>
      <div className="text-xl font-bold text-gray-900 dark:text-white font">
        <a href="https://www.vrsiddhartha.ac.in/">
          VELAGAPUDI RAMAKRISHDA SIDDHARTHA COLLEGE ⤴
        </a>
      </div>
      <div className="text-lg font-semibold text-gray-700 dark:text-white">
        Batchlers of Engineering
      </div>
        <div className="max-w-md mx-auto text-gray-500">
          <strong className="text-gray-700">CourseWork : </strong> Data Structures & Algorithms, C, JAVA,
          Machine Learning, Compilers
        </div>
      
    </div>
  );
}
