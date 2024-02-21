import { ZodError, z } from "zod";
import { User } from "@/app/db";

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

export class TaskEntity {
  private id?: number;
  private title: string;
  private description: string;
  private status:'queue'|'paused'|'inprogress'|'readyforreview'| 'completed'|'closed';
  private priority:'low'|'medium'|'heigh';
  private service_type:string;
  private service_category:string;
  private task_type:string;
  private task_service:string;
  private task_plateform:string;
  private task_speclization:string;
  private submitted:string;
  private duedate:string;
  private date: string;
  private created_by:string;
  private assignedTo? : User[]|undefined; 


  constructor({
    id,
    title,
    description,
    status = 'queue',
    priority = 'low',
    service_type,
    service_category,
    task_type,
    task_service,
    task_plateform,
    task_speclization,
    submitted,
    duedate,
    date,
    created_by,
  }: {
    id?: number;
    title: string;
    description: string;
    status: 'queue'|'paused'|'inprogress'|'readyforreview'| 'completed'|'closed';
    priority: 'low'|'medium'|'heigh';
    service_type:string;
    service_category:string;
    task_type:string;
    task_service:string;
    task_plateform:string;
    task_speclization:string;
    submitted:string;
    duedate:string;
    date: string;
    created_by:string;
  }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.status = status;
    this.priority = priority;
    this.service_type = service_type;
    this.service_category = service_category;
    this.task_type = task_type;
    this.task_service = task_service;
    this.task_plateform = task_plateform;
    this.task_speclization = task_speclization;
    this.submitted = submitted;
    this.duedate = duedate;
    this.date = date;
    this.created_by = created_by;
     
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

  getPriority() {
    return this.priority;
  }

  getServiceType(){
   return this.service_type ;
  }

  getServiceCategory(){
    return this.service_category;
  }

  getTaskType(){
    return this.task_type;
  }
  getTaskService(){
    return this.task_service;
  }

  getTaskPlateform(){
    return this.task_plateform ;
  }
 getTaskSpeclization(){
  return this.task_speclization;
 }
  getSubmitted(){
    return this.submitted;
  }
  getDueDate(){
    return this.duedate;
  }

  getDate(){
    return this.date;
  }

  getCreatedBy(){
    return this.created_by;
  }

  getAssigned(){
    return this.assignedTo;
  }

  setAssigned(assignedTo : User[]|undefined){
     this.assignedTo = assignedTo;
  }
  
  setTitle(title:string){
    this.title = title;
  }

  setDescrition(description:string){
    this.description = description;
  }

  setStatus(status: 'queue'|'paused'|'inprogress'|'readyforreview'| 'completed'|'closed'){
    this.status = status;
  }

  setPriority(priority: 'low'|'medium'|'heigh'){
    this.priority = priority;
  }

  setServiceType(service_type:string){
    this.service_type = service_type;
  }

  setServiceCategory(service_category:string){
    this.service_category = service_category;
  }
  setTaskType(task_type:string){
    this.task_type = task_type;
  }
  setTaskService(task_service:string){
    this.task_service = task_service;
  }

  setTaskPlateform(task_plateform:string){
    this.task_plateform = task_plateform;
  }

  setTaskSpeclization(task_speclization:string){
    this.task_speclization = task_speclization;
  }
  
  setSubmitted(submitted:string){
    this.submitted = submitted;
  }
  setDueDate(duedate:string){
    this.duedate = duedate;
  }
  setCreatedBy(created_by:string){
    this.created_by = created_by;
  }
  setDate(date:string){
    this.date = date;
  }

  



  private validate() {
    const taskSchema = z.object({
      title: z
        .string()
        .min(1)
        .regex(/^[a-z]+$/, "Name must only contain lower case letters"),
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
