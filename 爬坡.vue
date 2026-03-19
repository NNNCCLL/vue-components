<template>

    <div class="test">
        
        <div class="container">
            <div class="box">
                <div class="cube"></div>
            </div>
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
    background-color: black;
    overflow: hidden;
}

.cube,
.container,
.box {
    position: relative;
}

.container,
.box {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}


@keyframes anime {

    0% {
        transform: rotate(0deg);
    }

    60% {
        transform: rotate(90deg);
    }

    70% {
        transform: rotate(85deg);
    }

    75% {
        transform: rotate(90deg);
    }

    80% {
        transform: rotate(87.5deg);
    }

    90%,
    100% {
        transform: rotate(90deg);
    }

}

@keyframes box-anime {
    0% {
        transform: translateX(0px);
    }

    100% {
        transform: translateX(-200px);
    }
}

.container {
    transform: rotate(-35deg);
    .box {
        -webkit-box-reflect: below 1px linear-gradient(transparent, black);
        animation: box-anime 2s ease-in-out infinite;
        width: calc(100% + 400px);
        left: -200px;
        .cube {
            background-color: rgba(0, 255, 255, 1);
            height: 200px;
            width: 200px;
            box-shadow:
                0 0 5px rgba(0, 255, 255, 1),
                0 0 25px rgba(0, 255, 255, 1),
                0 0 50px rgba(0, 255, 255, 1),
                0 0 100px rgba(0, 255, 255, 1),
                0 0 200px rgba(0, 255, 255, 1),
                0 0 300px rgba(0, 255, 255, 1),
            ;
            transform-origin: bottom right;
            animation: anime 2s ease-in-out infinite;
        }

    }
}
