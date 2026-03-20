<template>
    <div class="bg"> 
        <!-- 登陆界面 -->
        <header>
            <h2 class="logo">Logo</h2>
            <nav class="navigation">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Contract</a>
                <button :class="show?'active':''" class="btnLogin-popup" @click="show = true">Login</button>
            </nav>
        </header>

        <div class="wrapper" :class="state">
            <span class="close-icon icon" @click="show = false">
                <component :is="close"></component>
            </span>
            <div class="form-box login">
                <h2>Login</h2>
                <form :action="$props.url" @submit="onSubmit">
                    <div class="input-box">
                        <span class="icon">
                            <component :is="mail"></component>
                        </span>
                        <input v-model="email" type="email" required>
                        <label >Email</label>
                    </div>

                    <div class="input-box">
                        <span class="icon">
                            <component :is="lockClose"></component>
                        </span>
                        <input v-model="psd" type="password" required>
                        <label >Password</label>
                    </div>
                    <div class="rember-me">
                        <label><input v-model="isCheck" type="checkbox">Remember me</label>
                        <a href="#">Forgot password?</a>
                    </div>
                    <button class="btn" type="submit">Login</button>
                    <div class="register-link">
                        <p>Don't have an account?<a href="#" @click="curState = 'register'">Register</a></p>
                    </div>
                </form>
            </div>

            <div class="form-box register">
                <h2>Register</h2>
                <form action="">
                    <div class="input-box">
                        <span class="icon">
                            <component :is="mail"></component>
                        </span>
                        <input v-model="email" type="email" required>
                        <label >Email</label>
                    </div>

                    <div class="input-box">
                        <span class="icon">
                            <component :is="user"></component>
                        </span>
                        <input v-model="username" type="text" required>
                        <label >Username</label>
                    </div>

                    <div class="input-box">
                        <span class="icon">
                            <component :is="lockClose"></component>
                        </span>
                        <input v-model="psd" type="password" required>
                        <label >Password</label>
                    </div>
                    <div class="rember-me">
                        <label><input v-model="isCheck"  type="checkbox">I agree to the terms & conditions</label>
                    </div>
                    <button class="btn" type="submit">Register</button>
                    <div class="register-link">
                        <p>Already have an account ? Go to <a href="#" @click="curState = 'login'">login</a> </p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, defineAsyncComponent, ref } from 'vue';

const mail = defineAsyncComponent(() => import('@/assets/svgs/mail.svg'))
const lockClose = defineAsyncComponent(() => import('@/assets/svgs/lock-closed.svg'))
const close = defineAsyncComponent(() => import('@/assets/svgs/close.svg'))
const user = defineAsyncComponent(()=> import('@/assets/svgs/user.svg'))

const curState = ref<'login' | 'register'>('login')
const show = ref<boolean>(false)

const email = ref<string>('')
const psd = ref<string>('')
const username = ref<string>('')

export interface ZForm{
    url?: string
}

const props = withDefaults(defineProps<ZForm>(), {
    url: '#'
})

const state = computed(()=>[
    curState.value == 'register'? 'active': '',
    show.value?'btn-active':''
])

// 表单提交
const onSubmit = ()=>{
    const fd = new FormData()
    let path = props.url
    if (curState.value == 'login'){
        fd.append('email', email.value)
        fd.append('psd', psd.value)
        path += '/login'
    }else{
        fd.append('email', email.value)
        fd.append('username', username.value)
        fd.append('password', psd.value)
        path += '/register'
    }

    fetch(path, {
        method: 'POST',
        body: fd
    }).then(res => res.text)
    .catch(e=>{
        console.error(e)
    })

    
}


</script>


<style lang="scss" scoped>
.bg {
    min-height: 100vh;
    width: 100vw;
    background: url(../assets/img/bg.jpg) no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
}

//图标通用样式
.icon {
    :deep(svg) {
        height: 24px;
        width: 24px;

        path,
        rect {
            stroke: white;
        }
    }
}


