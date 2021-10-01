import "./styles.css";
import { Input1 } from "./components/Input1";
import { FileList } from "./components/FileList";
import { ListProvider } from "./providers/ContextProvider";

export default function App() {
  return (
    <div className="App">
      <ListProvider>
        <Input1 />
        <FileList />
      </ListProvider>
    </div>
  );
}
