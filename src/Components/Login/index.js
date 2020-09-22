import React, { Component } from "react";

export default class Login extends Component {
  state = {
    senha: "",
    usuario: "",
    error: ""
  };

  fazerLogin = (event) => {
    event.preventDefault();
    if (this.state.usuario === "aaa" && this.state.senha === "123") {
      this.props.history.push("/home");
    } else {
      this.setState({ error: "Usuário e/ou Senha inválidos." });
    }
  };

  render() {
    return (
      <div>
        <h1>Bem vindo ao Login</h1>
        <form>
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="text"
            placeholder="Informe seu usuário"
            value={this.state.usuario}
            onChange={(event) => this.setState({ usuario: event.target.value })}
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="Informe sua senha"
            value={this.state.senha}
            onChange={(event) => this.setState({ senha: event.target.value })}
          />
          <br />
          <br />
          <button onClick={this.fazerLogin}> Entrar </button>
        </form>
      </div>
    );
  }
}
