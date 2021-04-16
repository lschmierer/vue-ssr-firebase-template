import { defineComponent, h, Suspense } from 'vue'
import { mount, flushPromises, VueWrapper } from '@vue/test-utils'

export async function asyncMount (component: any, options?: any): Promise<VueWrapper<any>> {
  const props = options?.props
  if (options != null) {
    delete options.props
  }
  const wrapper = mount(defineComponent({
    render () {
      return h(Suspense, null, {
        default: h('div', null, h(component, props))
      })
    }
  }), options)
  await flushPromises()
  return wrapper
}
