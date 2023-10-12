import { randomId } from '@/utils/random-id';
import { Counter } from './counter';
import { AddToCart } from './add-to-cart';

export const ProductCard = () => {
  const id = randomId().toString();

  return (
    <div className="w-80 bg-white shadow rounded">
      <div
        className="h-48 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center"
        style={{
          backgroundImage: `url(
            'https://images.pexels.com/photos/7989741/pexels-photo-7989741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          )`
        }}>
        <div className="flex justify-between">
          <input type="checkbox" />
          <button className="text-white hover:text-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
        </div>
        <div>
          <span className="uppercase text-xs bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium select-none">
            available
          </span>
        </div>
      </div>
      <div className="p-4 flex flex-col items-center">
        <p className="text-gray-400 font-light text-xs text-center">Hammond robotics</p>
        <h1 className="text-gray-800 text-center mt-1">Item name</h1>
        <p className="text-center text-gray-800 mt-1">€1299</p>
        <Counter />
        <AddToCart />
        <div className="flex justify-between w-full mt-4">
          <div className="flex items-center text-gray-500">
            <input id={id} type="checkbox" className="mr-2" />
            <label htmlFor={id} className="select-none cursor-pointer">
              Compare
            </label>
          </div>
          <div>
            <button className="py-1 px-4 bg-white text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center">
              Add to List
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export interface IProductCard {
  id?: string;
}
