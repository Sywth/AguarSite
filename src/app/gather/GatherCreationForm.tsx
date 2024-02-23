"use client";

import MonoButton from "@/components/MonoButton";
import MonoText from "@/components/MonoText";
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
import { useToast } from "@/components/ui/use-toast";
import useApiUrl from "@/hooks/useApiUrl";
import authFetch from "@/lib/authFetch";
import { useAuth } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters long.",
  }),
});

const GatherCreationForm = () => {
  const [fetching, setFetching] = useState(false);
  const [replyData, setReplyData] = useState<
    Record<string, string> | undefined
  >(undefined);
  const apiUrl = useApiUrl();
  const { getToken } = useAuth();
  const { toast } = useToast();
  const router = useRouter();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  const onSubmit = async (formValues: z.infer<typeof formSchema>) => {
    if (fetching) {
      console.warn("fetching already in progress. wait.");
      return;
    }

    const token = await getToken();

    if (!token) {
      throw new Error("No token found");
    }

    setFetching(true);
    toast({
      title: `Fetching data for "${formValues.username}"`,
      description: `Patience is a virtue. This will take time.`,
    });
    let res = undefined;
    try {
      res = await authFetch(`${apiUrl}/protected/gather`, token, {
        method: "POST",
        body: JSON.stringify(formValues),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error("error fetching data", error);
      toast({
        title: "Error fetching data",
        description: "An error occurred while fetching data.",
      });
      setFetching(false);
      return;
    }
    const gatheredData = (await res.json()) as Record<string, string>;
    setReplyData(gatheredData);
    setFetching(false);

    localStorage.setItem(
      `gather/${formValues.username}`,
      JSON.stringify(gatheredData)
    );
    router.push(`/gather/${encodeURIComponent(formValues.username)}`);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Target's Username</FormLabel>
              <FormControl>
                <Input
                  className="font-mono rounded-none"
                  placeholder="type username here ..."
                  {...field}
                />
              </FormControl>
              <FormDescription>
                This is the user name of the target you want to gather data on.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {fetching ? (
          <MonoText className="text-xl font-mono max-w-min whitespace-nowrap">
            fetching ...
          </MonoText>
        ) : (
          <MonoButton className="text-xl font-mono">submit</MonoButton>
        )}
      </form>
    </Form>
  );
};

export default GatherCreationForm;
