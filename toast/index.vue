<template>

    <div class="container">

        <TransitionGroup name="toast">
            <div class="toast" :key="item.id" :class="[item.mtype, closeId == item.id ? 'hide' : '']"
                v-for="item in items">
                <div class="column">
                    <FontAwesomeIcon :icon="getIcon(item.mtype)" />
                    <span>{{ item.msg }}</span>
                </div>
                <FontAwesomeIcon icon="xmark" @click="handleClose(item.id)"/>
            </div>
        </TransitionGroup>

    </div>

</template>


<script lang="ts" setup>
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import { reactive, ref, watch } from 'vue'



export type ToastType = 'info' | 'success' | 'error' | 'warn'

export interface ToastItem {
    id: number
    duration: number | 3000
    msg: string
    mtype: ToastType
}

const iconMap = {
    'info': 'circle-info',
    'success': 'circle-check',
    'error': 'circle-xmark',
    'warn': 'triangle-exclamation'
}

function getIcon(mtype: ToastType) {
    return iconMap[mtype]
}

const items = reactive<ToastItem[]>([])

watch(() => items.length, v => {
    console.log(`当前列表的长度 ${v}`)
})

const closeId = ref<number>(-1)


const handleClose = (id: number) => {
    closeId.value = id
}

const addToast = (item: ToastItem) => {
    items.push(item)
    if (item.duration > 0) {
        setTimeout(() => {
            removeToast(item.id)
        }, item.duration)
    }
}

const removeToast = (id: number) => {

    const index = items.findIndex(item => item.id === id)
    if (index !== -1) {
        items.splice(index, 1)
    }
}

defineExpose({
    removeToast, addToast
})

</script>


<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container {
    position: fixed;
    right: 10px;
    top: 0;
    width: 400px;

    z-index: 999;

    .column,
    .toast {
        display: flex;
        align-items: center;
    }

    .toast {
        justify-content: space-between;
        padding: 20px 10px;
        position: relative;
        overflow: hidden;
        background-color: white;
        border-radius: 10px;
        margin: 20px 10px;

        &::before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 3px;
            animation: slide 3s linear forwards;
        }

        @keyframes slide {
            0% {
                width: 100%;
            }

            100% {
                width: 0;
            }
        }

        > :nth-child(2) {
            font-size: 1.2em;
            color: rgba(0, 0, 0, 0.5);

            &:hover {
                color: rgba(0, 0, 0, 0.8);
            }
        }

        .column {
            font-size: 1.2em;

            :nth-child(1) {
                font-size: 2em;
                margin-right: 10px;
            }
        }

        &.info {
            &::before {
                background-color: rgba(0, 128, 255, 1);
            }

            .column {
                :nth-child(1) {
                    color: rgba(0, 128, 255, 1);
                }
            }
        }

        &.error {
            &::before {
                background-color: rgba(200, 0, 0, 1);
            }

            .column {
                :nth-child(1) {
                    color: rgba(200, 0, 0, 1);
                }
            }
        }

        &.success {
            &::before {
                background-color: rgba(0, 200, 0, 1);
            }

            .column {
                :nth-child(1) {
                    color: rgba(0, 200, 0, 1);
                }
            }
        }

        &.warn {
            &::before {
                background-color: rgba(255, 128, 0, 1);
            }

            .column {
                :nth-child(1) {
                    color: rgba(255, 128, 0, 1);
                }
            }
        }
    }



}

.toast-enter-active,
.toast-leave-active {
    transition: all 0.5s ease;
}

.toast-enter-from {
    opacity: 0;
    transform: translateX(100%);
}

.toast-enter-to {
    opacity: 1;
    transform: translateX(0);
}

.toast-leave-from {
    opacity: 1;
    transform: translateX(0);
}

.toast-leave-to {
    opacity: 0;
    transform: translateX(100%);
}

// 移动时动画（列表重新排序）
.toast-move {
    transition: transform 0.5s ease;
}
</style>
