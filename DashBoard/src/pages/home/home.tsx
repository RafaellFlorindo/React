function Home() {
    return (
      <div>
        <header>
          <h1>Bem-vindo à sua Dashboard</h1>
        </header>
        <div className="card-container">
          <div className="card">
            <h3>Usuários</h3>
            <p>1,234</p>
          </div>
          <div className="card">
            <h3>Vendas</h3>
            <p>$12,345</p>
          </div>
          <div className="card">
            <h3>Comentários</h3>
            <p>123</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;
  