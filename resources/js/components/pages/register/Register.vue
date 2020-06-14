<template>
    <div class="p-register">
        <div class="container">
            <div class="p-register__card shadow">
                <div class="container">
                    <h3 class="text-center">Registrarse</h3>
                    <form class="p-register__card-form">
                        <Input type="text" label="Nombre Completo" placeholder="Ingrese su nombre..." v-on:getValue="getNombre($event)"/>
                        <Input type="date" label="Fecha de Nacimiento" v-on:getValue="getBirthday($event)" />
                        <Input type="email" label="Email" placeholder="Ingrese su email..." v-on:getValue="getEmail($event)"/>
                        <div class="row">
                            <div class="col-6">
                                <Input type="password" label="Contraseña" placeholder="Ingrese su contraseña..." v-on:getValue="getPassword($event)"/>
                            </div>
                            <div class="col-6">
                                <Input type="password" label="Repetir Contraseña" placeholder="Ingrese su contraseña de nuevo..." v-on:getValue="getRepeatPassword($event)"/>
                            </div>
                        </div>
                        <div class="p-register__card-form-buttons">
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
        Button,
    },
    data() {
        return {
            name: '',
            birthday: new Date(),
            email: '',
            password: '',
            repeatPassword: '',
            focus: false,
        }
    },
    methods: {
        handleBack(){
            this.$router.go(-1);
        },
        handleLogin(){
            console.log(this.email, this.password, this.name, this.birthday);
        },
        getNombre(name) {
            this.name = name;
        },
        getBirthday(birthday) {
            this.birthday = birthday;
        },
        getEmail(email) {
            this.email = email
        },
        getPassword(password) {
            this.password = password;
        },
        getRepeatPassword(repeatPassword) {
            this.repeatPassword = repeatPassword;
        },

    },
}
</script>
