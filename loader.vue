<template>

    <div class="test">

        <div class="loader">
            <div style="--i: 0"></div>
            <div style="--i: 1"></div>
            <div style="--i: 2"></div>
            <div style="--i: 3"></div>
            <div style="--i: 4"></div>
        </div>

    </div>

</template>

<script lang="ts" setup>

</script>


<style lang="scss" scoped>
.test {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

* {
    box-sizing: border-box;
}

.loader {
    display: flex;

    div {
        position: relative;
        width: 40px;
        height: 200px;
        border-radius: 40px;
        margin: 20px;
        border: 2px solid white;
        // 凹槽效果
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.01));
        box-shadow:
            15px 15px 20px rgba(0, 0, 0, 0.1),
            -15px -15px 20px #fff,
            inset -5px -5px 5px rgba(255, 255, 255, 0.5),
            inset 5px 5px 5px rgba(0, 0, 0, 0.05);
        overflow: hidden;
        &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            border-radius: 40px;
            z-index: 10;
            box-shadow:
                15px 15px 20px rgba(0, 0, 0, 0.1),
                -15px -15px 20px #fff,
                inset -5px -5px 5px rgba(255, 255, 255, 0.5),
                inset 5px 5px 5px rgba(0, 0, 0, 0.05);
        }

        &::after{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background-color: white;
            overflow: hidden;
            box-shadow: 
                inset -5px -5px 5px rgba(0,0,0,0.2),
                0 420px 0 400px rgba(0,128,255,1)
            ;
            animation: anime 2.3s ease-in-out infinite;
            animation-delay: calc(-0.5s* var(--i));
        }
    }
}

@keyframes anime{
    0%{
        transform: translateY(160px);
        filter: hue-rotate(180deg);
    }
    50%{
        transform: translateY(0);
    }
    100%{
        transform: translateY(160px);
        filter: hue-rotate(0deg);
    }
}
</style>
