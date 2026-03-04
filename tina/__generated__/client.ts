import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '30c390f6bad7148ce73f8c820b49cfec169972a5', queries,  });
export default client;
  