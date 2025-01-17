import { z } from "zod";

export const SearchSchema = z.object({
    searchText: z.string()
        .nonempty("Please input something to search results across.")
        .refine((value) => !/\d/.test(value), {
            message: "Input should not contain any numbers.",
        })
});

export type SearchSchemaType = z.infer<typeof SearchSchema>;