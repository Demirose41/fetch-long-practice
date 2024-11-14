/*
Make fetch requests in the browser for each of the following phases.
Paste your code for fetch requests here once you finish each phase.
*/

/* ============================== Phase 1 ============================== */

fetch("/products", {
    method : "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    body: "name=pop&description=good+taste&categories=grocery&price=9.99"
})



/* ============================== Phase 2 ============================== */

// Your code here
const request = await fetch("/products", {
    method : "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    body: "name=pop&description=good+taste&categories=grocery&price=9.99"
})

request.url
request.status
request.headers.get("content-type")

/* ============================== Phase 3 ============================== */

// Your code here
const request = await fetch("/products", {
    method : "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
  name: "Caribbean Delight Coffee",
  description: "Made by Manatee Coffee",
  price: 11.99,
  categories: "grocery"
})
})