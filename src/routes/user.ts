import express from 'express';
import UserServices from '../services/user';

const ApiUser = ({ app }: any) => {
  const router = express.Router();
  const services = new UserServices('user');

  app.use('/api/user', router);

  router.get('/', async (req, res, next) => {
    const { tags } = req.query;
    try {
      const users = await services.getUsers({ tags });
      res.status(200).json({
        data: users,
        message: 'Todo chingon',
      });
    } catch (error) {
      next(error);
    }
  });

  router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
      const user = await services.getOneUser({ id });
      res.status(200).json({
        data: user,
        message: 'has traido un usuario'
      })
    } catch (error) {
      next(error)
    }
  })

  router.post('/', async (req, res, next) => {
    const { body: user } = req;
    const { name } = req.params
    try {
      const users = await services.getUsers({name});
      const encontrado = users.find((u: any) => {
        console.log(`${u.nombre} === ${user.nombre} || ${u.email} === ${user.email}`);
        console.log(u.nombre === user.nombre || u.email === user.email);
      });
      if (encontrado) {
        res.status(409).json({
          data: '',
          message: 'Eres un baboso y ya estabas registrado'
        });
      } else {
        const data = await services.createUser({ user });
        res.status(201).json({
          data,
          message: ' awebo, lo creaste'
        })
      }
    } catch (error) {
      next(error);
    }
  });

  router.put('/:id', async (req, res, next) =>{
    const { id } = req.params;
    const { body: user } = req;
    try {
      const updateId = await services.updateUser({ id, user });
      res.status(200).json({
        data: updateId,
        message: 'awebvo, lo editas'
      })
    } catch (error) {
      next(error);
    }
  })

  router.delete('/:id', async (req, res, next) =>{
    const { id } = req.params;
    try {
      const deleteId = await services.deleteUser({ id });
      res.status(200).json({
        data: deleteId,
        message: 'lo has eliminado, joder'
      })
    } catch (error) {
      next(error);
    }
  })

}

export default ApiUser;