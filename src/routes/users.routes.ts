import { Router } from 'express';
import { v4 as uuid } from 'uuid';

const usersRouter = Router();

const users = [];

usersRouter.post('/', (request, response) => {
  const { name, email, password } = request.body;

  const user = {
    id: uuid(),
    name,
    email,
    password
  };

  users.push(user);

  return response.json({user});
});

export default usersRouter;
