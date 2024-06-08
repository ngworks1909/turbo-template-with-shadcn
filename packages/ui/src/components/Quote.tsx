export default function Quote() {
  return (
    <div className="bg-slate-200 flex items-center w-full justify-center">
      <div className="flex flex-col w-[70%] gap-4">
        <div className="text-3xl font-bold leading-normal">
          {`"The customer service I recieved was exceptional.The support team went above and beyond to address my concerns."`}
        </div>
        <div className="flex flex-col mt-5">
            <p className="text-2xl font-medium">Sudhakar Reddy</p>
            <p className="text-sm mt-1 font-light text-slate-600">Owner, LV Tailors</p>
        </div>
      </div>
    </div>
  );
}
