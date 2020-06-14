<template>
    <div class="p-login">
        <div class="container">
            <div class="p-login__card shadow">
                <div class="container">
                    <h3 class="text-center">Iniciar Sesión</h3>
                    <form class="p-login__card-form">
                        <Input type="email" label="Email" className="error" placeholder="Ingrese su email..." v-on:getValue="getEmail($event)"/>
                        <Input type="password" label="Contraseña" className="error" placeholder="Ingrese su contraseña..." v-on:getValue="getPassword($event)"/>
                        <div class="p-login__card-form-buttons">
                            <Button className="btn btn-outline" label='Volver' :onClick='handleBack' />
                            <Button className="btn btn-primary" label='Iniciar Sesion' :onClick='handleLogin' displayIcon='right' icon='sign-in-alt' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Input from '../../atoms/input/Input';
import Button from '../../atoms/button/Button';

export default {
    components: {
        Input,
        Button
    },
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        handleBack(){
            this.$router.go(-1);
        },
        handleLogin(){
            console.log(this.email, this.password);
        },
        getEmail(email) {
            this.email = email
        },
        getPassword(password) {
            this.password = password;
        }

    },
}
</script>