export default{
  created(){
    this.$store.dispatch('getParts');
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