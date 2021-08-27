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
    <div className="h-screen">
      <Navbar />
      <div className="grid grid-cols-9">
        <Sidebar />
        <Document doc={document} />
      </div>
    </div>
  );
}

export default App;
