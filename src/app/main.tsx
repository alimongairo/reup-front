import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import ErrorBoundary from '@/components/ErrorBoundary'
import App from "./App";
import store from './store';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <Provider store={store}>
      <App/>
    </Provider>
  </ErrorBoundary>
);
