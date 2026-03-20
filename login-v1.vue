<template>
    <div class="test">  
        <!-- 登陆界面 -->
        <div class="login-box">
            <form action="">
                <h2>Login</h2>
                <div class="input-box">
                    <span class="icon">
                        <component :is="mail"></component>
                    </span>
                    <input id="email" type="email" autocomplete="off" required>
                    <label for="email">Email</label>
                </div>
                <div class="input-box">
                    <span class="icon">
                        <component :is="lockClose"></component>
                    </span>
                    <input id="psd" type="password" required>
                    <label for="psd" >Password</label>
                </div>

                <div class="remember-me">
                    <label for="rm"><input id="rm" type="checkbox"> Remember me</label>
                    <a href="#">Forgot password?</a>
                </div>
                <button type="submit">login</button>
                <div class="register-link">
                    <p>Don't have a account? <a href="#">Register</a></p>
                </div>
            </form>
        
        </div>

    </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';

const mail = defineAsyncComponent(()=> import('@/assets/svgs/mail.svg'))
const lockClose = defineAsyncComponent(()=> import('@/assets/svgs/lock-closed.svg'))





</script>


<style lang="scss" scoped>
.test {
    min-height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(../assets/img/bg.jpg);
    background-size: cover;
    
}


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}


.icon{
    svg{
        width: 24px;
        height: 24px;
    }
}

.login-box{
    position: relative;
    width: 400px;
    height: 450px;
    background-color: transparent;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(15px);
    border: 2px solid rgba(255,255,255,1);
    h2{
        font-size: 2em;
        color: white;
        text-align: center;
    }

    .remember-me{
        display: flex;
        justify-content: space-between;
        color: white;
        font-size: 0.9em;
        input {
            margin-right: 4px;
        }

        a{
            color: white;
            text-decoration: none;
            &:hover{
                text-decoration: underline;
            }
        }
    }

    .register-link{
        margin-top: 10px;
        color: white;
        font-size: 1em;
        text-align: center;
        a{
            color: white;
            text-decoration: none;
            font-weight: 600;
            &:hover{
                text-decoration: underline;
            }
        }

    }

    button{
        width: 100%;
        height: 40px;
        background-color: white;
        border: none;
        outline: none;
        border-radius: 40px;
        margin-top: 10px;
        font-size: 1em;
        color: black;
        font-weight: 500;
    }

    .input-box{
        position: relative;
        width: 310px;
        margin: 30px 0;
        border-bottom: 2px solid white;
        label{
            position: absolute;
            top: 50%;
            left: 5px;
            transform: translateY(-50%);
            font-size: 1em;
            color: white;
            pointer-events: none;
            transition: 0.3s;
        }
       

        input{
            width: 100%;
            height: 50px;
            background-color: transparent;
            border: none;
            outline: none;
            font-size: 1em;
            color: white;
            padding-right: 35px;
            padding-left: 5px;

            &:focus ~ label, &:valid ~ label{
                top: -5px;
            }
        }

        .icon{
            position: absolute;
            right: 8px;
            font-size: 1.2em;
            line-height: 57px;
            :deep(svg){
                path, rect{
                    stroke: white;
                }
            }
        }
    }
}


// 移动端适配
@media (max-width: 480px){
    .login-box{
        width: 100%;
        height: 100vh;
        border-radius: 0;
        border: none;
        .input-box{
            width: 300px;
        }
    }
}

</style>
