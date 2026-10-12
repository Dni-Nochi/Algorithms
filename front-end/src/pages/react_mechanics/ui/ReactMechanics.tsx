import { useState } from 'react';
const MIN_PASSWORD_LENGTH = 8;

function getEmailError(input: HTMLInputElement) {
  if (input.validity.valueMissing) return 'Введите почту';
  if (input.validity.typeMismatch) return 'Некорректный адрес почты';
  return '';
}
export function ReactMechanics() {
  const [isPasswordView, setIsPasswordView] = useState(false);
  const [passwordValue, setPasswordValue] = useState('');
  const [errorEmailMessage, setErrorEmailMessage] = useState('');

  function handleEmailBlur(e: React.FormEvent<HTMLInputElement>) {
    setErrorEmailMessage(getEmailError(e.currentTarget));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    if (!form.checkValidity()) {
      const emailInput = form.elements.namedItem('email');
      if (emailInput instanceof HTMLInputElement) {
        setErrorEmailMessage(getEmailError(emailInput));
      }
      return;
    }

    const data = Object.fromEntries(new FormData(form));
    console.log(data);
  }

  const isPasswordLongEnough = passwordValue.length >= MIN_PASSWORD_LENGTH;
  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="grid gap-3 w-100 p-2 rounded-xl bg-black text-white"
        noValidate
      >
        <div className="grid gap-1">
          <label htmlFor="email">Почта</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Email@example.com"
            onBlur={handleEmailBlur}
            onChange={() => setErrorEmailMessage('')}
            className="py-1 px-2 border-2 rounded-md focus-visible:ring-2 user-invalid:border-red-500 placeholder-zinc-400"
            required
          />
          {errorEmailMessage ? <p>Ошибка заполнения</p> : ''}
        </div>

        <div className="grid gap-1">
          <label htmlFor="password">Пароль</label>
          <div className="relative w-full">
            <input
              id="password"
              name="password"
              type={isPasswordView ? 'text' : 'password'}
              autoComplete="current-password"
              placeholder="write your password"
              value={passwordValue}
              minLength={MIN_PASSWORD_LENGTH}
              onChange={(e) => setPasswordValue(e.target.value)}
              className="w-full py-1 pl-2 pr-25 border-2 rounded-md focus-visible:ring-2 user-invalid:border-red-500 placeholder-zinc-400"
              required
            />
            <button
              type="button"
              onClick={() => setIsPasswordView((prev) => !prev)}
              aria-label={isPasswordView ? 'Скрыть пароль' : 'Показать пароль'}
              className="absolute rounded-md right-2 top-1/2 -translate-y-1/2 cursor-pointer"
            >
              {isPasswordView ? 'Скрыть' : 'Показать'}
            </button>
          </div>
          {isPasswordLongEnough ? (
            ''
          ) : (
            <p
              className={`pt-1 pl-1 ${
                isPasswordLongEnough ? 'text-green-400' : 'text-red-400'
              }`}
            >
              {passwordValue.length} / {MIN_PASSWORD_LENGTH}
            </p>
          )}
        </div>

        <button type="submit" className="border rounded-md">
          Войти
        </button>
      </form>
    </div>
  );
}
