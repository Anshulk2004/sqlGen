import styles from "./styles.module.css";
import { useState } from "react";
import sqlServer from "./assets/sql-server.png";

export default function App() {
    const [userPrompt, setUserPrompt] = useState("");
    const [sqlQuery, setSqlQuery] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        const query = await generateQuery();
        setSqlQuery(query);
      };

    return (
        <main className={styles.main}>
          <img src={sqlServer} className={styles.icon} alt="SQL server" />
          <h3>Generate SQL with AI</h3>
          <form onSubmit={onSubmit}>
            <input
            type="text"
            name="query-description"
            placeholder="Describe your query"
            onChange={(e) => setUserPrompt(e.target.value)}
            />
            <input type="submit" value="Generate query" />
            </form>
          
        </main>
    );
}