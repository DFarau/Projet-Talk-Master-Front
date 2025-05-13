"use client";

import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";


interface AuthFormProps {
  type: "login" | "register" | "forgot-password";
}

const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  const isLogin = type === "login";
  const isRegister = type === "register";

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex h-screen bg-white">
      <div className="flex items-center justify-center w-[600px]">
        <div className="bg-white shadow-md border rounded-lg p-8 w-full max-w-md">
          <h1 className="text-[25px] font-light mb-5">Bienvenue sur Task Master</h1>
          <h2 className="text-[31px] font-medium mb-1">
            {isLogin
              ? "Connexion"
              : isRegister
              ? "Inscription"
              : "Mot de passe oublié"}
          </h2>
          <p className="text-[16px] font-normal mb-8">
            {isLogin
              ? "Accédez dès maintenant à vos taches"
              : isRegister
              ? "Commencez à organiser vos taches dès maintenant"
              : "Entrez votre adresse e-mail pour recevoir un lien de réinitialisation."}
          </p>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-[16px] font-normal">
                Adresse mail
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 mb-7 block w-full h-12 px-4 rounded-md border border-black focus:border-blue-600 focus:ring-blue-600 text-[14px]"
                placeholder="Saisissez votre adresse mail"
              />
            </div>
            {isLogin || isRegister ? (
              <div>
                <label htmlFor="password" className="block text-[16px] font-normal">
                  Mot de passe
                </label>
                <div className="relative"> 
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className="mt-1 mb-7 block w-full h-12 px-4 rounded-md border border-black focus:border-blue-600 focus:ring-blue-600 text-[14px]"
                    placeholder="Saisissez votre mot de passe"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-black hover:text-blue-600"
                  >
                    {showPassword ? (
                      <EyeSlashIcon className="h-5 w-5" />
                    ) : (
                      <EyeIcon className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
            ) : null}
            {isRegister ? (
              <div>
                <label htmlFor="confirm-password" className="block text-[16px] font-normal">
                  Confirmation de mot de passe
                </label>
                <div className="relative"> 
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirm-password"
                    className="mt-1 mb-7 block w-full h-12 px-4 rounded-md border border-black focus:border-blue-600 focus:ring-blue-600 text-[14px]"
                    placeholder="Confirmez votre mot de passe"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-3 text-gray-600 hover:text-blue-800"
                  >
                    {showConfirmPassword ? (
                      <EyeSlashIcon className="h-5 w-5" />
                    ) : (
                      <EyeIcon className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
            ) : null}
            {isLogin && (
                <div className="my-8 text-right">
                  <a
                    href="/forgot-password"
                    className="text-[16px] text-gray-600 hover:text-blue-800"
                  >
                    Mot de passe oublié ?
                  </a>
                </div>
              )}
            <button
              type="submit"
              className="w-full h-12 bg-blue-800 text-[16px] font-medium text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              {isLogin
              ? "Connexion"
              : isRegister
              ? "Inscription"
              : "Réinitialiser"}
            </button>
          </form>
          <p className="mt-4 text-[16px] text-center text-gray-600">
            {isLogin ? "Pas encore de compte? " : "Vous avez déjà un compte? "}
            <a
              href={isLogin ? "/register" : "/login"}
              className="font-medium text-black hover:underline"
            >
              {isLogin ? "Inscrivez-vous" : "Connectez-vous"}
            </a>
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center w-1/2">
        <img
          src="/assets/login-registration-illustration.png"
          alt="Illustration"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default AuthForm;