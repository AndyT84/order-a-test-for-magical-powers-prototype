// External dependencies
const express = require('express')

const router = express.Router()

// Add your routes here - above the module.exports line
// Called when answering question about whether NHS number is known
router.post('/example-answer', (req, res) => {

  // Make a variable and give it the value from 'nhsNumberKnown'
  const magicPowersExample = req.session.data.magicPowersExample

  // Check whether the variable matches a condition
  if (magicPowersExample === 'Yes') {

    // Send user to a page where they’ll enter their NHS number
    res.redirect('/details')

  } else if (magicPowersExample === 'No') {

    // Send user to a page where they can find their NHS number
    res.redirect('/ineligible')

  } else {

    // Send user back to the question page
    res.redirect('/example')

  }
})
module.exports = router

