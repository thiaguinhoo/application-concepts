import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { useAuth } from '../../contexts/auth';

import { instance } from '../../services/instance';

const schema = yup.object().shape({
  email: yup.string().email().required(),
});

type InputsValues = {
  email: string;
};

const Form = () => {
  const { setSigned } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsValues>();

  const onSubmit: SubmitHandler<InputsValues> = (data) => {
    schema.isValid(data).then((valid) => {
      if (!valid) {
        return;
      }
      instance
        .post('/get-token', { ...data })
        .then((response) => {
          if (response.status === 200) {
            const getToken = `Bearer ${response.data.jwtToken}`;
            localStorage.setItem('GetToken', getToken);
            setSigned(true);
          }
        })
        .catch(() => setSigned(false));
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email', { required: true })} />
      {errors.email && <p>Preencha o campo de email</p>}
      <input type="submit" />
    </form>
  );
};

export default Form;
