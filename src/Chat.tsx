import { Component, createSignal, onMount } from 'solid-js';
import TawkMessenger from 'solid-tawk-messenger';

const Chat: Component = () => {
    let $tawkManager;

    onMount(() => {
        $tawkManager.maximize();
    })
    return(
        <TawkMessenger
        ref={$tawkManager}
        />
    )
}

export default Chat;