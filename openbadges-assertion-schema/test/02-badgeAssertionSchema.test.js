var test = require('tap').test
var jjv = require('jjv')
var fs = require('fs')

var badgeAssertionSchemaRaw = fs.readFileSync('../schema-badgeAssertion.json')
var badgeAssertionTestRaw = fs.readFileSync('./badgeAssertion.json')

test("Validate test BadgeClass against schema", function(t) {
  var env = jjv()
  var badgeAssertionSchema = JSON.parse(badgeAssertionSchemaRaw)
  var badgeAssertionTest = JSON.parse(badgeAssertionTestRaw)
  t.ok(badgeAssertionSchema)
  env.addSchema('badgeAssertion', badgeAssertionSchema)
  var errors = env.validate('badgeAssertion', badgeAssertionTest)
  t.equal(errors, null, "badge assertion test should validate")
  t.end()
})
