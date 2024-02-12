import type { Metadata } from "next";
import Link from "next/link";
import LoginForm from "./LoginForm";
import { OAuthSignIn } from "@/components/auth/oauth-signin";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Shell } from "@/components/shell";

export const metadata: Metadata = {
    title: "Login",
    description: "Login to your account",
}
export default async function LoginPage() {
    
    return (
        <Shell className="max-w-lg">
           <Card className="w-full max-w-md">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl text-center uppercase">Iniciar Sesión</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <OAuthSignIn/>
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground">
                                O inicia sesión con
                            </span>
                        </div>
                    </div>
                    <LoginForm/>
                </CardContent>
                <CardFooter className="flex flex-wrap items-center justify-between gap-2">
                    <div className="text-sm text-muted-foreground">
                        <span className="mr-1 hidden sm:inline-block">
                            ¿No tienes una cuenta?
                        </span>
                        <Link
                            aria-label="Sign up"
                            href="/register"
                            className="text-primary underline-offset-4 transition-colors hover:underline"
                        >
                            Crea tu cuenta
                        </Link>
                    </div>
                </CardFooter>
           </Card>
        </Shell>
    )
}