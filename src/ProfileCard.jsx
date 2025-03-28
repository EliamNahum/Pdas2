function ProfileCard({title, handle, image}) {
  return (
  <div className="card">
      <div className="card-image">
        <figure className="image-is-lbyl">
          <img src={image} alt="" width={200} height={200}/>
        </figure>
      </div>

      <div className="card-content">
        <div className="media-content">
          <p className="titleis-4">Title is{title}</p>
          <p className="subtitle is-6">Handle is{handle}</p>
        </div>
      </div>
  </div>
  )
}

export default ProfileCard






