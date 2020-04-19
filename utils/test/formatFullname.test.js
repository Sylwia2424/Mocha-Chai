const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;

describe('FormatFullname', () => {

  it('should return an error if "fullName" arg is not a string', () => {
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
  });

  it('should return an error if one of arg "fullName" is undefind', () => {
    expect(formatFullname([(undefined),''])).to.equal('Error');
    expect(formatFullname(['', (undefined)])).to.equal('Error');
    expect(formatFullname('', '', '')).to.equal('Error');
  });
  it('should return an error if "fullname" is different then 2', () => {
    expect(formatFullname('Lorem Ipsum', 3)).to.equal('Error');
    expect(formatFullname('Lorem Ipsum', 1)).to.equal('Error');
  });


});