<template>
    <div class="test">

        <div class="loader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
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
    background-color: black;
}

$s: 5px;

.loader {
    position: relative;
    height: 200px;
    width: 200px;
    overflow: hidden;

    -webkit-box-reflect: below 1px linear-gradient(transparent, black);

    span {
        position: absolute;
        display: block;
        border-radius: 40px;
    }

    &:hover {
        background-color: rgba(0, 255, 255, 1);
        box-shadow:
            0 0 5px rgba(0, 255, 255, 1),
            0 0 25px rgba(0, 255, 255, 1),
            0 0 50px rgba(0, 255, 255, 1),
            0 0 200px rgba(0, 255, 255, 1),
        ;
    }
}

.loader span:nth-child(1){
    left: 0;
    top: -100%;
    height: 200px;
    width: $s;
    background: linear-gradient(180deg, transparent, rgba(0, 255, 255, 1));
    animation: a-1 1s linear infinite;
    animation-delay: 0.5s;
}


.loader span:nth-child(3){
    right: 0;
    bottom: -100%;
    height: 200px;
    width: $s;
    background: linear-gradient(180deg, rgba(0, 255, 255, 1), transparent);
    animation: a-3 1s linear infinite;
    animation-delay: 0.5s;
}

.loader span:nth-child(2){
    right: -100%;
    top: 0;
    width: 200px;
    height: $s;
    background: linear-gradient(90deg, rgba(0, 255, 255, 1), transparent);
    animation: a-2 1s linear infinite;
}

.loader span:nth-child(4){
    left: -100%;
    bottom: 0%;
    width: 200px;
    height: $s;
    background: linear-gradient(90deg, transparent,rgba(0, 255, 255, 1));
    animation: a-4 1s linear infinite;
}

@keyframes a-1{
    0%{
        top: -100%;
    }

    100%{
        top: 100%;
    }
}

@keyframes a-3{
    0%{
        bottom: -100%;
    }

    100%{
        bottom: 100%;
    }
}

@keyframes a-2{
    0%{
        right: -100%;
    }

    100%{
        right: 100%;
    }
}

@keyframes a-4{
    0%{
        left: -100%;
    }

    100%{
        left: 100%;
    }
}

</style>
