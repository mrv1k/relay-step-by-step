import './App.css';
import fetchGraphQL from './fetchGraphQL'
import { useState, useEffect }from 'react'

function App() {
  const [name, setName] = useState(null)

  useEffect(() => {
    let isMounted = true;

    fetchGraphQL(`#graphql
      query RepositoryNameQuery {
        repository(owner: "mrv1k" name: "garage") {
          name
        }
      }
    `).then((response) => {
      // Avoid updating state if the component unmounted before the fetch completes
      if (!isMounted) {
        return;
      }
      const data = response.data;
      setName(data.repository.name);
    }).catch((error) => {
      console.error(error);
    });

    return () => {
      isMounted = false;
    };
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {name !== null ? `Repository: ${name}` : "Loading"}
        </p>
      </header>
    </div>
  );
}

export default App;
