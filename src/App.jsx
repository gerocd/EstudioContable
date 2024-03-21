import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import MFinanzas from "./pages/MFinanzas";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    document.title = "Mundo Finanzas";
  }, []);

  return (
    <Routes>
      <Route path="/" element={<MFinanzas/>} />
    </Routes>
  );
}
export default App;
