"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { UserPlus, Eye, EyeOff } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";
import type ReCAPTCHAType from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch } from "@/app/redux";
import { setUser } from "@/app/state/authSlice";
import { useRegisterMutation } from "@/app/state/services/authApi";
import {
  registerSchema,
  type RegisterFormValues,
} from "@/app/libs/validations/authSchemas";

export default function RegisterPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const captchaRef = useRef<ReCAPTCHAType | null>(null);

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [registerUser, { isLoading }] = useRegisterMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      nombre: "",
      correo: "",
      password: "",
      confirmPassword: "",
      telefono: "",
    },
    mode: "onSubmit",
  });

  const onSubmit = async (values: RegisterFormValues) => {
    if (isLoading) return;

    setErrorMessage("");
    setSuccessMessage("");

    if (!captchaValue) {
      setErrorMessage("Completa el reCAPTCHA.");
      return;
    }

    const { confirmPassword, ...payload } = values;

    try {
      const response = await registerUser({
        nombre: payload.nombre.trim(),
        correo: payload.correo.trim(),
        password: payload.password.trim(),
        telefono: payload.telefono.trim(),
        recaptchaToken: captchaValue,
      }).unwrap();

      dispatch(setUser(response.data.user));

      setSuccessMessage(response.message || "Registro exitoso.");
      router.replace("/");
    } catch (error: any) {
      console.error("Error en registro:", error);

      setErrorMessage(
        error?.data?.message ||
          error?.error ||
          "No se pudo registrar el usuario."
      );

      setCaptchaValue(null);
      captchaRef.current?.reset();
    }
  };

  const onInvalid = (formErrors: unknown) => {
    console.error("Errores de validación:", formErrors);
    setSuccessMessage("");
    setErrorMessage("Revisa los campos del formulario.");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4 py-10 pt-28">
      <div className="w-full max-w-md rounded-[28px] bg-[#dca3ad] px-8 py-10 shadow-md">
        <div className="flex flex-col items-center">
          <UserPlus className="mb-4 h-20 w-20 text-white" strokeWidth={1.4} />
          <h1 className="mb-8 text-center text-3xl font-light text-white">
            Crear cuenta
          </h1>
        </div>

        <form
          className="space-y-4"
          onSubmit={handleSubmit(onSubmit, onInvalid)}
          noValidate
        >
          <div>
            <input
              type="text"
              placeholder="Nombre"
              {...register("nombre")}
              className={`h-11 w-full rounded-full border bg-white px-5 text-sm text-gray-700 placeholder:text-gray-400 outline-none transition ${
                errors.nombre
                  ? "border-red-400"
                  : "border-transparent focus:border-primary"
              }`}
            />
            {errors.nombre && (
              <p className="mt-1 px-2 text-xs text-white">
                {errors.nombre.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="Correo"
              {...register("correo")}
              className={`h-11 w-full rounded-full border bg-white px-5 text-sm text-gray-700 placeholder:text-gray-400 outline-none transition ${
                errors.correo
                  ? "border-red-400"
                  : "border-transparent focus:border-primary"
              }`}
            />
            {errors.correo && (
              <p className="mt-1 px-2 text-xs text-white">
                {errors.correo.message}
              </p>
            )}
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Contraseña"
              {...register("password")}
              className={`h-11 w-full rounded-full border bg-white px-5 pr-12 text-sm text-gray-700 placeholder:text-gray-400 outline-none transition ${
                errors.password
                  ? "border-red-400"
                  : "border-transparent focus:border-primary"
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 transition hover:text-gray-700"
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
            {errors.password && (
              <p className="mt-1 px-2 text-xs text-white">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirmar contraseña"
              {...register("confirmPassword")}
              className={`h-11 w-full rounded-full border bg-white px-5 pr-12 text-sm text-gray-700 placeholder:text-gray-400 outline-none transition ${
                errors.confirmPassword
                  ? "border-red-400"
                  : "border-transparent focus:border-primary"
              }`}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showConfirmPassword ? <EyeOff /> : <Eye />}
            </button>
            {errors.confirmPassword && (
              <p className="mt-1 px-2 text-xs text-white">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="Teléfono"
              {...register("telefono")}
              className="h-11 w-full rounded-full border bg-white px-5 text-sm text-gray-700"
            />
            {errors.telefono && (
              <p className="mt-1 px-2 text-xs text-white">
                {errors.telefono.message}
              </p>
            )}
          </div>

          <div className="flex justify-center">
            <ReCAPTCHA
              ref={captchaRef}
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
              onChange={(value) => setCaptchaValue(value)}
              onExpired={() => setCaptchaValue(null)}
            />
          </div>

          {errorMessage && (
            <p className="text-center text-sm text-white">{errorMessage}</p>
          )}

          {successMessage && (
            <p className="text-center text-sm text-white">{successMessage}</p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="h-11 w-full rounded-full bg-[#c8a06c] text-white"
          >
            {isLoading ? "Registrando..." : "Registrarme"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-white/90">
          ¿Ya tienes cuenta?{" "}
          <span
            onClick={() => router.push("/login")}
            className="cursor-pointer underline"
          >
            Inicia sesión
          </span>
        </p>
      </div>
    </main>
  );
}
