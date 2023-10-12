export const SkeletonItem = ({ content }: ISkeletonItem) => {
  return (
    <div role="status" className="max-w-sm animate-pulse">
      <div className="flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-gray-300 w-full">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
        <span className="sr-only">{content}</span>
      </div>
    </div>
  );
};

export const CardSkeleton = ({ count, title, ...rest }: ISkeleton) => {
  return (
    <div className="container px-4 py-6 md:px-6">
      <h2 className="text-4xl font-bold text-gray-300">{title}...</h2>
      <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3 md:gap-8">
        {[...Array(count)].map((_, i) => (
          <SkeletonItem key={i} {...rest} />
        ))}
      </div>
    </div>
  );
};

export interface ISkeletonItem {
  content?: string;
}
export interface ISkeleton extends ISkeletonItem {
  count: number;
  title: string;
}
