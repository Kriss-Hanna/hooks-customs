import useAudio from "../hooks/useAudio";

function App() {
  const url = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
  const [playing, toggle] = useAudio(url);

  return (
    <div>
      <h1>Lecteur Audio</h1>
      <button onClick={toggle}>{playing ? "Pause" : "Jouer"}</button>
      {playing && <p>Lecture en cours...</p>}
    </div>
  );
}

export default App;
