<template>
    <!-- theme-switch  -->
    <div class="switch-container" @click="onClick">
        <div class="theme-toggle-wrapper">
            <div :class="theme" title="Toggle theme">
                <svg xmlns="http://www.w3.org/2000/svg" v-show="daylight" aria-hidden="true" width="1em" height="1em"
                    fill="currentColor" stroke-linecap="round" class="theme-toggle__classic" viewBox="0 0 32 32">
                    <clipPath id="theme-toggle__classic__cutout">
                        <path d="M0-5h30a1 1 0 0 0 9 13v24H0Z" />
                    </clipPath>
                    <g clip-path="url(#theme-toggle__classic__cutout)">
                        <circle cx="16" cy="16" r="9.34" />
                        <g stroke="currentColor" stroke-width="1.5">
                            <path d="M16 5.5v-4" />
                            <path d="M16 30.5v-4" />
                            <path d="M1.5 16h4" />
                            <path d="M26.5 16h4" />
                            <path d="m23.4 8.6 2.8-2.8" />
                            <path d="m5.7 26.3 2.9-2.9" />
                            <path d="m5.8 5.8 2.8 2.8" />
                            <path d="m23.4 23.4 2.9 2.9" />
                        </g>
                    </g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" v-show="!daylight" width="1em" height="1em"
                    viewBox="0 0 1024 1024">
                    <path fill="currentColor"
                        d="M240.448 240.448a384 384 0 1 0 559.424 525.696 448 448 0 0 1-542.016-542.08 390.592 390.592 0 0 0-17.408 16.384zm181.056 362.048a384 384 0 0 0 525.632 16.384A448 448 0 1 1 405.056 76.8a384 384 0 0 0 16.448 525.696">
                    </path>
                </svg>
            </div>
        </div>
    </div>

</template>


<script setup>

import { ref, onMounted, defineEmits } from 'vue'
const emit = defineEmits(['onClick'])
const daylight = ref(true)
const theme = ref('')
let isLeft = false
const onClick = () => {
    emit('onClick', null)
    daylight.value = !daylight.value
    // trigger animation 
    if (isLeft){
        theme.value = 'theme-toggle-active'
        isLeft = false
    }else{
        theme.value = 'theme-toggle-actived'
        isLeft = true
    }
    
}

onMounted(()=>{
    theme.value = 'theme-toggle-init'
})

</script>

<style lang="scss" scoped>


.switch-container {
    width: 100%;
    height: 100%;
}


.theme-toggle-init{ // initial state
    position: relative;
    background-color: rgb(214, 215, 215);
    border-radius: 100%;
    height: 24px;
    width: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 35px;
}

.theme-toggle-active{ // left -> right
    position: relative;
    background-color: rgb(214, 215, 215);
    border-radius: 100%;
    height: 24px;
    width: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 1px;
    transition: left 0.3s linear;
}

.theme-toggle-actived{ // right -> left
    position: relative;
    background-color: rgb(214, 215, 215);
    border-radius: 100%;
    height: 24px;
    width: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 35px;
    transition: left 0.3s linear;
}


.theme-toggle-wrapper{
    height: 100%;
    width: 100%;
    background-color: rgb(247, 247, 247);
    border-radius: 20px;
}
</style>
