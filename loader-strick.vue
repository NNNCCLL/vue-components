<template>
    <div class="test">

        <section>

            <svg>
                <filter id="gooey">
                    <!-- 高斯模糊 -->
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10">
                    </feGaussianBlur>
                    <feColorMatrix values="
                            1 0 0 0 0
                            0 1 0 0 0
                            0 0 1 0 0
                            0 0 0 20 -10
                        "></feColorMatrix>
                </filter>
            </svg>

            <div class="loader">
                <span style="--i:1;"></span>
                <span style="--i:2;"></span>
                <span style="--i:3;"></span>
                <span style="--i:4;"></span>
                <span style="--i:5;"></span>
                <span style="--i:6;"></span>
                <span style="--i:7;"></span>
                <span style="--i:8;"></span>
                <!-- 旋转元素 -->
                <span class="rotate" style="--j: 0"></span>
                <span class="rotate" style="--j: 1"></span>
                <span class="rotate" style="--j: 2"></span>
                <span class="rotate" style="--j: 3"></span>
            </div>
        </section>

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
    background-color: black;
}

section {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: black;

    .loader {
        position: relative;
        width: 250px;
        height: 250px;
        filter: url(#gooey);
        span {
            //几个span 全堆在一起
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            right: 0;
            display: block;
            transform: rotate(calc(45deg * var(--i)));
            &::before {
                content: '';
                position: absolute;
                top: calc(50% - 20px);
                left: 0;
                width: 40px;
                height: 40px;
                box-shadow:
                    0 0 30px rgba(0, 255, 255, 1),
                ;
                background: linear-gradient(45deg, rgba(0, 255, 255, 1), white);
                border-radius: 50%;
            }
        }

        .rotate {
            animation: anime 4s ease-in-out infinite;
            animation-delay: calc(-0.2s * var(--j));
        }
    }
}

svg {
    height: 0;
    width: 0;
}


@keyframes anime {
    0% {
        transform: rotate(0deg);

    }

    100% {
        transform: rotate(360deg);
    }
}
</style>
