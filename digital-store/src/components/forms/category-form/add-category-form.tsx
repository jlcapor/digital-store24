"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import { categorySchema } from "@/lib/validations/category";
import axios from 'axios';
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import {  PencilLine } from "lucide-react";

type Inputs = z.infer<typeof categorySchema>
export function CreateCategoryForm() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const form = useForm<Inputs>({
        defaultValues: { 
            name: "",
            description: ""
        },
        resolver: zodResolver(categorySchema),
    });

    function onSubmit(data: Inputs) {
        setIsLoading(true);
        axios
        .post("/api/category", data)
        .then((res) => {
            form.reset()
            toast({
                variant: 'default',
                description: `Categoría ${data.name} agregada exitosamente`,
            })
        }).catch((error)=>{
            console.log(error);
            toast({
                variant: 'destructive',
                title: 'Error al crear la categoría'
            })
        }).finally(() => {
            setIsLoading(false);
        })
    }
    
    return (
        <Form {...form}>
         <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Categoria</FormLabel>
                        <FormControl>
                        <Input
                            type="text"
                            placeholder="Escriba el nombre de la categoría aquí"
                            {...field}
                        />
                        </FormControl>
                        <FormDescription />
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Descripcion</FormLabel>
                    <FormControl>
                        <Textarea
                        placeholder="Escriba la descripción de la categoría aquí."
                        {...field}
                        />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
            />
            <Button className="max-w-[150px]:" disabled={isLoading}>
                {isLoading ? (
                        <>
                        <Icons.spinner
                                className="mr-2 h-4 w-4 animate-spin"
                                aria-hidden="true"
                            />
                            Crear categoria
                            <span className="sr-only">Crear categoria</span>
                        </>
                ) : (
                        <>
                            <PencilLine className="mr-2 h-5 w-5" />
                            Crear categoria
                            <span className="sr-only">Crear categoria</span>
                        </>
                    )
                }
            </Button>
         </form>
        </Form>
    )
}