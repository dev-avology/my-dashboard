import { NextApiRequest, NextApiResponse } from 'next'
import { sql } from '@vercel/postgres';
import type { User,UserFields } from '@/app/lib/definitions';
import bcrypt from 'bcrypt';
import { createUser,getUser } from '@/app/db';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    try {
      const { name,email, password } = req.body

       let user = await getUser(email); 
      if(user.length>0){
        res.status(500).json({ error: 'User Already Exit'}) 
      }else{
        await createUser(name,email,password);
        res.status(200).json({ success: true})
      }
     
    } catch (error) {
        res.status(500).json({error})
    }
  }

  
  