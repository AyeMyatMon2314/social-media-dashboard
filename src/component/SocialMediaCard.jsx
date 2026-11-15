function SocialMediaCard({ socialMedia }) {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-10">
      {socialMedia.map((account) => {
        const isPositive = account.isPositive;

        return (
          <div className={`relative top-1 ${account.lineColor} rounded-md`}>
            <div className="bg-card translate-y-1 p-4 rounded-b-md text-center">
              {/* Social Media Icon and Username */}
              <div className="flex items-center justify-center gap-3 mt-4">
                <img src={account.icon} alt="icon" className="size-5" />
                <p className="text-sm text-text">{account.username}</p>
              </div>

              {/* Followers Count */}
              <h2 className="text-6xl font-bold mt-7">{account.followers}</h2>

              {/* Followers Label */}
              <p className="uppercase text-sm text-text tracking-[0.3rem] mt-2">
                {account.label}
              </p>

              {/* Change in Followers */}
              <div className="flex items-center justify-center gap-1 mt-5 mb-2">
                {isPositive? <img src="./images/icon-up.svg" alt="up" /> : <img src="./images/icon-down.svg" alt="down" />}
                <p className={`text-xs ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                  {account.change} Today
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SocialMediaCard;
