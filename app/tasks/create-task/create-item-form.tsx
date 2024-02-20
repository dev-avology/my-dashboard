"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormState, useFormStatus } from "react-dom";
import { HTMLAttributes, useEffect, useRef } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import { createTaskAction } from "../_actions/create-task.action";
import { cn } from "@/lib/utils";

export function CreateItemForm() {
  const { toast } = useToast();
 

  return (
    <>
      <h2 className="text-3xl mb-8">Add Entry</h2>
    </>
  );
}

function Error({ error }: { error?: string }) {
  return error ? <span className="text-red-400">{error}</span> : null;
}

function SubmitButton({
  idleText,
  submittingText,
  ...props
}: HTMLAttributes<HTMLButtonElement> & {
  idleText: string;
  submittingText: string;
}) {
  const { pending } = useFormStatus();

  return (
    <Button
      {...props}
      className={cn(
        "disabled:bg-gray-400 disabled:cursor-default",
        props.className
      )}
      disabled={pending}
    >
      {pending ? submittingText : idleText}
    </Button>
  );
}
