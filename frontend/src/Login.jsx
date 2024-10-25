export default function Login() {
  return (
    <div>
      <h1>Inicio de Sesión</h1>
      <form>
        <label htmlFor="email">Correo Electrónico</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Contraseña</label>
        <input type="password" id="password" name="password" />
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
}
