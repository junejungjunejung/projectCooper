export default{
  created(){
    this.$store.dispatch('robots/getParts');
  },
  computed:{
    parts(){
      return this.$stoe.state.parts || {
        heads: [],
        arms: [],
        torsos: [],
        bases: [],
      };
    }
  }
}