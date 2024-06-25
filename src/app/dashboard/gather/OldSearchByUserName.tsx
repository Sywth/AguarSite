// "use client";
// import { z } from "zod";
// import { useForm, UseFormReturn } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { toast } from "@/components/ui/use-toast";
// import { cn } from "@/lib/utils";
// import { alt_background_tw_css } from "@/components/styleConstants";
// import HitScreen from "./HitScreen";
// import { useEffect, useState } from "react";

// type FormFieldsProps = {
//   form: UseFormReturn<FormSchemaType>;
// };
// const FormFields: React.FC<FormFieldsProps> = ({ form }) => {
//   return (
//     <FormField
//       control={form.control}
//       name="username"
//       render={({ field }) => (
//         <FormItem className="w-[20rem]">
//           <FormLabel>Username</FormLabel>
//           <FormControl>
//             <Input placeholder="Search" {...field} />
//           </FormControl>
//           <FormDescription>This is your public display name.</FormDescription>
//           <FormMessage />
//         </FormItem>
//       )}
//     />
//   );
// };
// const formSchema = z.object({
//   username: z.string().min(1),
// });
// type FormSchemaType = z.infer<typeof formSchema>;

// type SearchByUserNameFormProps = React.HTMLProps<HTMLDivElement> & {
//   setUsername: React.Dispatch<React.SetStateAction<string>>;
// };
// const SearchByUserNameForm: React.FC<SearchByUserNameFormProps> = ({
//   setUsername,
//   ...props
// }) => {
//   const form = useForm<FormSchemaType>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       username: "",
//     },
//   });

//   const onSubmit = (data: z.infer<typeof formSchema>) => {
//     toast({
//       title: `Searching for user ${data.username} ...`,
//       description: (
//         <>
//           <p>This will take time, calling API with</p>
//           <pre
//             className={cn(
//               "mt-2 w-[340px] rounded-md p-2",
//               alt_background_tw_css
//             )}
//           >
//             <code>{JSON.stringify(data, null)}</code>
//           </pre>
//         </>
//       ),
//     });
//     setUsername(data.username);
//   };

//   return (
//     <div {...props}>
//       <Form {...form}>
//         <form
//           onSubmit={form.handleSubmit(onSubmit)}
//           className="w-2/3 space-y-6"
//         >
//           <FormFields form={form} />
//           <Button type="submit">Submit</Button>
//         </form>
//       </Form>
//     </div>
//   );
// };

// type SearchByUsernameProps = React.HTMLProps<HTMLDivElement> & {};
// const SearchByUsername: React.FC<SearchByUsernameProps> = ({}) => {
//   const [username, setUsername] = useState<string>("");
//   useEffect(() => {
//     console.log(`username changed to "${username}"`);
//   }, [username]);
//   return (
//     <div>
//       <SearchByUserNameForm setUsername={setUsername} />
//       {username !== "" && <HitScreen username={username} streamId={username} />}
//     </div>
//   );
// };

// export default SearchByUsername;
