import Sid from '@'
// import View from '../../router/View.js'

export default Sid.extend({
  render (h) {
    return (
      <div>
        <button onclick={this.jump.bind(this, '/view1')}>view1</button>
        <button onclick={this.jump.bind(this, '/view2')}>view2</button>
      </div>
    )
  },
  props: {
    title: {
      type: String,
      default: 'this is page2'
    }
  },
  methods: {
    jump (url) {
      this.$router.push({ path: url })
    }
  }
})
