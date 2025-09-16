import { LoginForm } from "@/components/login-form"

export default function Page() {
  return (
    <div className="h-full w-full bg-[url(/assets/bg-login-img.jpg)] bg-no-repeat bg-cover bg-center">
      <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 h-full bg-blue-900/90">
        <div className="w-full max-w-sm">
        <LoginForm />
      </div>
      </div>
    </div>
  )
}
