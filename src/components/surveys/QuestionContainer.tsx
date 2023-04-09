const QuestionContainer = ({ children, ...rest }: { children: React.ReactNode }) => {
  return (
    <div className="rounded border border-slate-300 px-4 py-4 flex flex-col gap-2">{children}</div>
  );
};
export default QuestionContainer;
