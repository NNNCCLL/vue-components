import {  h, render } from 'vue'
import Toast, { type ToastType } from './index.vue'


export interface ToastOption{
    duration?: number | 3000
    msg?: string
    mtype?: ToastType
}


let instance: any = null

export const useToast = ()=>{
    
    if (!instance){
        const container = document.createElement('div')
        container.id = 'toast-container'
        document.body.appendChild(container)
        const node = h(Toast)
        render(node, container)
        
        instance = node.component?.exposed
    }

    const show = (option?: ToastOption)=>{
        if (!option){
            option = {
                duration: 3000,
                msg: '',
                mtype: 'info'
            }
        }

        instance.addToast({
            id: Date.now(),
            duration: 3000,
            msg: option.msg,
            mtype: option.mtype ? option.mtype : 'info'
        })
    }

    const info = (msg: string, option?: ToastOption)=>{
        show({
            duration: option?.duration? option?.duration : 3000,
            msg: msg,
            mtype: 'info'
        })
    }

    const success = (msg: string, option?: ToastOption)=>{
        show({
            duration: option?.duration? option?.duration : 3000,
            msg: msg,
            mtype: 'success'
        })
    }

    const error = (msg: string, option?: ToastOption)=>{
        show({
            duration: option?.duration? option?.duration : 3000,
            msg: msg,
            mtype: 'error'
        })
    }

    const warn = (msg: string, option?: ToastOption)=>{
        show({
            duration: option?.duration? option?.duration : 3000,
            msg: msg,
            mtype: 'warn'
        })
    }

    return {
        warn, info, error, success
    }

}
