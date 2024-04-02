
class User {
    private name: string;
    private email: string;
    private senha: string;
  
    constructor(name: string, email: string, senha: string) {
      this.name = name;
      this.email = email;
      this.senha = senha;
    }
  
    // Getters
    public getNome(): string {
      return this.name;
    }
  
    public getEmail(): string {
      return this.email;
    }
  
    public getSenha(): string {
      return this.senha;
    }
  
    // Setters
    public setNome(name: string): void {
      this.name = name;
    }
  
    public setEmail(email: string): void {
      this.email = email;
    }
  
    public setSenha(senha: string): void {
      this.senha = senha;
    }
  }
  
  export default User;
  