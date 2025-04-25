import { type SchemaTypeDefinition } from "sanity";
import { author } from "./author";
import { startup } from "@/sanity/schemaTypes/startup";
import { playlist } from "./playlist";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, startup, playlist],
};
