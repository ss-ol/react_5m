import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TasksPage from './pages/tasksPage/TasksPage';
import { Provider } from 'react-redux';
import { store } from './store/index';
import Todo from "./components/Todo";

function App() {
    return (
        <Provider store={store}> {/* Оборачиваем TasksPage в Provider */}
            <div className='App'>
                <TasksPage/>
            </div>
        </Provider>
    );
}

export default App;
