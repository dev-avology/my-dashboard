import { GetUser, DeleteService } from "./types";
import { AuthenticationError } from "./utils";

export async function deleteServiceUseCase(
  context: { getUser: GetUser; deleteService: DeleteService },
  data: { serviceId: number }
) {
  const user = context.getUser();

  if (!user) {
    throw new AuthenticationError();
  }

  await context.deleteService(data.serviceId);
}
