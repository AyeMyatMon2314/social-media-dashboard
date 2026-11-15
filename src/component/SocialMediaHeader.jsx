

function SocialMediaHeader({dashboard}) {
  return (
      <div>
         <h1 className="text-3xl font-semibold mb-2">{dashboard.title}</h1>
        <p className="text-sm text-text">Total Followers: {dashboard.totalFollowers}</p>
      </div>
  )
}

export default SocialMediaHeader
