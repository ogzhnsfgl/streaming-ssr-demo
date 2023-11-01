import { PlanCardButton } from './card-button';

export const PlanCard = ({ text }: IPlanCard) => {
  return (
    <div className="flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-gray-300">
      <div>
        <h3 className="text-2xl font-bold text-center">Basic</h3>
        <ul className="mt-4 space-y-2">
          <li className="flex items-center">
            <svg
              className=" text-white text-xs bg-green-500 rounded-full mr-2 p-1"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            720p Video Rendering
          </li>
          <li className="flex items-center">
            <svg
              className=" text-white text-xs bg-green-500 rounded-full mr-2 p-1"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            2GB Cloud Storage
          </li>
          <li className="flex items-center">
            <svg
              className=" text-white text-xs bg-green-500 rounded-full mr-2 p-1"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Basic Video Templates
          </li>
        </ul>
      </div>
      <div className="mt-6">
        <PlanCardButton />
      </div>
    </div>
  );
};

export interface IPlanCard {
  text: string;
}