* {
    // 固定套路
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px 100px; //上下20px 左右 100px
    background: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 99;

    .logo {
        font-size: 2em;
        color: white;
        user-select: none;
    }

    .navigation {

        // 不依赖父元素
        a {
            position: relative;
            font-size: 1.1em;
            text-decoration: none;
            font-weight: 500;
            margin-left: 40px;
            color: white;

            &:hover::after {
                transform-origin: left;
                transform: scaleX(1);
            }

            &::after {
                content: '';
                position: absolute;
                background-color: rgba(255, 255, 255, 1);
                width: 100%;
                height: 3px;
                left: 0;
                bottom: -6px;
                border-radius: 3px;
                transition: transform .5s;
                transform-origin: right;
                transform: scaleX(0); //这条线在x方向缩放0倍
            }
        }

        .btnLogin-popup {
            width: 130px;
            height: 50px;
            background: transparent;
            border-radius: 6px;
            border: 2px solid white;
            outline: none;
            color: white;
            font-size: 1.1em;
            font-weight: 500;
            margin-left: 40px;
            transition: .5s;

            &.active{
                background-color: white;
                color: rgba(0, 0, 0, 0.7);
            }

            &:hover {
                background-color: white;
                color: rgba(0, 0, 0, 0.7);
            }
        }

    }
}


.wrapper {
    position: relative;
    width: 400px;
    height: 440px;
    background: transparent;
    border-radius: 20px;
    border: 2px solid rgba(255, 255, 255, .5);
    backdrop-filter: blur(20px);
    box-shadow: 0 0 30px rgba(0, 0, 0, .5);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    transform: scale(0);
    transition: .3s ease;

    &.btn-active{
        transform: scale(1);
    }
    &.active{
        height: 520px;
        .login{
            transition: none;
            transform: translateX(-400px);
        }
        .register{
            transition: transform .18s ease;
            transform: translateX(0);
        }
    }
    .register{
        position: absolute;
        transform: translateX(400px);
        transition: none;
    }
    .login{
        transition: transform .18s ease;
        transform: translateX(0);
    }
    

    .close-icon.icon {
        position: absolute;
        right: 0px;
        top: 0px;
        height: 45px;
        width: 45px;
        font-size: 2em;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(255, 255, 255, 0.3);
        border-bottom-left-radius: 20px;
        cursor: pointer;
        z-index: 1;
    }

    .form-box {
        width: 100%;
        padding: 40px;

        h2 {
            font-size: 2em;
            color: white;
            text-align: center;
        }

        .input-box {
            position: relative;
            width: 100%;
            height: 50px;
            border-bottom: 2px solid white;
            margin: 30px 0;

            input {
                background: transparent;
                border: none;
                outline: none;
                width: 100%;
                height: 40px;
                padding-left: 5px;
                padding-right: 35px;
                color: white;

                &:focus~label,
                &:valid~label {
                    top: -5px;
                }
            }

            label {
                position: absolute;
                color: white;
                left: 5px;
                top: 50%;
                transform: translateY(-50%);
                font-weight: 500;
                pointer-events: none;
                font-size: 1em;
                transition: .3s;
            }

            .icon {
                position: absolute;
                line-height: 67px;
                right: 8px;
                padding-left: 5px;
            }
        }

        .rember-me {
            display: flex;
            justify-content: space-between;
            font-size: .9em;
            color: white;

            input {
                accent-color: rgba(0, 0, 0, 0.8);
                margin-right: 5px;
            }

            a {
                text-decoration: none;
                font-size: .9em;
                color: white;

                &:hover {
                    text-decoration: underline;
                }
            }
        }

        .btn {
            width: 100%;
            height: 40px;
            border: 2px solid rgba(255, 255, 255);
            border-radius: 40px;
            background: rgba(255, 255, 255, 0.1);
            margin-top: 10px;
            color: white;
        }

        .register-link {
            color: white;
            margin-top: 20px;
            text-align: center;

            a {
                color: white;
                text-decoration: none;
                font-weight: 600;

                &:hover {
                    text-decoration: underline;
                }
            }
        }

    }

    

    

}
</style>
