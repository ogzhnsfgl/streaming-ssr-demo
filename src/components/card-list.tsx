export const CardList = ({ children, title }: ICardList) => {
  return (
    <div className="container px-4 py-6 md:px-6">
      <h2 className="text-4xl font-bold">{title}</h2>
      <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3 md:gap-8">{children}</div>
    </div>
  );
};

export interface ICardList {
  children: React.ReactNode;
  title: string;
}
