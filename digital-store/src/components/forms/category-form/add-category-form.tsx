"use client";
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
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { LoadingButton } from "@/components/loading-button";
import { categorySchema } from "@/lib/validations/category";
import { useRouter } from "next/navigation";


type Inputs = z.infer<typeof categorySchema>
export function CreateCategoryForm() {
    const router = useRouter()
    const form = useForm<Inputs>({
        defaultValues: { 
            name: "",
        },
        resolver: zodResolver(categorySchema),
    });

    function onSubmit(data: Inputs) {
        console.log("New Category Data", data);
        router.refresh()
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
                        placeholder="Ingrese el nombre de la categoria"
                        {...field}
                    />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                </FormItem>
             )}
          />
            <LoadingButton className="w-full sm:w-auto">
                Crear Categoria
            </LoadingButton>
         </form>
        </Form>
    )
}