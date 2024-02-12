"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";
import { Input } from "@/components/ui/input";
import { authSchema } from "@/lib/validations/auth";
import { useRouter } from "next/navigation";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { PasswordInput } from "@/components/password-input";
import { Icons } from "@/components/icons";
import Link from "next/link";
import type { SubmitHandler } from "react-hook-form";
import {useForm} from 'react-hook-form';


type Inputs = z.infer<typeof authSchema>

const LoginForm = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = React.useState(false);
  const form = useForm<Inputs>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsLoading(true)
  };
  return (
    <Form {...form}>
        <form 
          className="grid gap-4" 
          onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
        >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                        <Input placeholder="rodneymullen180@gmail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                        <PasswordInput placeholder="**********" {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={isLoading}>
                {isLoading && (
                    <Icons.spinner
                    className="mr-2 h-4 w-4 animate-spin uppercase"
                    aria-hidden="true"
                    />
                )}
                Iniciar sesion
                <span className="sr-only">Continue to email verification page</span>
            </Button>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/">Cancelar</Link>
            </Button>
        </form>
    </Form>
  )
}

export default LoginForm
