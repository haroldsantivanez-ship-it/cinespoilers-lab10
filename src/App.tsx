import Card from './components/Card'
import Movie from './components/Movie'

function App() {
  return (
    <main>
      <h1>CineSpoiler!</h1>
      <Card title="Harold Salvador" description="Frontend Developer" />
      <Card title="Harold Santivañez" description="Frontend Developer" />
      <Movie title="Inception" genre="Ciencia Ficción" />
      <Movie title="Interstellar" genre="Drama / Sci-Fi" />
    </main>
  )
}

export default App