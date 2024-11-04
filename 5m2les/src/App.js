import React, { useState } from "react";
import "./App.css";
import { Task } from "./pages/Task/Task";

export default function App() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: "Поменять систему торможения авто",
            description: "тормозные диски, колодки",
            status: "active"
        },
        {
            id: 2,
            title: "Сходоть в кино",
            description: "дордой плаза, 21:00",
            status: "completed"
        },
        {
            id: 3,
            title: "Дочитать книгу",
            description: "роман, 411 страниц",
            status: "active"
        },
        {
            id: 4,
            title: "Спланировать поездку на выходные",
            description: "Санкт-Петербург, центр города",
            status: "completed"
        }
    ]);

    const [filter, setFilter] = useState("all");

    const filteredTasks = tasks.filter((task) => {
        if (filter === "all") {
            return true;
        } else if (filter === "active") {
            return task.status === "active";
        } else if (filter === "completed") {
            return task.status === "completed";
        }
    });

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };

    const handleResetFilter = () => {
        setFilter("all");
    };

    return (
        <div className="App">
            <h1>Список задач</h1>

            <div className="filter-container">
                <button
                    className={`filter-button ${filter === "all" && "active"}`}
                    onClick={() => handleFilterChange("all")}
                >
                    Все задания
                </button>
                <button
                    className={`filter-button ${filter === "active" && "active"}`}
                    onClick={() => handleFilterChange("active")}
                >
                    Активные задания
                </button>
                <button
                    className={`filter-button ${filter === "completed" && "active"}`}
                    onClick={() => handleFilterChange("completed")}
                >
                    Завершенные задания
                </button>
                <button className="reset-button" onClick={handleResetFilter}>
                    Сбросить
                </button>
            </div>

            <ul className="task-list">
                {filteredTasks.map((task) => (
                    <Task key={task.id} task={task} />
                ))}
            </ul>
        </div>
    );
}

