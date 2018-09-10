import { supportsPushState } from './push-state'
import { HashHistory } from './HashHistory'
import { HTML5History } from './Html5History'
import observe from '../src/data-dirver/observer/observer'
// import Watcher from '../src/data-dirver/observer/watcher'
import install from './install'

class Router {
  constructor (options) {
    this.base = options.base
    this.routes = options.routes

    // 在 IE9 中自动降级为 hash 模式
    const fallback =
      this.mode === 'history' &&
      !supportsPushState &&
      options.fallback !== false

    this.mode = fallback ? 'hash' : options.mode || 'hash'

    this.history =
      this.mode === 'history' ? new HTML5History(this) : new HashHistory(this)

    this.init()
  }

  push (location) {
    this.history.push(location)
  }

  replace (location) {
    this.history.replace(location)
  }

  go (n) {
    this.history.go(n)
  }

  init () {
    const history = this.history
    observe.call(this, history.current)
    // 路由转化到当前路径
    history.transitionTo(history.getCurrentLocation())
  }
}

Router.install = install

export default Router
