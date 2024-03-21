'use server'

import { list } from "@vercel/blob";

 const getBlobs = async ({ prefix }: { prefix: string }) => {
    const item = await list({prefix:prefix});
    console.log(item);
    
    return item;
  };

 export default getBlobs; 