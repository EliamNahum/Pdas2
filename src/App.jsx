import ProfileCard from "./ProfileCard"

function App() {


  return (
    <>
      <h1>Componente App</h1>
      <section className="hero is-dark">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard 
                title="Alexa"
                handle="@alexa24"
                image="data:image/png;base64,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"
              />
            </div>
            <div className="column is-4">
              <ProfileCard />
            </div>
            <div className="column is-4">
              <ProfileCard />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
