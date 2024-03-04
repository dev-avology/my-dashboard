import { ZodError, z } from "zod";
import { User } from "@/app/db";
import {format} from "date-fns";

type ValidatedFields = "title" | "description" | "status";

export class TaskEntityValidationError extends Error {
  private errors: Record<ValidatedFields, string | undefined>;

  constructor(errors: Record<ValidatedFields, string | undefined>) {
    super("An error occured validating an task entity");
    this.errors = errors;
  }

  getErrors() {
    return this.errors;
  }
}

export class ServiceEntity {
  private id?: string;
  private title: string;
  private description: string;
  private amount: number;
  private recurring: number;
  private repeat: number;
  private image_url: string|null;
  private status:'active'|'inactive';
  private date?:string;


  constructor({
    id,
    title,
    description,
    amount,
    recurring = 0,
    repeat = 0,
    image_url = null,
    status = 'active',
    date = format(new Date(),'MM/dd/yyyy'),
  }: {
    id?: string;
    title: string;
    description: string;
    amount:number;
    recurring?:number;
    repeat?:number;
    image_url?:string|null;
    status?: 'active'|'inactive';
    date?:string;
  }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.amount = amount;
    this.recurring = recurring;
    this.repeat = repeat;
    this.image_url = image_url;
    
    this.status = status;
    this.date = date;
     
    this.validate();
  }

  getTitle() {
    return this.title;
  }

  getDescrition() {
    return this.description;
  }

  getStatus() {
    return this.status;
  }

  getId() {
    return this.id;
  }

  getDate() {
    return this.date;
  }

  setId(id:string) {
   this.id=id;
  }
  setTitle(title:string){
    this.title = title;
  }

  setDescrition(description:string){
    this.description = description;
  }

  setStatus(status:'active'|'inactive'){
    this.status = status;
  }

  setDate(date:string){
    this.date = date;
  }


  getAmount() {
    return this.amount;
  }


  setAmount(amount:number){
    this.amount = amount;
  }

  getRecurring() {
    return this.recurring;
  }


  setRecurring(recurring:number){
    this.recurring = recurring;
  }

  getRepeat() {
    return this.repeat;
  }


  setRepeat(repeat:number){
    this.repeat = repeat;
  }

  getImageUrl() {
    return this.image_url;
  }


  setImageUrl(image_url:string|null){
    this.image_url = image_url;
  }


  private validate() {
    const taskSchema = z.object({
      title: z
        .string()
        .min(1),
      description: z.string().min(1), 
      status:z.string()
    });

    try {
      taskSchema.parse(this);
    } catch (err) {
      const error = err as ZodError;
      const errors = error.flatten().fieldErrors;
      throw new TaskEntityValidationError({
        title: errors.title?.[0],
        description: errors.descrition?.[0],
        status:errors.status?.[0],
      });
    }
  }
}
