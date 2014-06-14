var test = require('tap').test
var jjv = require('jjv')
var fs = require('fs')

var badgeClassSchemaRaw = fs.readFileSync('../schema-badgeClass.json')
var badgeClassTestRaw = fs.readFileSync('../badgeClass.json')

test("Validate test BadgeClass against schema", function(t) {
  var env = jjv()
  var badgeClassSchema = JSON.parse(badgeClassSchemaRaw)
  var badgeClassTest = JSON.parse(badgeClassTestRaw)
  t.ok(badgeClassSchema)
  env.addSchema('badgeClass', badgeClassSchema)
  var errors = env.validate(badgeClassTest)
  t.equal(errors, null, "badge class test should validate")
  t.end()
})
