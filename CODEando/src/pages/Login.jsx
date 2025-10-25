import React, { useState } from "react";

const Login = () => {
    const [form, setForm] = useState({
        email: "",
        contraseña: "",
    });

    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState("");
    const [loadingLogin, setLoadingLogin] = useState(false); // ⬅️ Estado para carga

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        
        setErrors({ ...errors, [e.target.name]: "" });
        setMessage("");
    };
    
    const validate = () => {
        const newErrors = {};
        if (!form.email.trim()) {
            newErrors.email = "El email es obligatorio.";
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            newErrors.email = "El email no es válido.";
        }

        if (!form.contraseña.trim()) {
            newErrors.contraseña = "La contraseña es obligatoria.";
        }

        return newErrors;
    };

    // 🚨 FUNCIÓN DE ENVÍO CON FETCH DIRECTO 🚨
    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setLoadingLogin(true);
        setMessage("");

        try {
            const res = await fetch("http://localhost:4000/courses/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                // Asumo que tu backend espera email y contraseña
                body: JSON.stringify({ email: form.email, contraseña: form.contraseña }),
        
            });

            const data = await res.json();
            
            if (!res.ok) {
                // Si la respuesta no es 200 OK (ej. 401 Unauthorized)
                throw new Error(data.message || "Credenciales incorrectas o error en el servidor.");
            }

            // 🌟 LOGIN EXITOSO 🌟
            // Almacenar el token y notificar al usuario (sin AuthContext, solo alerta)
            localStorage.setItem("token", data.token); 
            setMessage("✅ Inicio de sesión exitoso. ¡Bienvenido!");
            console.log("Token recibido:", data.token);

        } catch (err) {
            // Manejo de errores de red o errores lanzados por la respuesta no-ok
            setMessage("❌ Error al iniciar sesión: " + err.message);
            console.error("Error de Login:", err);
            localStorage.removeItem("token"); // Asegura que no haya token inválido
        } finally {
            setLoadingLogin(false);
        }
    };

    // La lógica de recuperación de contraseña se mantiene igual
    const handleForgotcontraseña = () => {
        setMessage(""); 
        const emailError = {};

        if (!form.email.trim()) {
            emailError.email = "Ingrese su email antes de recuperar la contraseña.";
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            emailError.email = "Ingrese un email válido para recuperar la contraseña.";
        }

        if (Object.keys(emailError).length > 0) {
            setErrors(emailError);
        } else {
            // Aquí iría el fetch para el backend de recuperación de contraseña
            setMessage("Se ha enviado un enlace de recuperación a su correo electrónico.");
            console.log("Solicitud de recuperación enviada a:", form.email);
        }
    };

    return (
        <div className="px-4 md:px-8 py-8 md:py-12">
            <div className="max-w-md mx-auto">
                <h1 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center md:text-left">
                    Iniciar Sesión
                </h1>

                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    {/* Campos de Email y Contraseña (se mantienen igual) */}
                    <div>
                        <input
                            name="email"
                            className="w-full px-3 py-2 rounded bg-gray-800 text-white"
                            placeholder="Email"
                            value={form.email}
                            onChange={handleChange}
                        />
                        {errors.email && (
                            <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                        )}
                    </div>

                    <div>
                        <input
                            name="contraseña"
                            type="password"
                            className="w-full px-3 py-2 rounded bg-gray-800 text-white"
                            placeholder="Contraseña"
                            value={form.contraseña}
                            onChange={handleChange}
                        />
                        {errors.contraseña && (
                            <p className="text-red-400 text-sm mt-1">{errors.contraseña}</p>
                        )}
                    </div>

                    {/* Botón de Envío con indicador de Carga */}
                    <button
                        type="submit"
                        disabled={loadingLogin}
                        className={`px-6 py-2 rounded-lg font-semibold text-gray-900 transition-all duration-300 shadow-lg cursor-pointer ${
                            loadingLogin 
                                ? 'bg-gray-500 opacity-75' 
                                : 'bg-yellow-400 hover:bg-yellow-300 border-2 border-yellow-400 hover:border-yellow-300 hover:shadow-yellow-400/30'
                        }`}
                    > 
                        {loadingLogin ? 'Cargando...' : 'Entrar'} 
                    </button>

                    {/* Botón de Contraseña Olvidada */}
                    <button
                        type="button"
                        onClick={handleForgotcontraseña}
                        className="text-yellow-400 text-sm hover:underline hover:text-yellow-300 transition self-center mt-2 cursor-pointer"
                        > ¿Olvidaste tu contraseña?
                    </button>

                    {/* Mensajes de Éxito/Error */}
                    {message && (
                        <p className={`text-sm mt-2 text-center ${message.startsWith('❌') ? 'text-red-400' : 'text-green-400'}`}>
                            {message}
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Login;