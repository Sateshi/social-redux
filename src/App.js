import Feed from "./features/posts/Feed";
import Sidebar from "./components/Sidebar";
import './App.css'
function App() {
  return (
    <div className="app-wrapper">
      <Sidebar />
      <Feed />
    </div>
  );
}

export default App;
