import { Router } from 'express';

import AuthenticatedUserService from '../services/AuthenticatedUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const authUser = new AuthenticatedUserService();

  const { user, token } = await authUser.execute({
    email,
    password
  });

  // @ts-expect-error
  delete user.password;

  return response.json({ user, token });
});

export default sessionsRouter;
