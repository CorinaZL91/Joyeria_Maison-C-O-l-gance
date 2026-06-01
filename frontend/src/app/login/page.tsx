"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { UserCircle2, Eye, EyeOff } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";
import { useAppDispatch } from "@/app/redux";
import { setUser } from "@/app/state/authSlice";
import { useLoginMutation } from "@/app/state/services/authApi";

export default function LoginPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  const [login, { isLoading }] = useLoginMutation();

  const handleLogin = async () => {
    setErrorMessage("");

    if (!correo.trim() || !password.trim()) {
      setErrorMessage("Completa todos los campos.");
      return;
    }

    if (!captchaValue) {
      setErrorMessage("Completa el reCAPTCHA.");
      return;
    }

    try {
      const response = await login({
        correo: correo.trim(),
        password: password.trim(),
        recaptchaToken: captchaValue,
      }).unwrap();

      dispatch(setUser(response.data.user));

      if (response.data.user.rol === "administrador") {
        router.push("/admin");
      } else {
        router.push("/");
      }
    } catch (error: any) {
      setErrorMessage(error?.data?.message || "No se pudo iniciar sesión.");
      setCaptchaValue(null);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4 py-10 pt-28">
      <div className="w-full max-w-sm rounded-[28px] bg-[#dca3ad] px-8 py-10 shadow-md">
        <div className="flex flex-col items-center">
          <UserCircle2
            className="mb-4 h-24 w-24 text-white"
            strokeWidth={1.2}
          />

          <h1 className="mb-8 text-center text-3xl font-light text-white">
            Iniciar sesión
          </h1>
        </div>

        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <input
            type="email"
            placeholder="Email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            className="h-11 w-full rounded-full border border-transparent bg-white px-5 text-sm text-gray-700 placeholder:text-gray-400 outline-none focus:border-primary"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-11 w-full rounded-full border border-transparent bg-white px-5 pr-12 text-sm text-gray-700 placeholder:text-gray-400 outline-none focus:border-primary"
            />

            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 transition hover:text-gray-700"
              aria-label={
                showPassword ? "Ocultar contraseña" : "Mostrar contraseña"
              }
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>

          <div className="flex justify-center">
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
              onChange={(value) => setCaptchaValue(value)}
              onExpired={() => setCaptchaValue(null)}
            />
          </div>

          {errorMessage && (
            <p className="text-center text-sm text-white">{errorMessage}</p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="h-11 w-full rounded-full bg-[#c8a06c] text-sm font-medium text-white transition hover:opacity-90 disabled:opacity-60"
          >
            {isLoading ? "Continuando..." : "Continuar"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-white/90">
          ¿No tienes una cuenta?,{" "}
          <span
            onClick={() => router.push("/register")}
            className="cursor-pointer underline hover:text-white"
          >
            Regístrate
          </span>
        </p>
      </div>
    </main>
  );
}
