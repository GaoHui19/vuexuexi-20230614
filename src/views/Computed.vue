<template>
    <h2>Computed</h2>
    日期: <div>{{ dateFomatt }}</div>
    <div>{{ date }}</div>
</template>
<script setup>
    import { computed } from '@vue/reactivity';
import {ref} from 'vue'
    let date=ref('2023/6/14')
    
    // let dateFomatt=computed(()=> date.value.split('/').join('-'))
    let dateFomatt=computed({
        get(){
            return date.value.split('/').join('-');
        },
        set(val){
            date.value=val.split('-').join('/')
        }
        
    })
    dateFomatt.value='2023-6-6'
</script>
<style>
</style>