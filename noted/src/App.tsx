import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { Document } from "./components/Document";

const document: any = [
  {
    type: "title",
    title: "Title",
  },
  { type: "text", text: "text goes here" },
];

function App() {
  return (
    <div>
      <Navbar />

      <div className="relative grid grid-cols-9 z-10">
        <Sidebar />
        <Document />
      </div>
    </div>
  );
}

export default App;
