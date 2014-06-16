var test = require('tap').test
var jjv = require('jjv')
var fs = require('fs')

var badgeClassSchemaRaw = fs.readFileSync('../schema-badgeClass.json')
var badgeClassNoIssuerRaw = fs.readFileSync('./badgeClassNoIssuer.json')
var badgeClassTestRaw = fs.readFileSync('./badgeClass.json')

function setup() {
  var env = jjv()
  var badgeClassSchema = JSON.parse(badgeClassSchemaRaw)
  env.addSchema('badgeClass', badgeClassSchema)
  return env
}


test("Validate test BadgeClass against schema", function(t) {
  var env = setup()
  var badgeClassTest = JSON.parse(badgeClassTestRaw)
  var errors = env.validate('badgeClass', badgeClassTest)
  t.equal(errors, null, "badge class test should validate")
  t.end()
})

test("badgeClass requires issuer", function(t) {
  var env = setup()
  var badgeClassNoIssuer = JSON.parse(badgeClassNoIssuerRaw)
  var errors = env.validate('badgeClass', badgeClassNoIssuer)
  t.ok(errors, "badge class without an issuer should not validate")
  t.end()
})
