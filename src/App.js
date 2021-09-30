import "./styles.css";
import { FileList } from "./components/FileList";
import { ListProvider } from "./providers/ContextProvider";

export default function App() {
  return (
    <div className="App">
      <ListProvider>
        <FileList />
      </ListProvider>
    </div>
  );
}
