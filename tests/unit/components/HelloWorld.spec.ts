import { asyncMount } from '../asyncMount'

import HelloWorld from '../../../src/components/HelloWorld.vue'

describe('HelloWorld', () => {
  test('contains some example string', async () => {
    const store = {
      state: {
        counter: {
          count: 25
        }
      },
      dispatch: jest.fn().mockResolvedValue(null)
    }

    const wrapper = await asyncMount(HelloWorld, {
      props: {
        msg: 'Test Message'
      },
      global: {
        provide: {
          store
        }
      }
    })

    expect(wrapper.text()).toContain('components/HelloWorld.vue')
    expect(wrapper.text()).toContain('Test Message')
  })
})
