const toCamelCase = require('./../lib/utils/toCamelCase');
const expect = require('expect');
const React = require('react');
// const D3StateContainer = require('./../lib/d3Components/Component');
const enzyme = require('enzyme');
const shallow = enzyme.shallow;
// const Component = require('./convertBubbleChart');
describe('utils unit tests', () => {

	//test function that will convert spinal-case d3 attribute names to camelCase
	describe('#toCamelCase', () => {

		it('should convert spinal-case to camelCase', () => {
			const singleSpine = 'single-spine';
			const doubleSpine = 'double-spine';
			expect(toCamelCase(singleSpine)).toEqual('singleSpine');
			expect(toCamelCase(doubleSpine)).toEqual('doubleSpine');
		})

		it('nonSpinalCase should not be changed', () => {
			const none = 'none';
			const alreadyCamel = 'alreadyCamel';
			expect(toCamelCase(none)).toEqual('none');
			expect(toCamelCase(alreadyCamel)).toEqual('alreadyCamel');
		})

	})

	describe('<Component />', () => {
		
	  	it('renders children when passed in', () => {
    		const wrapper = shallow(<Component><div></div><Component>);
    		expect(wrapper.contains(<div></div>)).to.equal(true);
  		});
	})

})