"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { format } from "date-fns";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { observer } from "mobx-react-lite";
import gameOddsStore from "../store/gameOddsStore";
import { useToast } from "@/hooks/use-toast";
import { GameOdd } from "../store/types";

const NewOddsForm = observer(() => {
  const { toast } = useToast();

  const defaultValues = {
    homeTeam: "",
    awayTeam: "",
    drawOdd: "0",
    homeTeamOdd: "0",
    awayTeamOdd: "0",
  };

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    setIsSubmitting(true);
    const newGameOdd: GameOdd = {
      startDate: data.dateOfGame.toISOString(),
      games: [
        { odd: data.homeTeamOdd, sortOrder: 0, name: data.homeTeam },
        { odd: data.drawOdd, sortOrder: 1, name: "X" },
        { odd: data.awayTeamOdd, sortOrder: 2, name: data.awayTeam },
      ],
      name: `${data.homeTeam} - ${data.homeTeam}`,
    };
    gameOddsStore.addGameOdd(newGameOdd);
    toast({
      title: "Game odd added successfuly",
      description: `Game Odd : ${JSON.stringify(newGameOdd)} `,
    });
    form.reset(defaultValues);
    setIsSubmitting(false);
  };

  const FormSchema = z.object({
    homeTeam: z
      .string()
      .transform((t) => t?.trim())
      .pipe(z.string().min(1, { message: "Home Team Name is required" })),
    homeTeamOdd: z
      .string()
      .transform((val) => Number(val))
      .refine((val) => !isNaN(val), {
        message: "Home Team Odd Must be a number",
      }),
    drawOdd: z
      .string()
      .transform((val) => Number(val))
      .refine((val) => !isNaN(val), {
        message: "Home Team Odd Must be a number",
      }),
    awayTeam: z
      .string()
      .transform((t) => t?.trim())
      .pipe(z.string().min(1, { message: "Home Team Name is required" })),
    awayTeamOdd: z
      .string()
      .transform((val) => Number(val))
      .refine((val) => !isNaN(val), {
        message: "Away Team Odd Must be a number",
      }),
    dateOfGame: z.date({
      required_error: "A date is required.",
    }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div className="pt-2 pl-2 flex items-center justify-center">
      <Card className=" bg-codere-grey w-[350px] ">
        <CardHeader>
          <CardTitle>Create a new match </CardTitle>
          <CardDescription>customize details</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-1.5 "
            >
              <FormField
                control={form.control}
                name="homeTeam"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Home Team Name</FormLabel>
                    <FormControl>
                      <Input
                        className=" bg-white"
                        placeholder="enter homeTeam"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="homeTeamOdd"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Home Team Odd</FormLabel>
                    <FormControl>
                      <Input
                        className=" bg-white"
                        placeholder="enter odd number"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="drawOdd"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Draw Odd</FormLabel>
                    <FormControl>
                      <Input
                        className=" bg-white"
                        placeholder="enter draw odd number"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="awayTeam"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Away Team Name</FormLabel>
                    <FormControl>
                      <Input
                        className=" bg-white"
                        placeholder="enter Away Team Name"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="awayTeamOdd"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Away Team Odd</FormLabel>
                    <FormControl>
                      <Input
                        className=" bg-white"
                        placeholder="description"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="dateOfGame"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Date of birth</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              " bg-white w-[240px] pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                className=" bg-codere-green"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
});
export default NewOddsForm;
