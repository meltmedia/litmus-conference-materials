// Load native node modules
var http    = require('http');
var fs      = require('fs');

// Load NPM node modules
var cheerio = require('cheerio');
var chai    = require('chai');
var expect  = chai.expect;
var html    = fs.readFileSync(__dirname + '/test.html');
var $       = cheerio.load(html);

describe('Paragraph', function(){
  it('should have a class of `p`', function(){
    var p = $('p');
    expect(p.hasClass('p')).to.be.true;
  });
});