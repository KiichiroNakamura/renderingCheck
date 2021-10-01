import "./styles.css";
import { Input1 } from "./components/Input1";
import { Input2 } from "./components/Input2";
import { FileList } from "./components/FileList";
import { ListProvider } from "./providers/ContextProvider";

export default function App() {
  return (
    <div className="App">
      <ListProvider>
        <Input1 />
        <Input2 />
        <FileList />
      </ListProvider>
    </div>
  );
}
