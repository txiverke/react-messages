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

  it('should render the right message', () => {
    const message = 'Just a fake message'
    const next = true
    const component = shallow(<ReactMessages message={message} next={next} />)
    expect(component.text()).toEqual(message)
  })

  it('should render the right icon', () => {
    const message = 'Just a fake message'
    const next = true
    const icons = ['heart', 'warning', 'info', 'thumbs-up', 'thumbs-down']
    const random = Math.floor(Math.random() * icons.length)
    const component = shallow(<ReactMessages message={message} next={next} icon={icons[random]} />)
    expect(component.find(`.icon-rm-${icons[random]}`).length).toEqual(1)
  })

  it('should return null when the prop next is false', () => {
    const message = 'Just a fake message'
    const next = false
    const component = shallow(<ReactMessages message={message} next={next} />)
    expect(component.find('.msg-wrapper').length).toEqual(0)
  })
})