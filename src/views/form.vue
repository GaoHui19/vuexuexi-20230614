<template>
    <h2>from</h2>
    <input type="text" name="" :value="message" @input="inputHandler" id="">
</template>
<script setup>
    import {ref} from  'vue'
    let message=ref('')
    function inputHandler(event){
        console.log(event.target)
        message.value=event.target.value
        console.log(message.value)
    }
</script>
<style>
</style>