<template>
    <div class="v-catalog-item">
        <img v-bind:src=" require('../assets/'+ card_data.image)">
            <h3> {{card_data.name}}</h3>
    <h4>{{card_data.discription}}</h4>
    <my-button @click="SendDataToParent">
        Пройти квиз
    </my-button>
    </div>

    
</template>

<script>
export default {
    props: {
        card_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        SendDataToParent(){
            this.$emit('sendArticle', this.card_data.article)
        }
    }
}
</script>

<style scoped>
.v-catalog-item {
    flex-basis: 25%;
    padding: 28px;
    margin-bottom: 40px;
    margin-top: 30px;
    box-shadow: 0px 0px 6px rgba(112, 0, 255, 0.25);
    border-radius: 8px;
    align-items: center;
}
</style>
