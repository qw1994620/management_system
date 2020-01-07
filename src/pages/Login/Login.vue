<template>
    <div>
        <div class="a">
            123
            <div class="b">456</div>
        </div>
    </div>
</template>

<script>
export default {
    props: [

    ],
    data() {
        return {

        };
    },
    computed: {

    },
    created() {

    },
    mounted() {
        this.getadata()
    },
    watch: {

    },
    methods: {
        getadata(){
            this.$axios("https://api.zbztb.cn/api/public/v1/home/swiperdata")
            .then(res=>{
                console.log(res);
                
            })
        }
    },
    components: {

    },
};
</script>

<style scoped lang="less">
.a{
    color: red;
    .b{
        color:green
    }
}
</style>
