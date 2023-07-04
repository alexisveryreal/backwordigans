import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";

const formSchema = z.object({
  word: z.string().min(1),
  backWord: z.string().optional(),
});

type Form = z.infer<typeof formSchema>;

const BackwordForm = () => {
  const form = useForm<Form>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      word: "",
      backWord: "",
    },
  });

  const word = form.watch("word");
  const setValue = form.setValue;

  const onSubmit: SubmitHandler<Form> = (data) => {
    console.log(data);
  };

  useEffect(() => {
    setValue("backWord", word.split("").reverse().join(""));
  }, [setValue, word]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit, console.log)}
        className="space-y-8"
      >
        <FormField
          control={form.control}
          name="word"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Word</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>
                This is the word that will be printed backwords.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="backWord"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Word</FormLabel>
              <FormControl>
                <div className="flex w-full max-w-sm items-center space-x-2">
                  <Input {...field} disabled />
                  <Button
                    type="button"
                    onClick={() =>
                      navigator.clipboard.writeText(
                        form.getValues("backWord") ?? "",
                      )
                    }
                  >
                    Copy
                  </Button>
                </div>
              </FormControl>
              <FormDescription>
                This is the word that will be printed backwords.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <Button type="submit">Submit</Button> */}
      </form>
    </Form>
  );
};

export { BackwordForm };
