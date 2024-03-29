import { Masters, Batchlers } from "./Education";
import { GraduateAssistance, MachineLearningIntern } from "./Experiance";

export default function Career() {
  return (
    <>
      <div className="flex items-start justify-center p-4 font-mono">
        <div className="relative border-s border-gray-200 dark:border-gray-700">
        <Masters />
        <Batchlers />
        <GraduateAssistance />
        <MachineLearningIntern />

        </div>
      </div>
    </>
  );
}

