import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, TextField } from '@mui/material';
import Container from './styled'
import { useHistory } from 'react-router';

const MyForm = () => {

    const history = useHistory()

    const formSchema = yup.object().shape({
        name: yup.string().required("Nome obrigatório"),
        email: yup.string().required("Email obrigatório").email("Deve ser um email"),
        password: yup.string().required("Senha necessária").min(8, "Minimo de 8 digitos").matches(
            /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            "Senha deve conter ao menos uma letra maiúscula, uma minúscula, um número e um caracter especial!"
        ),
        passwordCheck: yup.string().required("Confirmação de senha deve ser informada").oneOf([yup.ref("password"), null], "Senhas devem coincidir")
    })

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(formSchema) })

    const getData = (data) => {

        history.push(`welcome/${data.name}`)
    };

    return (
        <Container>
            <form onSubmit={handleSubmit(getData)}>
                <TextField  {...register("name")} variant="outlined" required
                    id="outlined-required"
                    label="Nome" />
                <p>{errors.name?.message}</p>
                <TextField  {...register("email")} variant="outlined" required
                    id="outlined-required" label="Email"
                />
                <p>{errors.email?.message}</p>
                <TextField  {...register("password")} variant="outlined" required
                    id="outlined-required"
                    label="Senha" />
                <p>{errors.password?.message}</p>
                <TextField  {...register("passwordCheck")} variant="outlined" required
                    id="outlined-required"
                    label="Confirmação de senha" />
                <p>{errors.passwordCheck?.message}</p>
                <Button variant="contained" type="submit">Cadastrar</Button>
            </form>
        </Container>
    )
}

export default MyForm;