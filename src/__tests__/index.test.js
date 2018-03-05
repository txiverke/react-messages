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
})