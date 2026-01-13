export default function BannerSkeleton() {
  return (
    <section className="w-full">
      <div className="w-full h-[420px] bg-gray-200 animate-pulse flex items-center">
        <div className="container">
          <div className="w-1/2 h-10 bg-gray-300 rounded mb-4"></div>
          <div className="w-1/3 h-6 bg-gray-300 rounded"></div>
          <div className="w-40 h-10 bg-gray-300 rounded mt-6"></div>
        </div>
      </div>
    </section>
  );
}
