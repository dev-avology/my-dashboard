import { GetUser, DeleteTask } from "./types";
import { AuthenticationError } from "./utils";

export async function deleteTaskUseCase(
  context: { getUser: GetUser; deleteTask: DeleteTask },
  data: { taskId: string }
) {
  const user = context.getUser();

  if (!user) {
    throw new AuthenticationError();
  }

  await context.deleteTask(data.taskId);
}
