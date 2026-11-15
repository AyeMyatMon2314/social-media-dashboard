function OverviewCard({ overviews }) {
  return (
    <div className="grid md:grid-cols-4 gap-8 mt-8">
      {overviews.map((overview) => {
        const isPositive = overview.isPositive;
        return (
          <div className="rounded-md bg-card p-6">
            {/* Title && Icon */}
            <div className="flex justify-between">
                <p className="text-sm text-text">{overview.title}</p>
                <img src={overview.icon} alt="icon" className="size-5" />
            </div>

            {/* Stats && Change */}
            <div className="flex justify-between mt-4">
                <p className="text-3xl font-bold">{overview.value}</p>

                <div className="flex justify-center items-center gap-1">
                    {isPositive? <img src="./images/icon-up.svg" alt="up" /> : <img src="./images/icon-down.svg" alt="down" />}
                    <p className={`text-xs ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                        {overview.change}
                    </p>
                </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default OverviewCard;
