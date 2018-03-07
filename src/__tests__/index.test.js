// @flow

import React from 'react'
import ReactMessages from '../index'
import { shallow } from 'enzyme'

describe('<ReactMessages />', () => {
  it('should render itself', () => {
    const message = 'Just a fake message'
    const next = true
    const component = shallow(<ReactMessages message={message} next={next} />)
    expect(component).toMatchSnapshot()
  })

  it('should display the right message', () => {
    const message = 'Just a fake message'
    const next = true
    const component = shallow(<ReactMessages message={message} next={next} />)
    expect(component.text()).toEqual(message)
  })

  it('should return null when the prop next is false', () => {
    const message = 'Just a fake message'
    const next = false
    const component = shallow(<ReactMessages message={message} next={next} />)
    expect(component.find('.msg-wrapper').length).toEqual(0)
  })
})