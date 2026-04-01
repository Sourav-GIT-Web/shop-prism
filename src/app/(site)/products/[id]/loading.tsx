export default function Loading() {
  return (
    <div className="animate-pulse px-6 py-10">
      <div className="h-80 bg-gray-300 rounded-md mb-6"></div>
      <div className="h-6 bg-gray-300 rounded-md w-1/2 mb-3"></div>
      <div className="h-4 bg-gray-300 rounded-md w-1/3"></div>
    </div>
  );
}